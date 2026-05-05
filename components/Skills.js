'use client';

import { motion } from 'framer-motion';

const SkillItem = ({ name, level, icon, color }) => (
  <div className="space-y-3">
    <div className="flex justify-between items-center text-sm">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-sm" style={{ color }}>{icon}</span>
        <span className="font-label-sm text-[10px] md:text-xs text-on-surface uppercase tracking-wider">{name}</span>
      </div>
      <span className="text-primary-container font-bold text-xs">{level}%</span>
    </div>
    <div className="h-1.5 w-full bg-on-surface/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="h-full bg-gradient-to-r shadow-[0_0_8px_rgba(255,87,51,0.2)]"
        style={{
          backgroundImage: `linear-gradient(to right, var(--color-primary-container), ${color})`
        }}
      />
    </div>
  </div>
);

const SkillCard = ({ title, icon, iconColor, skills, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    whileHover={{ y: -5 }}
    className="bg-surface-container rounded-2xl border border-on-surface/5 p-6 md:p-8 transition-all duration-300 hover:border-on-surface/10 hover:bg-on-surface/5 group"
  >
    <div className="flex items-center gap-3 mb-8">
      <span className="material-symbols-outlined text-2xl" style={{ color: iconColor, fontVariationSettings: "'FILL' 1" }}>
        {icon}
      </span>
      <h2 className="font-headline-md text-sm md:text-headline-md text-on-surface uppercase tracking-[0.2em]">{title}</h2>
    </div>
    <div className="space-y-6">
      {skills.map((skill) => (
        <SkillItem key={skill.name} {...skill} color={iconColor} />
      ))}
    </div>
  </motion.div>
);

export default function Skills() {
  const skillCategories = [
    {
      title: "Core Skills",
      icon: "code",
      iconColor: "var(--color-primary-container)",
      skills: [
        { name: "HTML", level: 80, icon: "html" },
        { name: "CSS", level: 82, icon: "css" },
        { name: "Tailwind", level: 85, icon: "grid_view" },
        { name: "JavaScript", level: 80, icon: "javascript" },
      ]
    },
    {
      title: "Advanced Skills",
      icon: "auto_awesome",
      iconColor: "var(--color-tertiary)",
      skills: [
        { name: "React", level: 85, icon: "deployed_code" },
        { name: "Next.js", level: 80, icon: "dynamic_feed" },
        { name: "MongoDB", level: 75, icon: "database" },
        { name: "Express JS", level: 75, icon: "api" },

      ]
    },
    {
      title: "Soft Skills",
      icon: "psychology",
      iconColor: "var(--color-secondary)",
      skills: [
        { name: "Team Collaboration", level: 82, icon: "groups" },
        { name: "Communication", level: 85, icon: "chat" },
        { name: "Problem Solving", level: 80, icon: "construction" },
        { name: "Time Management", level: 80, icon: "timer" },
        { name: "Adaptability", level: 82, icon: "sync_alt" },
      ]
    }
  ];

  return (
    <section id="skills" className="w-full max-w-7xl mx-auto px-6 py-20 md:py-32">
      <div className="text-center mb-16 space-y-6">
        {/* Section Title Shell */}
        <div className="relative flex flex-col items-center justify-center mb-6 md:mb-10 px-6 overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.03, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="font-headline-xl text-4xl sm:text-6xl md:text-headline-xl text-on-surface uppercase select-none pointer-events-none absolute whitespace-nowrap tracking-[0.2em]"
          >
            SKILLS & PROGRESS
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline-lg text-3xl md:text-headline-lg text-on-surface relative z-10 tracking-tight"
          >
            SkillS & <span className="text-primary-container">PROGRESS</span>
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
          transition={{ delay: 0.3 }}
          className="font-body-md md:text-body-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          A snapshot of my technical skills and continuous growth as a developer. I focus on mastering modern technologies while improving problem-solving and writing clean, efficient code.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <SkillCard key={category.title} {...category} delay={index * 0.15} />
        ))}
      </div>
    </section>
  );
}
