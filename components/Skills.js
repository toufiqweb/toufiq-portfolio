'use client';

import { motion } from 'framer-motion';

const expertiseData = [
  {
    title: 'Frontend Development',
    icon: 'code',
    tag: 'CORE',
    color: 'blue',
    description:
      'Building responsive and interactive web interfaces with modern frontend technologies and clean architecture.',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript'],
  },
  {
    title: 'Backend Development',
    icon: 'dns',
    tag: 'CORE',
    color: 'emerald',
    description:
      'Building secure, scalable, and efficient server-side applications and REST APIs.',
    items: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Authentication ',
    ],
  },
  {
    title: 'UI / UX Design',
    icon: 'palette',
    tag: 'UI',
    color: 'orange',
    description:
      'Creating smooth, responsive, and user-focused interfaces with reusable components and modern UI practices.',
    items: [
      'Responsive Design',
      'Reusable Components',
      'Animations',
      'Accessibility',
    ],
  },

  {
    title: 'Tools & Workflow',
    icon: 'settings',
    tag: 'TOOLS',
    color: 'red',
    description:
      'Using modern development tools and workflows for efficient development and deployment.',
    items: ['Git & GitHub', 'VS Code', 'Figma', 'Vercel'],
  },
];

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
      className="w-full max-w-7xl mx-auto px-6 py-20 md:py-32"
    >
      {/* Header */}
      <div className="text-center mb-16 space-y-6">
        <div className="relative flex flex-col items-center justify-center overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.03, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="absolute text-5xl md:text-7xl font-black uppercase tracking-[0.25em] text-white whitespace-nowrap pointer-events-none"
          >
            MY Skills
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-3xl md:text-5xl font-bold text-white"
          >
            My <span className="text-primary-container">Skills</span>
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 rounded-full bg-primary-container mt-5 shadow-[0_0_12px_var(--color-primary-container)]"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-slate-400 leading-relaxed text-sm md:text-base"
        >
          I enjoy building modern web applications with clean UI,
          responsive design, and scalable architecture while continuously
          learning new technologies.
        </motion.p>
      </div>

      {/* Bento Grid */}
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
              className={`group relative overflow-hidden rounded-3xl border border-white/10 
  bg-gradient-to-b from-white/[0.04] to-white/[0.01] 
  backdrop-blur-xl p-8 transition-all duration-500
  hover:border-white/20 hover:bg-white/[0.05]
  ${styles.shadow}`}
            >
              {/* Animated Glow */}
              <div
                className={`absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-all duration-500 ${styles.glow}`}
              />

              {/* Grid Overlay */}

              {/* Top */}
              <div className="relative z-10 flex items-start justify-between mb-10">
                {/* Icon */}
                <div
                  className={`relative flex justify-center p-2 items-center rounded-2xl border backdrop-blur-md transition-all duration-300 group-hover:scale-110 ${styles.iconBg}`}
                >
                  <div className="absolute inset-0 rounded-2xl bg-white/5 " />

                  <span
                    className={`relative material-symbols-outlined text-3xl ${styles.iconText}`}
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {item.icon}
                  </span>
                </div>

                {/* Tag */}
                <span
                  className={`text-[10px] md:text-[11px] px-3 py-1.5 rounded-full border uppercase tracking-[0.2em] font-medium backdrop-blur-md ${styles.tag}`}
                >
                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl line-clamp-1 group-hover:line-clamp-none font-semibold text-white mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                  {item.title}
                </h3>

                <p className="text-sm line-clamp-3 group-hover:line-clamp-none leading-relaxed text-slate-400 mb-8">
                  {item.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent mb-6" />

                {/* Skills */}
                <ul className="space-y-4">
                  {item.items.map((skill) => (
                    <li
                      key={skill}
                      className="group/item flex items-center justify-between text-sm text-slate-300"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-2 h-2 rounded-full shadow-[0_0_10px] ${styles.dot}`}
                        />

                        <span className="group-hover/item:text-white transition-colors duration-300">
                          {skill}
                        </span>
                      </div>

                      <span className="opacity-0 translate-x-3 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-xs text-slate-500">
                        →
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Blur */}
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/[0.03] to-transparent pointer-events-none" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}