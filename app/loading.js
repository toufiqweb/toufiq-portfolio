'use client';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-colors duration-300">
      {/* Outer Glow Ring */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Animated Rings */}
        <div className="absolute inset-0 rounded-full border border-primary/20 border-t-primary animate-spin" style={{ animationDuration: '1s' }} />
        <div className="absolute inset-1.5 rounded-full border border-tertiary/10 border-b-tertiary animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }} />
        
        {/* Glowing Watermark/Logo */}
        <span className="text-4xl font-cursive text-primary select-none glow-text animate-pulse">
          T
        </span>
      </div>
      
      {/* Loading text */}
      <div className="mt-6 flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-semibold glow-text">
          Loading
        </span>
        <span className="text-[10px] uppercase tracking-[0.15em] themed-text-muted">
          Toufiq Alahe Portfolio
        </span>
      </div>
    </div>
  );
}
