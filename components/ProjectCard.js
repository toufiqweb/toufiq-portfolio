'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className="group bg-surface-container/30 backdrop-blur-xl border border-on-surface/5 rounded-[2rem] p-6 hover:border-primary/20 transition-all duration-500 flex flex-col h-full relative overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/5"
    >
      {/* Light Sweep Effect */}
      <div className="absolute inset-0 bg-linear-to-tr from-primary/5 via-transparent to-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
      {/* Project Image — clicking navigates to detail page */}
      <Link href={`/projects/${project.id}`} className="block">
        <div className="relative rounded-xl overflow-hidden mb-6 aspect-video cursor-pointer">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-20 group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
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
        <div className="flex gap-4 themed-text">
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

      <div className="flex gap-4 py-2 flex-wrap  uppercase mb-4">
        {project.tech.map((item, i) => (
          <div key={i}>
            <Magnetic strength={0.2}>
              <span className="bg-on-surface/5 border border-on-surface/10 px-3  py-2 rounded-xl text-on-surface text-xs hover:border-primary-container/50 hover:bg-on-surface/10 transition-all active:scale-95 shadow-sm">
                {item}
              </span>
            </Magnetic>
          </div>
        ))}
      </div>

      <p className="themed-text font-body-md text-sm md:text-base leading-relaxed opacity-80 line-clamp-3 mb-6">
        {project.description}
      </p>

      <div className="mt-auto pt-4 border-t border-on-surface/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_var(--color-primary-container)]" />
          <div className="text-[10px] themed-text-muted uppercase tracking-widest">Active Production</div>
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

export default ProjectCard;
