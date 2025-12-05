import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [greeting, setGreeting] = useState('');
  const [timeOfDay, setTimeOfDay] = useState('');

  useEffect(() => {
    // Check if user has already seen the modal today
    const lastVisit = localStorage.getItem('portfolioLastVisit');
    const today = new Date().toDateString();
    
    if (lastVisit !== today) {
      // Show modal after a short delay for better UX
      setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      // Store today's date
      localStorage.setItem('portfolioLastVisit', today);
    }

    // Get time-based greeting
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting('Good Morning');
      setTimeOfDay('morning');
    } else if (hour >= 12 && hour < 17) {
      setGreeting('Good Afternoon');
      setTimeOfDay('afternoon');
    } else if (hour >= 17 && hour < 22) {
      setGreeting('Good Evening');
      setTimeOfDay('evening');
    } else {
      setGreeting('Welcome');
      setTimeOfDay('night');
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const getGradient = () => {
    switch (timeOfDay) {
      case 'morning':
        return 'from-amber-400 via-orange-400 to-pink-500';
      case 'afternoon':
        return 'from-blue-400 via-cyan-400 to-teal-500';
      case 'evening':
        return 'from-purple-500 via-pink-500 to-red-500';
      case 'night':
        return 'from-indigo-600 via-purple-600 to-blue-800';
      default:
        return 'from-blue-500 via-purple-500 to-pink-500';
    }
  };

  const getEmoji = () => {
    switch (timeOfDay) {
      case 'morning':
        return '☀️';
      case 'afternoon':
        return '🌤️';
      case 'evening':
        return '🌅';
      case 'night':
        return '🌙';
      default:
        return '👋';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="relative max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated background glow */}
            <div className={`absolute inset-0 bg-gradient-to-r ${getGradient()} rounded-3xl blur-xl opacity-50 animate-pulse`}></div>
            
            {/* Modal content */}
            <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 group"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6 text-gray-700 dark:text-white group-hover:rotate-90 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Gradient header */}
              <div className={`relative bg-gradient-to-r ${getGradient()} p-8 pb-12`}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: 'spring', damping: 10 }}
                  className="text-6xl mb-4 text-center"
                >
                  {getEmoji()}
                </motion.div>
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl font-bold text-white text-center mb-2"
                >
                  {greeting}!
                </motion.h2>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-white/90 text-center text-lg"
                >
                  Welcome to my portfolio
                </motion.p>
              </div>

              {/* Content */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="p-8 -mt-6"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    Thanks for stopping by! 🎉
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    I'm <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Gurpinder Singh</span>, 
                    a passionate Frontend Developer specializing in creating stunning, 
                    responsive web experiences.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Explore my work, check out my projects, and let's connect! 
                    I'm always excited to collaborate on innovative ideas.
                  </p>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        handleClose();
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`flex-1 bg-gradient-to-r ${getGradient()} text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      View My Work
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        handleClose();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Get In Touch
                    </motion.button>
                  </div>
                </div>

                {/* Fun fact section */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-blue-200 dark:border-gray-600"
                >
                  <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                    💡 <span className="font-semibold">Pro tip:</span> Scroll down to see my latest projects and skills!
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeModal;
