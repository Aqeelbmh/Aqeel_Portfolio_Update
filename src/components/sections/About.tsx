'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 bg-[#0b0f13] cyber-grid-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-12 heading-neon"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <p className="text-lg text-slate-300 leading-relaxed">
                  Hello! I'm Aqeel, a passionate Full Stack Developer and Designer with a keen eye for creating beautiful and functional digital experiences. With years of experience in web development, I specialize in building modern, responsive, and user-friendly applications.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  My journey in tech began with a fascination for how things work on the web. Since then, I've worked on numerous projects, from small business websites to complex enterprise applications, always striving to deliver the best possible solutions.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 rounded-full transition-all duration-300 border border-cyan-400/30 bg-cyan-400/5 text-cyan-200 hover:bg-cyan-400/10"
                >
                  <span className="font-medium">Problem Solver</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 rounded-full transition-all duration-300 border border-cyan-400/30 bg-cyan-400/5 text-cyan-200 hover:bg-cyan-400/10"
                >
                  <span className="font-medium">Creative Thinker</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 rounded-full transition-all duration-300 border border-cyan-400/30 bg-cyan-400/5 text-cyan-200 hover:bg-cyan-400/10"
                >
                  <span className="font-medium">Team Player</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-[#0b0f13] p-8 rounded-2xl border border-cyan-400/20 hover:shadow-neon transition-all">
                <h3 className="text-2xl font-semibold mb-6 text-white heading-neon">Quick Facts</h3>
                <ul className="space-y-6">
                  <li>
                    <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-4 group">
                      <div className="w-10 h-10 rounded-full bg-[linear-gradient(90deg,#00e5ff,#00f5d4,#ff2bd6)] flex items-center justify-center shadow-neon">
                        <svg className="w-5 h-5 text-[#0b0f13]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="text-slate-300 text-lg leading-snug">
                        <span className="block">Based in Jakarta, Indonesia</span>
                        <span className="block">From Kandy, Sri Lanka</span>
                      </div>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-4 group">
                      <div className="w-10 h-10 rounded-full bg-[linear-gradient(90deg,#00e5ff,#00f5d4,#ff2bd6)] flex items-center justify-center shadow-neon">
                        <svg className="w-5 h-5 text-[#0b0f13]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-slate-300 text-lg">2+ Years Experience</span>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-4 group">
                      <div className="w-10 h-10 rounded-full bg-[linear-gradient(90deg,#00e5ff,#00f5d4,#ff2bd6)] flex items-center justify-center shadow-neon">
                        <svg className="w-5 h-5 text-[#0b0f13]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <span className="text-slate-300 text-lg">8+ Projects Completed</span>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-4 group">
                      <div className="w-10 h-10 rounded-full bg-[linear-gradient(90deg,#00e5ff,#00f5d4,#ff2bd6)] flex items-center justify-center shadow-neon">
                        <svg className="w-5 h-5 text-[#0b0f13]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <span className="text-slate-300 text-lg">Always Learning & Growing</span>
                    </motion.div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 