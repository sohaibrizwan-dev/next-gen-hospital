import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp, Stethoscope, Award, Clock, Users, ChevronRight, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const footer = footerRef.current;
    const wave = waveRef.current;
    const particles = particlesRef.current;
    const logo = logoRef.current;

    if (!footer || !wave || !particles || !logo) return;

    // Animated wave effect
    gsap.set(wave, { scaleX: 0, transformOrigin: "left center" });
    gsap.to(wave, {
      scaleX: 1,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: footer,
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none reverse"
      }
    });

    // Floating particles animation
    const particleElements = particles.children;
    Array.from(particleElements).forEach((particle, index) => {
      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * 200,
        opacity: 0.3 + Math.random() * 0.7,
        scale: 0.5 + Math.random() * 0.5
      });

      gsap.to(particle, {
        y: "-=50",
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2
      });

      gsap.to(particle, {
        x: "+=30",
        duration: 4 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.1
      });
    });

    // Logo pulse animation
    gsap.to(logo, {
      scale: 1.05,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const linkVariants = {
    rest: { scale: 1, x: 0 },
    hover: { 
      scale: 1.05, 
      x: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const socialVariants = {
    rest: { 
      scale: 1, 
      rotate: 0,
      backgroundColor: "rgba(59, 130, 246, 0.1)"
    },
    hover: { 
      scale: 1.2, 
      rotate: 360,
      backgroundColor: "rgba(59, 130, 246, 1)",
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  const statsData = [
    { icon: Users, number: "50,000+", label: "Patients Served" },
    { icon: Stethoscope, number: "500+", label: "Medical Staff" },
    { icon: Award, number: "25+", label: "Years Experience" },
    { icon: Clock, number: "24/7", label: "Emergency Care" }
  ];

  return (
    <motion.footer 
      ref={footerRef}
      className="relative bg-gradient-to-br from-gray-950 via-slate-900 to-blue-950 text-white overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Top Wave */}
      <div className="absolute -top-1 left-0 w-full" aria-hidden="true">
        <svg ref={waveRef} viewBox="0 0 1440 80" className="w-full h-20 fill-blue-600/40">
          <path d="M0,32L48,26.7C96,21,192,11,288,26.7C384,43,480,85,576,96C672,107,768,85,864,69.3C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>
      </div>

      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="absolute w-2 h-2 rounded-full opacity-30" style={{
            left: `${(i * 61) % 100}%`,
            top: `${(i * 37) % 100}%`,
            background: ['#60a5fa', '#34d399', '#8b5cf6', '#f59e0b'][i % 4]
          }} />
        ))}
      </div>

      {/* Newsletter CTA */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="mt-16 mb-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6" variants={itemVariants}>
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold">Stay in the loop</h3>
            <p className="text-white/70 mt-2">Health tips, hospital news, and appointment reminders. No spam.</p>
          </div>
          <div className="w-full md:w-auto flex gap-3">
            <input type="email" placeholder="Enter your email" className="flex-1 md:w-72 px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold shadow-lg shadow-blue-600/30">Subscribe</motion.button>
          </div>
        </motion.div>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <div ref={logoRef} className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <span className="text-2xl font-bold">MediCare+</span>
              </div>
              <p className="text-white/70">Compassionate care powered by innovation and a world-class medical team.</p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" }
                ].map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.a key={i} href={s.href} whileHover={{ scale: 1.1, y: -2 }} className="p-2 rounded-lg bg-white/10 border border-white/10">
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Links */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <h4 className="text-xl font-semibold">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { name: 'About Us', path: '/about' },
                  { name: 'Services', path: '/services' },
                  { name: 'Our Doctors', path: '/doctors' },
                  { name: 'Facilities', path: '/facilities' },
                  { name: 'Contact Us', path: '/contact' }
                ].map((link) => (
                  <motion.div key={link.name} whileHover={{ x: 6 }}>
                    <Link to={link.path} className="text-white/80 hover:text-white inline-flex items-center">
                      <ChevronRight className="w-4 h-4 mr-2" /> {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <h4 className="text-xl font-semibold">Our Services</h4>
              <div className="space-y-2">
                {[
                  { name: 'Cardiology', path: '/services/1' },
                  { name: 'Neurology', path: '/services/2' },
                  { name: 'Pediatrics', path: '/services/3' },
                  { name: 'Emergency Care', path: '/services/4' }
                ].map((link) => (
                  <motion.div key={link.name} whileHover={{ x: 6 }}>
                    <Link to={link.path} className="text-white/80 hover:text-white inline-flex items-center">
                      <ChevronRight className="w-4 h-4 mr-2" /> {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <h4 className="text-xl font-semibold">Contact</h4>
              <div className="space-y-3 text-white/80">
                <div className="flex items-start"><MapPin className="w-5 h-5 mr-3 text-blue-400" /><span>123 Healthcare Blvd, Medical City, MC 12345</span></div>
                <div className="flex items-start"><Phone className="w-5 h-5 mr-3 text-teal-400" /><span>+1 (555) 123-4567</span></div>
                <div className="flex items-start"><Mail className="w-5 h-5 mr-3 text-purple-400" /><span>info@medicareplus.com</span></div>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl border border-red-400/20 bg-red-500/10 p-4">
                <div className="flex items-center text-red-200 font-semibold"><Heart className="w-4 h-4 mr-2" /> Emergency 24/7</div>
                <div className="text-red-100 mt-1">+1 (555) 999-0000</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div className="relative z-10 border-t border-white/10 py-8" variants={itemVariants}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">© 2025 MediCare+ Hospital Made by Sohaib Rizwan. All rights reserved.</p>
            <div className="flex gap-6 text-white/70 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((l) => (
                <motion.a key={l} href="#" whileHover={{ y: -2 }} className="hover:text-white">{l}</motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll to Top removed to avoid duplication */}
    </motion.footer>
  );
};

export default Footer;