"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { sizing } from '@/lib/design-tokens';

interface MeshGradientProps {
  className?: string;
}

/**
 * Mesh Gradient - More Complex Alternative
 * Multiple overlapping gradient blobs for a "mesh" effect
 */
export function MeshGradient({ className }: MeshGradientProps) {
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');

  // Responsive sizing
  const containerHeight = isMobile
    ? sizing.hero.height.mobile
    : isTablet
    ? sizing.hero.height.tablet
    : sizing.hero.height.desktop;

  // Multiple overlapping gradient blobs for a "mesh" effect
  const blobs = [
    { x: '20%', y: '30%', color: 'rgba(34, 211, 238, 0.5)', size: '40%', blur: 100 },
    { x: '70%', y: '20%', color: 'rgba(139, 92, 246, 0.4)', size: '35%', blur: 80 },
    { x: '50%', y: '70%', color: 'rgba(6, 182, 212, 0.3)', size: '45%', blur: 120 },
    { x: '80%', y: '60%', color: 'rgba(124, 58, 237, 0.3)', size: '30%', blur: 90 },
    { x: '10%', y: '60%', color: 'rgba(34, 211, 238, 0.2)', size: '35%', blur: 100 },
  ];

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        height: containerHeight,
      }}
      aria-hidden="true"
    >
      {/* Base */}
      <div className="absolute inset-0 bg-zinc-950" />

      {/* Gradient blobs */}
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: blob.size,
            height: blob.size,
            left: blob.x,
            top: blob.y,
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
            filter: `blur(${blob.blur}px)`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={prefersReducedMotion ? undefined : {
            x: [0, (index % 2 === 0 ? 30 : -30), 0],
            y: [0, (index % 2 === 0 ? -20 : 20), 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
