'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  icon: string;
  level: number;
  category: string;
}

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState('all');

  const skills: Skill[] = [
    // Programming & Web Development
    { name: 'HTML5', icon: '🌐', level: 90, category: 'programming' },
    { name: 'CSS3', icon: '🎨', level: 85, category: 'programming' },
    { name: 'JavaScript', icon: '📜', level: 88, category: 'programming' },
    { name: 'EmailJS', icon: '📧', level: 82, category: 'programming' },
    { name: 'React.js', icon: '⚛️', level: 85, category: 'programming' },
    { name: 'Flutter', icon: '📱', level: 80, category: 'programming' },
    { name: 'Firebase', icon: '🔥', level: 83, category: 'programming' },

    // Machine Learning & Data Science
    { name: 'Python', icon: '🐍', level: 88, category: 'ml' },
    { name: 'NumPy', icon: '🔢', level: 85, category: 'ml' },
    { name: 'Pandas', icon: '🐼', level: 87, category: 'ml' },
    { name: 'Scikit-learn', icon: '🤖', level: 84, category: 'ml' },
    { name: 'Streamlit', icon: '📊', level: 82, category: 'ml' },
    { name: 'Random Forest', icon: '🌲', level: 85, category: 'ml' },
    { name: 'MLPClassifier', icon: '🧠', level: 83, category: 'ml' },
    { name: 'Data Cleaning', icon: '🧹', level: 90, category: 'ml' },
    { name: 'Data Modeling', icon: '📈', level: 86, category: 'ml' },

    // Data Visualization
    { name: 'Power BI', icon: '📊', level: 88, category: 'visualization' },
    { name: 'Tableau', icon: '📈', level: 85, category: 'visualization' },
    { name: 'Matplotlib', icon: '📉', level: 87, category: 'visualization' },
    { name: 'Dashboard Design', icon: '🎯', level: 86, category: 'visualization' },
    { name: 'Data Storytelling', icon: '📖', level: 84, category: 'visualization' },

    // Cybersecurity
    { name: 'CEH v11', icon: '🔒', level: 90, category: 'cybersecurity' },
    { name: 'Penetration Testing', icon: '🔍', level: 88, category: 'cybersecurity' },
    { name: 'Phishing Simulation', icon: '🎣', level: 85, category: 'cybersecurity' },
    { name: 'Secure Coding', icon: '💻', level: 87, category: 'cybersecurity' },
    { name: 'Internal Audit', icon: '📋', level: 86, category: 'cybersecurity' },

    // IoT & Hardware
    { name: 'ESP32', icon: '🔌', level: 85, category: 'iot' },
    { name: 'Blynk Platform', icon: '📱', level: 83, category: 'iot' },
    { name: 'C++', icon: '⚙️', level: 82, category: 'iot' },
    { name: 'Sensor Integration', icon: '📡', level: 84, category: 'iot' },

    // Soft Skills
    { name: 'Project Management', icon: '📋', level: 88, category: 'soft' },
    { name: 'Strategic Thinking', icon: '🎯', level: 87, category: 'soft' },
    { name: 'Problem Solving', icon: '🧩', level: 90, category: 'soft' },
    { name: 'Cross-functional Collaboration', icon: '🤝', level: 89, category: 'soft' },
    { name: 'Academic Mentoring', icon: '👨‍🏫', level: 86, category: 'soft' },
    { name: 'Team Leadership', icon: '👥', level: 88, category: 'soft' },
    { name: 'Communication', icon: '💬', level: 92, category: 'soft' },
    { name: 'Data-driven Decisions', icon: '📊', level: 87, category: 'soft' },
  ];

  const categories = [
    { id: 'all', name: 'All Skills', icon: '🌟' },
    { id: 'programming', name: 'Programming & Web', icon: '💻' },
    { id: 'ml', name: 'Machine Learning', icon: '🤖' },
    { id: 'visualization', name: 'Data Visualization', icon: '📊' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: '🔒' },
    { id: 'iot', name: 'IoT & Hardware', icon: '🔌' },
    { id: 'soft', name: 'Soft Skills', icon: '🎯' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getCategorySkills = (categoryId: string) => {
    return skills.filter(skill => skill.category === categoryId);
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
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
            Skills & Expertise
          </motion.h2>

          {/* Enhanced Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 shadow-sm hover:shadow-md'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Enhanced Skills Display */}
          {activeCategory === 'all' ? (
            // Show all categories in a grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.filter(cat => cat.id !== 'all').map((category) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
                >
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 flex items-center justify-center">
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                      {category.name}
                    </h3>
                  </div>
                  <div className="space-y-6">
                    {getCategorySkills(category.id).map((skill, index) => (
                      <div key={skill.name} className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-xl">{skill.icon}</span>
                            <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                          </div>
                          <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-100 dark:bg-gray-600 rounded-full h-2.5">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-2.5 rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            // Show single category in a grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 flex items-center justify-center">
                        <span className="text-2xl">{skill.icon}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {skill.name}
                      </h3>
                    </div>
                    <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-600 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-3 rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 