import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, Clock, Search, Filter, Share2, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/mockData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Blog = () => {
  const { postId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const blogRef = useScrollAnimation();

  const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category.toLowerCase())))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || 
                           post.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // If postId is provided, show single blog post
  if (postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) {
      return (
        <div className="min-h-screen pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Post not found</h1>
            <Link to="/blog" className="text-blue-600 hover:text-blue-700">
              Back to Blog
            </Link>
          </div>
        </div>
      );
    }

    const shareUrl = `${window.location.origin}/blog/${post.id}`;

    return (
      <div className="min-h-screen pt-20">
        {/* Article Hero */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-blue-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <User className="w-4 h-4 mr-2" />
                      <span>By {post.author}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>5 min read</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600 dark:text-gray-300 text-sm">Share:</span>
                    <a
                      href={`https://facebook.com/sharer/sharer.php?u=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors duration-200"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={`https://linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors duration-200"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl mb-12"
                  loading="lazy"
                />
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
                    <p>
                      Heart disease remains one of the leading causes of death worldwide, but the good news is that many heart conditions are preventable through lifestyle changes and early detection. At MediCare+, our cardiology team is committed to helping you maintain optimal heart health through comprehensive care and education.
                    </p>
                    
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                      Understanding Heart Disease Risk Factors
                    </h2>
                    
                    <p>
                      Several factors can increase your risk of developing heart disease. While some risk factors like age, gender, and family history cannot be changed, many others are within your control:
                    </p>
                    
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>High blood pressure:</strong> Often called the "silent killer" because it usually has no symptoms</li>
                      <li><strong>High cholesterol:</strong> Can lead to plaque buildup in arteries</li>
                      <li><strong>Smoking:</strong> Damages blood vessels and reduces oxygen in the blood</li>
                      <li><strong>Diabetes:</strong> High blood sugar can damage blood vessels over time</li>
                      <li><strong>Obesity:</strong> Puts extra strain on the heart and increases other risk factors</li>
                      <li><strong>Physical inactivity:</strong> Weakens the heart muscle and contributes to other risk factors</li>
                    </ul>
                    
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                      Prevention Strategies
                    </h2>
                    
                    <p>
                      The best approach to heart disease is prevention. Here are evidence-based strategies that can significantly reduce your risk:
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                      1. Maintain a Heart-Healthy Diet
                    </h3>
                    
                    <p>
                      Focus on a diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats. The Mediterranean diet has been shown to be particularly beneficial for heart health. Limit processed foods, excessive salt, and added sugars.
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                      2. Stay Physically Active
                    </h3>
                    
                    <p>
                      Aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity aerobic activity per week. Regular exercise strengthens the heart muscle, improves circulation, and helps control weight and blood pressure.
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                      3. Manage Stress
                    </h3>
                    
                    <p>
                      Chronic stress can contribute to heart disease. Practice stress-reduction techniques such as meditation, deep breathing exercises, yoga, or regular physical activity. Ensure you get adequate sleep, as poor sleep quality is linked to heart disease risk.
                    </p>
                    
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                      The Importance of Regular Screenings
                    </h2>
                    
                    <p>
                      Early detection is crucial for preventing heart disease or managing it effectively. Regular health screenings can identify risk factors before they lead to serious problems:
                    </p>
                    
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Blood pressure checks:</strong> Should be monitored regularly, especially if you have risk factors</li>
                      <li><strong>Cholesterol testing:</strong> Recommended every 4-6 years for adults, more frequently if you have risk factors</li>
                      <li><strong>Blood sugar testing:</strong> Important for detecting diabetes or prediabetes</li>
                      <li><strong>Electrocardiogram (ECG):</strong> Can detect irregular heart rhythms and other heart problems</li>
                      <li><strong>Stress testing:</strong> Evaluates how your heart performs under physical stress</li>
                    </ul>
                    
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                      Advanced Cardiac Care at MediCare+
                    </h2>
                    
                    <p>
                      Our state-of-the-art cardiac care unit offers comprehensive services for both prevention and treatment of heart disease. Our team of board-certified cardiologists uses the latest technology and evidence-based treatments to provide personalized care for each patient.
                    </p>
                    
                    <p>
                      From routine screenings to complex cardiac procedures, we're committed to helping you maintain optimal heart health. If you have concerns about your heart health or would like to schedule a screening, don't hesitate to contact our cardiology department.
                    </p>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link
                      to="/blog"
                      className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center space-x-2"
                    >
                      <ArrowRight className="w-4 h-4 rotate-180" />
                      <span>Back to Blog</span>
                    </Link>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600 dark:text-gray-300">Share this article:</span>
                      <div className="flex space-x-2">
                        <a
                          href={`https://facebook.com/sharer/sharer.php?u=${shareUrl}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                        >
                          <Facebook className="w-4 h-4" />
                        </a>
                        <a
                          href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors duration-200"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                        <a
                          href={`https://linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors duration-200"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                Related Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 2).map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {relatedPost.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(relatedPost.publishedAt).toLocaleDateString()}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <Link
                        to={`/blog/${relatedPost.id}`}
                        className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center space-x-2"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Blog listing page
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
            Health
            <span className="text-blue-600 dark:text-blue-400 block">Blog & News</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stay informed with the latest health insights, medical breakthroughs, and wellness tips 
            from our team of healthcare professionals.
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
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={blogRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 dark:text-gray-300">
                No articles found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center space-x-2 group-hover:space-x-3 transition-all duration-200"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Health News
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter for the latest health tips and medical insights.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;