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

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Certifications />
      <Projects />
      <Publications />
      <Skills />
      <Languages />
      <References />
      <Contact />
      <Footer />
    </main>
  );
}
