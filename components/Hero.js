'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import Magnetic from './Magnetic';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const roles = ["WEB DEVELOPER", "FRONTEND DEVELOPER", "MERN-STACK DEVELOPER"];

export default function Hero() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const ctx = gsap.context(() => {
      // Rotating rings
      gsap.to('.ring-rotate', {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: 'linear',
      });

      gsap.to('.ring-rotate-reverse', {
        rotate: -360,
        duration: 50,
        repeat: -1,
        ease: 'linear',
      });

      // Float ONLY image container
      gsap.to(imageRef.current, {
        y: 15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ctx.revert();
    };
  }, []);



  useEffect(() => {
    const current = roles[index];
    let timeout;

    if (!isDeleting && text.length < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, 100);
    } else if (!isDeleting && text.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, 50);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

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
    <section
      id="home"
      ref={sectionRef}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter items-center w-full  py-12 md:py-20 relative min-h-screen"
    >
      {/* Left Side */}
      <div className="lg:col-span-6 flex flex-col items-center lg:items-start space-y-8 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-xs px-3 py-1.5 rounded-full bg-surface-container border border-outline/10"
        >
          <span className="material-symbols-outlined text-primary text-sm">
            location_on
          </span>
          <span className="text-label-sm font-label-sm themed-surface-60 uppercase">
            Chuadanga, Bangladesh
          </span>
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
            className="flex items-center justify-center lg:justify-start gap-sm"
          >
            <h2 className="font-headline-md text-sm md:text-base lg:text-headline-md themed-surface-50 uppercase tracking-[0.2em] flex items-center gap-2">

              <AnimatePresence mode="wait">
                <motion.span

                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {text}
                </motion.span>
              </AnimatePresence>

              <span className="text-primary cursor-blink">|</span>
            </h2>
          </motion.div>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            className="text-body-md md:text-body-lg themed-surface-70 max-w-2xl leading-relaxed"
          >
            I build fast, responsive, and immersive web experiences with a focus
            on clean UI, performance, and scalability. Using in React,
            Next.js, Tailwind CSS, and modern design systems.
          </motion.p>
        </div>

        <div className="flex flex-col items-center  justify-center lg:items-start gap-md pt-4">
          <div className="flex flex-wrap items-center gap-2">
            <Magnetic strength={0.2}>
              <motion.a
                href="#contact"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="flex items-center gap-xs bg-primary text-on-primary px-5 sm:px-6 md:px-8  py-3 sm:py-3 md:py-4 rounded-xl font-bold  shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all active:scale-95 premium-border text-sm sm:text-base" >
                Contact Me
                <span className="material-symbols-outlined text-sm">send</span>
              </motion.a>
            </Magnetic>

            <Magnetic strength={0.2}>
              <motion.a
                href="/toufiq-alahe-cv.pdf"
                download="Toufiq_Alahe_CV.pdf"
                aria-label="Download Resume"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="flex items-center gap-xs bg-surface-container border border-outline/20 px-5 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 rounded-xl text-on-surface font-bold hover:bg-on-surface/5 transition-all active:scale-95 text-sm sm:text-base cursor-pointer" >
                <span className="w-2.5 h-2.5 rounded-full bg-tertiary shadow-[0_0_8px_var(--color-tertiary)]"></span>
                Resume
              </motion.a>
            </Magnetic>
          </div>

          <div className="flex items-center gap-sm">
            {/* GitHub */}
            <Magnetic strength={0.4}>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                href="https://github.com/toufiqweb"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-lg border border-outline/10 bg-surface-container themed-surface-50 hover:text-primary hover:border-primary/30 transition-all"
              >
                <FaGithub size={20} />
              </motion.a>
            </Magnetic>

            {/* LinkedIn */}
            <Magnetic strength={0.4}>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                href="https://www.linkedin.com/in/toufiq-alahe-dev"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-lg border border-outline/10 bg-surface-container themed-surface-50 hover:text-primary hover:border-primary/30 transition-all"
              >
                <FaLinkedin size={20} />
              </motion.a>
            </Magnetic>
            {/* Gmail / Email */}
            <Magnetic strength={0.4}>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                href="mailto:toufiqalahe.dev@gmail.com"
                className="w-12 h-12 flex items-center justify-center rounded-lg border border-outline/10 bg-surface-container themed-surface-50 hover:text-primary hover:border-primary/30 transition-all"
              >
                <FaEnvelope size={20} />
              </motion.a>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="lg:col-span-6 flex flex-col items-center justify-center relative mt-lg md:mt-0 pb-20 md:pb-0">
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-[clamp(280px,75vw,450px)] h-[clamp(280px,75vw,450px)]"
        >
          <div
            className="ring-rotate absolute inset-0 rounded-full border-2 border-dashed border-primary-container/20"
            style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
          />
          <div
            className="ring-rotate-reverse absolute inset-4 rounded-full border border-tertiary/30"
            style={{ transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)` }}
          />

          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary-container/40"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.6, 0.2, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="absolute inset-8 rounded-full border border-tertiary/30 blur-[1px]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 0.5,
            }}
          />



          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute inset-12 rounded-full overflow-hidden border border-on-surface/10 bg-surface-container-low shadow-2xl z-10"
          >
            <Image
              src="https://i.ibb.co.com/mrWNYwXy/port.png"
              alt="Profile"
              fill
              priority
              unoptimized
              className="object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex items-center gap-xs px-4 py-2 rounded-full bg-tertiary-container/10 border border-tertiary/20 backdrop-blur-sm shadow-lg shadow-tertiary/5"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary shadow-[0_0_10px_var(--color-tertiary)]"></span>
          </span>
          <span className="text-label-sm text-tertiary uppercase tracking-widest">
            Available for hire
          </span>
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute -bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <div className="flex flex-col items-center gap-3">
          {/* Mouse Icon */}
          <div className="relative w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center p-1.5">
            <motion.div
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-2 rounded-full bg-primary"
            />
          </div>

          <span className="text-[10px] font-medium uppercase tracking-[0.4em] themed-surface-40 select-none">
            Scroll
          </span>

          {/* Animated Line */}
          <div className="h-12 w-px bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}