import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add to trail
      setTrail((prevTrail) => {
        const newTrail = [...prevTrail, { x: e.clientX, y: e.clientY, id: Date.now() }];
        return newTrail.slice(-15); // Keep last 15 positions
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.style.cursor === 'pointer'
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Hide custom cursor on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Trail particles */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed pointer-events-none z-[99999] rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
          style={{
            left: point.x,
            top: point.y,
            width: 8 - index * 0.4,
            height: 8 - index * 0.4,
          }}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}

      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-[99999]"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          scale: isHidden ? 0 : isPointer ? 1.5 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-blue-500 rounded-full"
          animate={{
            scale: isPointer ? 1.5 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
        />
        
        {/* Inner dot */}
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
          animate={{
            scale: isPointer ? 0 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
        />

        {/* Glow effect */}
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-blue-400/30 to-purple-500/30 rounded-full blur-md"
          animate={{
            scale: isPointer ? 2 : 1,
            opacity: isPointer ? 0.5 : 0.3,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
