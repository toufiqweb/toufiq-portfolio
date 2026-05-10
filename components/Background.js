'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Background() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <div ref={ref} className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-background transition-colors duration-500">
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute inset-0 stars-overlay dark:opacity-100 opacity-0 transition-opacity duration-500 will-change-transform gpu"
      />
      
      <motion.div 
        style={{ y: y1 }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-primary-container/10 dark:bg-primary-container/10 light:bg-primary/5 blur-[120px] rounded-full will-change-transform gpu"
      />
      
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-tertiary/5 dark:bg-tertiary/5 light:bg-tertiary/5 blur-[150px] rounded-full will-change-transform gpu"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background dark:via-background/50 pointer-events-none" />
    </div>
  );
}
