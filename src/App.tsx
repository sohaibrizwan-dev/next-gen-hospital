import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeStore } from './store/themeStore';

// Layout Components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import BackToTop from './components/Layout/BackToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Facilities from './pages/Facilities';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Create a client for React Query
const queryClient = new QueryClient();

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
              <Header />
              
              <AnimatePresence mode="wait">
                <motion.main
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/:serviceId" element={<Services />} />
                    <Route path="/doctors" element={<Doctors />} />
                    <Route path="/doctors/:doctorId" element={<Doctors />} />
                    <Route path="/facilities" element={<Facilities />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:postId" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </motion.main>
              </AnimatePresence>
              
              <Footer />
              <BackToTop />
          </div>
        </Router>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;