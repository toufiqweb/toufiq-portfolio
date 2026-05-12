'use client';

import SkeletonLoader from '@/components/SkeletonLoader';

const ProjectCardSkeleton = () => {
  return (
    <div className="bg-surface-container/40 backdrop-blur-xl border border-on-surface/10 rounded-2xl p-6 flex flex-col h-full">
      {/* Image Skeleton */}
      <div className="relative rounded-xl overflow-hidden mb-6 aspect-video">
        <SkeletonLoader height="100%" width="100%" />
      </div>

      {/* Info Header Skeleton */}
      <div className="flex justify-between items-start mb-3">
        <SkeletonLoader height={28} width={180} borderRadius={8} />
        <div className="flex gap-4">
          <SkeletonLoader circle height={24} width={24} />
          <SkeletonLoader circle height={24} width={24} />
        </div>
      </div>

      {/* Tech Stack Skeleton */}
      <div className="flex gap-3 py-2 flex-wrap mb-4">
        {[1, 2, 3].map((i) => (
          <SkeletonLoader key={i} height={32} width={70} borderRadius={12} />
        ))}
      </div>

      {/* Description Skeleton */}
      <div className="space-y-2 mb-6">
        <SkeletonLoader count={3} height={14} width="100%" borderRadius={4} />
      </div>

      {/* Footer Skeleton */}
      <div className="mt-auto pt-4 border-t border-on-surface/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <SkeletonLoader circle height={8} width={8} />
          <SkeletonLoader height={12} width={100} borderRadius={4} />
        </div>
        <SkeletonLoader height={14} width={60} borderRadius={4} />
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;
