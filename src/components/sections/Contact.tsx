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
    <section id="contact" className="py-24 bg-[#0b0f13] cyber-grid-bg">
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
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 md:mb-16 heading-neon"
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
                <h3 className="text-2xl font-semibold mb-4 text-white heading-neon">
                  Let's Connect
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-[#0b0f13] border border-cyan-400/20 rounded-xl hover:shadow-neon transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[linear-gradient(90deg,#00e5ff,#00f5d4,#ff2bd6)] rounded-full flex items-center justify-center shadow-neon">
                    <FaEnvelope className="w-6 h-6 text-[#0b0f13]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">Email</h4>
                    <a href="mailto:bmhaqeel995@gmail.com" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                      bmhaqeel995@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-[#0b0f13] border border-cyan-400/20 rounded-xl hover:shadow-neon transition-all duration-300"
                >
                    <div className="w-14 h-14 bg-[linear-gradient(90deg,#00e5ff,#00f5d4,#ff2bd6)] rounded-full flex items-center justify-center shadow-neon">
                    <FaPhone className="w-6 h-6 text-[#0b0f13]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">WhatsApp</h4>
                    <a href="https://wa.me/6282113699451" className="text-cyan-300 hover:text-cyan-200 transition-colors">
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
              className="bg-[#0b0f13] rounded-2xl p-6 md:p-8 border border-cyan-400/20"
            >
              <form
                action="https://formspree.io/f/mrbqenjn"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-cyan-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-cyan-400/30 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-transparent text-white shadow-sm transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cyan-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-cyan-400/30 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-transparent text-white shadow-sm transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-cyan-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-cyan-400/30 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-transparent text-white shadow-sm transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-cyan-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-cyan-400/30 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-transparent text-white shadow-sm transition-all duration-300"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3.5 text-[#0b0f13] rounded-xl transition-all duration-300 focus:outline-none bg-[linear-gradient(90deg,#00e5ff,#00f5d4,#ff2bd6)] hover:shadow-neon font-medium text-lg"
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