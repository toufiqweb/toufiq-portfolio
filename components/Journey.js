'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BLUR_DATA_URL } from '@/lib/blurData';
import { timeline } from '@/data/experience';

const TimelineItem = ({ year, title, description, image, icon, align = 'left', delay = 0 }) => {
  const isLeft = align === 'left';

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between group gap-8 md:gap-0">
      {/* Content Side */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full md:w-[45%] ${isLeft ? 'md:text-right md:pr-12 order-2 md:order-1' : 'md:text-left md:pl-12 order-2'}`}
      >
        <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-surface-container-high border border-on-surface/5 mb-4 group-hover:border-primary-container/30 transition-all shadow-lg`}>
          <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
        </div>
        <h3 className="font-headline-lg text-2xl md:text-headline-lg text-on-surface mb-3 tracking-tight">{title}</h3>
        <p className="themed-text font-body-md text-sm md:text-base leading-relaxed opacity-80">
          {description}
        </p>
      </motion.div>

      {/* Center Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 z-20 flex items-center justify-center order-1 md:order-2">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: delay + 0.2 }}
          className="w-6 h-6 rounded-full bg-primary-container border-4 border-slate-950 shadow-[0_0_15px_var(--color-primary-container)]"
        />
      </div>

      {/* Image Side */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full md:w-[45%] ${isLeft ? 'order-3 md:pl-12' : 'order-3 md:order-1 md:pr-12'}`}
      >
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-on-surface/10 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
          <Image
            src={image}
            alt={title}
            fill
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
};

export default function Journey() {
  return (
    <section id="journey" className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 md:py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 dotted-grid opacity-20 pointer-events-none" />
      {/* Header Section */}
      <div className="relative z-10 text-center  mb-12 md:mb-24">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-headline-md text-xs md:text-sm uppercase tracking-[0.3em] mb-6 block"
        >
          The Story So Far
        </motion.span>
        <div className="relative flex flex-col items-center justify-center mb-6 md:mb-10 px-6 overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.03, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="font-headline-xl text-4xl sm:text-6xl md:text-headline-xl text-on-surface uppercase select-none pointer-events-none absolute whitespace-nowrap tracking-[0.2em]"
          >
            JOURNEY
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline-lg text-3xl md:text-headline-lg text-on-surface relative z-10 tracking-tight"
          >
            MY<span className="text-primary"> JOURNEY</span>
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
          transition={{ delay: 0.4 }}
          className="themed-text font-body-lg text-base md:text-lg max-w-2xl mx-auto opacity-80 mt-6"
        >
          My growth as a developer, from the beginning to now—highlighting the challenges I&apos;ve overcome, the skills I&apos;ve gained, and the consistency that keeps me moving forward.
        </motion.p>
      </div>


      {/* Timeline Section */}
      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-primary-container to-transparent shadow-[0_0_10px_var(--color-primary-container)] hidden md:block" />

        {/* Timeline Items */}
        <div className="space-y-16 sm:space-y-24 md:space-y-32">
          {timeline.map((item, index) => (
            <TimelineItem key={index} {...item} delay={index * 0.15} />
          ))}
        </div>

        {/* Footer of Timeline */}
        <div className="mt-32 flex flex-col items-center justify-center">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            className="w-px h-24 bg-gradient-to-b from-primary-container to-transparent origin-top"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex items-center gap-3 px-6 py-2 rounded-full bg-on-surface/5 border border-on-surface/10 shadow-lg animate-pulse"
          >
            <div className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_var(--color-primary-container)]" />
            <span className="text-on-surface text-[10px] md:text-xs font-bold uppercase tracking-widest">To Be Continued</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
