'use client';

import { motion } from 'framer-motion';

export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 flex flex-col items-center pt-20 md:pt-24 px-4 sm:px-6 max-w-7xl mx-auto w-full overflow-x-hidden"
    >
      {children}
    </motion.div>
  );
}
