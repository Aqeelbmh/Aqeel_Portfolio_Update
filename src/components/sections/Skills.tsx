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
    { name: 'HTML5', icon: '🌐', level: 75, category: 'programming' },
    { name: 'CSS3', icon: '🎨', level: 70, category: 'programming' },
    { name: 'JavaScript', icon: '📜', level: 65, category: 'programming' },
    { name: 'EmailJS', icon: '📧', level: 60, category: 'programming' },
    { name: 'React.js', icon: '⚛️', level: 65, category: 'programming' },
    { name: 'Flutter', icon: '📱', level: 55, category: 'programming' },
    { name: 'Firebase', icon: '🔥', level: 60, category: 'programming' },

    // Machine Learning & Data Science
    { name: 'Python', icon: '🐍', level: 70, category: 'ml' },
    { name: 'NumPy', icon: '🔢', level: 65, category: 'ml' },
    { name: 'Pandas', icon: '🐼', level: 68, category: 'ml' },
    { name: 'Scikit-learn', icon: '🤖', level: 60, category: 'ml' },
    { name: 'Streamlit', icon: '📊', level: 55, category: 'ml' },
    { name: 'Random Forest', icon: '🌲', level: 62, category: 'ml' },
    { name: 'MLPClassifier', icon: '🧠', level: 58, category: 'ml' },
    { name: 'Data Cleaning', icon: '🧹', level: 70, category: 'ml' },
    { name: 'Data Modeling', icon: '📈', level: 65, category: 'ml' },

    // Data Visualization
    { name: 'Power BI', icon: '📊', level: 68, category: 'visualization' },
    { name: 'Tableau', icon: '📈', level: 65, category: 'visualization' },
    { name: 'Matplotlib', icon: '📉', level: 70, category: 'visualization' },
    { name: 'Dashboard Design', icon: '🎯', level: 65, category: 'visualization' },
    { name: 'Data Storytelling', icon: '📖', level: 60, category: 'visualization' },

    // Cybersecurity
    { name: 'CEH v11', icon: '🔒', level: 40, category: 'cybersecurity' },
    { name: 'Penetration Testing', icon: '🔍', level: 40, category: 'cybersecurity' },
    { name: 'Phishing Simulation', icon: '🎣', level: 45, category: 'cybersecurity' },
    { name: 'Secure Coding', icon: '💻', level: 40, category: 'cybersecurity' },
    { name: 'Internal Audit', icon: '📋', level: 45, category: 'cybersecurity' },

    // IoT & Hardware
    { name: 'ESP32', icon: '🔌', level: 55, category: 'iot' },
    { name: 'Blynk Platform', icon: '📱', level: 50, category: 'iot' },
    { name: 'C++', icon: '⚙️', level: 45, category: 'iot' },
    { name: 'Sensor Integration', icon: '📡', level: 50, category: 'iot' },

    // Soft Skills
    { name: 'Project Management', icon: '📋', level: 70, category: 'soft' },
    { name: 'Strategic Thinking', icon: '🎯', level: 65, category: 'soft' },
    { name: 'Problem Solving', icon: '🧩', level: 75, category: 'soft' },
    { name: 'Cross-functional Collaboration', icon: '🤝', level: 70, category: 'soft' },
    { name: 'Academic Mentoring', icon: '👨‍🏫', level: 65, category: 'soft' },
    { name: 'Team Leadership', icon: '👥', level: 68, category: 'soft' },
    { name: 'Communication', icon: '💬', level: 72, category: 'soft' },
    { name: 'Data-driven Decisions', icon: '📊', level: 65, category: 'soft' },
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
    <section id="skills" className="py-24 bg-[color:var(--bg)] cyber-grid-bg">
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
            className="text-4xl md:text-5xl font-extrabold text-center mb-14 heading-neon"
          >
            Skills & Expertise
          </motion.h2>

          {/* Enhanced Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'text-[color:var(--bg)] bg-[linear-gradient(90deg,var(--accent),var(--accent-2))]'
                    : 'bg-[color:var(--bg)] text-slate-300 border border-[color:var(--border)] hover:bg-white/5 hover:text-white'
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {categories.filter(cat => cat.id !== 'all').map((category) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[color:var(--card)] rounded-2xl p-8 transition-all duration-300 border border-[color:var(--border)]"
                >
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white heading-neon">
                      {category.name}
                    </h3>
                  </div>
                  <div className="space-y-6">
                    {getCategorySkills(category.id).map((skill, index) => (
                      <div key={skill.name} className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-xl">{skill.icon}</span>
                            <span className="text-slate-300/90 font-medium">{skill.name}</span>
                          </div>
                          <span className="text-sm font-semibold text-slate-200">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-white/5 rounded-full h-2.5">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-2.5 rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-2))]"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-[color:var(--card)] rounded-2xl p-8 transition-all duration-300 border border-[color:var(--border)]"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                        <span className="text-2xl">{skill.icon}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white heading-neon">
                        {skill.name}
                      </h3>
                    </div>
                    <span className="text-sm font-semibold text-slate-200">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-3 rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-2))]"
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