'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0f13] text-gray-300 cyber-grid-bg">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid md:grid-cols-4 gap-16">
            {/* Brand Section */}
            <div className="space-y-8">
              <motion.h3 
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold heading-neon"
              >
                Mohamed Hakeel
              </motion.h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Cybersecurity Professional, Data Analyst, and Web Developer passionate about creating secure and innovative solutions.
              </p>
              <div className="flex space-x-3">
                <motion.a
                  href="https://linkedin.com/in/mohamed-hakeel-67323721b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#0b0f13] text-cyan-200 border border-cyan-400/40 overflow-hidden group hover:shadow-neon"
                  whileHover={{ 
                    rotate: 360,
                    y: -3,
                    backgroundColor: "#00e5ff",
                    color: "#0b0f13"
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  aria-label="LinkedIn Profile"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,#00e5ff33,#ff2bd633)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform rotate-45 scale-150" />
                  <FaLinkedin className="w-5 h-5 relative z-10" />
                </motion.a>
                <motion.a
                  href="https://github.com/Aqeelbmh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#0b0f13] text-cyan-200 border border-cyan-400/40 overflow-hidden group hover:shadow-neon"
                  whileHover={{ 
                    rotate: 360,
                    y: -3,
                    backgroundColor: "#00e5ff",
                    color: "#0b0f13"
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  aria-label="GitHub Profile"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,#00e5ff33,#ff2bd633)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform rotate-45 scale-150" />
                  <FaGithub className="w-5 h-5 relative z-10" />
                </motion.a>
                <motion.a
                  href="https://instagram.com/aqeelbmh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#0b0f13] text-cyan-200 border border-cyan-400/40 overflow-hidden group hover:shadow-neon"
                  whileHover={{ 
                    rotate: 360,
                    y: -3,
                    backgroundColor: "#00e5ff",
                    color: "#0b0f13"
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  aria-label="Instagram Profile"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,#00e5ff33,#ff2bd633)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform rotate-45 scale-150" />
                  <FaInstagram className="w-5 h-5 relative z-10" />
                </motion.a>
                <motion.a
                  href="https://wa.me/6282113699451"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#0b0f13] text-cyan-200 border border-cyan-400/40 overflow-hidden group hover:shadow-neon"
                  whileHover={{ 
                    rotate: 360,
                    y: -3,
                    backgroundColor: "#00e5ff",
                    color: "#0b0f13"
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  aria-label="WhatsApp Contact"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,#00e5ff33,#ff2bd633)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform rotate-45 scale-150" />
                  <FaWhatsapp className="w-5 h-5 relative z-10" />
                </motion.a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 heading-neon">Quick Links</h4>
              <ul className="space-y-3">
                {['About', 'Education', 'Experience', 'Certifications', 'Projects', 'Publications'].map((link) => (
                  <li key={link} className="group">
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 flex items-center text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full mr-2 group-hover:scale-150 transition-transform duration-300 bg-[linear-gradient(90deg,#00e5ff,#00f5d4,#ff2bd6)]"></span>
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 heading-neon">More</h4>
              <ul className="space-y-3">
                {['Skills', 'Languages', 'References', 'Contact'].map((link) => (
                  <li key={link} className="group">
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 flex items-center text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full mr-2 group-hover:scale-150 transition-transform duration-300 bg-[linear-gradient(90deg,#00e5ff,#00f5d4,#ff2bd6)]"></span>
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 heading-neon">Contact Info</h4>
              <ul className="space-y-4">
                <li>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-3 text-gray-400 group"
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-neon group-hover:shadow-neon transition-all duration-300 flex-shrink-0 bg-[linear-gradient(90deg,#00e5ff,#00f5d4,#ff2bd6)]">
                      <FaEnvelope className="w-5 h-5 text-[#0b0f13]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 mb-0.5">Email</span>
                      <a href="mailto:bmhaqeel995@gmail.com" className="hover:text-cyan-300 transition-colors duration-300 text-sm break-all">
                        bmhaqeel995@gmail.com
                      </a>
                    </div>
                  </motion.div>
                </li>
                <li>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-3 text-gray-400 group"
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-neon group-hover:shadow-neon transition-all duration-300 flex-shrink-0 bg-[linear-gradient(90deg,#00e5ff,#00f5d4,#ff2bd6)]">
                      <FaPhone className="w-5 h-5 text-[#0b0f13]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 mb-0.5">Phone</span>
                      <a href="tel:+6282113699451" className="hover:text-cyan-300 transition-colors duration-300 text-sm">
                        +62 821 1369 9451
                      </a>
                    </div>
                  </motion.div>
                </li>
                <li>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-3 text-gray-400 group"
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-neon group-hover:shadow-neon transition-all duration-300 flex-shrink-0 bg-[linear-gradient(90deg,#00e5ff,#00f5d4,#ff2bd6)]">
                      <FaMapMarkerAlt className="w-5 h-5 text-[#0b0f13]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 mb-0.5">Location</span>
                      <span className="text-sm">Karawang, West Java, Indonesia</span>
                    </div>
                  </motion.div>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-t border-cyan-400/20 mt-16 pt-6 text-center"
          >
            <p className="text-gray-400 text-sm">
              © {currentYear} Mohamed Hakeel. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 