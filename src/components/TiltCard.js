import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltCard = ({ 
  children, 
  className = '',
  tiltMaxAngle = 15,
  scale = 1.05,
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltMaxAngle, -tiltMaxAngle]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltMaxAngle, tiltMaxAngle]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      animate={{
        scale: isHovered ? scale : 1,
      }}
      transition={{
        scale: {
          type: 'spring',
          stiffness: 300,
          damping: 20,
        },
      }}
      className={`relative ${className}`}
      {...props}
    >
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl"
        style={{
          background: isHovered
            ? `radial-gradient(circle at ${(x.get() + 0.5) * 100}% ${(y.get() + 0.5) * 100}%, rgba(255,255,255,0.3) 0%, transparent 60%)`
            : 'transparent',
        }}
      />

      {/* Content with 3D depth */}
      <div
        style={{
          transform: 'translateZ(50px)',
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </div>

      {/* Shadow layer for depth */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-xl bg-black/20 blur-xl"
        animate={{
          opacity: isHovered ? 0.5 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          duration: 0.3,
        }}
      />
    </motion.div>
  );
};

export default TiltCard;
