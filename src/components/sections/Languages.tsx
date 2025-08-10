'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLanguage, FaCheckCircle } from 'react-icons/fa';

const Languages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const languages = [
    {
      name: 'Sinhala',
      level: 'Native',
      description: 'Fluent in speaking, reading, and writing',
    },
    {
      name: 'Tamil',
      level: 'Native',
      description: 'Fluent in speaking, reading, and writing',
    },
    {
      name: 'English',
      level: 'Fluent',
      description: 'Professional working proficiency',
    },
    {
      name: 'Arabic',
      level: 'Fluent',
      description: 'Professional working proficiency',
    },
    {
      name: 'Bahasa Indonesia',
      level: 'Intermediate',
      description: 'Conversational proficiency',
    },
  ];

  return (
    <section id="languages" className="py-24 bg-[#0b0f13] cyber-grid-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <div className="w-16 h-16 rounded-full bg-[linear-gradient(90deg,#00e5ff,#00f5d4,#ff2bd6)] flex items-center justify-center shadow-neon">
                <FaLanguage className="w-8 h-8 text-[#0b0f13]" />
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-extrabold heading-neon">
              Languages
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {languages.map((language, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#0b0f13] rounded-2xl p-8 transition-all duration-300 border border-cyan-400/20 hover:shadow-neon transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-xl bg-[linear-gradient(90deg,#00e5ff33,#ff2bd633)] flex items-center justify-center">
                      <span className="text-3xl">
                        {language.name === 'Sinhala' ? '🇱🇰' :
                         language.name === 'Tamil' ? '🇮🇳' :
                         language.name === 'English' ? '🇬🇧' :
                         language.name === 'Arabic' ? '🇸🇦' :
                         '🇮🇩'}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white heading-neon">
                      {language.name}
                    </h3>
                  </div>
                  <motion.span 
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-cyan-400/20 text-cyan-200 bg-cyan-400/5 hover:bg-cyan-400/10"
                  >
                    {language.level}
                  </motion.span>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-6 flex items-start">
                  <FaCheckCircle className="w-5 h-5 mr-2 text-cyan-400 mt-1 flex-shrink-0" />
                  {language.description}
                </p>
                <div className="mt-6">
                  <div className="w-full bg-cyan-400/10 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: language.level === 'Native' ? '100%' : language.level === 'Fluent' ? '90%' : '70%' } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-2.5 rounded-full bg-[linear-gradient(90deg,#00e5ff,#00f5d4,#ff2bd6)] shadow-neon"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Languages; 