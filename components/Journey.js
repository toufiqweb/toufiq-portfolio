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
        <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-surface-container-high border border-white/5 mb-4 group-hover:border-primary-container/30 transition-all shadow-lg`}>
          <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
        </div>
        <h3 className="font-headline-lg text-2xl md:text-headline-lg text-white mb-3 tracking-tight">{title}</h3>
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
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
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
      year: '18',
      title: 'The Curiosity Phase',
      icon: 'bolt',
      image: 'https://lh3.googleusercontent.com/aida/ADBb0ug55Ltlb0sVWuH62AcxZYh2PYZupLlJojC_2sPzwK56iuCWTvK1Jt7vFv0F51-ic94H-McXHk05zJ4ZJHZp60mTKJuCyILuJCl9ZrkJcID5YdexBL0xhuC43FL5axtcQDVYkleluG8yGLjtdyntxqvLBKrW1oV-jWNhD_oDSWMDHFOE_fweF1njxw2mdQuSan5QXN2XOKWnS72Mk2Y881Pwv52RA1FQDA6fwyrfjfP2ZQHJjXeFxsB_X1iwGbY3_xqcjtdNZS441Q',
      description: 'My journey began with a single question: "How does the web work?" I spent this year diving into the fundamentals of HTML, CSS, and vanilla JS, building my very first static websites and falling in love with the craft of frontend engineering.',
      align: 'left'
    },
    {
      year: '19',
      title: 'Engineering Foundation',
      icon: 'school',
      image: 'https://lh3.googleusercontent.com/aida/ADBb0uje9cBBZZGO26sgNGw02lYB7GJClaPy0o1m4F5_qDc8Vhz-UQvHt68ackOX-RPffuOA5e3za3KBYmPX7RW-JzYKotf8JDnUR1lGxugra4z_eGRc73UYBtNTgK1_4Zdbj2EfDlrLgOpox-Kwk0yAJGovAFnsTe6iYvHC8VGSFDu2C7zmQceDY4vODESgcHjjjEGpVHgPeU1jcmx4qh5-xYlzz5P_4Y1sufnaoY6A5UhCkGgajMaS0vqfXOyEhfQiLmU2SJbRS5ftSpM',
      description: 'Formalized my knowledge through Information Technology studies. Transitioned into full-stack development, mastering React, Node.js, and relational databases. This phase was about building scalable architecture and understanding the full application lifecycle.',
      align: 'right'
    },
    {
      year: '20',
      title: 'Product Builder',
      icon: 'inventory_2',
      image: 'https://lh3.googleusercontent.com/aida/ADBb0ugjzfwIDcGYU7mEXl4yR998tNBrc4-YORGfTAN5k0Y2KCxx26E8A_S9UOrmDsFZdeETocq6fevNlHwnP1wdmkgTOBZJyvnLE22p7kgj81PFgqLw7oA81nMo6mwyRIH3RrSuPn4o42CGGZaEvE5tSZSp-BwpTG2ZOyEnEpqCLFbKOFOM5v_0NFM14u3BvLbU9LS78FZXIYSApQvA-7GIg3UUGDCq7T3FRG2PG_FmhXjLwaqxHRAy-03ipKNvgQ_8lfclW4UBcq7CYw',
      description: 'Launched ThinkWave, a SaaS platform designed for idea management. I shifted my focus toward product-led growth, user experience design, and optimizing conversion funnels, bridging the gap between engineering and business strategy.',
      align: 'left'
    },
    {
      year: '26',
      title: 'AI Development',
      icon: 'psychology',
      image: 'https://lh3.googleusercontent.com/aida/ADBb0uhaGoZicpE4VTY3DS6e3L-m8t3U_OE7WDcyQ4Hk9izde2p7vPEQ8Ak21FNBcqL0t65BFJJmHHrxPPk3H2nImM7NUMAHA1RviI7DR30EqeFk7N5cjNmE4G8ClBrsUiC1TzXCl2WS_n-QdAYwPgtaXeBrtkFb8aXQ_avpfC7Wp7pyOi6rfwwEqd8siNojO3zIoIkQyj0d6fZNR_ClU4xUpBVAPJ2TFStnNuOTok9XdUYuBqW9na06KD24KFISbiTQ-HJv-a3ulxHXGQ',
      description: "Developed Devory, an AI-driven platform tailored for student projects. Integrated Large Language Models to automate documentation and project structure generation, pushing the boundaries of what's possible with generative AI in developer tooling.",
      align: 'right'
    },
    {
      year: '27',
      title: 'Scaling Vision',
      icon: 'rocket_launch',
      image: 'https://lh3.googleusercontent.com/aida/ADBb0uibDVh9xmLB9hFZeUEi8DpuQYCaUFiKkEvmCCQRltHBqNEttwU2Obk30GjxX4XvoMHyA85cqv3EuKqXiFlOlv05Q7nBjdvYtCUKblNDyj1z_iFI6eiNtcvCBlWmBq90Sh4yFsp1q49h9VP-Ras9dYHuXWxfsj1Hv1jNburXV5NT5koR-0vo8nJr3LUO3LzI5wxUX0bHMWHQP_nPYz9xgCtjFlB8cw9ds1xifYr6_hcUrj963-UDDKOwhq6gmGEY-jswBS4be4jwiRs',
      description: 'Current focus on scaling complex AI/ML systems and production-grade engineering for global users. Exploring advanced LLM orchestration, vector databases, and high-performance cloud infrastructure to build the next generation of intelligent software.',
      align: 'left'
    }
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
            className="font-headline-xl text-4xl sm:text-6xl md:text-headline-xl text-white uppercase select-none pointer-events-none absolute whitespace-nowrap tracking-[0.2em]"
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
      </div>

      {/* Timeline Section */}
      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-primary-container to-transparent shadow-[0_0_10px_var(--color-primary-container)] hidden md:block" />

        {/* Timeline Items */}
        <div className="space-y-24 md:space-y-32">
          {journeyItems.map((item, index) => (
            <TimelineItem key={item.year} {...item} delay={index * 0.15} />
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
            className="mt-8 flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 shadow-lg animate-pulse"
          >
            <div className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_var(--color-primary-container)]" />
            <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest">To Be Continued</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
