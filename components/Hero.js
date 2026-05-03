'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Magnetic from './Magnetic';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.profile-ring', {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const revealVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5 + i * 0.1,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section id="home" ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter items-center w-full py-12 md:py-24 relative min-h-[80vh]">
      {/* Left Side: Content */}
      <div className="lg:col-span-7 flex flex-col items-center lg:items-start space-y-8 text-center lg:text-left">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-xs px-3 py-1.5 rounded-full bg-surface-container border border-outline/10"
        >
          <span className="material-symbols-outlined text-primary text-sm">location_on</span>
          <span className="text-label-sm font-label-sm text-on-surface/60 uppercase">Chuadanga, Bangladesh</span>
        </motion.div>
        
        <div className="space-y-4">
          <motion.h1 
            custom={0}
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            className="font-headline-xl text-5xl md:text-7xl lg:text-headline-xl text-on-surface leading-tight"
          >
            Hey, I'm <span className="text-primary glow-text">Toufiq</span>
          </motion.h1>
          
          <motion.div 
            custom={1}
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            className="flex items-center justify-center lg:justify-start gap-sm"
          >
            <h2 className="font-headline-md text-sm md:text-base lg:text-headline-md text-on-surface/50 uppercase tracking-[0.2em]">
              FRONTEND WEB-DEVELOPER <span className="text-primary cursor-blink">|</span>
            </h2>
          </motion.div>
          
          <motion.p 
            custom={2}
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            className="text-body-md md:text-body-lg text-on-surface/70 max-w-2xl leading-relaxed"
          >
            Crafting immersive digital experiences through precision engineering and high-performance frontend architectures. Specializing in React, Tailwind, and Design Systems.
          </motion.p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-md pt-4">
          <Magnetic strength={0.2}>
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex items-center gap-xs bg-surface-container border border-primary/30 px-8 py-4 rounded-lg text-on-surface font-bold hover:shadow-[0_0_20px_var(--color-primary)] transition-all group active:scale-95"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-tertiary shadow-[0_0_8px_var(--color-tertiary)]"></span>
              Resume
            </motion.button>
          </Magnetic>
          
          <div className="flex items-center gap-sm">
            <Magnetic strength={0.4}>
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                href="#" 
                className="w-12 h-12 flex items-center justify-center rounded-lg border border-outline/10 bg-surface-container text-on-surface/50 hover:text-primary hover:border-primary/30 transition-all"
              >
                <span className="material-symbols-outlined" data-weight="fill">code</span>
              </motion.a>
            </Magnetic>
            <Magnetic strength={0.4}>
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                href="#" 
                className="w-12 h-12 flex items-center justify-center rounded-lg border border-outline/10 bg-surface-container text-on-surface/50 hover:text-primary hover:border-primary/30 transition-all"
              >
                <span className="material-symbols-outlined">alternate_email</span>
              </motion.a>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* Right Side: Profile */}
      <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-lg md:mt-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative w-72 h-72 md:w-[450px] md:h-[450px]"
        >
          {/* Rotating Rings */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-container/20 profile-ring"></div>
          <div className="absolute inset-4 rounded-full border border-tertiary/10 profile-ring [animation-direction:reverse] [animation-duration:30s]"></div>
          
          {/* Static Rings */}
          <div className="absolute inset-0 rounded-full border-2 border-primary-container/40 halo-ring"></div>
          <div className="absolute inset-8 rounded-full border border-white/5"></div>
          
          {/* Decorative Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-container rounded-full"
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: -1,
                delay: Math.random() * 5,
              }}
              style={{
                top: `${10 + Math.random() * 80}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
            />
          ))}
          
          {/* Profile Image Wrapper */}
          <div className="absolute inset-12 rounded-full overflow-hidden border border-white/10 bg-surface-container-low shadow-2xl z-10">
            <Image 
              src="https://i.ibb.co.com/gMVjdhp0/Whats-App-Image-2026-04-18-at-1-47-29-PM.jpg"
              alt="Toufiq Profile"
              fill
              className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
              sizes="(max-width: 768px) 288px, 450px"
              priority
              unoptimized
            />
          </div>
        </motion.div>

        {/* Availability Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-12 flex items-center gap-xs px-4 py-2 rounded-full bg-tertiary-container/10 border border-tertiary/20 backdrop-blur-sm shadow-lg shadow-tertiary/5"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary shadow-[0_0_10px_var(--color-tertiary)]"></span>
          </span>
          <span className="text-label-sm font-label-sm text-tertiary uppercase tracking-widest">Available for hire</span>
        </motion.div>
      </div>
    </section>
  );
}
