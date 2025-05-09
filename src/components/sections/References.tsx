'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Reference {
  name: string;
  position: string;
  organization: string;
  email: string;
  phone?: string;
  relationship: string;
}

const References = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const references: Reference[] = [
    {
      name: 'Aji Primajaya, S.Si, M.Kom',
      position: 'Lecturer',
      organization: 'University of Singaperbangsa Karawang',
      email: 'aji.primajaya@staff.unsika.ac.id',
      phone: '+62 813 31718 961',
      relationship: 'Final Year Project Supervisor I',
    },
    {
      name: 'E.Haodudin Nurkifli, M.Cs., Ph.D.',
      position: 'Lecturer',
      organization: 'University of Singaperbangsa Karawang',
      email: 'dudi.nurkifli@staff.unsika.ac.id',
      phone: '+62 899 9171 682',
      relationship: 'Final Year Project Supervisor II',
    },
    {
      name: 'Ikhwanussafa Sadidan',
      position: 'Lecturer',
      organization: 'University of Singaperbangsa Karawang',
      email: 'ikhwanussafa.sadidan@ft.staff.unsika.ac.id',
      phone: '+62 812 9988 0365',
      relationship: 'Head of International Office',
    },
    {
      name: 'Betha Nurina Sari, M.Kom',
      position: 'Lecturer',
      organization: 'University of Singaperbangsa Karawang',
      email: 'betha.nurina@staff.unsika.ac.id',
      phone: '+62 815 5303 1989',
      relationship: 'Lecturer',
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % references.length);
  }, [references.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + references.length) % references.length);
  }, [references.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoPlaying) {
      timer = setInterval(nextSlide, 5000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isAutoPlaying, nextSlide]);

  // Pause auto-play when user interacts with navigation
  const handleInteraction = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  // Resume auto-play after 10 seconds of inactivity
  useEffect(() => {
    let inactivityTimer: NodeJS.Timeout;
    if (!isAutoPlaying) {
      inactivityTimer = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 10000);
    }
    return () => {
      if (inactivityTimer) clearInterval(inactivityTimer);
    };
  }, [isAutoPlaying]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
        handleInteraction();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        handleInteraction();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Handle touch events for mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right
      prevSlide();
    }
  };

  if (isLoading) {
    return (
      <section id="references" className="py-12 md:py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto animate-pulse">
            <div className="h-8 md:h-12 bg-gray-200 dark:bg-gray-700 rounded w-32 md:w-48 mx-auto mb-8 md:mb-12" />
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gray-200 dark:bg-gray-700 mx-auto" />
              <div className="w-full md:w-2/3">
                <div className="h-6 md:h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3 md:mb-4" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-3 md:mb-4" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="references" 
      className="py-12 md:py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            References
          </h2>

          <div className="relative">
            {/* References Carousel */}
            <div 
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: isMobile ? 50 : 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isMobile ? -50 : -100 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row items-center gap-6 md:gap-12"
                  role="region"
                  aria-label={`Reference ${currentIndex + 1} of ${references.length}`}
                >
                  <div className="w-full md:w-1/3">
                    <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 flex items-center justify-center">
                        <span className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                          {references[currentIndex].name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-30" />
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-lg opacity-30" />
                    </div>
                  </div>

                  <div className="w-full md:w-2/3 text-center md:text-left">
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg border border-purple-100 dark:border-purple-900/30">
                      <h3 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                        {references[currentIndex].name}
                      </h3>
                      <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                        {references[currentIndex].position}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {references[currentIndex].organization}
                      </p>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <p className="flex items-center justify-center md:justify-start">
                          <svg className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <a href={`mailto:${references[currentIndex].email}`} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors break-all">
                            {references[currentIndex].email}
                          </a>
                        </p>
                        {references[currentIndex].phone && (
                          <p className="flex items-center justify-center md:justify-start">
                            <svg className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <a href={`tel:${references[currentIndex].phone}`} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                              {references[currentIndex].phone}
                            </a>
                          </p>
                        )}
                        <p className="flex items-center justify-center md:justify-start">
                          <svg className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          {references[currentIndex].relationship}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex flex-col items-center gap-4 mt-6 md:mt-8">
              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 md:gap-3" role="tablist">
                {references.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    onMouseEnter={handleInteraction}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 w-4 md:w-6'
                        : 'bg-gray-300 dark:bg-gray-600 hover:from-purple-500 hover:to-blue-500 hover:bg-gradient-to-r'
                    }`}
                    role="tab"
                    aria-selected={currentIndex === index}
                    aria-label={`Go to reference ${index + 1}`}
                  />
                ))}
              </div>

              {/* Play/Pause Button */}
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors border border-purple-100 dark:border-purple-900/30"
                aria-label={isAutoPlaying ? 'Pause auto-play' : 'Resume auto-play'}
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {isAutoPlaying ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  )}
                </svg>
              </button>
            </div>

            {/* Navigation Arrows - Only show on desktop */}
            <div className="hidden md:block">
              <button
                onClick={() => {
                  prevSlide();
                  handleInteraction();
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors border border-purple-100 dark:border-purple-900/30"
                aria-label="Previous reference"
              >
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => {
                  nextSlide();
                  handleInteraction();
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors border border-purple-100 dark:border-purple-900/30"
                aria-label="Next reference"
              >
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default References; 