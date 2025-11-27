import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 z-50"
      style={{ width: `${progress}%` }}
      initial={{ width: 0 }}
      transition={{ type: 'tween', duration: 0.3 }}
    />
  );
};

export default ProgressBar;
