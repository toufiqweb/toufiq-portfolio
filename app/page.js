import dynamic from 'next/dynamic';
import Background from '@/components/Background';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Skills from '@/components/Skills';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';

// Dynamic imports for below-the-fold components
const Journey = dynamic(() => import('@/components/Journey'), { ssr: true });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <Navbar />

      <div className="relative z-10 flex flex-col items-center pt-20 md:pt-24 px-6 max-w-7xl mx-auto">
        <Hero />
        <Stats />
        <About />
        <TechStack />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
