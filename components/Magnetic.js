'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Magnetic({ children, strength = 0.5 }) {
  const ref = useRef(null);
  
  // Use MotionValues to avoid React re-renders on mouse move
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { type: 'spring', stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    const targetX = (clientX - (left + width / 2)) * strength;
    const targetY = (clientY - (top + height / 2)) * strength;
    
    x.set(targetX);
    y.set(targetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}
