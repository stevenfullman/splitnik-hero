"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface OrbitalRingProps {
  width: number;
  height: number;
  strokeColor: string;
  glowColor?: string;
  rotationDuration: number;  // seconds for full rotation
  particleCount: number;
  isWinner?: boolean;
}

/**
 * Orbital ring with rotating particles
 * Represents experiment variants orbiting the core
 */
export function OrbitalRing({
  width,
  height,
  strokeColor,
  glowColor,
  rotationDuration,
  particleCount,
  isWinner = false,
}: OrbitalRingProps) {
  const prefersReducedMotion = useReducedMotion();

  // Generate particle positions along the ellipse
  const particles = Array.from({ length: particleCount }, (_, i) => {
    const angle = (i / particleCount) * Math.PI * 2;
    return {
      id: i,
      initialAngle: angle,
    };
  });

  return (
    <div
      className="absolute"
      style={{
        width,
        height,
      }}
    >
      {/* The orbital path (SVG ellipse) */}
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="absolute top-0 left-0"
        style={{
          transform: 'rotateX(60deg)',  // Tilt to create 3D perspective
        }}
      >
        {/* Glow filter for winner ring */}
        {isWinner && (
          <defs>
            <filter id={`glow-${width}`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        )}

        {/* The ellipse path */}
        <ellipse
          cx={width / 2}
          cy={height / 2}
          rx={(width / 2) - 2}
          ry={(height / 2) - 2}
          fill="none"
          stroke={strokeColor}
          strokeWidth={isWinner ? 2 : 1}
          filter={isWinner ? `url(#glow-${width})` : undefined}
        />
      </svg>

      {/* Rotating particles container */}
      <motion.div
        className="absolute inset-0"
        style={{
          transform: 'rotateX(60deg)',
        }}
        animate={prefersReducedMotion ? undefined : {
          rotate: 360,
        }}
        transition={{
          duration: rotationDuration,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            containerWidth={width}
            containerHeight={height}
            initialAngle={particle.initialAngle}
            isWinner={isWinner}
          />
        ))}
      </motion.div>
    </div>
  );
}

// Individual particle component
interface ParticleProps {
  containerWidth: number;
  containerHeight: number;
  initialAngle: number;
  isWinner: boolean;
}

function Particle({
  containerWidth,
  containerHeight,
  initialAngle,
  isWinner
}: ParticleProps) {
  const prefersReducedMotion = useReducedMotion();

  // Calculate position on ellipse
  const rx = (containerWidth / 2) - 2;
  const ry = (containerHeight / 2) - 2;
  const x = containerWidth / 2 + rx * Math.cos(initialAngle);
  const y = containerHeight / 2 + ry * Math.sin(initialAngle);

  const size = isWinner ? 6 : 4;
  const color = isWinner ? '#22d3ee' : 'rgba(255, 255, 255, 0.6)';

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: x - size / 2,
        top: y - size / 2,
        backgroundColor: color,
        boxShadow: isWinner ? `0 0 10px ${color}, 0 0 20px ${color}` : undefined,
      }}
      animate={isWinner && !prefersReducedMotion ? {
        scale: [1, 1.3, 1],
        opacity: [0.8, 1, 0.8],
      } : undefined}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}
