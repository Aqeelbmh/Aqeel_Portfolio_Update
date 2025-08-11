'use client';

import React, { useCallback } from 'react';
import { FaHome } from 'react-icons/fa';

const ThemeToggle = () => {
  const scrollToHome = useCallback(() => {
    const element = document.getElementById('hero');
    if (!element) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const navEl = document.querySelector('nav') as HTMLElement | null;
    const offset = navEl?.offsetHeight ?? 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToHome}
      aria-label="Go to home"
      className="fixed bottom-2 right-2 z-50 w-12 h-12 rounded-full text-[#0b0f13] bg-[linear-gradient(90deg,#00e5ff,#00f5d4,#ff2bd6)] shadow-neon hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-transform duration-200 active:scale-95"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <FaHome className="mx-auto text-xl" />
    </button>
  );
};

export default ThemeToggle;