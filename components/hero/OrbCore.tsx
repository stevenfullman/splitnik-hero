"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface OrbCoreProps {
  size: number;
  color: string;
  glowIntensity?: number;  // 0 to 1
  pulseEnabled?: boolean;
}

/**
 * Glowing orb core component with pulse animation
 * Represents the central Sputnik satellite in Concept A
 */
export function OrbCore({
  size,
  color,
  glowIntensity = 0.6,
  pulseEnabled = true
}: OrbCoreProps) {
  const prefersReducedMotion = useReducedMotion();

  // Disable pulse if user prefers reduced motion
  const shouldPulse = pulseEnabled && !prefersReducedMotion;

  return (
    <motion.div
      className="relative rounded-full"
      style={{
        width: size,
        height: size,
      }}
      animate={shouldPulse ? {
        scale: [1, 1.05, 1],
        opacity: [0.8, 1, 0.8],
      } : undefined}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Outer glow (largest, most diffuse) */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
          transform: 'scale(3)',
          filter: 'blur(40px)',
        }}
      />

      {/* Middle glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, ${color}60 0%, transparent 60%)`,
          transform: 'scale(2)',
          filter: 'blur(20px)',
        }}
      />

      {/* Inner glow (brightest) */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, ${color}90 0%, ${color}40 50%, transparent 70%)`,
          filter: 'blur(8px)',
        }}
      />

      {/* Core (solid center) */}
      <div
        className="absolute rounded-full"
        style={{
          width: size * 0.3,
          height: size * 0.3,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: `radial-gradient(circle, white 0%, ${color} 100%)`,
          boxShadow: `0 0 20px ${color}, 0 0 40px ${color}80`,
        }}
      />
    </motion.div>
  );
}
