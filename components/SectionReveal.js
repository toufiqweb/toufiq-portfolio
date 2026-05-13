'use client';

import { motion } from 'framer-motion';

/**
 * Reusable component for smooth scroll-triggered reveal animations.
 */
const SectionReveal = ({ children, delay = 0, y = 30, x = 0, scale = 1, duration = 0.8, className = "" }) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: y, 
        x: x, 
        scale: scale 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: x, 
        scale: 1 
      }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;
