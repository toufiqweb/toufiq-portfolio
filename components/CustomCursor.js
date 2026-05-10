'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  const moveCursor = useCallback((e) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    
    // Use closest to check for interactive elements efficiently
    const target = e.target;
    if (target) {
      const isInteractive = target.closest('a, button, [role="button"], .cursor-pointer');
      setIsPointer(!!isInteractive);
    }
  }, [cursorX, cursorY]);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch(window.matchMedia('(pointer: coarse)').matches);
    };
    
    checkTouch();

    if (!window.matchMedia('(pointer: coarse)').matches) {
      window.addEventListener('mousemove', moveCursor, { passive: true });
    }
    
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [moveCursor]);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-primary-container/30 rounded-full pointer-events-none z-[9999] blur-md will-change-transform"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          scale: isPointer ? 2 : 1,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary-container rounded-full pointer-events-none z-[9999] will-change-transform"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}
