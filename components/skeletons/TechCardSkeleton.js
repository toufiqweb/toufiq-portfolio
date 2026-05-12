'use client';

import SkeletonLoader from '@/components/SkeletonLoader';

const TechCardSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-[70px] sm:w-[80px] md:w-[100px]">
      {/* Circle Skeleton */}
      <div className="relative w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[85px] md:h-[85px] rounded-full">
        <SkeletonLoader circle height="100%" width="100%" />
      </div>
      {/* Label Skeleton */}
      <SkeletonLoader height={14} width={50} borderRadius={4} />
    </div>
  );
};

export default TechCardSkeleton;
