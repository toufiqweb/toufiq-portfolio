'use client';

import { motion } from 'framer-motion';
import {
  SiJavascript, SiReact, SiNextdotjs,
  SiNodedotjs, SiExpress, SiMongodb,
  SiTailwindcss, SiGit, SiHtml5, SiCss,
  SiGithub, SiVercel, SiNetlify, SiFigma,

} from "react-icons/si";
import { VscVscode } from 'react-icons/vsc';
import { useState, useEffect } from 'react';
import TechCardSkeleton from './skeletons/TechCardSkeleton';
import Magnetic from './Magnetic';

const technologiesRow1 = [
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'currentColor' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#43853D' },
  { name: 'Express.js', icon: SiExpress, color: 'currentColor' },
];

const technologiesRow2 = [
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: 'currentColor' },
  { name: 'Vercel', icon: SiVercel, color: 'currentColor' },
  { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'VS Code', icon: VscVscode, color: '#007ACC' },

];

const TechCard = ({ tech, index }) => {
  const Icon = tech.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="group relative flex flex-col items-center justify-center gap-3 w-[70px] sm:w-[80px] md:w-[100px]"
    >
      {/* Circle Container */}
      <div className="relative w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[85px] md:h-[85px] rounded-full flex items-center justify-center bg-surface-container/50 backdrop-blur-sm border border-outline/10 transition-all duration-300 group-hover:border-outline/20 group-hover:bg-surface-container-high shadow-lg">

        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 pointer-events-none"
          style={{ backgroundColor: tech.color === 'currentColor' ? 'var(--color-on-surface)' : tech.color }}
        />

        {/* Icon Floating Animation */}
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{
            duration: 3 + (index % 2), // varied duration for natural feel
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative z-10"
        >
          <Icon
            size={36}
            color={tech.color === 'currentColor' ? undefined : tech.color}
            className={`w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 transition-transform duration-300 ${tech.color === 'currentColor' ? 'text-on-surface' : ''}`}
            style={{ filter: tech.color !== 'currentColor' ? `drop-shadow(0 0 8px ${tech.color}40)` : 'drop-shadow(0 0 8px rgba(150,150,150,0.2))' }}
          />
        </motion.div>
      </div>

      {/* Label */}
      <span className="text-[10px] sm:text-[11px] md:text-[13px] font-medium themed-surface-70 group-hover:text-on-surface transition-colors duration-300 text-center">
        {tech.name}
      </span>

    </motion.div>
  );
};

export default function TechStack() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="tech-stack" className="relative w-full py-20 md:py-32 overflow-hidden">


      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="relative z-10 text-center  mb-12 md:mb-24">
          <div className="relative flex flex-col items-center justify-center mb-6 md:mb-10 px-6 overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.03, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="font-headline-xl text-4xl sm:text-6xl md:text-headline-xl text-on-surface uppercase select-none pointer-events-none absolute whitespace-nowrap tracking-[0.2em]"
            >
              TECHNOLOGIES
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline-lg text-3xl md:text-headline-lg text-on-surface relative z-10 tracking-tight"
            >
              TECHNO<span className="text-primary">LOGIES</span>
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
            className="font-body-md md:text-body-lg themed-text max-w-2xl mx-auto leading-relaxed"
          >
            Technologies I use to build fast, scalable, and user-friendly web applications.
          </motion.p>
        </div>

        <div className="flex flex-col items-center gap-8 md:gap-10">
          {/* Top Row */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            {!isMounted ? (
              Array(8).fill(0).map((_, i) => <TechCardSkeleton key={i} />)
            ) : (
              technologiesRow1.map((tech, index) => (
                <Magnetic key={tech.name} strength={0.3}>
                  <TechCard tech={tech} index={index} />
                </Magnetic>
              ))
            )}
          </div>

          {/* Bottom Row */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            {!isMounted ? (
              Array(7).fill(0).map((_, i) => <TechCardSkeleton key={i} />)
            ) : (
              technologiesRow2.map((tech, index) => (
                <Magnetic key={tech.name} strength={0.3}>
                  <TechCard tech={tech} index={index + 8} />
                </Magnetic>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
