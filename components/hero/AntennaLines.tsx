"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface AntennaLinesProps {
  length: number;
  strokeWidth: number;
  color: string;
}

/**
 * Sputnik-style antenna lines radiating from center
 * Four lines at 45-degree angles
 */
export function AntennaLines({ length, strokeWidth, color }: AntennaLinesProps) {
  // Four antenna lines at 45-degree angles (like Sputnik)
  const angles = [45, 135, 225, 315];

  return (
    <div className="absolute" style={{ width: length * 2, height: length * 2 }}>
      {angles.map((angle, index) => (
        <motion.div
          key={angle}
          className="absolute"
          style={{
            width: length,
            height: strokeWidth,
            top: '50%',
            left: '50%',
            transformOrigin: 'left center',
            transform: `rotate(${angle}deg)`,
            background: `linear-gradient(to right, ${color}, transparent)`,
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            delay: index * 0.1,
            duration: 0.5,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}
