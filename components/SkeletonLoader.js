'use client';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useTheme } from '@/components/ThemeProvider';

/**
 * Reusable Skeleton Loader component that automatically syncs with the site theme.
 * @param {object} props - Props for react-loading-skeleton
 */
const SkeletonLoader = (props) => {
  const { theme } = useTheme();

  // Define colors based on the current theme
  const baseColor = theme === 'dark' ? '#1E293B' : '#e2e8f0';
  const highlightColor = theme === 'dark' ? '#2d3449' : '#cbd5e1';

  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      <Skeleton {...props} />
    </SkeletonTheme>
  );
};

export default SkeletonLoader;
