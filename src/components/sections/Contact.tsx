'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Formspree form submission will be handled automatically
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            Get in Touch
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-10"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Let's Connect
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <FaEnvelope className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-800 dark:text-gray-200 font-medium text-lg">Email</h4>
                    <a href="mailto:bmhaqeel995@gmail.com" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                      bmhaqeel995@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <FaPhone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-800 dark:text-gray-200 font-medium text-lg">WhatsApp</h4>
                    <a href="https://wa.me/6282113699451" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                      +62 821-1369-9451
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <motion.a
                  href="https://linkedin.com/in/mohamed-hakeel-67323721b"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaLinkedin className="w-6 h-6 text-white" />
                </motion.a>
                <motion.a
                  href="https://github.com/Aqeelbmh"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaGithub className="w-6 h-6 text-white" />
                </motion.a>
                <motion.a
                  href="https://instagram.com/aqeelbmh"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaInstagram className="w-6 h-6 text-white" />
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
            >
              <form
                action="https://formspree.io/f/mrbqenjn"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm transition-all duration-300"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3.5 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl hover:from-purple-700 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 shadow-lg hover:shadow-xl font-medium text-lg"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 