'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    if (!window.matchMedia('(pointer: coarse)').matches) {
      window.addEventListener('mousemove', moveCursor);
    }
    
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-primary-container/30 rounded-full pointer-events-none z-[9999] blur-md"
        style={{
          x: x,
          y: y,
          translateX: '-50%',
          translateY: '-50%',
          scale: isPointer ? 2 : 1,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary-container rounded-full pointer-events-none z-[9999]"
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
