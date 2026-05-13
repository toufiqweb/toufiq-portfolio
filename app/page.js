import dynamic from 'next/dynamic';
import Background from '@/components/Background';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SectionReveal from '@/components/SectionReveal';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Skills from '@/components/Skills';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import PageWrapper from '@/components/PageWrapper';

// Dynamic imports for below-the-fold components
const Journey = dynamic(() => import('@/components/Journey'), { ssr: true });
const GithubCalendar = dynamic(() => import('@/components/GithubCalendar'), { ssr: true });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
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
