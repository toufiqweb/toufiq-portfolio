'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function About() {
  const revealVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2 + i * 0.1,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const skills = [
    { name: 'Web Development', icon: 'code' },            // clean dev icon
    { name: 'React & Next.js Apps', icon: 'hub' },             // component system
    { name: 'Responsive UI Design', icon: 'devices' },         // multi-device view
    { name: 'Problem Solving', icon: 'psychology' },           // thinking/logic
    { name: 'Clean Code ', icon: 'task_alt' },        // correctness/quality
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/toufiqweb' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/toufiq-alahe-dev' },
    { icon: FaDiscord, href: 'https://discord.com/users/toufiq7367' },
    { icon: MdEmail, href: 'toufiqalahe.dev@gmail.com' },
  ];

  return (
    <section id="about" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] -z-10 rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tertiary/10 blur-[120px] -z-10 rounded-full"></div>

      {/* Section Title Shell */}
      <div className='text-center mb-16 space-y-6'>
        <div className="relative flex flex-col items-center justify-center mb-6 md:mb-10 px-6 overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 0.03, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="font-headline-xl text-on-surface uppercase select-none pointer-events-none absolute whitespace-nowrap tracking-[0.2em] w-full text-center"
          >
            ABOUT ME
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline-lg text-3xl md:text-headline-lg text-on-surface relative z-10 tracking-tight"
          >
            About <span className="text-primary">Me</span>
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '3rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-primary mt-4 rounded-full relative z-10"
          />

        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-body-md md:text-body-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          A self-taught developer driven by curiosity and consistency, constantly learning and improving.
        </motion.p>
      </div>


      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Profile */}
        <div className="lg:col-span-5 relative flex justify-center order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[clamp(240px,70vw,380px)] h-[clamp(240px,70vw,380px)]"
          >
            {/* Glowing Halo */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse-slow halo-ring"></div>
            <div className="absolute inset-4 rounded-full border border-primary/30"></div>

            {/* Profile Image Wrapper */}
            <div className="absolute inset-6 sm:inset-8 rounded-full overflow-hidden border-4 border-surface shadow-2xl bg-surface-container-low">
              <Image
                src="https://i.ibb.co.com/gMVjdhp0/Whats-App-Image-2026-04-18-at-1-47-29-PM.jpg"
                alt="Portrait"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                unoptimized
              />
            </div>

            {/* Floating Tags */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: -1, ease: 'easeInOut' }}
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-surface-container-high border border-on-surface/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl shadow-xl backdrop-blur-md z-20"
            >
              <span className="font-label-sm text-[10px] sm:text-xs text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
                Web Developer
              </span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: -1, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-surface-container-high border border-on-surface/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl shadow-xl backdrop-blur-md z-20"
            >
              <span className="font-label-sm text-[10px] sm:text-xs text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_graph</span>
                Self-Taught Developer
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-7 flex flex-col gap-8 order-1 lg:order-2 text-center lg:text-left">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h3
              variants={revealVariants}
              custom={0}
              className="font-headline-lg"
            >
              Hey! I'm <span className="text-primary font-extrabold uppercase tracking-tight glow-text">TOUFIQ</span>
            </motion.h3>
            <motion.p
              variants={revealVariants}
              custom={1}
              className="font-body-md md:text-body-lg text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Self-taught Web Developer , quickly building strong skills in the MERN stack. A fast learner who turns challenges into growth and stays consistent through ongoing coding challenges on GitHub and LinkedIn. Focused on creating clean, responsive, and user-friendly web applications.

            </motion.p>
          </motion.div>

          {/* What I Do Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h4
              variants={revealVariants}
              custom={2}
              className="font-headline-md text-xs md:text-headline-md text-on-surface uppercase tracking-widest flex items-center justify-center lg:justify-start gap-3"
            >
              What I Do
              <span className="h-px w-12 bg-on-surface/10"></span>
            </motion.h4>
            <motion.div
              variants={revealVariants}
              custom={3}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-surface-container border border-on-surface/5 px-4 py-2 sm:px-5 sm:py-3 rounded-full flex items-center gap-3 hover:border-primary/50 transition-colors group cursor-default"
                >
                  <span className="material-symbols-outlined text-primary text-sm sm:text-base group-hover:scale-110 transition-transform">{skill.icon}</span>
                  <span className="font-label-sm text-[10px] sm:text-xs uppercase tracking-wider">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Connect With Me Section */}
          <div className="flex flex-col sm:flex-row items-center lg:items-end gap-8 mt-4">
            <div className="flex flex-col gap-4 items-center lg:items-start">
              <h4 className="font-label-sm text-[10px] md:text-xs text-slate-500 uppercase tracking-widest">
                Connect With Me
              </h4>

              <div className="flex gap-4">
                {socialLinks.map((link, i) => {
                  const Icon = link.icon;

                  return (
                    <Magnetic key={i} strength={0.4}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-surface-container flex items-center justify-center border border-on-surface/5 hover:border-primary/50 hover:bg-primary/5 transition-all group hover:scale-110"
                      >
                        <Icon className="text-slate-400 group-hover:text-primary transition-colors text-xl sm:text-2xl" />
                      </a>
                    </Magnetic>
                  );
                })}
              </div>
            </div>

            <div className="sm:ml-auto w-full sm:w-auto">
              <Magnetic strength={0.2}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 rounded-xl bg-gradient-to-r from-primary-container to-primary text-slate-950 font-bold text-base sm:text-lg hover:shadow-[0_0_30px_var(--color-primary-container)] transition-all duration-300 flex items-center justify-center gap-3"
                >
                  View Resume
                  <span className="material-symbols-outlined text-xl sm:text-2xl">download</span>
                </motion.button>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
