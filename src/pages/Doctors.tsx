import React, { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar, MapPin, Clock, Star, Award, GraduationCap, Phone, Mail, ArrowRight } from 'lucide-react';
import { doctors } from '../data/mockData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Doctors = () => {
  const { doctorId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const doctorsRef = useScrollAnimation();

  const specialties = ['all', ...Array.from(new Set(doctors.map(doctor => doctor.specialty.toLowerCase())))];

  const filteredAndSortedDoctors = useMemo(() => {
    const filtered = doctors.filter(doctor => {
      const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpecialty = selectedSpecialty === 'all' || 
                              doctor.specialty.toLowerCase() === selectedSpecialty;
      return matchesSearch && matchesSpecialty;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'specialty':
          return a.specialty.localeCompare(b.specialty);
        case 'experience':
          return parseInt(b.experience) - parseInt(a.experience);
        default:
          return 0;
      }
    });
  }, [searchTerm, selectedSpecialty, sortBy]);

  // If doctorId is provided, show single doctor profile
  if (doctorId) {
    const doctor = doctors.find(d => d.id === doctorId);
    if (!doctor) {
      return (
        <div className="min-h-screen pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Doctor not found</h1>
            <Link to="/doctors" className="text-blue-600 hover:text-blue-700">
              Back to Doctors
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen pt-20">
        {/* Doctor Profile Hero */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-blue-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl">
                    <Award className="w-8 h-8 mb-2" />
                    <p className="font-semibold text-sm">Board Certified</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                  {doctor.name}
                </h1>
                <p className="text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
                  {doctor.specialty}
                </p>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {doctor.bio}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-6 h-6 text-teal-600" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Experience</p>
                      <p className="text-gray-600 dark:text-gray-300">{doctor.experience}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-orange-600" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Schedule</p>
                      <p className="text-gray-600 dark:text-gray-300">{doctor.schedule}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Book Appointment</span>
                  </Link>
                  <Link
                    to="/doctors"
                    className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 inline-flex items-center justify-center space-x-2 border border-gray-200 dark:border-gray-700"
                  >
                    <span>All Doctors</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Doctor Details */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Qualifications */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Qualifications
                </h2>
                <div className="space-y-4">
                  {doctor.qualifications.map((qualification, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{qualification}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Department Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Department
                </h2>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {doctor.specialty}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Our {doctor.specialty.toLowerCase()} department offers comprehensive care with state-of-the-art facilities and expert medical professionals.
                  </p>
                  <Link
                    to="/services"
                    className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center space-x-2"
                  >
                    <span>View Department</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                      <p className="text-gray-600 dark:text-gray-300">{doctor.specialty} Department, Floor 3</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                      <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                      <p className="text-gray-600 dark:text-gray-300">appointments@medicareplus.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Doctors listing page
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
            <span className="text-blue-600 dark:text-blue-400 block">Medical Team</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Meet our team of experienced physicians and specialists dedicated to providing 
            exceptional healthcare with compassion and expertise.
          </motion.p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>

            {/* Specialty Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty}>
                    {specialty === 'all' ? 'All Specialties' : specialty.charAt(0).toUpperCase() + specialty.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 dark:text-gray-300">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                <option value="name">Name</option>
                <option value="specialty">Specialty</option>
                <option value="experience">Experience</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section ref={doctorsRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAndSortedDoctors.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 dark:text-gray-300">
                No doctors found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedDoctors.map((doctor, index) => (
                <motion.div
                  key={doctor.id}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {doctor.experience}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {doctor.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                      {doctor.specialty}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {doctor.schedule}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {doctor.qualifications.length} Certifications
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm line-clamp-3">
                      {doctor.bio}
                    </p>
                    
                    <div className="flex space-x-2">
                      <Link
                        to={`/doctors/${doctor.id}`}
                        className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition-colors duration-200 text-sm font-semibold"
                      >
                        View Profile
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 text-sm font-semibold"
                      >
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Schedule Your Appointment?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our medical team is here to provide you with exceptional healthcare.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Appointment Now</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Doctors;