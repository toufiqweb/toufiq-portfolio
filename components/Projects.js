'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 'section-hub',
    title: 'section-hub',
    tech: 'NEXTJS • TAILWIND • FRAMERMOTION',
    description: 'A collaborative platform for developers to share and discover modular UI components.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uibDVh9xmLB9hFZeUEi8DpuQYCaUFiKkEvmCCQRltHBqNEttwU2Obk30GjxX4XvoMHyA85cqv3EuKqXiFlOlv05Q7nBjdvYtCUKblNDyj1z_iFI6eiNtcvCBlWmBq90Sh4yFsp1q49h9VP-Ras9dYHuXWxfsj1Hv1jNburXV5NT5koR-0vo8nJr3LUO3LzI5wxUX0bHMWHQP_nPYz9xgCtjFlB8cw9ds1xifYr6_hcUrj963-UDDKOwhq6gmGEY-jswBS4be4jwiRs',
    github: '#',
    live: '#'
  },
  {
    id: 'inwi-ma',
    title: 'Inwi.ma',
    tech: 'REACT • REDUX • SASS',
    description: 'Enterprise-level self-care portal redesign for one of the leading telecom providers.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ugjzfwIDcGYU7mEXl4yR998tNBrc4-YORGfTAN5k0Y2KCxx26E8A_S9UOrmDsFZdeETocq6fevNlHwnP1wdmkgTOBZJyvnLE22p7kgj81PFgqLw7oA81nMo6mwyRIH3RrSuPn4o42CGGZaEvE5tSZSp-BwpTG2ZOyEnEpqCLFbKOFOM5v_0NFM14u3BvLbU9LS78FZXIYSApQvA-7GIg3UUGDCq7T3FRG2PG_FmhXjLwaqxHRAy-03ipKNvgQ_8lfclW4UBcq7CYw',
    github: '#',
    live: '#'
  },
  {
    id: 'chat-bot',
    title: 'Chat-Bot Assistant',
    tech: 'OPENAI • TYPESCRIPT • NODEJS',
    description: 'Intelligent conversational AI integrated with custom knowledge bases for specialized support.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uhaGoZicpE4VTY3DS6e3L-m8t3U_OE7WDcyQ4Hk9izde2p7vPEQ8Ak21FNBcqL0t65BFJJmHHrxPPk3H2nImM7NUMAHA1RviI7DR30EqeFk7N5cjNmE4G8ClBrsUiC1TzXCl2WS_n-QdAYwPgtaXeBrtkFb8aXQ_avpfC7Wp7pyOi6rfwwEqd8siNojO3zIoIkQyj0d6fZNR_ClU4xUpBVAPJ2TFStnNuOTok9XdUYuBqW9na06KD24KFISbiTQ-HJv-a3ulxHXGQ',
    github: '#',
    live: '#'
  },
  {
    id: 'resume-matcher',
    title: 'Resume-Matcher',
    tech: 'PYTHON • REACT • FASTAPI',
    description: 'Smart recruitment tool using NLP to rank and match resumes against job descriptions.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ug55Ltlb0sVWuH62AcxZYh2PYZupLlJojC_2sPzwK56iuCWTvK1Jt7vFv0F51-ic94H-McXHk05zJ4ZJHZp60mTKJuCyILuJCl9ZrkJcID5YdexBL0xhuC43FL5axtcQDVYkleluG8yGLjtdyntxqvLBKrW1oV-jWNhD_oDSWMDHFOE_fweF1njxw2mdQuSan5QXN2XOKWnS72Mk2Y881Pwv52RA1FQDA6fwyrfjfP2ZQHJjXeFxsB_X1iwGbY3_xqcjtdNZS441Q',
    github: '#',
    live: '#'
  },
  {
    id: 'tor-movies',
    title: 'tor-movies',
    tech: 'VUEJS • VUETIFY • TMDB API',
    description: 'A lightweight movie discovery engine with real-time search and detailed media insights.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uje9cBBZZGO26sgNGw02lYB7GJClaPy0o1m4F5_qDc8Vhz-UQvHt68ackOX-RPffuOA5e3za3KBYmPX7RW-JzYKotf8JDnUR1lGxugra4z_eGRc73UYBtNTgK1_4Zdbj2EfDlrLgOpox-Kwk0yAJGovAFnsTe6iYvHC8VGSFDu2C7zmQceDY4vODESgcHjjjEGpVHgPeU1jcmx4qh5-xYlzz5P_4Y1sufnaoY6A5UhCkGgajMaS0vqfXOyEhfQiLmU2SJbRS5ftSpM',
    github: '#',
    live: '#'
  },
  {
    id: 'healthseo',
    title: 'HealthSEO-Auditor',
    tech: 'NEXTJS • PUPPETEER • D3.JS',
    description: 'Automated SEO auditing tool specifically designed for healthcare and medical websites.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uhljSneqrj_5BU5kvuB9cOWnaXl3Nbng958us854E84DTj1zMnXCxBvAHTxGaf8J3lQdjmnbmvgB3Fq-jdX1BWTihBZlt4jynIf5pl7dv6N0tHN_4OkdshMd4x09RTHnVKiyKnpDDrMcDdCgG7A7FsWnxXwzaCSeTPPe1Cx4hZnijwNsZ48teSmryX28viCQcO0wh6fVFjiZ4ORFLiZ2famOFmZy16GGdCb-YzE5vlwAOWuxYGA3l5raK-IiC8BVCcNV5XavG0Z4bA',
    github: '#',
    live: '#'
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-surface-container/40 backdrop-blur-xl border border-on-surface/10 rounded-2xl p-6 glow-border hover:border-primary-container/30 transition-all duration-500 flex flex-col h-full"
    >
      {/* Project Image */}
      <div className="relative rounded-xl overflow-hidden mb-6 aspect-video">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <span className="text-on-surface font-headline-md text-xs tracking-widest uppercase glow-text">View Project Details</span>
        </div>
      </div>

      {/* Project Info */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-headline-lg text-xl md:text-2xl text-on-surface tracking-tight group-hover:text-primary-container transition-colors duration-300">
          {project.title}
        </h3>
        <div className="flex gap-4 text-slate-400">
          <a
            href={project.github}
            className="hover:text-primary-container transition-colors duration-300"
            aria-label="View Code"
          >
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>code</span>
          </a>
          <a
            href={project.live}
            className="hover:text-primary-container transition-colors duration-300"
            aria-label="Open Project"
          >
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>open_in_new</span>
          </a>
        </div>
      </div>

      <div className="font-label-sm text-[10px] md:text-xs text-primary-container uppercase tracking-[0.2em] mb-4 font-bold">
        {project.tech}
      </div>

      <p className="text-slate-400 font-body-md text-sm md:text-base leading-relaxed opacity-80 line-clamp-3 mb-6">
        {project.description}
      </p>

      <div className="mt-auto pt-4 border-t border-on-surface/5 flex items-center justify-between">
        <div className="flex -space-x-2">
          {/* Mock avatars or status dots could go here */}
          <div className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_var(--color-primary-container)]" />
          <div className="ml-4 text-[10px] text-slate-500 uppercase tracking-widest">Active Production</div>
        </div>
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
          href="#"
          className="group relative flex items-center gap-3 px-8 py-4 bg-on-surface/5 border border-on-surface/10 rounded-full hover:bg-on-surface/10 transition-all duration-300"
        >
          <span className="text-on-surface font-headline-md text-sm uppercase tracking-widest">View All Projects</span>
          <span className="material-symbols-outlined text-primary-container group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </a>
      </motion.div>
    </section>
  );
}
