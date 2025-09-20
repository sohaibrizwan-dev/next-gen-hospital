import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Users, Award, Clock, Star, ArrowRight, Calendar, Phone, Shield, Stethoscope, Brain, Baby, Ambulance } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { doctors, testimonials, services } from '../data/mockData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const Home = () => {
  const servicesRef = useScrollAnimation();
  const whyChooseUsRef = useScrollAnimation();
  const doctorsRef = useScrollAnimation();
  const testimonialsRef = useScrollAnimation();


  const iconComponents = {
    Heart,
    Stethoscope,
    Brain,
    Baby,
    Ambulance
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Split Layout */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-900/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200 mb-6">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-semibold">Trusted by 120,000+ patients</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
                World‑class Care, Human Touch
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                From routine checkups to complex surgeries, our experts deliver compassionate, evidence‑based care powered by modern technology.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </Link>
                <Link to="/services" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 font-semibold transition-colors">
                  <Stethoscope className="w-5 h-5" />
                  <span>Explore Services</span>
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
                <div className="rounded-xl bg-white dark:bg-gray-800 p-4 shadow">
                  <p className="text-3xl font-extrabold text-gray-900 dark:text-white">4.9</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" /> Patient Rating
                  </p>
                </div>
                <div className="rounded-xl bg-white dark:bg-gray-800 p-4 shadow">
                  <p className="text-3xl font-extrabold text-gray-900 dark:text-white">24/7</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Emergency Care</p>
                </div>
                <div className="rounded-xl bg-white dark:bg-gray-800 p-4 shadow">
                  <p className="text-3xl font-extrabold text-gray-900 dark:text-white">25+</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Years Excellence</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-500 to-teal-400 opacity-20 blur-2xl z-0" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl z-0">
                  <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    slidesPerView={1}
                    loop
                    autoplay={{ delay: 4500, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    effect="fade"
                    className="w-full h-[520px]"
                  >
                    <SwiperSlide>
                      <img
                        src="https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        alt="Compassionate doctor"
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="https://images.pexels.com/photos/8460151/pexels-photo-8460151.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        alt="Modern operating room"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        alt="Lab technology"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="absolute -bottom-6 -left-4 bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-xl flex items-center gap-3 z-10"
              >
                <Users className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Patients cared</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">120,000+</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="absolute top-6 -right-4 bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-xl flex items-center gap-3 z-10"
              >
                <Shield className="w-8 h-8 text-teal-600" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Accredited</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">Internationally</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-24 -right-6 bg-red-600 text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-10"
              >
                <Heart className="w-6 h-6" />
                <div>
                  <p className="text-sm text-red-100">Emergency</p>
                  <p className="text-lg font-bold">Call 24/7</p>
                </div>
              </motion.div>
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