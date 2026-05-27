'use client';

import SkeletonLoader from '@/components/SkeletonLoader';

const BlogCardSkeleton = () => {
  return (
    <div className="bg-surface-container/30 backdrop-blur-xl border border-on-surface/5 rounded-[2rem] p-6 flex flex-col h-full relative overflow-hidden">
      {/* Cover Image Skeleton */}
      <div className="relative rounded-xl overflow-hidden mb-6 aspect-video">
        <SkeletonLoader height="100%" width="100%" />
      </div>

      {/* Date & Category */}
      <div className="flex gap-4 mb-3">
        <SkeletonLoader height={12} width={60} borderRadius={4} />
        <SkeletonLoader height={12} width={80} borderRadius={4} />
      </div>

      {/* Title */}
      <div className="mb-3">
        <SkeletonLoader height={24} width="90%" borderRadius={6} />
      </div>

      {/* Excerpt */}
      <div className="space-y-2 mb-6">
        <SkeletonLoader count={2} height={14} width="100%" borderRadius={4} />
      </div>

      {/* Author/Footer */}
      <div className="mt-auto pt-4 border-t border-on-surface/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <SkeletonLoader circle height={28} width={28} />
          <SkeletonLoader height={12} width={80} borderRadius={4} />
        </div>
        <SkeletonLoader height={14} width={50} borderRadius={4} />
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
