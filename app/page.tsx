"use client";

import { useState } from 'react';
import { HeroVisualOrbiting, HeroVisualGradient, MeshGradient } from '@/components/hero';

export default function WaitlistPage() {
  const [activeVisual, setActiveVisual] = useState<'orbiting' | 'gradient' | 'mesh'>('orbiting');

  return (
    <main className="relative min-h-screen bg-zinc-950">
      {/* Hero Visual - swap between concepts */}
      {activeVisual === 'orbiting' && (
        <HeroVisualOrbiting className="absolute inset-0" />
      )}
      {activeVisual === 'gradient' && (
        <HeroVisualGradient className="absolute inset-0" variant="mixed" />
      )}
      {activeVisual === 'mesh' && (
        <MeshGradient className="absolute inset-0" />
      )}

      {/* Content overlaid on top */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Stop Wasting Half Your Traffic
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
            Splitnik helps you run experiments that actually ship. Beautiful testing infrastructure for modern teams.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-cyan-400 hover:bg-cyan-500 text-zinc-950 font-semibold rounded-lg transition-colors">
              Join Waitlist
            </button>
            <button className="px-8 py-3 bg-transparent hover:bg-zinc-800 text-white font-semibold rounded-lg border border-zinc-700 transition-colors">
              Learn More
            </button>
          </div>

          {/* Visual Switcher (for demo purposes) */}
          <div className="pt-12 border-t border-zinc-800 space-y-4">
            <p className="text-sm text-zinc-500 uppercase tracking-wider">Demo Controls</p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setActiveVisual('orbiting')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeVisual === 'orbiting'
                    ? 'bg-cyan-400 text-zinc-950'
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                }`}
              >
                Concept A: Orbiting
              </button>
              <button
                onClick={() => setActiveVisual('gradient')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeVisual === 'gradient'
                    ? 'bg-cyan-400 text-zinc-950'
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                }`}
              >
                Concept B: Gradient
              </button>
              <button
                onClick={() => setActiveVisual('mesh')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeVisual === 'mesh'
                    ? 'bg-cyan-400 text-zinc-950'
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                }`}
              >
                Concept B: Mesh
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
