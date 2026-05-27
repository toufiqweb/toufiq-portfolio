'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BLUR_DATA_URL } from '@/lib/blurData';
import { projects } from '@/lib/projectsData';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { useState, useEffect } from 'react';
import SkeletonLoader from '@/components/SkeletonLoader';

const statColor = {
  primary: 'var(--color-primary-container)',
  secondary: 'var(--color-secondary)',
  tertiary: 'var(--color-tertiary)',
};

export default function ProjectDetailClient({ id }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const project = projects.find((p) => p.id === Number(id));
  if (!project) notFound();
  const nextProject = projects.find((p) => p.id === project.nextProject);

  return (
    <main style={{ background: 'var(--color-background)', color: 'var(--color-on-surface)', overflowX: 'hidden', minHeight: '100vh' }}>
      <Navbar />

      {/* ── Back link ── */}
      <div style={{ position: 'fixed', top: '1.5rem', left: '1.5rem', zIndex: 200 }}>
        <Link href="/#projects" style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.5rem 1rem', borderRadius: '9999px',
          background: 'var(--color-surface-container)', backdropFilter: 'blur(12px)',
          border: '1px solid var(--color-outline)',
          color: 'var(--color-on-surface)', fontSize: '0.85rem',
          fontFamily: 'var(--font-space-grotesk)', textDecoration: 'none',
          transition: 'color 0.2s',
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>arrow_back</span>
          Back
        </Link>
      </div>

      {/* ═══════════════════════════════════
          HERO
      ═══════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-surface-container-lowest)]">

        {/* bg image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_right,var(--color-background)_0%,transparent_40%,var(--color-background)_100%)]" />

          <Image
            src={project.image}
            alt=""
            fill
            priority
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            sizes="100vw"
            className="object-cover opacity-25 blur-[4px] scale-110"
          />
        </div>

        {/* watermark */}
        <p
          aria-hidden
          className="absolute top-8 left-[-2%] z-0 text-[clamp(4rem,13vw,11rem)] font-extrabold leading-[0.8] tracking-[-0.05em] whitespace-nowrap text-[var(--color-primary-container)] opacity-[0.03] pointer-events-none select-none"
        >
          {project.title.toUpperCase()}
        </p>

        {/* content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-16">
          <div className="flex flex-wrap items-center gap-12">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 min-w-[280px]"
            >
              {/* badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border border-[#ff5733]/30 bg-[#ff5733]/10">
                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                <span className="text-[0.7rem] uppercase tracking-[0.15em] font-semibold text-[var(--color-primary-container)] font-[var(--font-space-grotesk)]">
                  Project Overview · {new Date().getFullYear()}
                </span>
              </div>

              {/* title */}
              <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold leading-[1] tracking-[-0.03em] mb-6 text-[var(--color-on-surface)]">
                {!isMounted ? (
                  <SkeletonLoader width="80%" height={80} borderRadius={16} />
                ) : project.title.includes('–') ? (
                  <>
                    {project.title.split('–')[0].trim()}
                    <br />
                    <span className="text-[var(--color-primary-container)]">
                      {project.title.split('–')[1].trim()}
                    </span>
                  </>
                ) : (
                  project.title
                )}
              </h1>

              {/* description */}
              <div className="mb-10">
                {!isMounted ? (
                  <SkeletonLoader count={3} height={18} width="100%" borderRadius={4} />
                ) : (
                  <p className="text-[1.1rem] leading-[1.7] text-[var(--color-on-surface-variant)] max-w-2xl">
                    {project.description}
                  </p>
                )}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[var(--color-primary)] text-[var(--color-on-primary)] font-semibold text-sm transition hover:brightness-110"
                >
                  View Live
                  <span className="material-symbols-outlined text-base">arrow_outward</span>
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-on-surface/10 bg-surface-container-high text-[var(--color-on-surface)] font-semibold text-sm transition hover:bg-on-surface/5"
                >
                  Source Code
                  <span className="material-symbols-outlined text-base">code</span>
                </a>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-[280px] shrink-0"
            >
              <div className="p-8 rounded-2xl border border-on-surface/10 shadow-2xl backdrop-blur-xl bg-surface-container/60 animate-[float_6s_ease-in-out_infinite]">

                <h3 className="text-xs uppercase tracking-[0.15em] font-semibold text-[var(--color-primary)] mb-6 pb-4 border-b border-on-surface/10 font-[var(--font-space-grotesk)]">
                  Quick Facts
                </h3>

                <div className="flex flex-col gap-5">

                  <div>
                    <div className="text-[0.65rem] uppercase tracking-[0.12em] text-[var(--color-on-surface-variant)] opacity-60 mb-1">
                      Role
                    </div>
                    <div className="text-[0.95rem] text-[var(--color-on-surface)]">
                      {project.role}
                    </div>
                  </div>

                  <div>
                    <div className="text-[0.65rem] uppercase tracking-[0.12em] text-[var(--color-on-surface-variant)] opacity-60 mb-1">
                      Timeline
                    </div>
                    <div className="text-[0.95rem] text-[var(--color-on-surface)]">
                      {project.timeline}
                    </div>
                  </div>

                  <div>
                    <div className="text-[0.65rem] uppercase tracking-[0.12em] text-[var(--color-on-surface-variant)] opacity-60 mb-2">
                      Tech Stack
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-[0.72rem] border border-on-surface/10 bg-surface-container-high text-[var(--color-on-surface)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          OVERVIEW
═══════════════════════════════════ */}
      <section className="relative overflow-hidden px-6 py-28">

        {/* vertical watermark */}
        <p
          aria-hidden
          className="absolute left-0 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] text-[clamp(3rem,8vw,6rem)] font-extrabold tracking-[0.25em] text-[var(--color-primary-container)] opacity-[0.04] select-none pointer-events-none"
        >
          OVERVIEW
        </p>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* IMAGE SECTION */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative group rounded-2xl overflow-hidden border border-on-surface/10 shadow-2xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={500}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-[320px] md:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />

              {/* subtle glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(255,87,51,0.15),transparent_60%)]" />
            </motion.div>

            {/* TEXT SECTION */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >

              {/* heading */}
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[0.9] tracking-tight">
                THE <br />
                <span className="text-[var(--color-primary-container)]">
                  OVERVIEW
                </span>
              </h2>

              {/* description */}
              <div className="space-y-4 text-[var(--color-on-surface-variant)] leading-[1.8]">
                <p className="text-[1.05rem]">
                  {project.overview}
                </p>

                <p className="text-[0.95rem] opacity-90">
                  {project.overviewDetail}
                </p>
              </div>



            </motion.div>

          </div>
        </div>
      </section>
      {/* ═══════════════════════════════════
          TECHNICAL DEEP DIVE
      ═══════════════════════════════════ */}
      <section className="relative overflow-hidden px-6 py-24 bg-[var(--color-surface-container-low)]">

        {/* background text */}
        <p
          aria-hidden
          className="absolute inset-0 text-[8vw] font-extrabold text-[var(--color-on-surface)] opacity-[0.025] rotate-[-4deg] whitespace-nowrap leading-none select-none pointer-events-none"
        >
          TECHNICAL · TECHNICAL · TECHNICAL · TECHNICAL
        </p>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-wrap gap-16">

          {/* sidebar */}
          <div className="flex-[0_1_280px] min-w-[260px]">

            <h2 className="text-2xl font-bold text-[var(--color-primary-container)] leading-tight mb-4">
              TECH <br /> HIGHLIGHTS
            </h2>

            <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed mb-6">
              Key decisions behind this project.
            </p>

            {/* tech highlights */}
            <ul className="flex flex-col gap-4 mb-8">
              {project.techHighlights.map((h, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-[var(--color-tertiary)] text-lg shrink-0">
                    check_circle
                  </span>
                  <span className="text-sm text-[var(--color-on-surface)] leading-relaxed">
                    {h}
                  </span>
                </li>
              ))}
            </ul>

            {/* stats moved here */}
            <div className="grid grid-cols-1 gap-4">
              {project.stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-2xl border border-on-surface/5 bg-surface-container/40 backdrop-blur-md"
                >
                  <div
                    className="text-2xl font-extrabold mb-1"
                    style={{
                      color: statColor[s.color] ?? "var(--color-primary-container)",
                    }}
                  >
                    {s.value}
                  </div>

                  <p className="text-[10px] uppercase tracking-[0.12em] text-[var(--color-on-surface-variant)]">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
          {/* right side */}
          <div className="flex-1 min-w-[300px]">

            {/* features card */}
            <div className="rounded-2xl border border-on-surface/10 bg-surface-container/70 backdrop-blur-xl shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">

              {/* header */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-on-surface/5">
                <div className="w-3 h-3 rounded-full bg-[var(--color-error)]" />
                <div className="w-3 h-3 rounded-full bg-[var(--color-tertiary)]" />
                <div className="w-3 h-3 rounded-full bg-[var(--color-primary-container)]" />

                <span className="ml-auto text-[10px] uppercase text-[var(--color-on-surface-variant)] opacity-50 font-mono">
                  features.jsx
                </span>
              </div>

              {/* features */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[var(--color-primary-container)] mb-4">
                  Features
                </h3>

                <ul className="space-y-3 text-sm text-[var(--color-on-surface-variant)]">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start group">
                      <span className="mt-[3px] text-[var(--color-primary-container)] transition group-hover:scale-110">
                        ✔
                      </span>
                      <span className="group-hover:text-[var(--color-on-surface)] transition">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* challenges */}
            <div className="mt-8 p-6 rounded-xl border border-on-surface/10 bg-surface-container/5 backdrop-blur-md">
              <h3 className="font-semibold mb-4 text-[var(--color-primary-container)]">
                Key Challenges Solved
              </h3>

              <ul className="space-y-2 text-sm text-[var(--color-on-surface-variant)]">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[var(--color-primary-container)]">•</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            {/* futureUpdates */}
            <div className="mt-8 p-6 rounded-xl border border-on-surface/10 bg-surface-container/5 backdrop-blur-md">
              <h3 className="font-semibold mb-4 text-[var(--color-primary-container)]">
                Future Updates
              </h3>

              <ul className="space-y-2 text-sm text-[var(--color-on-surface-variant)]">
                {project.futureUpdates.map((c, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[var(--color-primary-container)]">•</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            {/* packages (NEW) */}
            <div className="mt-8 p-6 rounded-2xl border border-on-surface/10 bg-surface-container/5 backdrop-blur-md">

              <h3 className="text-lg font-semibold text-[var(--color-primary-container)] mb-4">
                Packages Used
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.packages.map((pkg, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full border border-on-surface/10 bg-surface-container/10 text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)] hover:bg-on-surface/5 transition"
                  >
                    {pkg}
                  </span>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          INTERFACE SHOWCASE
      ═══════════════════════════════════ */}
      <section className="py-24 bg-[var(--color-surface-container-lowest)]">

        {/* heading */}
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[0.9] tracking-[-0.03em]">
            INTERFACE <br />
            <span className="text-[var(--color-primary-container)]">
              SHOWCASE
            </span>
          </h2>
        </div>

        {/* horizontal scroll */}
        <div className="flex gap-6 px-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">

          {project.showcaseImages.map((src, i) => (
            <div
              key={i}
              className="relative shrink-0 w-[min(80vw,500px)] h-[260px] md:h-[340px] rounded-3xl overflow-hidden border border-on-surface/10 snap-start group"
            >
              {/* image */}
              <Image
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                fill
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                sizes="(max-width: 768px) 80vw, 500px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-linear-to-t from-background/85 via-transparent to-transparent">

                <span className="text-[10px] uppercase tracking-[0.12em] text-[var(--color-primary-container)] font-[var(--font-space-grotesk)]">
                  Interface {String(i + 1).padStart(2, "0")}
                </span>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ═══════════════════════════════════
          NEXT PROJECT CTA
      ═══════════════════════════════════ */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[var(--color-background)]">

        {/* bg image */}
        {nextProject && (
          <Image
            src={nextProject.image}
            alt=""
            fill
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            sizes="100vw"
            className="object-cover opacity-15 grayscale"
          />
        )}

        {/* overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />

        {/* content */}
        <div className="relative z-10 text-center px-6">

          <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-primary-container)] font-[var(--font-space-grotesk)] mb-4">
            Next Project
          </p>

          <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-extrabold leading-[0.9] tracking-[-0.03em] mb-10">
            {nextProject?.title ?? "Back to Portfolio"}
          </h2>

          <Link
            href={nextProject ? `/projects/${nextProject.id}` : "/#projects"}
            scroll={true}
            className="inline-flex items-center justify-center w-22 h-22 md:w-24 md:h-24 rounded-full border border-[var(--color-primary-container)] text-[var(--color-primary-container)] transition-all duration-300 hover:bg-[var(--color-primary-container)] hover:text-white active:scale-95"
          >
            <span className="material-symbols-outlined text-3xl md:text-4xl">
              arrow_downward
            </span>
          </Link>

        </div>
      </section>

      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>
    </main>
  );
}
