'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGithubStats } from '@/hooks/useGithubStats';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const StatCard = ({ label, value, suffix = '', isText = false, index }) => {
  const numberRef = useRef(null);

  useEffect(() => {
    if (!numberRef.current || isText) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        numberRef.current,
        { innerText: 0 },
        {
          innerText: value,
          duration: 2,
          snap: { innerText: 1 },
          ease: 'power2.out',
          scrollTrigger: {
            trigger: numberRef.current,
            start: 'top 95%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, [value, isText]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut',
      }}
      whileHover={{ y: -10 }}
      className="p-6 md:p-8 rounded-2xl bg-surface-container border border-outline/10 transition-all duration-300 flex flex-col items-center justify-center text-center h-full hover:border-primary-container hover:bg-surface-container-high hover:shadow-[0_10px_30px_-10px_var(--color-primary-container)] gpu"
    >
      <span className="themed-surface-50 font-label-sm uppercase text-[10px] md:text-xs tracking-widest mb-2">
        {label}
      </span>

      <div
        className={`font-headline-lg text-on-surface flex items-center justify-center flex-wrap gap-1 will-change-transform ${isText ? 'text-lg md:text-xl lg:text-2xl' : 'text-3xl md:text-headline-lg'
          }`}
      >
        {isText ? (
          <span>{value}</span>
        ) : (
          <span ref={numberRef}>{value}</span>
        )}

        {suffix && (
          <span className="text-lg md:text-2xl themed-surface-80">
            {suffix}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default function StatsClient() {
  const username = "toufiqweb";

  const {
    streak,
    totalContributions,
    publicRepos,
    loading,
  } = useGithubStats(username);

  // Only stats logic changed — UI untouched
  const stats = [
    {
      label: 'Journey Started',
      value: '2025',
      isText: true,
    },
    {
      label: 'Projects Built',
      value: 12,
      suffix: '+',
    },
    {
      label: 'Total Contributions',
      value: loading ? 0 : totalContributions,
      suffix: '+',
    },
    {
      label: 'Public Repos',
      value: loading ? 0 : publicRepos,
      suffix: '',
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto mb-xl px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-stretch">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} index={index} />
        ))}
      </div>
    </section>
  );
}