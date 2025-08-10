'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme } = useTheme();

  const navItems = useMemo(() => [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Education', to: 'education' },
    { name: 'Experience', to: 'experience' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Projects', to: 'projects' },
    { name: 'Publications', to: 'publications' },
    { name: 'Skills', to: 'skills' },
    { name: 'Languages', to: 'languages' },
    { name: 'References', to: 'references' },
    { name: 'Contact', to: 'contact' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.to);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleNavClick = (section: string) => {
    setIsOpen(false);
    const element = document.getElementById(section);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0b0f13]/80 backdrop-blur-xl border-b border-cyan-400/20 shadow-neon' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-20 relative">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => handleNavClick(item.to)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group tracking-wide ${
                    activeSection === item.to
                      ? 'text-neon'
                      : 'text-slate-300 hover:text-neon'
                  }`}
                >
                  <span className="relative z-10 heading-neon">{item.name}</span>
                  {activeSection === item.to && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 rounded-md opacity-10 bg-[linear-gradient(90deg,#00e5ff,#00f5d4,#ff2bd6)] animate-gradient-x"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[linear-gradient(90deg,#00e5ff,#00f5d4,#ff2bd6)] group-hover:w-full transition-all duration-300 shadow-neon" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden absolute right-0 p-2 rounded-lg text-cyan-300 hover:text-white hover:bg-cyan-400/10 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block w-6 h-0.5 bg-current my-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0b0f13]/95 backdrop-blur-xl border-t border-cyan-400/20"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => handleNavClick(item.to)}
                    className={`p-3 rounded-md text-sm font-medium text-center transition-all duration-300 relative group ${
                      activeSection === item.to
                        ? 'text-white bg-[linear-gradient(90deg,#00e5ff,#00f5d4,#ff2bd6)] shadow-neon'
                        : 'text-slate-300 hover:bg-cyan-400/10 hover:text-neon'
                    }`}
                  >
                    <span className="relative z-10 heading-neon">{item.name}</span>
                    <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(90deg,#00e5ff33,#ff2bd633)]" />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 