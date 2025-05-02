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
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
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
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent"
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
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 shadow-sm hover:shadow-md'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
              >
                <div className="relative h-56 group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300"
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
                        className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors duration-300"
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
                        className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors duration-300"
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