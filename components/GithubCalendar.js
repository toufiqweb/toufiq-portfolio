'use client';

import { useEffect, useRef, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaFire, FaCodeBranch, FaHistory } from 'react-icons/fa';
import { useGithubStats } from '@/hooks/useGithubStats';
import { useTheme } from '@/components/ThemeProvider';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const GithubCalendar = ({ username = "toufiqweb" }) => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const ctx = gsap.context(() => {
      // Animated glowing border effect on scroll
      gsap.fromTo(
        cardRef.current,
        { boxShadow: '0 0 0px rgba(255, 87, 51, 0)' },
        {
          boxShadow: '0 0 40px rgba(255, 87, 51, 0.15)',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const { theme: siteTheme } = useTheme();
  const { streak, totalContributions, publicRepos, loading: statsLoading, error: statsError } = useGithubStats(username);

  const dynamicStats = [
    {
      label: 'Current Streak',
      value: statsLoading ? '---' : `${streak} Days`,
      icon: <FaFire className="text-orange-500" />
    },
    {
      label: 'Total Contributions',
      value: statsLoading ? '---' : `${totalContributions.toLocaleString()}+`,
      icon: <FaHistory className="text-blue-500" />
    },
    {
      label: 'Open Source',
      value: statsLoading ? '---' : `${publicRepos} Repositories`,
      icon: <FaCodeBranch className="text-purple-500" />
    },
  ];

  return (
    <section
      id="github"
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 px-4 sm:px-8 overflow-hidden flex flex-col items-center"
    >
      {/* Background Blobs */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10 opacity-30" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-tertiary/10 rounded-full blur-[120px] -z-10 opacity-30" />

      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="p-2.5 bg-surface-container border border-outline/20 rounded-xl shadow-lg">
              <FaGithub className="text-2xl text-on-surface" />
            </div>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl sm:text-4xl md:text-5xl font-headline-xl text-on-surface hover:text-primary transition-colors"
            >
              GitHub <span className="text-primary glow-text">Contributions</span>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-body-lg text-on-surface/60 max-w-2xl"
          >
            My daily coding activity on GitHub. Every commit tells a story of learning and growth.
          </motion.p>
        </div>

        {/* Calendar Card */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card relative p-6 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] border border-on-surface/5 overflow-hidden group shadow-2xl w-full"
        >
          {/* Subtle animated light sweep */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {mounted ? (
              <div className="w-full overflow-x-auto pb-6 custom-scrollbar scroll-smooth">
                <div className="min-w-[720px] lg:min-w-0 lg:w-full flex justify-start lg:justify-center">
                  <GitHubCalendar
                    username={username}
                    blockSize={12}
                    blockMargin={4}
                    fontSize={13}
                    colorScheme={siteTheme}
                    theme={{
                      light: ['#ebedf0', '#39d353'],
                      dark: ['#161b22', '#39d353'],
                    }}
                  />
                </div>
              </div>
            ) : (
              <div className="h-[150px] w-full flex items-center justify-center text-on-surface/40 animate-pulse">
                Preparing calendar...
              </div>
            )}

            {/* Contribution Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full mt-8 pt-8 sm:mt-12 sm:pt-12 border-t border-on-surface/5">
              {statsError ? (
                <div className="col-span-full text-center py-4 text-error/60 text-sm">
                  Failed to load real-time stats.
                </div>
              ) : null}

              {dynamicStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex flex-col items-center sm:items-start p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-on-surface/5 hover:bg-on-surface/10 transition-all duration-300 border border-on-surface/5 hover:border-primary/20 group/stat"
                >
                  <div className="text-xl sm:text-2xl mb-2 sm:mb-3 group-hover/stat:scale-110 transition-transform duration-300">{stat.icon}</div>

                  {statsLoading ? (
                    <div className="h-8 sm:h-9 w-20 sm:w-24 bg-on-surface/10 animate-pulse rounded-lg mb-1" />
                  ) : (
                    <span className="text-2xl sm:text-3xl font-headline-xl text-on-surface mb-1">{stat.value}</span>
                  )}

                  <span className="text-[10px] sm:text-label-sm text-on-surface/40 uppercase tracking-wider">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* View on GitHub Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-on-surface/5 border border-on-surface/10 text-on-surface/60 hover:text-primary hover:border-primary/30 transition-all text-sm font-medium"
              >
                <span>View Full Profile</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile Swipe Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="flex lg:hidden items-center justify-center gap-2 mt-8 text-on-surface/40 text-sm"
        >
          <span className="material-symbols-outlined text-sm animate-bounce-x">arrow_back</span>
          <span>Scroll horizontally</span>
          <span className="material-symbols-outlined text-sm animate-bounce-x-reverse">arrow_forward</span>
        </motion.div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 87, 51, 0.15);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 87, 51, 0.3);
        }
        
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-5px); }
        }
        @keyframes bounce-x-reverse {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-x { animation: bounce-x 2s infinite; }
        .animate-bounce-x-reverse { animation: bounce-x-reverse 2s infinite; }
      `}</style>
    </section>
  );
};

export default GithubCalendar;
