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
    <section id="languages" className="py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
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
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <FaLanguage className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
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
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 flex items-center justify-center shadow-lg shadow-purple-500/10">
                      <span className="text-3xl">
                        {language.name === 'Sinhala' ? '🇱🇰' :
                         language.name === 'Tamil' ? '🇮🇳' :
                         language.name === 'English' ? '🇬🇧' :
                         language.name === 'Arabic' ? '🇸🇦' :
                         '🇮🇩'}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                      {language.name}
                    </h3>
                  </div>
                  <motion.span 
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {language.level}
                  </motion.span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6 flex items-start">
                  <FaCheckCircle className="w-5 h-5 mr-2 text-purple-500 mt-1 flex-shrink-0" />
                  {language.description}
                </p>
                <div className="mt-6">
                  <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: language.level === 'Native' ? '100%' : language.level === 'Fluent' ? '90%' : '70%' } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-2.5 rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 shadow-lg shadow-purple-500/20"
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