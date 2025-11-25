// Design System Tokens for Splitnik Hero Visuals

export const colors = {
  // Backgrounds
  background: {
    primary: '#09090b',    // zinc-950 - main page background
    secondary: '#18181b',  // zinc-900 - elevated surfaces
    tertiary: '#27272a',   // zinc-800 - cards, overlays
  },

  // Foreground
  foreground: {
    primary: '#fafafa',    // zinc-50 - primary text
    secondary: '#a1a1aa',  // zinc-400 - secondary text
    muted: '#52525b',      // zinc-600 - muted text
  },

  // Accent (Teal/Cyan)
  accent: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',   // PRIMARY ACCENT
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
  },

  // Secondary Accent (Violet) - for gradients
  violet: {
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
  },

  // Semantic
  glow: {
    teal: 'rgba(34, 211, 238, 0.6)',      // accent-400 at 60%
    tealStrong: 'rgba(34, 211, 238, 0.8)', // accent-400 at 80%
    tealSubtle: 'rgba(34, 211, 238, 0.2)', // accent-400 at 20%
    violet: 'rgba(139, 92, 246, 0.4)',     // violet-500 at 40%
  },
} as const;

export const sizing = {
  // Hero visual container
  hero: {
    maxWidth: '800px',
    height: {
      desktop: '500px',
      tablet: '400px',
      mobile: '300px',
    },
  },

  // Orb sizing (Concept A)
  orb: {
    diameter: {
      desktop: 120,
      tablet: 100,
      mobile: 80,
    },
    glowRadius: '200px',  // Blur radius for glow effect
  },

  // Orbital rings (Concept A)
  orbital: {
    ring1: { width: 300, height: 150 },  // Innermost
    ring2: { width: 450, height: 200 },  // Middle
    ring3: { width: 600, height: 250 },  // Outermost (winner)
  },

  // Antenna lines (Concept A)
  antenna: {
    length: 60,
    strokeWidth: 2,
  },

  // Particles (Concept A)
  particle: {
    size: 4,
    count: 8,  // Particles per orbital ring
  },
} as const;
