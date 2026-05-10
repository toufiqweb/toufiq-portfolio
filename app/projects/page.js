'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/lib/projectsData';
import ProjectCard from '@/components/ProjectCard';
import Background from '@/components/Background';
import Footer from '@/components/Footer';

export default function AllProjectsPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Background />

      {/* Simple Header */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-6 flex justify-between items-center max-w-7xl mx-auto left-1/2 -translate-x-1/2">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-on-surface/5 border border-on-surface/10 flex items-center justify-center group-hover:bg-on-surface/10 transition-all">
            <span className="material-symbols-outlined text-on-surface">arrow_back</span>
          </div>
          <span className="text-on-surface font-headline-md text-sm uppercase tracking-widest hidden sm:block">Back to Home</span>
        </Link>
        <div className="text-4xl font-cursive text-white select-none">T</div>
        <div className="w-10 sm:w-32" /> {/* Spacer */}
      </nav>

      <section className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary-container font-headline-md text-xs md:text-sm uppercase tracking-[0.3em] mb-6 block"
          >
            Portfolio
          </motion.span>

          <div className="relative flex flex-col items-center justify-center mb-8 overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.03, scale: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="font-headline-xl text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-on-surface uppercase select-none pointer-events-none absolute whitespace-nowrap tracking-[0.2em]"
            >
              PROJECTS
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-headline-lg text-3xl md:text-6xl text-on-surface relative z-10 tracking-tight"
            >
              ALL <span className="bg-gradient-to-r from-primary-container to-tertiary-container bg-clip-text text-transparent">WORKS</span>
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '4rem' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-primary-container mt-4 rounded-full relative z-10 shadow-[0_0_10px_var(--color-primary-container)]"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 font-body-lg text-base md:text-lg max-w-2xl mx-auto opacity-80 mt-6"
          >
            Explore my complete collection of projects, from full-stack applications to creative frontend experiments. Each piece represents a milestone in my development journey.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Back to Home Button at bottom */}
        <div className="flex justify-center mt-20">
          <Link
            href="/"
            className="group relative flex items-center gap-3 px-8 py-4 bg-on-surface/5 border border-on-surface/10 rounded-full hover:bg-on-surface/10 transition-all duration-300"
          >
            <span className="material-symbols-outlined text-primary-container group-hover:-translate-x-1 transition-transform rotate-180">arrow_forward</span>
            <span className="text-on-surface font-headline-md text-sm uppercase tracking-widest">Back to Overview</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
