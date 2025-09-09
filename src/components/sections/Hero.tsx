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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[color:var(--bg)] cyber-grid-bg">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 neon-blob neon-blob-cyan animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 neon-blob neon-blob-magenta animate-blob" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 neon-blob neon-blob-teal animate-blob" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 neon-blob neon-blob-purple animate-blob opacity-50" />
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
              <h1 className="relative text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 heading-neon" data-text="Mohamed Hakeel">
                Mohamed Hakeel
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-16 md:h-20 flex items-start justify-start"
              >
                <span className="text-xl sm:text-2xl md:text-3xl font-medium text-[color:var(--text)]">
                  {text}
                  <span className="animate-blink">|</span>
                </span>
              </motion.div>
              <p className="text-base sm:text-lg text-slate-300/90 mb-8 max-w-2xl leading-relaxed">
                Data Analyst and Data Scientist turning complex datasets into clear, actionable insights through rigorous modeling, visualization, and storytelling. Full-stack developer and IoT architect focused on building efficient, user-friendly, and scalable solutions. Cybersecurity analyst dedicated to safeguarding systems and integrating security best practices across the stack.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-3 md:gap-4 justify-start"
            >
              <a
                href="#contact"
                className="px-7 py-3 rounded-full text-[color:var(--bg)] font-semibold bg-[linear-gradient(90deg,var(--accent),var(--accent-2))] hover:brightness-110 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Get in Touch
              </a>
              <a
                href="/Mohamed hakeel cv (1).pdf"
                download
                className="px-7 py-3 rounded-full border border-[color:var(--border)] text-slate-200 bg-[color:var(--bg)] hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2.5 font-medium"
              >
                <FaDownload className="text-lg" />
                Download CV
              </a>
            </motion.div>

              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-5 mt-8 justify-start"
            >
              {/* Social media icons with enhanced hover effects */}
              <motion.a
                href="https://github.com/Aqeelbmh"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[color:var(--bg)] text-slate-200 border border-[color:var(--border)] overflow-hidden group"
                whileHover={{ 
                  y: -3,
                  backgroundColor: "#0f1720",
                  color: "#ffffff"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <FaGithub className="text-2xl relative z-10" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/mohamed-hakeel-67323721b/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[color:var(--bg)] text-slate-200 border border-[color:var(--border)] overflow-hidden group"
                whileHover={{ 
                  y: -3,
                  backgroundColor: "#0f1720",
                  color: "#ffffff"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <FaLinkedin className="text-2xl relative z-10" />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/aqeelbmh?igsh=MW9xM2c3d29pMTFxcQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[color:var(--bg)] text-slate-200 border border-[color:var(--border)] overflow-hidden group"
                whileHover={{ 
                  y: -3,
                  backgroundColor: "#0f1720",
                  color: "#ffffff"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <FaInstagram className="text-2xl relative z-10" />
              </motion.a>

              <motion.a
                href="https://wa.me/6282113699451"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[color:var(--bg)] text-slate-200 border border-[color:var(--border)] overflow-hidden group"
                whileHover={{ 
                  y: -3,
                  backgroundColor: "#0f1720",
                  color: "#ffffff"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 group">
              {/* Enhanced main frame with multiple gradient borders and glow effects */}
              <div className="absolute inset-0 rounded-full p-1.5 bg-[linear-gradient(90deg,var(--accent),var(--accent-2))] animate-gradient-x">
                <div className="w-full h-full rounded-full bg-[color:var(--bg)] relative overflow-hidden scanline">
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              
              {/* Outer glow effect */}
              <div className="absolute -inset-1 rounded-full bg-white/5 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
              
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
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Enhanced shadow for depth */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-4/5 h-8 bg-black/20 blur-xl rounded-full group-hover:scale-90 transition-all duration-500" />

              {/* Additional depth effect with glow */}
              <div className="absolute inset-0 rounded-full border-2 border-[color:var(--border)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110">
                <div className="absolute inset-0 rounded-full bg-white/5 blur-sm" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 