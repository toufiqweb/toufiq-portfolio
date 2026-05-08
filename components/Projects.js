'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import { projects } from '@/lib/projectsData';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-surface-container/40 backdrop-blur-xl border border-on-surface/10 rounded-2xl p-6 glow-border hover:border-primary-container/30 transition-all duration-500 flex flex-col h-full"
    >
      {/* Project Image — clicking navigates to detail page */}
      <Link href={`/projects/${project.id}`} className="block">
        <div className="relative rounded-xl overflow-hidden mb-6 aspect-video cursor-pointer">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
            <span className="text-on-surface font-headline-md text-xs tracking-widest uppercase glow-text">
              View Project Details
            </span>
          </div>
        </div>
      </Link>

      {/* Project Info */}
      <div className="flex justify-between items-start mb-3">
        <Link href={`/projects/${project.id}`}>
          <h3 className="font-headline-lg line-clamp-1 text-xl md:text-2xl text-on-surface tracking-tight group-hover:text-primary-container transition-colors duration-300">
            {project.title}
          </h3>
        </Link>
        <div className="flex gap-4 text-slate-400">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-container transition-colors duration-300"
            aria-label="View Code"
          >
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>code</span>
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-container transition-colors duration-300"
            aria-label="Open Project"
          >
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>open_in_new</span>
          </a>
        </div>
      </div>

      <div className="flex gap-2 py-2 uppercase mb-4">
        {project.tech.map((item, i) => (
          <div key={i}>
            <Magnetic strength={0.2}>
              <span className="bg-on-surface/5 border border-on-surface/10 px-3 py-2 rounded-xl text-on-surface text-xs hover:border-primary-container/50 hover:bg-on-surface/10 transition-all active:scale-95 shadow-sm">
                {item}
              </span>
            </Magnetic>
          </div>
        ))}
      </div>

      <p className="text-slate-400 font-body-md text-sm md:text-base leading-relaxed opacity-80 line-clamp-3 mb-6">
        {project.description}
      </p>

      <div className="mt-auto pt-4 border-t border-on-surface/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_var(--color-primary-container)]" />
          <div className="text-[10px] text-slate-500 uppercase tracking-widest">Active Production</div>
        </div>
        <Link
          href={`/projects/${project.id}`}
          className="text-[11px] text-primary-container uppercase tracking-widest hover:opacity-80 transition-opacity flex items-center gap-1"
        >
          Details
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="relative w-full max-w-7xl mx-auto px-6 py-24 md:py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-container/10 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-tertiary-container/10 blur-[120px] -z-10 rounded-full" />

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
          className="text-slate-400 font-body-lg text-base md:text-lg max-w-2xl mx-auto opacity-80 mt-6"
        >
          A collection of projects where I apply my skills to build real-world applications. Each project reflects my learning, creativity, and focus on user-friendly design and performance.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* CTA Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center mt-20"
      >
        <a
          href="https://github.com/toufiqweb"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 px-8 py-4 bg-on-surface/5 border border-on-surface/10 rounded-full hover:bg-on-surface/10 transition-all duration-300"
        >
          <span className="text-on-surface font-headline-md text-sm uppercase tracking-widest">View All on GitHub</span>
          <span className="material-symbols-outlined text-primary-container group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </a>
      </motion.div>
    </section>
  );
}
