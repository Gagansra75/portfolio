import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaUsers, FaMobileAlt, FaGlobe } from 'react-icons/fa';
import CountUp from 'react-countup';

const Stats = () => {
  const stats = [
    {
      icon: FaClock,
      value: 8,
      label: 'Years Experience',
      description: 'Building digital solutions',
    },
    {
      icon: FaUsers,
      value: 8,
      label: 'Happy Clients',
      description: 'Across the globe',
    },
    {
      icon: FaGlobe,
      value: 5,
      label: 'Websites Made',
      description: 'Fully responsive',
    },
    {
      icon: FaMobileAlt,
      value: 2,
      label: 'Mobile Apps',
      description: 'iOS & Android',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 text-center text-white hover:bg-opacity-20 transition-all"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className="text-5xl md:text-6xl font-bold mb-4 text-cyan-300"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', delay: index * 0.1 }}
                >
                  <CountUp end={stat.value} duration={2.5} />
                  <span className="text-4xl">+</span>
                </motion.div>

                <Icon className="text-3xl mx-auto mb-4 text-cyan-300" />

                <h3 className="text-xl font-bold mb-2">{stat.label}</h3>
                <p className="text-blue-100">{stat.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
