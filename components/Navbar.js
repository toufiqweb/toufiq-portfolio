'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import Magnetic from './Magnetic';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', icon: 'home' },
    { name: 'About', href: '#about', icon: 'person' },
    { name: 'Skills', href: '#skills', icon: 'code' },
    { name: 'Projects', href: '#projects', icon: 'work' },
    { name: 'Journey', href: '#journey', icon: 'auto_awesome' },
    { name: 'Contact', href: '#contact', icon: 'mail' },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 150;

          for (const link of navLinks) {
            const sectionId = link.href.substring(1);
            const element = document.getElementById(sectionId);

            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(sectionId);
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };



  return (
    <>
      <motion.header
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 z-[100] w-full max-w-7xl px-6 pointer-events-none"
      >
        <nav className="flex justify-between items-center w-full pointer-events-auto">
          {/* Left Side: Logo  */}
          <div className="flex items-center gap-6">
            <Magnetic strength={0.2}>
              <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center">
                <span className="text-4xl font-cursive text-white dark:text-on-surface light:text-primary leading-none select-none">T</span>
              </a>
            </Magnetic>


          </div>

          {/* Desktop Nav (Pill) */}
          <div className="hidden lg:flex bg-slate-950/40 dark:bg-slate-950/40 light:bg-white/10 backdrop-blur-md border border-on-surface/10 dark:border-on-surface/10 light:border-slate-200 rounded-full px-2 py-2 items-center gap-1 shadow-2xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative flex items-center gap-2 px-5 py-2 rounded-full font-medium text-xs transition-all group ${isActive ? 'text-white dark:text-on-surface light:text-primary' : 'text-slate-400 hover:text-white dark:hover:text-on-surface light:hover:text-primary'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-on-surface/10 dark:bg-on-surface/10 light:bg-primary/10 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="material-symbols-outlined text-[18px] z-10">{link.icon}</span>
                  <span className="z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Right Side Actions & Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <ThemeToggle />


            <div className="hidden md:block">
              <Magnetic strength={0.2}>
                <a
                  href="/resume.pdf"
                  download
                  className="bg-on-surface/5 dark:bg-on-surface/5 light:bg-slate-200 border border-on-surface/10 dark:border-on-surface/10 light:border-slate-300 px-4 py-2 rounded-lg text-white dark:text-on-surface light:text-slate-900 text-sm hover:border-primary-container/50 hover:bg-on-surface/10 transition-all active:scale-95 flex items-center gap-2 shadow-lg"
                >
                  <span className="material-symbols-outlined text-sm">download</span>
                  Resume
                </a>
              </Magnetic>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 bg-on-surface/5 dark:bg-on-surface/5 light:bg-white border border-on-surface/10 dark:border-on-surface/10 light:border-slate-200 text-white dark:text-on-surface light:text-slate-900 z-[110]"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-current rounded-full"
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 90% 5%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-slate-950/95 dark:bg-slate-950/95 light:bg-on-surface/95 backdrop-blur-xl z-[90] flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-4xl font-bold tracking-tight transition-all hover:text-primary ${activeSection === link.href.substring(1) ? 'text-primary' : 'text-slate-400'
                      }`}
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-8 flex flex-col gap-4 items-center"
              >
                <a
                  href="/resume.pdf"
                  download
                  className="bg-primary text-on-primary px-12 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/20"
                >
                  Resume
                </a>

              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
