"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { NoiseTexture } from './NoiseTexture';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { sizing } from '@/lib/design-tokens';

interface HeroVisualGradientProps {
  className?: string;
  variant?: 'teal' | 'violet' | 'mixed';  // Color scheme options
  showGrid?: boolean;
  interactive?: boolean;  // Mouse-follow spotlight effect
}

/**
 * Concept B: The Gradient Mesh
 * A simpler but equally premium gradient background with teal-to-violet colors,
 * subtle noise texture, and optional grid pattern
 */
export function HeroVisualGradient({
  className,
  variant = 'mixed',
  showGrid = true,
  interactive = true,
}: HeroVisualGradientProps) {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');

  // Responsive sizing
  const containerHeight = isMobile
    ? sizing.hero.height.mobile
    : isTablet
    ? sizing.hero.height.tablet
    : sizing.hero.height.desktop;

  // Track mouse position for interactive spotlight
  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);

    return () => container?.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  // Gradient configurations
  const gradients = {
    teal: {
      primary: 'rgba(34, 211, 238, 0.4)',    // accent-400
      secondary: 'rgba(6, 182, 212, 0.2)',    // accent-500
    },
    violet: {
      primary: 'rgba(139, 92, 246, 0.4)',     // violet-500
      secondary: 'rgba(124, 58, 237, 0.2)',   // violet-600
    },
    mixed: {
      primary: 'rgba(34, 211, 238, 0.4)',     // teal
      secondary: 'rgba(139, 92, 246, 0.3)',   // violet
    },
  };

  const colors = gradients[variant];

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        height: containerHeight,
      }}
      aria-hidden="true"
    >
      {/* Base dark background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: '#09090b',
        }}
      />

      {/* Primary gradient blob (top-right) */}
      <motion.div
        className="absolute"
        style={{
          width: '60%',
          height: '60%',
          top: '-10%',
          right: '-10%',
          background: `radial-gradient(ellipse at center, ${colors.primary} 0%, transparent 70%)`,
          filter: 'blur(80px)',
        }}
        animate={prefersReducedMotion ? undefined : {
          x: [0, 20, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary gradient blob (bottom-left) */}
      <motion.div
        className="absolute"
        style={{
          width: '50%',
          height: '50%',
          bottom: '-10%',
          left: '-10%',
          background: `radial-gradient(ellipse at center, ${colors.secondary} 0%, transparent 70%)`,
          filter: 'blur(80px)',
        }}
        animate={prefersReducedMotion ? undefined : {
          x: [0, -15, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Interactive spotlight (follows mouse) */}
      {interactive && !isMobile && (
        <div
          className="absolute pointer-events-none"
          style={{
            width: '40%',
            height: '40%',
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(ellipse at center, ${colors.primary} 0%, transparent 60%)`,
            filter: 'blur(60px)',
            opacity: 0.5,
            transition: 'left 0.3s ease-out, top 0.3s ease-out',
          }}
        />
      )}

      {/* Grid overlay */}
      {showGrid && <GridOverlay />}

      {/* Noise texture */}
      <NoiseTexture opacity={0.04} />

      {/* Vignette (darkens edges) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(9, 9, 11, 0.8) 100%)',
        }}
      />
    </div>
  );
}

/**
 * Grid pattern overlay component
 */
function GridOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
      }}
    />
  );
}
