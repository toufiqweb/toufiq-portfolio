import dynamic from 'next/dynamic';
import Background from '@/components/Background';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SectionReveal from '@/components/SectionReveal';
import Stats from '@/components/Stats';
import PageWrapper from '@/components/PageWrapper';

// Skeleton fallbacks for dynamic components
import ProfileSkeleton from '@/components/skeletons/ProfileSkeleton';
import SkillsSkeleton from '@/components/skeletons/SkillsSkeleton';
import JourneySkeleton from '@/components/skeletons/JourneySkeleton';
import ProjectCardSkeleton from '@/components/skeletons/ProjectCardSkeleton';
import TechCardSkeleton from '@/components/skeletons/TechCardSkeleton';

// Optimized dynamic imports for below-the-fold sections
const About = dynamic(() => import('@/components/About'), {
  ssr: true,
  loading: () => <ProfileSkeleton />
});

const TechStack = dynamic(() => import('@/components/TechStack'), {
  ssr: true,
  loading: () => (
    <div className="py-20 flex flex-wrap justify-center gap-6">
      <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
        {Array(8).fill(0).map((_, i) => <TechCardSkeleton key={i} />)}
      </div>
    </div>
  )
});

const Skills = dynamic(() => import('@/components/Skills'), {
  ssr: true,
  loading: () => <SkillsSkeleton />
});

const Projects = dynamic(() => import('@/components/Projects'), {
  ssr: true,
  loading: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array(3).fill(0).map((_, i) => <ProjectCardSkeleton key={i} />)}
    </div>
  )
});

const Journey = dynamic(() => import('@/components/Journey'), {
  ssr: true,
  loading: () => <JourneySkeleton />
});

const GithubCalendar = dynamic(() => import('@/components/GithubCalendar'), {
  ssr: true,
  loading: () => (
    <div className="h-[120px] w-full flex items-center justify-center themed-surface-40 animate-pulse text-sm">
      Loading contribution data...
    </div>
  )
});

const Contact = dynamic(() => import('@/components/Contact'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <Navbar />

      <PageWrapper>
        <Hero />
        
        <SectionReveal delay={0.2}>
          <Stats />
        </SectionReveal>

        <SectionReveal delay={0.3}>
          <About />
        </SectionReveal>

        <SectionReveal delay={0.4}>
          <TechStack />
        </SectionReveal>

        <SectionReveal delay={0.4}>
          <Skills />
        </SectionReveal>

        <SectionReveal delay={0.5}>
          <Projects />
        </SectionReveal>

        <SectionReveal delay={0.5}>
          <Journey />
        </SectionReveal>

        <SectionReveal delay={0.6}>
          <GithubCalendar />
        </SectionReveal>

        <SectionReveal delay={0.7}>
          <Contact />
        </SectionReveal>
      </PageWrapper>

      <Footer />
    </main>
  );
}
