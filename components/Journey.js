'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, description, image, icon, align = 'left', delay = 0 }) => {
  const isLeft = align === 'left';

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between group gap-8 md:gap-0">
      {/* Content Side */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full md:w-[45%] ${isLeft ? 'md:text-right md:pr-12 order-2 md:order-1' : 'md:text-left md:pl-12 order-2'}`}
      >
        <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-surface-container-high border border-on-surface/5 mb-4 group-hover:border-primary-container/30 transition-all shadow-lg`}>
          <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
        </div>
        <h3 className="font-headline-lg text-2xl md:text-headline-lg text-on-surface mb-3 tracking-tight">{title}</h3>
        <p className="text-slate-400 font-body-md text-sm md:text-base leading-relaxed opacity-80">
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
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full md:w-[45%] ${isLeft ? 'order-3 md:pl-12' : 'order-3 md:order-1 md:pr-12'}`}
      >
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-on-surface/10 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
};

export default function Journey() {
  const journeyItems = [
    {

      title: 'Curiosity to Commitment',
      icon: 'explore',
      image: 'https://i.ibb.co.com/chYrb0mX/file-00000000af00720894a50c454fc49a67.png',
      description: 'Everything started with curiosity. I began exploring what web development is and how websites actually work. While learning HTML & CSS, I realized it’s not just about writing code — it’s about turning ideas into real products. In the beginning, I struggled with basic structure, layout, and responsiveness. I got stuck many times, but gradually, the concepts became clearer.',
      align: 'left'
    },
    {

      title: 'Struggle & Discipline',
      icon: 'fitness_center',
      image: 'https://i.ibb.co.com/xqxF3qHc/file-000000002ce47208b1e97bf1850bf5e2.png',
      description: 'This was the toughest phase. When I started JavaScript, everything felt confusing. Building logic, working with the DOM, and fixing bugs — I failed repeatedly. But this is where I made a decision: I wouldn’t quit, and I would code every single day. I started the 100 Days Coding Challenge on GitHub, which completely transformed my discipline.',
      align: 'right'
    },
    {

      title: 'Confidence Building',
      icon: 'trending_up',
      image: 'https://i.ibb.co.com/N03dj3t/file-00000000b8e471fabef8c703bb12abc6.png',
      description: 'Once I became more comfortable with JavaScript, my confidence started to grow.I began building small projects on my own — interactive UI and simple apps. That’s when the mindset shifted to: I can do this. I also started using Tailwind CSS to create more modern UI designs.',
      align: 'left'
    },
    {

      title: 'Entering the React Ecosystem',
      icon: 'hub',
      image: 'https://i.ibb.co.com/HpYnDC8z/file-00000000eb7471fabe9b3313d8e98a4b.png',
      description: "In this phase, I took my frontend skills to the next level. Learning React introduced a completely new way of thinking — component-based architecture. Understanding props, state, and reusable components took time, but once it clicked, everything changed. I also started learning Next.js and explored routing, performance, and SSR concepts. ",
      align: 'right'
    },
    {

      title: 'Full-Stack Exploration',
      icon: 'dns',
      image: 'https://i.ibb.co.com/LXNd40FX/Picsart-26-05-08-15-13-45-157-jpg.jpg',
      description: 'I transitioned from frontend to backend development.I started building APIs using Node.js and Express.js, and handled databases with MongoDB.The biggest challenge here was connecting frontend with backend systems.',
      align: 'left'
    },
    {

      title: 'Growth, Consistency & Professional Mindset',
      icon: 'auto_graph',
      image: 'https://i.ibb.co.com/q3QGdXFy/file-00000000493071fab2db641e60297dae.png',
      description: "Now I’m not just “learning code” — I’m growing as a developer. I continue my 100 Days Coding Challenge on LinkedIn. My focus has shifted beyond just skills — towards clean code, user experience, and long-term consistency.",
      align: 'right'
    },
  ];

  return (
    <section id="journey" className="relative w-full max-w-7xl mx-auto px-6 py-24 md:py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 dotted-grid opacity-20 pointer-events-none" />

      {/* Header Section */}
      <div className="relative z-10 text-center mb-24 md:mb-32">
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
            MY JOURNEY
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline-lg text-3xl md:text-headline-lg text-on-surface relative z-10 tracking-tight"
          >
            MY <span className="text-primary">JOURNEY</span>
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
          className="text-slate-400 font-body-lg text-base md:text-lg max-w-2xl mx-auto opacity-80 mt-6"
        >
          My growth as a developer, from the beginning to now—highlighting the challenges I’ve overcome, the skills I’ve gained, and the consistency that keeps me moving forward.
        </motion.p>
      </div>

      {/* Timeline Section */}
      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-primary-container to-transparent shadow-[0_0_10px_var(--color-primary-container)] hidden md:block" />

        {/* Timeline Items */}
        <div className="space-y-24 md:space-y-32">
          {journeyItems.map((item, index) => (
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
