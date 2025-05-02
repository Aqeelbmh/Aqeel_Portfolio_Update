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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      name: 'Dudi Nurkifli, M.Cs., Ph.D.',
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

  return (
    <section id="references" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            References
          </h2>

          <div className="relative">
            {/* References Carousel */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
                >
                  <div className="w-full md:w-1/3">
                    <div className="relative w-48 h-48 mx-auto">
                      <div className="w-full h-full rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                        <span className="text-4xl font-semibold text-purple-600 dark:text-purple-400">
                          {references[currentIndex].name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur opacity-30" />
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur-lg opacity-30" />
                    </div>
                  </div>

                  <div className="w-full md:w-2/3 text-center md:text-left">
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                        {references[currentIndex].name}
                      </h3>
                      <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                        {references[currentIndex].position}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {references[currentIndex].organization}
                      </p>
                      <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                        <p className="flex items-center justify-center md:justify-start">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {references[currentIndex].email}
                        </p>
                        {references[currentIndex].phone && (
                          <p className="flex items-center justify-center md:justify-start">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {references[currentIndex].phone}
                          </p>
                        )}
                        <p className="flex items-center justify-center md:justify-start">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {references.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  onMouseEnter={handleInteraction}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'bg-purple-600 w-6'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-purple-400 dark:hover:bg-purple-500'
                  }`}
                  aria-label={`Go to reference ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="hidden md:block">
              <button
                onClick={() => {
                  prevSlide();
                  handleInteraction();
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white dark:bg-gray-900 shadow-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                aria-label="Previous reference"
              >
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => {
                  nextSlide();
                  handleInteraction();
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white dark:bg-gray-900 shadow-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                aria-label="Next reference"
              >
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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