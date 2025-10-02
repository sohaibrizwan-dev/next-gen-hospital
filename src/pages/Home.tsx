import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Users, Award, Clock, Star, ArrowRight, Calendar, Phone, Shield, Stethoscope, Brain, Baby, Ambulance, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { doctors, testimonials, services } from '../data/mockData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Home = () => {
  const servicesRef = useScrollAnimation();
  const whyChooseUsRef = useScrollAnimation();
  const doctorsRef = useScrollAnimation();
  const testimonialsRef = useScrollAnimation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplayRunning, setIsAutoplayRunning] = useState(true);

  const heroSlides = [
    {
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'World-class Care,',
      highlight: 'Human Touch',
      description: 'From routine checkups to complex surgeries, our experts deliver compassionate, evidence-based care.',
      stats: { label: 'Patient Satisfaction', value: '98%' }
    },
    {
      image: 'https://images.pexels.com/photos/8460151/pexels-photo-8460151.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Advanced Technology,',
      highlight: 'Better Outcomes',
      description: 'State-of-the-art medical equipment and cutting-edge treatments for superior patient care.',
      stats: { label: 'Success Rate', value: '95%' }
    },
    {
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Expert Specialists,',
      highlight: 'Your Health',
      description: 'Board-certified physicians with years of experience dedicated to your wellbeing.',
      stats: { label: 'Specialists', value: '200+' }
    }
  ];

  useEffect(() => {
    if (!isAutoplayRunning) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplayRunning, heroSlides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoplayRunning(false);
    setTimeout(() => setIsAutoplayRunning(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoplayRunning(false);
    setTimeout(() => setIsAutoplayRunning(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoplayRunning(false);
    setTimeout(() => setIsAutoplayRunning(true), 10000);
  };

  const iconComponents = {
    Heart,
    Stethoscope,
    Brain,
    Baby,
    Ambulance
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Modern Slider */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 min-h-screen">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-0 -right-4 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="min-h-screen flex items-center py-20">
            <div className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 mb-6 backdrop-blur-sm">
                      <Shield className="w-4 h-4" />
                      <span className="text-sm font-semibold">Trusted by 120,000+ patients</span>
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                          {heroSlides[currentSlide].title}
                          <span className="block bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 text-transparent bg-clip-text">
                            {heroSlides[currentSlide].highlight}
                          </span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
                          {heroSlides[currentSlide].description}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Link
                      to="/contact"
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>Book Appointment</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/services"
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <Stethoscope className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>Explore Services</span>
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-3 gap-4 max-w-lg"
                  >
                    <div className="group rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      </div>
                      <p className="text-3xl font-extrabold text-gray-900 dark:text-white">4.9</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Patient Rating</p>
                    </div>
                    <div className="group rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <p className="text-3xl font-extrabold text-gray-900 dark:text-white">24/7</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Emergency</p>
                    </div>
                    <div className="group rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-5 h-5 text-teal-600" />
                      </div>
                      <p className="text-3xl font-extrabold text-gray-900 dark:text-white">25+</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Years</p>
                    </div>
                  </motion.div>
                </div>

                <div className="lg:col-span-7 relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                  >
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-500 rounded-3xl opacity-20 blur-3xl" />

                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <div className="relative h-[500px] lg:h-[600px]">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentSlide}
                            src={heroSlides[currentSlide].image}
                            alt={heroSlides[currentSlide].title}
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.7, ease: "easeInOut" }}
                            loading={currentSlide === 0 ? "eager" : "lazy"}
                          />
                        </AnimatePresence>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={currentSlide}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.5 }}
                              className="flex items-center justify-between"
                            >
                              <div className="backdrop-blur-md bg-white/20 dark:bg-black/30 rounded-2xl px-6 py-4 border border-white/30">
                                <p className="text-white/90 text-sm font-medium mb-1">
                                  {heroSlides[currentSlide].stats.label}
                                </p>
                                <p className="text-white text-3xl font-bold">
                                  {heroSlides[currentSlide].stats.value}
                                </p>
                              </div>
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-6 bg-white dark:bg-gray-900 rounded-full px-6 py-4 shadow-2xl border border-gray-100 dark:border-gray-800">
                      <button
                        onClick={prevSlide}
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 group"
                        aria-label="Previous slide"
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors" />
                      </button>

                      <div className="flex items-center gap-2">
                        {heroSlides.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className="relative group"
                            aria-label={`Go to slide ${index + 1}`}
                          >
                            <div
                              className={`h-2 rounded-full transition-all duration-500 ${
                                index === currentSlide
                                  ? 'w-8 bg-blue-600'
                                  : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-blue-400'
                              }`}
                            />
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={nextSlide}
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 group"
                        aria-label="Next slide"
                      >
                        <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors" />
                      </button>

                      <button
                        onClick={() => setIsAutoplayRunning(!isAutoplayRunning)}
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 group ml-2"
                        aria-label={isAutoplayRunning ? "Pause autoplay" : "Resume autoplay"}
                      >
                        {isAutoplayRunning ? (
                          <Pause className="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors" />
                        ) : (
                          <Play className="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors" />
                        )}
                      </button>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="absolute -top-6 -left-6 bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 hidden lg:flex items-center gap-4"
                    >
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Patients Cared</p>
                        <p className="text-xl font-bold text-gray-900 dark:text-white">120,000+</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="absolute top-6 -right-6 bg-gradient-to-br from-red-500 to-red-600 text-white p-5 rounded-2xl shadow-2xl hidden lg:flex items-center gap-4"
                    >
                      <Heart className="w-6 h-6" />
                      <div>
                        <p className="text-sm text-red-100 font-medium">Emergency</p>
                        <p className="text-xl font-bold">24/7 Care</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section ref={servicesRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Key Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive healthcare services with state-of-the-art facilities and expert medical professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconComponents[service.icon as keyof typeof iconComponents] || Heart;
              return (
                <motion.div
                  key={service.id}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 transition-colors duration-200">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center justify-center space-x-2 group-hover:space-x-3 transition-all duration-200"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyChooseUsRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                Why Choose MediCare+?
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Expert Medical Team
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our board-certified physicians and specialists bring years of experience and cutting-edge expertise to every patient interaction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-teal-600 p-3 rounded-lg flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Award-Winning Care
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Recognized nationally for our commitment to quality healthcare, patient safety, and innovative medical treatments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 p-3 rounded-lg flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      24/7 Emergency Care
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Round-the-clock emergency services with rapid response times and state-of-the-art trauma facilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 rounded-lg flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Advanced Technology
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Latest medical equipment and technology ensuring accurate diagnosis and effective treatment outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hospital facility"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">25+</p>
                    <p className="text-gray-600 dark:text-gray-300">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section ref={doctorsRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Doctors
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our team of experienced physicians and specialists are dedicated to providing you with the highest quality healthcare.
            </p>
          </div>

          <div className="relative">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              loop
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              pagination={{ clickable: true }}
              navigation
              className="pb-12"
            >
              {doctors.map((doctor, index) => (
                <SwiperSlide key={doctor.id}>
                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  >
                    <div className="relative">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-80 object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {doctor.name}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                        {doctor.specialty}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {doctor.experience} of experience
                      </p>
                      <div className="flex gap-3">
                        <Link
                          to={`/doctors/${doctor.id}`}
                          className="flex-1 block text-center px-5 py-2 rounded-lg bg-blue-600 text-white text-base font-semibold shadow-sm hover:shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-200"
                        >
                          View Profile
                        </Link>
                        <Link
                          to="/contact"
                          className="flex-1 block text-center px-5 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-base font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700 transition-all duration-200"
                        >
                          Book Appointment
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="text-center mt-4 md:mt-8">
            <Link
              to="/doctors"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>View All Doctors</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-20 bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real stories from real patients who have experienced our compassionate care and medical expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.condition}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact CTA */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Medical Emergency?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Our emergency department is open 24/7 with expert medical staff ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:911"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors duration-200 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call 911</span>
              </a>
              <a
                href="tel:+15559990000"
                className="bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition-colors duration-200 flex items-center space-x-2 border-2 border-white"
              >
                <Phone className="w-5 h-5" />
                <span>Hospital Direct: (555) 999-0000</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;