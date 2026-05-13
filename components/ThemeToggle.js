'use client';

import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import Magnetic from './Magnetic';

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-on-surface/5 border border-on-surface/10 opacity-50" />
    );
  }

  return (
    <Magnetic strength={0.3}>
      <button
        onClick={toggleTheme}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-on-surface/5 dark:bg-on-surface/5 light:bg-slate-100 border border-on-surface/10 dark:border-on-surface/10 light:border-slate-200 themed-text hover:text-primary transition-colors duration-300"
        aria-label="Toggle Theme"
      >
        <motion.span
          key={theme} // Triggers re-animation when theme changes
          initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="material-symbols-outlined text-xl"
        >
          {theme === 'dark' ? 'light_mode' : 'dark_mode'}
        </motion.span>
      </button>
    </Magnetic>
  );
}
