'use client';

import { motion } from 'framer-motion';
import { expertiseData } from '@/data/skills';


const colorClasses = {
  blue: {
    glow: 'bg-blue-500/10',
    border: 'hover:border-blue-500/40',
    shadow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
    iconBg: 'bg-blue-500/10 border border-blue-500/20',
    iconText: 'text-blue-400',
    tag: 'bg-blue-500/15 text-blue-300 border border-blue-500/30',
    dot: 'bg-blue-400',
  },

  emerald: {
    glow: 'bg-emerald-500/10',
    border: 'hover:border-emerald-500/40',
    shadow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
    iconBg: 'bg-emerald-500/10 border border-emerald-500/20',
    iconText: 'text-emerald-400',
    tag: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30',
    dot: 'bg-emerald-400',
  },

  red: {
    glow: 'bg-rose-500/10',
    border: 'hover:border-rose-500/40',
    shadow: 'hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]',
    iconBg: 'bg-rose-500/10 border border-rose-500/20',
    iconText: 'text-rose-400',
    tag: 'bg-rose-500/15 text-rose-300 border border-rose-500/30',
    dot: 'bg-rose-400',
  },

  orange: {
    glow: 'bg-amber-500/10',
    border: 'hover:border-amber-500/40',
    shadow: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]',
    iconBg: 'bg-amber-500/10 border border-amber-500/20',
    iconText: 'text-amber-400',
    tag: 'bg-amber-500/15 text-amber-300 border border-amber-500/30',
    dot: 'bg-amber-400',
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32 overflow-hidden"
    >
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
            Skills
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline-lg text-3xl md:text-headline-lg text-on-surface relative z-10 tracking-tight"
          >
            My<span className="text-primary"> Skills</span>
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
          I enjoy building modern web applications with clean UI, responsive design,
          and scalable architecture while continuously learning new technologies.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {expertiseData.map((item, index) => {
          const styles = colorClasses[item.color];

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className={`group relative overflow-hidden rounded-3xl border border-outline/20 
              bg-surface-container/40 backdrop-blur-xl p-8 transition-all duration-500
              hover:border-outline/40 hover:bg-surface-container/60
              ${styles.shadow}`}
            >
              {/* Glow */}
              <div
                className={`absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-all duration-500 ${styles.glow}`}
              />

              {/* Top */}
              <div className="relative z-10 flex items-start justify-between mb-10">

                {/* Icon */}
                <div
                  className={`p-3 flex justify-center items-center rounded-2xl border border-outline/20 backdrop-blur-md transition-all duration-300 group-hover:scale-110 ${styles.iconBg}`}
                >
                  <span
                    className={`material-symbols-outlined text-3xl ${styles.iconText}`}
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {item.icon}
                  </span>
                </div>

                {/* Tag */}
                <span
                  className={`text-[10px] px-3 py-1.5 rounded-full border uppercase tracking-[0.2em] font-medium backdrop-blur-md ${styles.tag}`}
                >
                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl line-clamp-1 group-hover:line-clamp-none font-semibold text-on-surface mb-3">
                  {item.title}
                </h3>

                <p className="text-sm line-clamp-3 group-hover:line-clamp-none themed-surface-60 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-outline/10 mb-6" />

                {/* Skills */}
                <ul className="space-y-3">
                  {item.items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center justify-between text-sm themed-surface-70 group/item"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-2 h-2 rounded-full shadow-[0_0_10px] ${styles.dot}`}
                        />
                        <span className="group-hover/item:text-on-surface transition-colors">
                          {skill}
                        </span>
                      </div>

                      <span className="opacity-0 translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-primary">
                        →
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Fade */}
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}