import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Image */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <motion.div
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/img/mypic.JPG"
                alt="Gurpinder Singh"
                className="w-full h-96 object-cover"
              />
            </motion.div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl -z-10 opacity-20"></div>
          </motion.div>

          {/* Content */}
          <motion.div variants={containerVariants}>
            <motion.p
              className="text-blue-600 font-semibold text-lg mb-2 uppercase tracking-wider"
              variants={itemVariants}
            >
              About Me
            </motion.p>
            
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              Frontend Developer & Tech Enthusiast
            </motion.h2>

            <motion.div className="space-y-4 text-gray-700 text-lg" variants={containerVariants}>
              <motion.p variants={itemVariants} className="leading-relaxed">
                I'm a skilled Frontend Developer with 8+ years of experience building responsive web applications and user-friendly interfaces. I specialize in modern web technologies and love creating elegant solutions to complex problems.
              </motion.p>

              <motion.p variants={itemVariants} className="leading-relaxed">
                My expertise spans React, Redux, HTML5, CSS3, and JavaScript, combined with a deep understanding of responsive design principles. I'm proficient in Object-Oriented programming and have extensive experience with cloud services like AWS, Azure, and GCP.
              </motion.p>

              <motion.p variants={itemVariants} className="leading-relaxed">
                When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or mentoring junior developers. I'm passionate about clean code, performance optimization, and creating delightful user experiences.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </motion.a>
              <motion.a
                href="#skills"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Skills
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
