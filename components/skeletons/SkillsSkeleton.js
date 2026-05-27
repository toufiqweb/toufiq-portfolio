'use client';

import SkeletonLoader from '@/components/SkeletonLoader';

const SkillsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="relative overflow-hidden rounded-3xl border border-outline/20 bg-surface-container/40 backdrop-blur-xl p-8 flex flex-col h-full"
        >
          {/* Top Info */}
          <div className="flex justify-between items-start mb-10">
            {/* Icon */}
            <SkeletonLoader height={54} width={54} borderRadius={16} />
            {/* Tag */}
            <SkeletonLoader height={24} width={60} borderRadius={12} />
          </div>

          {/* Title */}
          <div className="mb-3">
            <SkeletonLoader height={24} width="70%" borderRadius={6} />
          </div>

          {/* Description */}
          <div className="space-y-2 mb-6">
            <SkeletonLoader count={2} height={14} width="100%" borderRadius={4} />
            <SkeletonLoader height={14} width="60%" borderRadius={4} />
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-outline/10 mb-6" />

          {/* List items */}
          <div className="space-y-4">
            {[1, 2, 3, 4].map((j) => (
              <div key={j} className="flex items-center gap-3">
                <SkeletonLoader circle height={8} width={8} />
                <SkeletonLoader height={14} width="50%" borderRadius={4} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSkeleton;
