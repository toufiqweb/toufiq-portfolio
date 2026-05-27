'use client';

import SkeletonLoader from '@/components/SkeletonLoader';

const JourneySkeleton = () => {
  return (
    <div className="relative">
      {/* Center Line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-outline/10 hidden md:block" />

      <div className="space-y-16 sm:space-y-24 md:space-y-32">
        {[1, 2].map((i) => {
          const isLeft = i % 2 !== 0;
          return (
            <div key={i} className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
              {/* Content Side */}
              <div className={`w-full md:w-[45%] flex flex-col ${isLeft ? 'md:items-end md:text-right order-2 md:order-1' : 'md:items-start md:text-left order-2'}`}>
                {/* Icon box */}
                <div className="mb-4">
                  <SkeletonLoader height={48} width={48} borderRadius={12} />
                </div>
                {/* Title */}
                <div className="mb-3 w-3/4">
                  <SkeletonLoader height={28} width="100%" borderRadius={8} />
                </div>
                {/* Description */}
                <div className="w-full space-y-2">
                  <SkeletonLoader count={3} height={14} width="100%" borderRadius={4} />
                </div>
              </div>

              {/* Center Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 z-20 flex items-center justify-center order-1 md:order-2">
                <SkeletonLoader circle height={24} width={24} />
              </div>

              {/* Image Side */}
              <div className={`w-full md:w-[45%] ${isLeft ? 'order-3 md:pl-12' : 'order-3 md:order-1 md:pr-12'}`}>
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-on-surface/10">
                  <SkeletonLoader height="100%" width="100%" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JourneySkeleton;
