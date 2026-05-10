'use client';

import { ReactLenis } from 'lenis/react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Sync ScrollTrigger with Lenis
    const update = (time) => {
      ScrollTrigger.update();
    };

    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root options={{ 
      lerp: 0.1, 
      duration: 1.2, 
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      normalizeWheel: true
    }}>
      {children}
    </ReactLenis>
  );
}
