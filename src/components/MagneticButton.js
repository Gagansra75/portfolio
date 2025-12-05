import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ 
  children, 
  className = '', 
  onClick,
  magneticStrength = 0.3,
  ...props 
}) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Apply magnetic effect
    setPosition({
      x: distanceX * magneticStrength,
      y: distanceY * magneticStrength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {/* Ripple effect on hover */}
      <motion.span
        className="absolute inset-0 bg-white/20 rounded-lg"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default MagneticButton;
