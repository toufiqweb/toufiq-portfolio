'use client';

import SkeletonLoader from '@/components/SkeletonLoader';

const ProfileSkeleton = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
      {/* Left Column: Avatar */}
      <div className="lg:col-span-5 relative flex justify-center">
        <div className="relative w-[clamp(240px,70vw,380px)] h-[clamp(240px,70vw,380px)]">
          <SkeletonLoader circle height="100%" width="100%" />
        </div>
      </div>

      {/* Right Column: Bio details */}
      <div className="lg:col-span-7 flex flex-col gap-6 text-left">
        <div>
          <SkeletonLoader height={16} width={120} borderRadius={4} className="mb-3" />
          <SkeletonLoader height={38} width={280} borderRadius={8} className="mb-4" />
          <SkeletonLoader count={4} height={16} width="100%" borderRadius={4} className="mb-2" />
        </div>

        <div className="w-full h-px bg-outline/10 my-2" />

        <div className="flex flex-wrap gap-3">
          {[1, 2, 3].map((i) => (
            <SkeletonLoader key={i} height={38} width={120} borderRadius={12} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
