'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      title: 'BSc (Hons) Computer Science',
      institution: 'University of Singaperbangsa Karawang',
      period: '2021 - 2025',
      description: 'Currently pursuing a Bachelor\'s degree in Computer Science with a focus on software development, data structures, algorithms, and emerging technologies such as AI and cybersecurity.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop',
      certificateUrl: 'https://drive.google.com/file/d/1NK6l0h9kpf8mKGcfluK2OVGJCAZvVrFb/view?usp=sharing',
    },
    {
      title: 'Certified Ethical Hacker (CEH v11)',
      institution: 'Mars Tech',
      period: '2023',
      description: 'Successfully completed the Certified Ethical Hacker (CEH v11) training course, gaining foundational and advanced knowledge in ethical hacking, cybersecurity practices, and modern threat prevention techniques',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
      certificateUrl: 'https://drive.google.com/file/d/1GgJtz3luFudazhTxn-1ZRrG1dUNrowoI/view?usp=drive_link',
    },
    {
      title: 'Advanced Level (Arts Stream)',
      institution: 'Al Haqqaniyyah Arabic College',
      period: '2019 - 2020',
      description: 'Completed Advanced Level education with distinction, achieving excellent results (2B, 1C) in Arts subjects. Developed strong analytical and critical thinking skills through comprehensive study of humanities and social sciences.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
      certificateUrl: 'https://drive.google.com/file/d/1GgJtz3luFudazhTxn-1ZRrG1dUNrowoI/view?usp=drive_link',
    },
    {
      title: 'Primary Education',
      institution: 'Al Haqqaniyyah Arabic College',
      period: '2013 - 2015',
      description: 'Completed primary education with distinction, establishing a strong foundation in core subjects. Developed essential skills in mathematics, languages, and social studies while actively participating in academic and cultural activities.',
      image: '/images/education/al-haqqaniyyah.jpg',
      certificateUrl: '/certificates/al-haqqaniyyah.pdf',
    },
  ];

  return (
    <section id="education" className="py-24 bg-[#0b0f13] cyber-grid-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-16 heading-neon"
          >
            Education
          </motion.h2>

          <div className="space-y-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <motion.div 
                    className="md:w-1/3"
                    whileHover={{ x: 5 }}
                  >
                    <div className="bg-[#0b0f13] p-6 rounded-2xl border border-cyan-400/20 hover:shadow-neon transition-all">
                      <h3 className="text-2xl font-semibold text-white mb-2 heading-neon">
                        {edu.title}
                      </h3>
                      <p className="text-cyan-300 font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-slate-300 mt-3 flex items-center">
                        <FaCalendarAlt className="w-5 h-5 mr-2 text-cyan-400" />
                        {edu.period}
                      </p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="md:w-2/3"
                    whileHover={{ x: -5 }}
                  >
                    <div className="bg-[#0b0f13] p-8 rounded-2xl border border-cyan-400/20 hover:shadow-neon transition-all">
                      <p className="text-slate-300 text-lg leading-relaxed mb-6">
                        {edu.description}
                      </p>
                      {edu.certificateUrl && (
                        <motion.a
                          href={edu.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center px-6 py-3 rounded-xl text-[#0b0f13] bg-[linear-gradient(90deg,#00e5ff,#00f5d4,#ff2bd6)] hover:shadow-neon transition-all duration-300"
                        >
                          <FaExternalLinkAlt className="w-5 h-5 mr-2" />
                          View Certificate
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </div>
                {index < education.length - 1 && (
                  <div className="hidden md:block absolute left-1/3 top-full w-0.5 h-16 bg-[linear-gradient(180deg,#00e5ff,#ff2bd6)]" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 