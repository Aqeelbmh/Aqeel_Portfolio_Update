'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Educational Consultant',
      company: 'Freelancer',
      period: 'Oct 2022 - Present',
      description: 'Provided academic advising to undergraduate students, assisted in developing personalized career plans, and guided course selection to align with career goals.',
      skills: ['Academic Advising', 'Career Planning', 'Course Selection', 'Student Guidance'],
    },
    {
      title: 'Cybersecurity Job Simulation',
      company: 'Mastercard (via Forage)',
      period: 'Aug 2024 - Sep 2024',
      description: 'Designed phishing email simulation to test employee awareness, analyzed results to improve cybersecurity defenses, and developed insights into modern phishing techniques.',
      skills: ['Cybersecurity', 'Phishing Simulation', 'Security Analysis', 'Employee Training'],
    },
    {
      title: 'Advisors & Consulting Services Job Simulation',
      company: 'Forage',
      period: 'Aug 2024 - Sep 2024',
      description: 'Completed tasks in promotion optimization, applied data-driven storytelling for consulting scenarios, and gained experience in strategic advisory services.',
      skills: ['Consulting', 'Data Analysis', 'Strategic Planning', 'Business Advisory'],
    },
    {
      title: 'Project Management Job Simulation',
      company: 'Accenture North America (via Forage)',
      period: 'Jun 2024 - Aug 2024',
      description: 'Understood various project management approaches, proposed optimal strategies for simulated projects, and highlighted key leadership attributes and communication strategies.',
      skills: ['Project Management', 'Leadership', 'Strategic Planning', 'Communication'],
    },
    {
      title: 'Data Analytics and Visualization Trainee',
      company: 'Accenture North America – Forage',
      period: 'Jun 2024 - Aug 2024',
      description: 'Cleaned and modeled large datasets, created visualizations for business insights, presented insights in a professional format, and gained hands-on experience in data storytelling.',
      skills: ['Data Analytics', 'Data Visualization', 'Data Modeling', 'Business Intelligence'],
    },
    {
      title: 'Volunteer – International Community Service Program',
      company: 'University of North Sumatra',
      period: 'Jun 2024 - Sep 2024',
      description: 'Promoted sustainable tourism and environmental conservation, collaborated on eco-friendly initiatives with local communities, and organized educational workshops.',
      skills: ['Community Service', 'Environmental Conservation', 'Event Planning', 'Education'],
    },
    {
      title: 'Sales Manager',
      company: 'HK Motors',
      period: 'Feb 2020 - Aug 2022',
      description: 'Boosted regional sales revenue by 35% in six months, handled direct selling and customer support, and built relationships with clients and stakeholders.',
      skills: ['Sales Management', 'Revenue Growth', 'Customer Relations', 'Business Development'],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
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
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            Work Experience
          </motion.h2>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
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
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-purple-600 dark:text-purple-400 font-medium">
                        {exp.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mt-3 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.period}
                      </p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="md:w-2/3"
                    whileHover={{ x: -5 }}
                  >
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {exp.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
                {index < experiences.length - 1 && (
                  <div className="hidden md:block absolute left-1/3 top-full w-0.5 h-16 bg-gradient-to-b from-purple-500 to-blue-500" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 