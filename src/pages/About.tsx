import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Building, Heart, Target, Eye, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const missionRef = useScrollAnimation();
  const historyRef = useScrollAnimation();
  const leadershipRef = useScrollAnimation();
  const achievementsRef = useScrollAnimation();

  const leaders = [
    {
      name: 'Dr. Robert Thompson',
      position: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With over 20 years of healthcare leadership experience, Dr. Thompson has transformed MediCare+ into a leading medical institution.'
    },
    {
      name: 'Dr. Lisa Williams',
      position: 'Chief Medical Officer',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dr. Williams oversees all medical operations and ensures the highest standards of patient care and clinical excellence.'
    },
    {
      name: 'James Anderson',
      position: 'Chief Operating Officer',
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'James brings extensive healthcare operations experience, focusing on efficiency, quality, and patient satisfaction.'
    }
  ];

  const achievements = [
    { icon: Award, title: 'Joint Commission Accreditation', description: 'Gold Seal of Approval for quality and safety' },
    { icon: Users, title: '50,000+ Patients Served', description: 'Annually across all departments' },
    { icon: Building, title: 'State-of-the-Art Facility', description: '500-bed capacity with modern equipment' },
    { icon: Heart, title: 'Magnet Hospital Status', description: 'Excellence in nursing practices and outcomes' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                About
                <span className="text-blue-600 dark:text-blue-400 block">MediCare+</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                For over 25 years, MediCare+ has been at the forefront of healthcare innovation, 
                providing compassionate, comprehensive medical care to our community.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">25+</div>
                  <div className="text-gray-600 dark:text-gray-300">Years of Service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">500+</div>
                  <div className="text-gray-600 dark:text-gray-300">Medical Staff</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hospital building"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-6 rounded-xl">
                <Award className="w-12 h-12 mb-2" />
                <p className="font-semibold">Excellence Award</p>
                <p className="text-sm opacity-90">Healthcare Quality</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                To provide exceptional healthcare services with compassion, innovation, and excellence. 
                We are committed to improving the health and well-being of our community through 
                advanced medical care, education, and research.
              </p>
            </div>

            <div className="bg-teal-50 dark:bg-gray-800 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-teal-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                To be the leading healthcare provider in our region, recognized for our clinical excellence, 
                patient-centered care, and innovative approach to medicine. We envision a healthier 
                community through accessible, comprehensive healthcare for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section ref={historyRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our History
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A legacy of caring that spans decades, built on innovation, compassion, and excellence.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-600 h-full"></div>
            
            <div className="space-y-16">
              {[
                { year: '1998', title: 'Foundation Established', description: 'MediCare+ was founded with a vision to provide world-class healthcare to our community.' },
                { year: '2005', title: 'First Major Expansion', description: 'Opened our cardiac care center and introduced advanced cardiovascular treatments.' },
                { year: '2012', title: 'Technology Integration', description: 'Implemented electronic health records and state-of-the-art medical equipment.' },
                { year: '2018', title: 'Research Center Launch', description: 'Established our medical research facility to advance healthcare innovation.' },
                { year: '2024', title: 'Leading Excellence', description: 'Recognized as a top healthcare provider with multiple accreditations and awards.' }
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8'}`}>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                  </div>
                  
                  <div className="flex-1 hidden lg:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section ref={leadershipRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the visionary leaders who guide our mission of providing exceptional healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                    {leader.position}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {leader.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Achievements */}
      <section ref={achievementsRef} className="py-20 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Awards & Achievements
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Recognition for our commitment to excellence in healthcare delivery and patient outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our approach to patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Compassion', description: 'We treat every patient with empathy, understanding, and respect.' },
              { title: 'Excellence', description: 'We strive for the highest standards in medical care and service delivery.' },
              { title: 'Innovation', description: 'We embrace new technologies and methods to improve patient outcomes.' },
              { title: 'Integrity', description: 'We conduct ourselves with honesty, transparency, and ethical behavior.' },
              { title: 'Collaboration', description: 'We work together as a team to achieve the best results for our patients.' },
              { title: 'Community', description: 'We are committed to serving and improving the health of our community.' }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-blue-600 w-4 h-4 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;