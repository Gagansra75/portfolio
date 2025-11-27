import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: 'Apple',
      position: 'Infrastructure System Engineer',
      period: 'Apr 2025 - Present',
      location: 'Austin, Texas, United States',
      description:
        'Infrastructure System Engineer on contract basis, working in hybrid capacity. Managing and optimizing infrastructure systems and ensuring robust system performance.',
      achievements: [
        'Designed and implemented scalable infrastructure solutions',
        'Optimized system performance and reliability',
        'Collaborated with cross-functional teams on infrastructure projects',
        'Monitored and maintained system health and security',
        'Implemented best practices for system administration',
        'Working on a project that will save 5 million dollars monthly for Apple',
      ],
    },
    {
      company: 'Tesla',
      position: 'React Developer',
      period: '11/2023 - 04/2025',
      location: 'Fremont, CA',
      description:
        'Working with cross-functional teams on Tesla Retail Tool & FindUs applications. Developed reusable components and optimized application performance.',
      achievements: [
        'Collaborated on seamless API integration for data flow optimization',
        'Developed reusable components to improve code quality',
        'Utilized Git workflows for efficient team collaboration',
        'Led agile development sprints with stakeholder communication',
        'Debugged issues using Chrome DevTools and React Developer Tools',
        'Modernized legacy codebases to current standards',
      ],
    },
    {
      company: 'SiriusXM',
      position: 'React Developer',
      period: '01/2022 - 10/2023',
      location: 'Remote',
      description:
        'Developed and implemented UI components using React concepts with Redux for state management.',
      achievements: [
        'Implemented complex business logic with Redux Thunk',
        'Integrated with RESTful APIs and third-party libraries',
        'Designed frontend solutions for test-driven development',
        'Created clean, modular, and maintainable React code',
        'Handled asynchronous responses and side effects effectively',
      ],
    },
    {
      company: 'GloomySkin',
      position: 'React Developer',
      period: '07/2020 - 12/2021',
      location: 'Remote',
      description: 'Created and updated React applications with focus on usability and performance.',
      achievements: [
        'Built responsive React websites with modern design',
        'Optimized sites for SEO and accessibility',
        'Collaborated with marketing for client presentations',
        'Debugged and fixed issues using development tools',
      ],
    },
    {
      company: 'GE Digital',
      position: 'Service Engineer',
      period: '01/2017 - 03/2020',
      location: 'San Ramon, CA',
      description: 'Designed, developed, and tested scalable software products and web applications.',
      achievements: [
        'Built and tested scalable web applications',
        'Developed pages using HTML, CSS3, JavaScript, and jQuery',
        'Performed server monitoring and performance analysis',
        'Debugged code using Chrome DevTools and Jest',
        'Optimized code for faster load times and performance',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 md:py-32 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-600 font-semibold text-lg mb-2 uppercase tracking-wider">Career Journey</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A timeline of my professional growth and achievements across leading tech companies
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={itemVariants}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 md:left-12 top-20 w-1 h-24 bg-gradient-to-b from-blue-500 to-transparent md:h-32"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 md:left-4 top-6 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                <FaBriefcase className="text-white text-lg md:text-2xl" />
              </div>

              {/* Content */}
              <motion.div
                className="ml-20 md:ml-32 bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-blue-600 font-semibold text-lg mb-3">{exp.company}</p>

                  <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-blue-500" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-blue-500" />
                      <span className="font-medium">{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg mb-4">{exp.description}</p>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Key Achievements</h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        className="flex items-start gap-3 text-gray-700"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: achIndex * 0.05 }}
                      >
                        <span className="text-blue-500 font-bold mt-1">→</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
