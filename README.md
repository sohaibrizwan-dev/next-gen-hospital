# MediCare+ Hospital Portfolio Website

A modern, responsive hospital portfolio website built with React, TypeScript, and advanced animations. Features comprehensive healthcare services showcase, doctor profiles, facilities gallery, blog, and a fully functional contact system with Gmail SMTP integration.

## 🚀 Features

### Frontend
- **Modern React 18** with TypeScript and Vite
- **Responsive Design** with Tailwind CSS
- **Advanced Animations** using Framer Motion and GSAP
- **Dark/Light Mode** with persistent theme storage
- **SEO Optimized** with React Helmet
- **Accessibility Compliant** (WCAG AA standards)

### Pages & Functionality
- **Home**: Hero section, services overview, featured doctors, testimonials
- **About**: Mission, vision, history, leadership team, awards
- **Services**: Filterable services with detailed pages
- **Doctors**: Searchable doctor directory with detailed profiles
- **Facilities**: Interactive gallery with lightbox and categories
- **Blog**: Health articles with search, categories, and social sharing
- **Contact**: Dual-purpose contact/appointment form with Gmail integration

### Backend Features
- **Express.js Server** with security middleware
- **Gmail SMTP Integration** for contact forms
- **Rate Limiting** and input validation
- **Automated Email Responses** for users
- **Professional Email Templates** with HTML formatting

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- Gmail account with App Password enabled

### 1. Clone and Install
```bash
git clone <repository-url>
cd medicare-plus-website
npm install
```

### 2. Gmail SMTP Setup
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Copy `.env.example` to `.env` and configure:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
HOSPITAL_EMAIL=info@medicareplus.com
NODE_ENV=development
PORT=3001
```

### 3. Development
```bash
# Frontend only
npm run dev

# Backend only
npm run dev:server

# Full stack (recommended)
npm run dev:full
```

### 4. Production Build
```bash
npm run build
npm start
```

## 📧 Contact Form Features

### Dual-Mode Forms
- **Contact Form**: General inquiries with subject and message
- **Appointment Form**: Department selection, preferred date/time

### Email Features
- **Professional HTML Templates** with hospital branding
- **Automatic Confirmations** sent to users
- **Admin Notifications** with all form details
- **Input Validation** and sanitization
- **Rate Limiting** (5 requests per 15 minutes)

### Security
- **Helmet.js** for security headers
- **CORS** protection
- **Input sanitization** to prevent XSS
- **Rate limiting** to prevent spam
- **Environment variables** for sensitive data

## 🎨 Design System

### Colors
- **Primary Blue**: #2563eb (Medical trust and professionalism)
- **Healthcare Teal**: #0d9488 (Healing and wellness)
- **Accent Orange**: #ea580c (Energy and warmth)
- **Success Green**: #16a34a
- **Warning Yellow**: #ca8a04
- **Error Red**: #dc2626

### Typography
- **Headings**: 120% line height, bold weights
- **Body Text**: 150% line height for readability
- **Responsive**: Fluid typography scaling

### Animations
- **GSAP**: Hero entrance animations and scroll triggers
- **Framer Motion**: Page transitions and micro-interactions
- **Smooth Scrolling**: Enhanced user experience

## 📱 Responsive Design

- **Mobile-First**: Optimized for all screen sizes
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-Friendly**: Appropriate touch targets
- **Performance**: Lazy loading and optimized images

## 🔧 Technical Architecture

### Frontend Structure
```
src/
├── components/Layout/     # Header, Footer, BackToTop
├── pages/                # Main page components
├── hooks/                # Custom React hooks
├── store/                # Zustand state management
├── data/                 # Mock data and types
└── types/                # TypeScript definitions
```

### Backend Structure
```
server/
├── index.js              # Express server with email handling
├── middleware/           # Security and validation
└── templates/            # Email HTML templates
```

## 🚀 Deployment

### Environment Variables (Production)
```env
NODE_ENV=production
GMAIL_USER=your-production-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
HOSPITAL_EMAIL=contact@yourhospital.com
PORT=3001
```

### Build Commands
```bash
npm run build    # Build frontend
npm start        # Start production server
```

## 📊 Performance Features

- **Code Splitting**: Route-based lazy loading
- **Image Optimization**: WebP format with lazy loading
- **Bundle Optimization**: Tree shaking and minification
- **Caching**: Browser caching for static assets

## 🔒 Security Features

- **Helmet.js**: Security headers
- **CORS**: Cross-origin protection
- **Rate Limiting**: Prevents spam and abuse
- **Input Validation**: Server-side validation with express-validator
- **XSS Protection**: Input sanitization

## 📈 SEO Features

- **Dynamic Meta Tags**: Page-specific titles and descriptions
- **Structured Data**: Schema.org markup for healthcare
- **Semantic HTML**: Proper heading hierarchy
- **Sitemap Ready**: SEO-friendly URL structure

## 🎯 Accessibility

- **WCAG AA Compliant**: Color contrast and navigation
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators

## 📞 Support

For technical support or customization requests, please contact the development team or refer to the documentation.

## 📄 License

This project is proprietary software developed for MediCare+ Hospital. All rights reserved.