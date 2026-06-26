'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: 'cyan' | 'blue' | 'purple' | 'none';
}

export function GlassCard({ children, className = '', hover = true, glow = 'none' }: GlassCardProps) {
  const glowClass = glow === 'cyan' ? 'hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]' :
    glow === 'blue' ? 'hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]' :
    glow === 'purple' ? 'hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]' : '';

  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.3 }}
      className={`relative rounded-2xl glass overflow-hidden ${glowClass} transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
