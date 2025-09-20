import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Calendar, User, MessageSquare, Car } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  appointmentType?: string;
  preferredDate?: string;
  preferredTime?: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isAppointmentForm, setIsAppointmentForm] = useState(false);
  const contactRef = useScrollAnimation();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          type: isAppointmentForm ? 'appointment' : 'contact'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Healthcare Blvd', 'Medical City, MC 12345'],
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['Main: +1 (555) 123-4567', 'Emergency: +1 (555) 999-0000'],
      color: 'text-teal-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@medicareplus.com', 'appointments@medicareplus.com'],
      color: 'text-orange-600'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 8:00 AM - 8:00 PM', 'Sat-Sun: 9:00 AM - 5:00 PM', 'Emergency: 24/7'],
      color: 'text-green-600'
    }
  ];

  const departments = [
    'General Consultation',
    'Cardiology',
    'Neurology',
    'Pediatrics',
    'Emergency Care',
    'Orthopedics',
    'Dermatology',
    'Other'
  ];

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
            Contact
            <span className="text-blue-600 dark:text-blue-400 block">Us</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in touch with our healthcare team. We're here to help with appointments, 
            questions, and providing the best medical care for you and your family.
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={info.title}
                  className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`${info.color} w-16 h-16 mx-auto mb-6 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 dark:text-gray-300">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section ref={contactRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {isAppointmentForm ? 'Book Appointment' : 'Send Message'}
                  </h2>
                  <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                    <button
                      onClick={() => setIsAppointmentForm(false)}
                      className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                        !isAppointmentForm
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Contact
                    </button>
                    <button
                      onClick={() => setIsAppointmentForm(true)}
                      className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                        isAppointmentForm
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Appointment
                    </button>
                  </div>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-green-700 dark:text-green-300">
                      {isAppointmentForm 
                        ? 'Appointment request sent successfully! We\'ll contact you soon to confirm.'
                        : 'Message sent successfully! We\'ll get back to you soon.'
                      }
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <p className="text-red-700 dark:text-red-300">
                      Failed to send message. Please try again or call us directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        {...register('phone')}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        {isAppointmentForm ? 'Department *' : 'Subject *'}
                      </label>
                      {isAppointmentForm ? (
                        <select
                          {...register('appointmentType', { required: 'Please select a department' })}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        >
                          <option value="">Select Department</option>
                          {departments.map(dept => (
                            <option key={dept} value={dept}>{dept}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type="text"
                          {...register('subject', { required: 'Subject is required' })}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                          placeholder="Enter subject"
                        />
                      )}
                      {(errors.subject || errors.appointmentType) && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.subject?.message || errors.appointmentType?.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Appointment-specific fields */}
                  {isAppointmentForm && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          {...register('preferredDate')}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Preferred Time
                        </label>
                        <select
                          {...register('preferredTime')}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        >
                          <option value="">Select Time</option>
                          <option value="09:00">9:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="15:00">3:00 PM</option>
                          <option value="16:00">4:00 PM</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {isAppointmentForm ? 'Additional Information' : 'Message *'}
                    </label>
                    <textarea
                      {...register('message', { 
                        required: isAppointmentForm ? false : 'Message is required' 
                      })}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                      placeholder={isAppointmentForm 
                        ? "Please provide any additional information about your appointment request..."
                        : "Enter your message..."
                      }
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>{isAppointmentForm ? 'Request Appointment' : 'Send Message'}</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg h-full">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Find Us
                </h2>
                <div className="aspect-w-16 aspect-h-12 mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Address</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        123 Healthcare Blvd<br />
                        Medical City, MC 12345
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Car className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Parking</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Free parking available with valet service
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Visiting Hours</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Daily: 8:00 AM - 8:00 PM<br />
                        Emergency: 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Medical Emergency?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            For immediate medical attention, call our emergency line or visit our ER.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:911"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call 911</span>
            </a>
            <a
              href="tel:+15559990000"
              className="bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition-colors duration-200 inline-flex items-center justify-center space-x-2 border-2 border-white"
            >
              <Phone className="w-5 h-5" />
              <span>Hospital Direct: (555) 999-0000</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;