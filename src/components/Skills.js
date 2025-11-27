import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNode, FaPython, FaDatabase, FaAws, FaGit } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95, icon: FaReact, color: '#61DAFB' },
        { name: 'JavaScript', level: 90, icon: null, color: '#F7DF1E' },
        { name: 'TypeScript', level: 85, icon: SiTypescript, color: '#3178C6' },
        { name: 'Tailwind CSS', level: 90, icon: SiTailwindcss, color: '#06B6D4' },
      ],
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'Node.js', level: 85, icon: FaNode, color: '#339933' },
        { name: 'Python', level: 80, icon: FaPython, color: '#3776AB' },
        { name: 'Redux', level: 88, icon: SiRedux, color: '#764ABC' },
        { name: 'Git', level: 92, icon: FaGit, color: '#F1502F' },
      ],
    },
    {
      title: 'Database & Cloud',
      skills: [
        { name: 'MySQL', level: 85, icon: FaDatabase, color: '#4479A1' },
        { name: 'MongoDB', level: 82, icon: FaDatabase, color: '#13AA52' },
        { name: 'AWS', level: 85, icon: FaAws, color: '#FF9900' },
        { name: 'PostgreSQL', level: 83, icon: FaDatabase, color: '#336791' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 md:py-32 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-600 font-semibold text-lg mb-2 uppercase tracking-wider">My Toolkit</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my proficiency across various technologies and frameworks
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-blue-500">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon && (
                          <skill.icon size={20} style={{ color: skill.color }} />
                        )}
                        <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-blue-600 font-bold">{skill.level}%</span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 md:p-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Also Experienced With</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['REST APIs', 'GraphQL', 'Docker', 'Webpack', 'Agile/Scrum', 'UI/UX Design', 'Performance Optimization', 'Testing (Jest)'].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-4 text-center border-2 border-blue-200 hover:border-blue-500 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-semibold text-gray-900">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
