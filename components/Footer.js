'use client';

import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Source Code', href: '#' },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* SVG Wave */}
      <svg className="w-full h-24 text-slate-950 fill-current" preserveAspectRatio="none" viewBox="0 0 1440 100">
        <path d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z"></path>
      </svg>
      
      <footer className="bg-slate-950 border-t border-on-surface/5 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 w-full max-w-7xl mx-auto gap-y-8 md:gap-md">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-on-surface uppercase tracking-tighter text-center md:text-left"
          >
            TOUFIQ — FRONTEND ENGINEER
          </motion.div>
          
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 font-inter text-xs uppercase tracking-widest">
            {socialLinks.map((link) => (
              <Magnetic key={link.name} strength={0.3}>
                <a 
                  href={link.href} 
                  className="text-slate-500 hover:text-on-surface transition-colors relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary-container transition-all duration-300 group-hover:w-full" />
                </a>
              </Magnetic>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 font-inter text-xs uppercase tracking-widest text-center md:text-right"
          >
            © 2024 TOUFIQ — FRONTEND ENGINEER
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
