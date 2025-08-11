'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { useTheme } from '@/context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  // const { theme } = useTheme();

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

  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = originalOverflow; };
    }
  }, [isOpen]);

  useEffect(() => {
    // Close menu on Escape key
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    // Auto-close on resize to desktop
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

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
          const topThreshold = (navRef.current?.offsetHeight ?? 80) + 20;
          return rect.top <= topThreshold && rect.bottom >= topThreshold;
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
      const offset = navRef.current?.offsetHeight ?? 80;
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
      ref={navRef as unknown as React.Ref<HTMLElement>}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 w-full z-[1000] pointer-events-auto pt-[env(safe-area-inset-top)] transition-all duration-300 ${
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
            onTouchStart={(e) => { e.stopPropagation(); (window as unknown as { __touch?: boolean }).__touch = true; }}
            onClick={(e) => { e.stopPropagation(); if ((window as unknown as { __touch?: boolean }).__touch) { (window as unknown as { __touch?: boolean }).__touch = false; } setIsOpen((prev) => !prev); }}
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden absolute right-3 p-3 min-w-10 min-h-10 rounded-md text-cyan-300 hover:text-white hover:bg-cyan-400/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 pointer-events-auto z-[2000] cursor-pointer"
            style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
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

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-20 z-[990] bg-black/40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 z-[1500] bg-[#0b0f13]/95 backdrop-blur-xl border-t border-cyan-400/20 overflow-auto top-[calc(5rem+env(safe-area-inset-top))] max-h-[calc(100vh-80px-env(safe-area-inset-top))]"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="container mx-auto px-4 py-4">
          <div id="mobile-menu" className="grid grid-cols-2 gap-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => handleNavClick(item.to)}
                    className={`p-3 rounded-md text-base md:text-sm font-medium text-center transition-all duration-300 relative group ${
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