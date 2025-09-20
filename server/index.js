// server/index.js
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import { body, validationResult } from "express-validator";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// For __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config();

// Required environment variables
const requiredEnvVars = ['GMAIL_USER', 'GMAIL_APP_PASSWORD'];
const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingEnvVars.length > 0) {
  console.error('❌ Missing required environment variables:', missingEnvVars.join(', '));
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());
// CORS configuration
const allowedOrigins = process.env.NODE_ENV === "production"
  ? process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',')
    : ['https://medicare-plus.vercel.app'] // Default production origin
  : ['http://localhost:5173', 'http://localhost:3000'];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    maxAge: 86400, // 24 hours
  })
);

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    error: "Too many requests from this IP, please try again later.",
  },
});

app.use("/api/contact", limiter);

// Body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../dist")));
}

// Email configuration
const createTransporter = async () => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      secure: true,
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Verify the transporter configuration
    await transporter.verify();
    return transporter;
  } catch (error) {
    console.error('❌ Failed to create email transporter:', error);
    throw new Error('Email service configuration error');
  }
};

// Input validation middleware
const validateContactForm = [
  body("name")
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters")
    .escape(),
  body("email").isEmail().normalizeEmail().withMessage("Please provide a valid email address"),
  body("phone").optional().isMobilePhone().withMessage("Please provide a valid phone number"),
  body("subject")
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage("Subject must be less than 200 characters")
    .escape(),
  body("message")
    .optional()
    .trim()
    .isLength({ max: 2000 })
    .withMessage("Message must be less than 2000 characters")
    .escape(),
  body("appointmentType")
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage("Appointment type must be less than 100 characters")
    .escape(),
  body("preferredDate").optional().isISO8601().withMessage("Please provide a valid date"),
  body("preferredTime")
    .optional()
    .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .withMessage("Please provide a valid time in HH:MM format"),
  body("type").isIn(["contact", "appointment"]).withMessage("Invalid form type"),
];

// Contact form endpoint
app.post("/api/contact", validateContactForm, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    const {
      name,
      email,
      phone,
      subject,
      message,
      appointmentType,
      preferredDate,
      preferredTime,
      type,
    } = req.body;

    // Create and verify transporter
    const transporter = await createTransporter();

    // Prepare email content
    let emailSubject, emailHtml;

    if (type === "appointment") {
      emailSubject = `New Appointment Request - ${appointmentType || "General"}`;
      emailHtml = `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <p><strong>Department:</strong> ${appointmentType}</p>
        ${preferredDate ? `<p><strong>Preferred Date:</strong> ${new Date(preferredDate).toLocaleDateString()}</p>` : ""}
        ${preferredTime ? `<p><strong>Preferred Time:</strong> ${preferredTime}</p>` : ""}
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
      `;
    } else {
      emailSubject = `New Contact Form Message - ${subject || "General Inquiry"}`;
      emailHtml = `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
      `;
    }

    // Send email
    const info = await transporter.sendMail({
      from: `"MediCare+ Website" <${process.env.GMAIL_USER}>`,
      to: process.env.HOSPITAL_EMAIL || process.env.GMAIL_USER,
      replyTo: email,
      subject: emailSubject,
      html: emailHtml,
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: `"MediCare+ Hospital" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: type === "appointment" ? "Appointment Request Received - MediCare+" : "Message Received - MediCare+",
      html: `<p>Dear ${name},</p><p>We have received your ${type}. We will contact you within 24 hours.</p>`,
    });

    res.status(200).json({
      success: true,
      message:
        type === "appointment"
          ? "Appointment request sent successfully! We will contact you soon to confirm."
          : "Message sent successfully! We will get back to you soon.",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Error sending email:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Serve React app in production
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

// 404 handler for API routes
app.use("/api/*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found",
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
});

export default app;
// server/index.js