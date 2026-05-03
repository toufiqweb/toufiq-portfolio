'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function AmbientGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 300 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const background = useTransform(
    [x, y],
    ([latestX, latestY]) => `radial-gradient(600px circle at ${latestX}px ${latestY}px, rgba(255, 87, 51, 0.08), transparent 80%)`
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background }}
    />
  );
}
