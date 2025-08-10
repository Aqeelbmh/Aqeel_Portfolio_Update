'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import Certifications from '@/components/sections/Certifications';
import Projects from '@/components/sections/Projects';
import Publications from '@/components/sections/Publications';
import Skills from '@/components/sections/Skills';
import Languages from '@/components/sections/Languages';
import References from '@/components/sections/References';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import { useEffect } from 'react';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  useEffect(() => {
    const progressEl = document.getElementById('scroll-progress');
    const cursorEl = document.getElementById('neon-cursor');

    const onScroll = () => {
      if (!progressEl) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressEl.style.width = `${scrolled}%`;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!cursorEl) return;
      cursorEl.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <main className="relative font-mono">
      <div id="scroll-progress" className="scroll-progress" />
      <div id="neon-cursor" className="neon-cursor" />
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Certifications />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Publications />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Languages />
      <SectionDivider />
      <References />
      <SectionDivider />
      <Contact />
      <Footer />
    </main>
  );
}
