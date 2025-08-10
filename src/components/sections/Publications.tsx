'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Publication {
  title: string;
  authors: string;
  journal: string;
  date: string;
  description: string;
  doi?: string;
  link?: string;
}

const Publications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const publications: Publication[] = [
    {
      title: 'DIABETES PREDICTION MACHINE LEARNING-BASED DIABETES PREDICTION APP USING RANDOM FOREST ALGORITHM',
      authors: 'Mohamed Hakeel',
      journal: 'JATI (Jurnal Mahasiswa Teknik Informatika)',
      date: '2025-01-04',
      description: 'Diabetes is a chronic metabolic condition that causes increased blood glucose levels in millions of people worldwide. Early detection and quick action are critical for controlling this illness and preventing consequences. This work describes creating a user-friendly smartphone application for diabetes prediction using the Random Forest algorithm, a powerful machine-learning technique.',
      doi: 'https://doi.org/10.36040/jati.v9i1.12654',
      link: 'https://doi.org/10.36040/jati.v9i1.12654',
    },
    {
      title: 'SYMPTOM-BASED DISEASE PREDICTION USING MACHINE LEARNING',
      authors: 'Mohamed Hakeel, Aji Primajaya, E.Haodudin Nurfikli',
      journal: 'JATI (Jurnal Mahasiswa Teknik Informatika)',
      date: '2025-05-25',
      description: 'There are now more opportunities to increase diagnostic accessibility and accuracy thanks to the application of machine learning (ML) in healthcare, especially in environments with limited resources',
      doi: ' https://doi.org/10.36040/jati.v9i4.14087',
      link: ' https://doi.org/10.36040/jati.v9i4.14087',
    },

    // Add more publications as needed
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    }),
  };

  return (
    <section id="publications" className="py-24 bg-[#0b0f13] cyber-grid-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 heading-neon">
            Publications
          </h2>

          <div className="space-y-8">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="bg-[#0b0f13] rounded-2xl p-8 transition-all duration-300 border border-cyan-400/20 hover:shadow-neon"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 leading-tight heading-neon">
                      {pub.title}
                    </h3>
                    <p className="text-cyan-300 font-medium mb-2">
                      {pub.authors}
                    </p>
                    <div className="flex items-center text-slate-300 mb-4">
                      <span className="font-medium">{pub.journal}</span>
                      <span className="mx-2">•</span>
                      <span>{pub.date}</span>
                    </div>
                  </div>
                  {pub.doi && (
                    <div className="flex items-center space-x-2 text-sm text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      <span>DOI: {pub.doi}</span>
                    </div>
                  )}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {pub.description}
                </p>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg text-[#0b0f13] bg-[linear-gradient(90deg,#00e5ff,#00f5d4,#ff2bd6)] hover:shadow-neon transition-colors duration-300"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    View Publication
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications; 