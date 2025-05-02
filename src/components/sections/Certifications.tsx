'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  certificateUrl: string;
}

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications: Certification[] = [
    {
      title: 'Tata Data Visualization',
      issuer: 'Tata (Forage)',
      date: 'April 2025',
      description: 'Empowering Business with Effective Insights Job Simulation',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      certificateUrl: 'https://drive.google.com/file/d/1VT0OQajJ_gDrxMVSNJdyy3P3awgbbR54/view?usp=sharing',
    },
    {
      title: 'International Virtual Course in Postharvest Technology',
      issuer: 'ITB Institute of Technology Bandung',
      date: 'August 2024',
      description: 'Training in postharvest technology and agricultural innovation',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop',
      certificateUrl: 'https://drive.google.com/file/d/18ytRQK7iltYDfD7EtQC-v2HnaNRmFRdo/view?usp=drive_link',
    },
    {
      title: 'Software Testing Certification',
      issuer: 'Professional Certification',
      date: 'August 2024',
      description: 'Comprehensive training in software testing methodologies and practices',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop',
      certificateUrl: 'https://drive.google.com/file/d/1G2XUsaKu_NNoOWU_bLFryeMNiTJ_vzhi/view?usp=drive_link',
    },
    {
      title: 'Accenture Data Analytics & Visualization Job Simulation',
      issuer: 'Accenture',
      date: 'August 2024 - September 2024',
      description: 'Virtual internship program covering project management and data analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      certificateUrl: 'https://drive.google.com/file/d/1HIk0-0oOYBtpw9KyGxSCzhbCm2Zx5Rh9/view?usp=sharing',
    },
    {
      title: 'Mastercard Cybersecurity Simulation',
      issuer: 'Mastercard (Forage)',
      date: 'August 2024 - September 2024',
      description: 'Virtual internship program focusing on cybersecurity and consulting practices',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
      certificateUrl: 'https://drive.google.com/file/d/1znXzUt_fuqoqhR0lhnpbW1nirV0qQF2v/view?usp=sharing',
    },
    {
      title: 'Healthcare Quality in Islamic Perspective',
      issuer: 'University of Muhammadiyah Lamongan',
      date: 'July 2024 - August 2024',
      description: 'The 4th International Summer Course 2024 (1.5 Credits)',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
      certificateUrl: 'https://drive.google.com/file/d/1MFzLsF5XsqCdWI2FJfLg8VBWyWwDlAnf/view?usp=sharing',
    },
    {
      title: 'Internal Audit Analyst Virtual Experience Program',
      issuer: 'JPMorgan Chase & Co.',
      date: 'June 2024 - September 2024',
      description: 'Professional training in audit procedures and practices',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop',
      certificateUrl: 'https://drive.google.com/file/d/1NHK3ZpKzvyEj8nbb1LhBQDBIVyOPeWhc/view?usp=drive_link',
    },
    {
      title: 'Certified Ethical Hacker (CEH v11)',
      issuer: 'Mars Tech',
      date: 'December 2023 - April 2024',
      description: 'Professional certification in ethical hacking and cybersecurity',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
      certificateUrl: 'https://drive.google.com/file/d/1GgJtz3luFudazhTxn-1ZRrG1dUNrowoI/view?usp=drive_link',
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-gradient-to-b from-slate-50 to-amber-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-amber-600 via-rose-500 to-emerald-600 bg-clip-text text-transparent"
          >
            Certifications
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700"
              >
                <div className="relative h-56 group">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 2}
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-3">
                    {cert.title}
                  </h3>
                  <p className="text-amber-600 dark:text-amber-400 font-medium mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {cert.date}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                    {cert.description}
                  </p>
                  <motion.a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-rose-500 text-white rounded-xl hover:from-amber-700 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaExternalLinkAlt className="w-5 h-5 mr-2" />
                    View Certificate
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications; 