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
      title: 'Web Developer',
      company: 'Universitas Singaperbangsa Karawang, IRO Office',
      period: 'May 2025 - Present',
      description:
        'Design, develop, and maintain responsive university websites, implement interactive features, and optimize performance for enhanced user experience.',
      skills: ['Web Development', 'Responsive Design', 'JavaScript', 'Performance Optimization'],
    },
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
    <section id="experience" className="py-24 bg-[color:var(--bg)] cyber-grid-bg">
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
            className="text-4xl md:text-5xl font-extrabold text-center mb-14 heading-neon"
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
                    <div className="bg-[color:var(--card)] p-6 rounded-2xl border border-[color:var(--border)] transition-all">
                      <h3 className="text-2xl font-semibold text-white mb-2 heading-neon">
                        {exp.title}
                      </h3>
                      <p className="text-slate-200 font-medium">
                        {exp.company}
                      </p>
                      <p className="text-slate-300/90 mt-3 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <div className="bg-[color:var(--card)] p-8 rounded-2xl border border-[color:var(--border)] transition-all">
                      <p className="text-slate-300/90 text-lg leading-relaxed mb-6">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {exp.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-[color:var(--border)] text-slate-200 bg-white/5 hover:bg-white/10"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
                {index < experiences.length - 1 && (
                  <div className="hidden md:block absolute left-1/3 top-full w-0.5 h-16 bg-[color:var(--border)]" />
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