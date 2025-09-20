import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Users, Building, Heart, Stethoscope, Microscope, Bed, Car, Wifi, Coffee, Accessibility, Shield, Clock, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

gsap.registerPlugin(ScrollTrigger);

const Facilities = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const facilitiesRef = useScrollAnimation();
  const amenitiesRef = useScrollAnimation();

  const facilities = [
    {
      id: 1,
      name: 'Advanced Cardiac Care Unit',
      category: 'medical',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'State-of-the-art cardiac monitoring and treatment facility with 24/7 specialist care.',
      features: ['Digital Catheterization Lab', '3D Echocardiography', 'Cardiac MRI', '24/7 Monitoring']
    },
    {
      id: 2,
      name: 'Modern Operating Theaters',
      category: 'medical',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Fully equipped surgical suites with advanced robotic surgery capabilities.',
      features: ['Robotic Surgery Systems', 'Advanced Anesthesia', 'Real-time Imaging', 'Sterile Environment']
    },
    {
      id: 3,
      name: 'Emergency Department',
      category: 'emergency',
      image: 'https://images.pexels.com/photos/263337/pexels-photo-263337.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '24/7 emergency care with rapid response trauma teams and advanced life support.',
      features: ['Trauma Bays', 'Advanced Life Support', 'Helicopter Landing Pad', 'Fast Track Care']
    },
    {
      id: 4,
      name: 'Diagnostic Imaging Center',
      category: 'diagnostic',
      image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive imaging services with the latest MRI, CT, and ultrasound technology.',
      features: ['3T MRI Scanner', '128-Slice CT', 'Digital X-Ray', 'Ultrasound Suites']
    },
    {
      id: 5,
      name: 'Patient Rooms',
      category: 'accommodation',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comfortable private and semi-private rooms designed for patient comfort and healing.',
      features: ['Private Bathrooms', 'Entertainment Systems', 'Family Seating', 'Climate Control']
    },
    {
      id: 6,
      name: 'Rehabilitation Center',
      category: 'therapy',
      image: 'https://images.pexels.com/photos/3985319/pexels-photo-3985319.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive rehabilitation services for physical, occupational, and speech therapy.',
      features: ['Gym Equipment', 'Therapy Pools', 'Occupational Therapy', 'Speech Therapy']
    },
    {
      id: 7,
      name: 'Laboratory Services',
      category: 'diagnostic',
      image: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Advanced laboratory with rapid testing capabilities and specialized diagnostics.',
      features: ['Automated Testing', 'Rapid Results', 'Specialized Tests', 'Quality Assurance']
    },
    {
      id: 8,
      name: 'Cafeteria & Dining',
      category: 'amenities',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Nutritious dining options for patients, families, and staff with dietary accommodations.',
      features: ['Healthy Options', 'Dietary Accommodations', 'Family Dining', '24/7 Vending']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Facilities', icon: Building },
    { id: 'medical', name: 'Medical Units', icon: Stethoscope },
    { id: 'emergency', name: 'Emergency Care', icon: Heart },
    { id: 'diagnostic', name: 'Diagnostics', icon: Microscope },
    { id: 'accommodation', name: 'Patient Care', icon: Bed },
    { id: 'therapy', name: 'Rehabilitation', icon: Users },
    { id: 'amenities', name: 'Amenities', icon: Coffee }
  ];

  const amenities = [
    { icon: Wifi, name: 'Free WiFi', description: 'High-speed internet throughout the facility' },
    { icon: Car, name: 'Parking', description: 'Ample parking with valet service available' },
    { icon: Coffee, name: 'Cafeteria', description: 'Nutritious meals and snacks 24/7' },
    { icon: Accessibility, name: 'Accessibility', description: 'Full ADA compliance and accessibility features' },
    { icon: Shield, name: 'Security', description: '24/7 security and safety monitoring' },
    { icon: Clock, name: '24/7 Services', description: 'Round-the-clock medical care and support' }
  ];

  const stats = [
    { number: '500+', label: 'Hospital Beds', icon: Bed },
    { number: '50+', label: 'Departments', icon: Building },
    { number: '24/7', label: 'Emergency Care', icon: Heart },
    { number: '1000+', label: 'Staff Members', icon: Users }
  ];

  const filteredFacilities = selectedCategory === 'all' 
    ? facilities 
    : facilities.filter(facility => facility.category === selectedCategory);

  useEffect(() => {
    if (galleryRef.current) {
      const items = galleryRef.current.querySelectorAll('.gallery-item');
      
      gsap.fromTo(items, 
        { 
          opacity: 0, 
          y: 100,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: galleryRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [filteredFacilities]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            World-Class
            <span className="text-blue-600 dark:text-blue-400 block">Facilities</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience healthcare in a modern, comfortable environment equipped with the latest 
            medical technology and designed for optimal patient care and recovery.
          </motion.p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities Gallery */}
      <section ref={facilitiesRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFacilities.map((facility) => (
              <div
                key={facility.id}
                className="gallery-item bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => setLightboxImage(facility.image)}
              >
                <div className="relative">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-bold mb-1">{facility.name}</h3>
                    <p className="text-sm">{facility.description}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {facility.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {facility.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      Key Features:
                    </h4>
                    {facility.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                    {facility.features.length > 3 && (
                      <div className="text-sm text-blue-600 dark:text-blue-400">
                        +{facility.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section ref={amenitiesRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Patient Amenities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive amenities to ensure comfort and convenience for patients and their families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => {
              const IconComponent = amenity.icon;
              return (
                <motion.div
                  key={amenity.name}
                  className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {amenity.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {amenity.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Awards & Certifications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence is recognized through various awards and certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Joint Commission Gold Seal', description: 'Quality and Safety Excellence' },
              { title: 'Magnet Hospital Status', description: 'Nursing Excellence Recognition' },
              { title: 'HIMSS Stage 7', description: 'Electronic Health Record Excellence' },
              { title: 'Leapfrog A Rating', description: 'Patient Safety Excellence' }
            ].map((award, index) => (
              <motion.div
                key={award.title}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {award.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {award.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={lightboxImage}
              alt="Facility"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Facilities;