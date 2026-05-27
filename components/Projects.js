'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import { useState, useEffect } from 'react';
import ProjectCardSkeleton from './skeletons/ProjectCardSkeleton';

export default function Projects() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="projects" className="relative w-full max-w-7xl mx-auto px-6 py-24 md:py-32 overflow-hidden">


      {/* Section Header */}
      <div className="text-center mb-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary-container font-headline-md text-xs md:text-sm uppercase tracking-[0.3em] mb-6 block"
        >
          Selected Works
        </motion.span>

        <div className="relative flex flex-col items-center justify-center mb-8 overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.03, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="font-headline-xl text-4xl sm:text-6xl md:text-headline-xl text-on-surface uppercase select-none pointer-events-none absolute whitespace-nowrap tracking-[0.2em]"
          >
            PROJECTS
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline-lg text-3xl md:text-headline-lg text-on-surface relative z-10 tracking-tight"
          >
            MY <span className="bg-gradient-to-r from-primary-container to-tertiary-container bg-clip-text text-transparent">PROJECTS</span>
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '4rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-primary-container mt-4 rounded-full relative z-10 shadow-[0_0_10px_var(--color-primary-container)]"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="themed-text font-body-lg text-base md:text-lg max-w-2xl mx-auto opacity-80 mt-6"
        >
          A collection of projects where I apply my skills to build real-world applications. Each project reflects my learning, creativity, and focus on user-friendly design and performance.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {!isMounted ? (
          // Skeleton grid during initial mount
          Array(3).fill(0).map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))
        ) : (
          projects.slice(0, 6).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))
        )}
      </div>

      {/* CTA Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center mt-20"
      >
        <Link
          href="/projects"
          className="group relative flex items-center gap-3 px-8 py-4 bg-on-surface/5 border border-on-surface/10 rounded-full hover:bg-on-surface/10 transition-all duration-300"
        >
          <span className="text-on-surface font-headline-md text-sm uppercase tracking-widest">View All Projects</span>
          <span className="material-symbols-outlined text-primary-container group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </Link>
      </motion.div>
    </section>
  );
}

