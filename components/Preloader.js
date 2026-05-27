'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const keywords = ['DESIGN', 'DEVELOP', 'INNOVATE', 'OPTIMIZE', 'SOLVE'];

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';
    document.documentElement.classList.add('lenis-stopped');

    // Smooth percentage ticking
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Natural variable increments to simulate actual loading
      const increment = Math.floor(Math.random() * 8) + 4;
      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(currentProgress);

      if (currentProgress === 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsComplete(true);
          // Restore scrolling after exit animation finishes
          setTimeout(() => {
            document.body.style.overflow = '';
            document.documentElement.classList.remove('lenis-stopped');
          }, 800);
        }, 600);
      }
    }, 80);

    // Dynamic keyword cycler
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % keywords.length);
    }, 300);

    return () => {
      clearInterval(interval);
      clearInterval(wordInterval);
      document.body.style.overflow = '';
      document.documentElement.classList.remove('lenis-stopped');
    };
  }, []);

  // SVG parameters for the sleek loader ring
  const radius = 50;
  const stroke = 3;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence mode="wait">
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background text-on-surface select-none overflow-hidden"
        >
          {/* Subtle tech background grid pattern */}
          <div className="absolute inset-0 stars-overlay opacity-30 pointer-events-none" />
          
          {/* Glowing particle-like mesh details */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-tertiary/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

          <div className="relative flex flex-col items-center justify-center">
            {/* Concentric Decorative Rings */}
            <div className="absolute w-[200px] h-[200px] rounded-full border border-outline/5 animate-ring-rotate opacity-20 pointer-events-none" />
            <div className="absolute w-[240px] h-[240px] rounded-full border border-outline/5 border-dashed animate-ring-rotate-reverse opacity-10 pointer-events-none" />

            {/* Circular Progress Gauge */}
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg className="absolute transform -rotate-90 w-full h-full">
                {/* Track circle */}
                <circle
                  stroke="currentColor"
                  fill="transparent"
                  strokeWidth={stroke / 2}
                  r={normalizedRadius}
                  cx={72}
                  cy={72}
                  className="text-outline/10"
                />
                {/* Glowing progress circle */}
                <motion.circle
                  stroke="var(--color-primary)"
                  fill="transparent"
                  strokeWidth={stroke}
                  strokeDasharray={circumference + ' ' + circumference}
                  style={{ strokeDashoffset }}
                  r={normalizedRadius}
                  cx={72}
                  cy={72}
                  strokeLinecap="round"
                  transition={{ ease: 'easeOut', duration: 0.1 }}
                  className="drop-shadow-[0_0_8px_rgba(255,87,51,0.5)]"
                />
              </svg>

              {/* Display Signature 'T' watermarked inside */}
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-cursive text-primary glow-text select-none"
              >
                T
              </motion.span>
            </div>

            {/* Counter Numeric Display */}
            <div className="mt-8 flex flex-col items-center gap-2 z-10">
              <div className="flex items-baseline font-label-sm text-4xl font-extrabold tracking-tight">
                <span className="text-on-surface">
                  {progress.toString().padStart(3, '0')}
                </span>
                <span className="text-primary text-lg ml-0.5">%</span>
              </div>

              {/* Cycling keywords */}
              <div className="h-6 overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.8 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="text-xs uppercase tracking-[0.4em] font-semibold text-tertiary"
                  >
                    {keywords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Underlay slide effect for premium curtain feel */}
          <motion.div
            initial={{ scaleY: 1 }}
            exit={{
              scaleY: 0,
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }
            }}
            style={{ transformOrigin: 'top' }}
            className="absolute inset-0 bg-surface-container-lowest -z-10 pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
