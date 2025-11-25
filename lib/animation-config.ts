// Animation Configuration for Framer Motion

export const springs = {
  // For micro-interactions (buttons, toggles)
  snappy: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 30,
  },

  // For layout transitions, reveals
  fluid: {
    type: 'spring' as const,
    stiffness: 100,
    damping: 20,
  },

  // For celebratory moments
  bouncy: {
    type: 'spring' as const,
    stiffness: 400,
    damping: 10,
  },

  // For slow, ambient animations (orb pulse, orbital motion)
  ambient: {
    type: 'spring' as const,
    stiffness: 20,
    damping: 15,
  },
} as const;

export const durations = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  verySlow: 1.0,
  ambient: 3.0,      // For looping ambient animations
  orbital: 20.0,     // Full orbital rotation
} as const;

export const easings = {
  // For non-spring animations
  smooth: [0.4, 0.0, 0.2, 1] as const,        // ease-out-quart
  smoothIn: [0.4, 0.0, 1, 1] as const,        // ease-in
  smoothOut: [0.0, 0.0, 0.2, 1] as const,     // ease-out
  linear: [0, 0, 1, 1] as const,              // for constant-speed rotations
} as const;
