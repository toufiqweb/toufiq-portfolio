'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Magnetic from './Magnetic';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show button when scrolled down 400px (roughly past hero section on most devices)
    if (latest > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100]"
        >
          <Magnetic strength={0.2}>
            <button
              onClick={scrollToTop}
              className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full  light:text-primary light:hover:text-primary bg-surface-container/60 backdrop-blur-md border border-outline/20 themed-surface-80 hover:text-primary shadow-lg hover:shadow-[0_0_20px_rgba(255,87,51,0.2)] hover:border-primary/40 transition-all duration-300"
              aria-label="Back to top"
            >
              <span className="material-symbols-outlined text-xl md:text-2xl transition-transform duration-300 group-hover:-translate-y-1">
                arrow_upward
              </span>
            </button>
          </Magnetic>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
