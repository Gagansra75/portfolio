import React from 'react';
import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';

const ScrollReveal = ({ 
  children, 
  animation = 'fade',
  duration = 0.6,
  delay = 0,
  className = ''
}) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1, triggerOnce: true });

  const animations = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    fadeUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    fadeDown: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    blur: {
      hidden: { opacity: 0, filter: 'blur(10px)' },
      visible: { opacity: 1, filter: 'blur(0px)' },
    },
    blurUp: {
      hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
      visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.8, y: 50 },
      visible: { opacity: 1, scale: 1, y: 0 },
    },
  };

  const selectedAnimation = animations[animation] || animations.fadeUp;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={selectedAnimation}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
