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
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    const ctx = gsap.context(() => {
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

    return () => {
      ctx.revert();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { theme: siteTheme } = useTheme();
  const {
    streak,
    totalContributions,
    publicRepos,
    loading: statsLoading,
    error: statsError,
  } = useGithubStats(username);

  // Responsive calendar block sizes
  const getCalendarProps = () => {
    if (windowWidth < 400) return { blockSize: 7, blockMargin: 2, fontSize: 9 };
    if (windowWidth < 480) return { blockSize: 8, blockMargin: 2, fontSize: 10 };
    if (windowWidth < 640) return { blockSize: 9, blockMargin: 2, fontSize: 11 };
    if (windowWidth < 768) return { blockSize: 10, blockMargin: 3, fontSize: 11 };
    if (windowWidth < 1024) return { blockSize: 11, blockMargin: 3, fontSize: 12 };
    return { blockSize: 12, blockMargin: 4, fontSize: 12 };
  };

  const { blockSize, blockMargin, fontSize } = getCalendarProps();

  const dynamicStats = [
    {
      label: 'Current Streak',
      value: statsLoading ? '---' : `${streak} Days`,
      icon: <FaFire className="text-orange-500" />,
    },
    {
      label: 'Total Contributions',
      value: statsLoading ? '---' : `${totalContributions.toLocaleString()}+`,
      icon: <FaHistory className="text-blue-500" />,
    },
    {
      label: 'Open Source',
      value: statsLoading ? '---' : `${publicRepos} Repositories`,
      icon: <FaCodeBranch className="text-purple-500" />,
    },
  ];

  return (
    <section
      id="github"
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 px-4 sm:px-6 overflow-hidden flex flex-col items-center"
    >
      {/* Background blobs */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10 opacity-30" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-tertiary/10 rounded-full blur-[120px] -z-10 opacity-30" />

      <div className="w-full max-w-6xl mx-auto">
        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-5"
          >
            <div className="p-3 bg-surface-container border border-outline/20 rounded-xl shadow-lg">
              <FaGithub className="text-2xl text-on-surface" />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-headline-xl text-on-surface leading-tight">
              GitHub <span className="text-primary glow-text">Contributions</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base themed-surface-60 max-w-2xl px-2 leading-relaxed"
          >
            My daily coding activity on GitHub. Every commit tells a story of learning and growth.
          </motion.p>
        </div>

        {/* ── Calendar Card ── */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card relative p-4 sm:p-8 md:p-10 rounded-3xl sm:rounded-[3rem] border border-on-surface/5 overflow-hidden group shadow-2xl w-full"
        >
          {/* Hover light sweep */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center w-full">

            {/* Calendar */}
            <div className="w-full pb-6">
              {mounted ? (
                <div className="github-cal-wrapper max-w-[320px]  sm:max-w-[380px]  md:max-w-[576px] lg:max-w-[720px] xl:max-w-full mx-auto overflow-x-auto">
                  <div className="github-cal-inner">
                    <GitHubCalendar
                      username={username}
                      blockSize={blockSize}
                      blockMargin={blockMargin}
                      fontSize={fontSize}
                      colorScheme={siteTheme}
                      theme={{
                        light: ['#ebedf0', '#39d353'],
                        dark: ['#161b22', '#39d353'],
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="h-[120px] w-full flex items-center justify-center themed-surface-40 animate-pulse text-sm">
                  Loading contribution data...
                </div>
              )}
            </div>

            {/* ── Stats grid ── */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 w-full mt-8 pt-8 border-t border-on-surface/5">
              {statsError && (
                <div className="col-span-full text-center py-4 text-error/60 text-xs">
                  Failed to load real-time stats.
                </div>
              )}

              {dynamicStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 overflow-hidden  p-4 sm:p-5 rounded-2xl bg-on-surface/5 hover:bg-on-surface/10 transition-all duration-300 border border-on-surface/5 hover:border-primary/20 group/stat"
                >
                  <div className="text-2xl group-hover/stat:scale-110 transition-transform duration-300 flex-shrink-0">
                    {stat.icon}
                  </div>
                  <div className="flex flex-col min-w-0">
                    {statsLoading ? (
                      <div className="h-6 w-24 bg-on-surface/10 animate-pulse rounded-lg mb-1" />
                    ) : (
                      <span className="text-lg sm:text-xl font-headline-xl text-on-surface leading-none mb-1 truncate">
                        {stat.value}
                      </span>
                    )}
                    <span className="text-[10px] text-xs lg:text-sm xl:text-md  themed-surface-40 uppercase tracking-widest font-medium">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ── View on GitHub button ── */}
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
                className="flex items-center gap-2 px-7 py-3 rounded-full bg-on-surface/5 border border-on-surface/10 themed-surface-60 hover:text-primary hover:border-primary/30 transition-all text-xs sm:text-sm font-semibold tracking-wide"
              >
                <span>View Full Profile</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        /* Scrollable wrapper on tiny screens */
        .github-cal-wrapper {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 87, 51, 0.2) transparent;
        }
        .github-cal-wrapper::-webkit-scrollbar { height: 5px; }
        .github-cal-wrapper::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .github-cal-wrapper::-webkit-scrollbar-thumb {
          background: rgba(255, 87, 51, 0.2);
          border-radius: 10px;
        }
        .github-cal-wrapper::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 87, 51, 0.4);
        }

        /* Let the calendar scale naturally inside the wrapper */
        .github-cal-inner {
          display: flex;
          justify-content: center;
          width: 100%;
          min-width: 0;
        }
        .github-cal-inner > * {
          max-width: 100%;
        }
      `}</style>
    </section>
  );
};

export default GithubCalendar;
