'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🌟' },
    { id: 'web', name: 'Web Development', icon: '🌐' },
    { id: 'ai', name: 'AI & ML', icon: '🤖' },
    { id: 'iot', name: 'IoT', icon: '🔌' },
    { id: 'mobile', name: 'Mobile Apps', icon: '📱' },
  ];

  const projects = [
    {
      title: 'UNSIKA IRO Website',
      description:
        'Designed and developed a responsive website for the International Relations Office of Universitas Singaperbangsa Karawang. Integrated interactive features, optimized performance, and ensured accessibility across devices.',
      image:
        'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop',
      category: 'web',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      demoLink: 'https://iro.unsika.ac.id/index.html',
      githubLink: '#', // Replace with the GitHub repo link if available
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing professional work and skills. Features dark mode, smooth animations, and contact form integration.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop',
      category: 'web',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'EmailJS'],
      demoLink: '#',
      githubLink: 'https://github.com/Aqeelbmh/portfolio-aqeel',
    },
    {
      title: 'Symptoms-Based Disease Prediction',
      description: 'A machine learning model that predicts potential diseases based on user-input symptoms using RFC and MLPClassifier.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
      category: 'ai',
      technologies: ['Machine Learning', 'Python', 'Streamlit', 'RFC', 'MLPClassifier'],
      demoLink: '#',
      githubLink: 'https://github.com/Aqeelbmh/Diseases-Prediction-based-on-Symptoms',
    },
    {
      title: 'Diabetes Prediction',
      description: 'Predictive tool that uses machine learning to assess diabetes risk using health parameters like age, glucose, BMI.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
      category: 'ai',
      technologies: ['Machine Learning', 'Python', 'Streamlit', 'RFC'],
      demoLink: '#',
      githubLink: 'https://github.com/Aqeelbmh/Diabetes-Prediction',
    },
    {
      title: 'FlameGuard: IoT Fire Detection System',
      description: 'Real-time IoT-based fire detection using ESP32 and Blynk Cloud, sends instant flame alerts.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
      category: 'iot',
      technologies: ['IoT', 'ESP32', 'Blynk', 'C++'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Digital Image Processing & Blurring',
      description: 'Python project applying blurring and filtering with OpenCV to secure or enhance images.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop',
      category: 'ai',
      technologies: ['Python', 'OpenCV'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Grocery Shop Application',
      description: 'Flutter mobile app for grocery browsing, search, and purchasing with Firebase backend.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop',
      category: 'mobile',
      technologies: ['Flutter', 'Firebase'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Capstone Project - GoFood App',
      description: 'Food delivery app designed with Flutter and Figma, includes real-time order tracking.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop',
      category: 'mobile',
      technologies: ['Mobile App', 'Flutter', 'Figma'],
      demoLink: '#',
      githubLink: 'https://www.figma.com/design/AN7XVxbuEcFZhJpfNN9pzh/Foodie-Fly.Prototype?node-id=0-1&t=uDL4ci6e9r6tRNPM-1',
    },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-[#0b0f13] cyber-grid-bg">
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
            className="text-4xl md:text-5xl font-extrabold text-center mb-16 heading-neon"
          >
            Featured Projects
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full capitalize transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'text-[#0b0f13] bg-[linear-gradient(90deg,#00e5ff,#00f5d4,#ff2bd6)] shadow-neon'
                    : 'bg-[#0b0f13] text-slate-300 border border-cyan-400/20 hover:bg-cyan-400/10 hover:text-neon'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative bg-[#0b0f13] rounded-2xl overflow-hidden transition-all duration-300 border border-cyan-400/20 hover:shadow-neon"
              >
                <div className="relative h-56 group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,15,19,0.8),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-3 heading-neon">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-cyan-400/20 text-cyan-200 bg-cyan-400/5 hover:bg-cyan-400/10"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    {project.demoLink && project.demoLink !== '#' && (
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 text-cyan-300 hover:text-cyan-200 font-medium transition-colors duration-300"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                    {project.githubLink && project.githubLink !== '#' && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 text-cyan-300 hover:text-cyan-200 font-medium transition-colors duration-300"
                      >
                        <FaGithub className="text-lg" />
                        <span>Source Code</span>
                      </motion.a>
                    )}
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

export default Projects; 