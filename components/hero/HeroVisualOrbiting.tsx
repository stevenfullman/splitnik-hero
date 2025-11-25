"use client";

import React from 'react';
import { OrbCore } from './OrbCore';
import { OrbitalRing } from './OrbitalRing';
import { AntennaLines } from './AntennaLines';
import { NoiseTexture } from './NoiseTexture';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { sizing } from '@/lib/design-tokens';

interface HeroVisualOrbitingProps {
  className?: string;
}

/**
 * Concept A: The Orbiting Variants
 * A stylized Sputnik satellite with glowing orb center and orbital rings
 * representing experiment variants with subtle motion
 */
export function HeroVisualOrbiting({ className }: HeroVisualOrbitingProps) {
  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');

  // Scale factors based on screen size
  const scale = isMobile ? 0.5 : isTablet ? 0.75 : 1;

  // Responsive sizing
  const containerHeight = isMobile
    ? sizing.hero.height.mobile
    : isTablet
    ? sizing.hero.height.tablet
    : sizing.hero.height.desktop;

  const orbSize = isMobile
    ? sizing.orb.diameter.mobile
    : isTablet
    ? sizing.orb.diameter.tablet
    : sizing.orb.diameter.desktop;

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        height: containerHeight,
      }}
      aria-hidden="true" // Decorative element
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, #18181b 0%, #09090b 70%)',
        }}
      />

      {/* Noise texture overlay */}
      <NoiseTexture opacity={0.03} />

      {/* Orbital rings container - centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Outer ring (the "winner" - glows brighter) */}
        <OrbitalRing
          width={sizing.orbital.ring3.width * scale}
          height={sizing.orbital.ring3.height * scale}
          strokeColor="rgba(34, 211, 238, 0.4)"
          glowColor="rgba(34, 211, 238, 0.2)"
          rotationDuration={25}
          particleCount={isMobile ? 4 : 8}
          isWinner={true}
        />

        {/* Middle ring */}
        <OrbitalRing
          width={sizing.orbital.ring2.width * scale}
          height={sizing.orbital.ring2.height * scale}
          strokeColor="rgba(255, 255, 255, 0.15)"
          rotationDuration={20}
          particleCount={isMobile ? 3 : 5}
          isWinner={false}
        />

        {/* Inner ring */}
        <OrbitalRing
          width={sizing.orbital.ring1.width * scale}
          height={sizing.orbital.ring1.height * scale}
          strokeColor="rgba(255, 255, 255, 0.1)"
          rotationDuration={15}
          particleCount={3}
          isWinner={false}
        />

        {/* Central Sputnik assembly */}
        <div className="absolute flex items-center justify-center">
          {/* Antenna lines */}
          <AntennaLines
            length={sizing.antenna.length * scale}
            strokeWidth={sizing.antenna.strokeWidth}
            color="rgba(255, 255, 255, 0.6)"
          />

          {/* Glowing orb core */}
          <OrbCore
            size={orbSize}
            color="#22d3ee"
            glowIntensity={0.6}
            pulseEnabled={true}
          />
        </div>
      </div>
    </div>
  );
}
