import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-8 right-24 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg flex items-center justify-center overflow-hidden group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      aria-label="Toggle theme"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
        initial={{ x: '-100%' }}
        animate={{ x: theme === 'dark' ? '0%' : '-100%' }}
        transition={{ duration: 0.3 }}
      />

      {/* Icons */}
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          className="absolute"
          initial={false}
          animate={{
            scale: theme === 'light' ? 1 : 0,
            rotate: theme === 'light' ? 0 : 180,
            opacity: theme === 'light' ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <FaSun className="text-white text-xl" />
        </motion.div>

        <motion.div
          className="absolute"
          initial={false}
          animate={{
            scale: theme === 'dark' ? 1 : 0,
            rotate: theme === 'dark' ? 0 : -180,
            opacity: theme === 'dark' ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <FaMoon className="text-white text-xl" />
        </motion.div>
      </div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full blur-md opacity-50"
        animate={{
          background: theme === 'dark' 
            ? 'linear-gradient(to right, #9333ea, #ec4899)'
            : 'linear-gradient(to right, #3b82f6, #9333ea)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default ThemeToggle;
