import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const words = ['Developer', 'Designer', 'Problem Solver'];
  const [currentWord, setCurrentWord] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-blue-400 text-lg md:text-xl font-semibold mb-4 tracking-wider"
          variants={itemVariants}
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight"
          variants={itemVariants}
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Gurpinder Singh
          </span>
        </motion.h1>

        <motion.div
          className="h-12 md:h-16 mb-6 flex items-center justify-center"
          variants={itemVariants}
        >
          <span className="text-2xl md:text-4xl text-blue-300 font-semibold">
            I'm a{' '}
            <motion.span
              key={currentWord}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-cyan-300"
            >
              {words[currentWord]}
            </motion.span>
          </span>
        </motion.div>

        <motion.p
          className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Crafting beautiful, responsive web applications with React, modern CSS, and cutting-edge technologies. 
          Let's build something amazing together!
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-2xl transition-all duration-300 text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="#about"
            className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-bold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaChevronDown className="text-blue-400 text-2xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
