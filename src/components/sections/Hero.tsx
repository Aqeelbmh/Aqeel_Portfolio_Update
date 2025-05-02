'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaDownload, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState, useRef, useCallback } from 'react';

const professions = [
  'Student Consultant',
  'Cybersecurity Analyst',
  'Data Analyst',
  'Full-Stack Developer',
  'IoT Solution Architect',
  'Machine Learning/AI'
];

const Hero = () => {
  const [currentProfession, setCurrentProfession] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);

  const ticker = useRef<HTMLDivElement>(null);
  const [isHovered] = useState(false);

  const tick = useCallback(() => {
    const fullText = professions[currentProfession];
    
    if (isDeleting) {
      setText(prev => fullText.substring(0, prev.length - 1));
      setDelta(50);
    } else {
      setText(prev => fullText.substring(0, prev.length + 1));
      setDelta(200 - Math.random() * 100);
    }

    if (!isDeleting && text === fullText) {
      setIsDeleting(true);
      setDelta(2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setCurrentProfession((prev) => (prev + 1) % professions.length);
      setDelta(500);
    }
  }, [currentProfession, isDeleting, text]);

  const scrollTicker = useCallback(() => {
    if (ticker.current && !isHovered) {
      ticker.current.scrollLeft += 1;
    }
  }, [isHovered]);

  useEffect(() => {
    const interval = setInterval(scrollTicker, 30);
    return () => clearInterval(interval);
  }, [scrollTicker]);

  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(interval); };
  }, [text, delta, tick]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-300/30 dark:bg-amber-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-rose-300/30 dark:bg-rose-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-300/30 dark:bg-emerald-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-sky-300/30 dark:bg-sky-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-left space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-rose-500 to-emerald-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
                Mohamed Hakeel
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-20 md:h-24 flex items-start justify-start"
              >
                <span className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-amber-400 via-rose-500 to-emerald-500 text-transparent bg-clip-text">
                  {text}
                  <span className="animate-blink">|</span>
                </span>
              </motion.div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Cybersecurity Analyst and Data Scientist transforming complex data into actionable insights while ensuring robust digital security. Full-stack developer and IoT architect passionate about creating secure, efficient, and user-friendly solutions that drive innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-start"
            >
              <a
                href="#contact"
                className="px-8 py-3.5 bg-gradient-to-r from-amber-600 to-rose-500 text-white rounded-full hover:from-amber-700 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium"
              >
                Get in Touch
              </a>
              <a
                href="/Badurdeen Hakeel - Professional CV.pdf"
                download
                className="px-8 py-3.5 bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 rounded-full border-2 border-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 font-medium"
              >
                <FaDownload className="text-lg" />
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-6 mt-8 justify-start"
            >
              {/* Social media icons with enhanced hover effects */}
              <motion.a
                href="https://github.com/Aqeelbmh"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-2 border-amber-600 overflow-hidden group"
                whileHover={{ 
                  rotate: 360,
                  y: -3,
                  backgroundColor: "#B45309",
                  color: "#FFFFFF"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/30 to-rose-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform rotate-45 scale-150" />
                <FaGithub className="text-2xl relative z-10" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/mohamed-hakeel-67323721b/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-2 border-amber-600 overflow-hidden group"
                whileHover={{ 
                  rotate: 360,
                  y: -3,
                  backgroundColor: "#B45309",
                  color: "#FFFFFF"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/30 to-rose-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform rotate-45 scale-150" />
                <FaLinkedin className="text-2xl relative z-10" />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/aqeelbmh?igsh=MW9xM2c3d29pMTFxcQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-2 border-amber-600 overflow-hidden group"
                whileHover={{ 
                  rotate: 360,
                  y: -3,
                  backgroundColor: "#B45309",
                  color: "#FFFFFF"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/30 to-rose-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform rotate-45 scale-150" />
                <FaInstagram className="text-2xl relative z-10" />
              </motion.a>

              <motion.a
                href="https://wa.me/6282113699451"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-2 border-amber-600 overflow-hidden group"
                whileHover={{ 
                  rotate: 360,
                  y: -3,
                  backgroundColor: "#B45309",
                  color: "#FFFFFF"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform rotate-45 scale-150" />
                <FaWhatsapp className="text-2xl relative z-10" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 group">
              {/* Enhanced main frame with multiple gradient borders and glow effects */}
              <div className="absolute inset-0 rounded-full p-1.5 bg-gradient-to-r from-amber-600 via-rose-500 to-emerald-600 animate-gradient-x">
                <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 relative overflow-hidden">
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-emerald-500/20 dark:from-amber-500/10 dark:via-rose-500/10 dark:to-emerald-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              
              {/* Outer glow effect */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-600/30 via-rose-500/30 to-emerald-600/30 dark:from-amber-600/20 dark:via-rose-500/20 dark:to-emerald-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
              
              {/* Image container with enhanced 3D effect */}
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden"
                whileHover={{ 
                  scale: 1.25,
                  y: -15,
                  transition: { 
                    duration: 0.5,
                    ease: "easeOut"
                  }
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <Image
                  src="/images/profile/my.im.png"
                  alt="Mohamed Hakeel"
                  fill
                  className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                  priority
                />
                {/* Image overlay glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-emerald-500/10 dark:from-amber-500/5 dark:via-rose-500/5 dark:to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Enhanced shadow for depth */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-4/5 h-8 bg-gradient-to-r from-amber-600/20 via-rose-500/20 to-emerald-600/20 dark:from-amber-600/10 dark:via-rose-500/10 dark:to-emerald-600/10 blur-xl rounded-full group-hover:scale-90 transition-all duration-500" />

              {/* Additional depth effect with glow */}
              <div className="absolute inset-0 rounded-full border-2 border-white/20 dark:border-slate-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-emerald-500/10 dark:from-amber-500/5 dark:via-rose-500/5 dark:to-emerald-500/5 blur-sm" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 