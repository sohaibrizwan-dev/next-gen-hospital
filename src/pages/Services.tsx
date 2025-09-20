import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, Award, Stethoscope, Heart, Brain, Baby, Ambulance } from 'lucide-react';
import { services, doctors } from '../data/mockData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const { serviceId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const servicesRef = useScrollAnimation();

  const iconComponents = {
    Heart,
    Stethoscope,
    Brain,
    Baby,
    Ambulance
  };

  const categories = ['all', 'cardiology', 'neurology', 'pediatrics', 'emergency'];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.name.toLowerCase() === selectedCategory);

  // If serviceId is provided, show single service detail
  if (serviceId) {
    const service = services.find(s => s.id === serviceId);
    if (!service) {
      return <div className="min-h-screen pt-20 flex items-center justify-center">Service not found</div>;
    }

    const serviceDoctors = doctors.filter(doctor => service.doctors.includes(doctor.id));
    const IconComponent = iconComponents[service.icon as keyof typeof iconComponents] || Heart;

    return (
      <div className="min-h-screen pt-20">
        {/* Service Detail Hero */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-blue-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 p-4 rounded-lg mr-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
                    {service.name}
                  </h1>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center space-x-2"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Book Appointment</span>
                  </Link>
                  <Link
                    to="/services"
                    className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 inline-flex items-center space-x-2 border border-gray-200 dark:border-gray-700"
                  >
                    <span>All Services</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="rounded-2xl shadow-2xl"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Procedures */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Procedures & Treatments
                </h2>
                <div className="space-y-3">
                  {service.procedures.map((procedure, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">{procedure}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Advanced Technologies
                </h2>
                <div className="space-y-3">
                  {service.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Quick Information
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Department:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{service.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Specialists:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{serviceDoctors.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Emergency:</span>
                    <span className="font-semibold text-green-600">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Associated Doctors */}
        {serviceDoctors.length > 0 && (
          <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                Our {service.name} Specialists
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceDoctors.map((doctor, index) => (
                  <motion.div
                    key={doctor.id}
                    className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {doctor.name}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                        {doctor.specialty}
                      </p>
                      <div className="flex space-x-2">
                        <Link
                          to={`/doctors/${doctor.id}`}
                          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition-colors duration-200"
                        >
                          View Profile
                        </Link>
                        <Link
                          to="/contact"
                          className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                        >
                          Book Appointment
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }

  // Services listing page
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
            Our
            <span className="text-blue-600 dark:text-blue-400 block">Services</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive healthcare services delivered by expert medical professionals using 
            state-of-the-art technology and compassionate care.
          </motion.p>
        </div>
      </section>

      {/* Service Categories Filter */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const IconComponent = iconComponents[service.icon as keyof typeof iconComponents] || Heart;
              return (
                <motion.div
                  key={service.id}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 p-3 rounded-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Key Procedures:
                      </h4>
                      <div className="space-y-2">
                        {service.procedures.slice(0, 3).map((procedure, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                              {procedure}
                            </span>
                          </div>
                        ))}
                        {service.procedures.length > 3 && (
                          <div className="text-sm text-blue-600 dark:text-blue-400">
                            +{service.procedures.length - 3} more procedures
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Link
                        to={`/services/${service.id}`}
                        className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg text-center font-semibold hover:bg-blue-700 transition-colors duration-200"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-3 rounded-lg text-center font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Emergency Care?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Our emergency department is staffed 24/7 with experienced medical professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:911"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors duration-200"
            >
              Call 911
            </a>
            <a
              href="tel:+15559990000"
              className="bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition-colors duration-200 border-2 border-white"
            >
              Hospital Direct: (555) 999-0000
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;