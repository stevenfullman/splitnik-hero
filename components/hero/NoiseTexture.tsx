"use client";

import React, { useEffect, useRef } from 'react';

interface NoiseTextureProps {
  opacity?: number;
}

/**
 * Canvas-based noise texture overlay
 * Creates a subtle grain effect for premium aesthetic
 */
export function NoiseTexture({ opacity = 0.03 }: NoiseTextureProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 200;
    canvas.height = 200;

    // Generate noise pattern
    const imageData = ctx.createImageData(200, 200);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const value = Math.random() * 255;
      data[i] = value;     // R
      data[i + 1] = value; // G
      data[i + 2] = value; // B
      data[i + 3] = 255;   // A
    }

    ctx.putImageData(imageData, 0, 0);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        opacity,
        mixBlendMode: 'overlay',
        imageRendering: 'pixelated',
      }}
    />
  );
}

/**
 * CSS-based noise texture (alternative implementation)
 * No canvas required, uses SVG filter
 */
export function NoiseTextureCSS({ opacity = 0.03 }: NoiseTextureProps) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        mixBlendMode: 'overlay',
      }}
    />
  );
}
