# Splitnik Hero Visuals

Premium hero section animations for the Splitnik waitlist landing page. Built with Next.js 15, TypeScript, Tailwind CSS 4, and Framer Motion.

## 🎨 Concepts

This project implements two distinct visual concepts:

### Concept A: The Orbiting Variants
A stylized Sputnik satellite with glowing orb center and orbital rings representing experiment variants. Features:
- Central glowing orb with pulse animation
- Three orbital rings with rotating particles
- Sputnik-style antenna lines
- The outer ring (the "winner") glows brighter
- Subtle noise texture overlay
- Fully responsive with reduced motion support

### Concept B: The Gradient Mesh
A simpler but equally premium gradient background approach with multiple variants:
- **HeroVisualGradient**: Animated gradient blobs with optional interactive mouse-follow spotlight
- **MeshGradient**: Multiple overlapping gradient blobs creating a mesh effect
- Optional grid pattern overlay
- Noise texture for premium aesthetic
- Vignette effect

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the demo.

## 📁 Project Structure

```
splitnik-hero/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Demo page with visual switcher
│   └── globals.css         # Global styles
├── components/
│   └── hero/
│       ├── HeroVisualOrbiting.tsx    # Concept A main component
│       ├── HeroVisualGradient.tsx    # Concept B main component
│       ├── MeshGradient.tsx          # Concept B alternative
│       ├── OrbCore.tsx               # Glowing orb with pulse
│       ├── OrbitalRing.tsx           # Orbital path with particles
│       ├── AntennaLines.tsx          # Sputnik antenna lines
│       ├── NoiseTexture.tsx          # Grain texture overlay
│       └── index.ts                  # Barrel exports
├── lib/
│   ├── design-tokens.ts    # Color palette, sizing constants
│   └── animation-config.ts # Framer Motion springs, easings
└── hooks/
    └── useMediaQuery.ts    # Responsive breakpoint hook
```

## 🎯 Usage

### Basic Usage

```tsx
import { HeroVisualOrbiting, HeroVisualGradient } from '@/components/hero';

export default function Page() {
  return (
    <main className="relative min-h-screen">
      {/* Option 1: Orbiting Variants */}
      <HeroVisualOrbiting className="absolute inset-0" />

      {/* OR Option 2: Gradient Mesh */}
      {/* <HeroVisualGradient className="absolute inset-0" variant="mixed" /> */}

      {/* Your content */}
      <div className="relative z-10">
        <h1>Your Content Here</h1>
      </div>
    </main>
  );
}
```

### Concept A: HeroVisualOrbiting

```tsx
<HeroVisualOrbiting className="absolute inset-0" />
```

No additional props required. Automatically adjusts to screen size and respects user motion preferences.

### Concept B: HeroVisualGradient

```tsx
<HeroVisualGradient
  className="absolute inset-0"
  variant="mixed"      // 'teal' | 'violet' | 'mixed'
  showGrid={true}      // Show grid overlay
  interactive={true}   // Enable mouse-follow spotlight
/>
```

**Props:**
- `variant`: Color scheme - `'teal'`, `'violet'`, or `'mixed'` (default: `'mixed'`)
- `showGrid`: Display subtle grid pattern (default: `true`)
- `interactive`: Enable mouse-follow spotlight effect (default: `true`, disabled on mobile)

### Concept B Alternative: MeshGradient

```tsx
<MeshGradient className="absolute inset-0" />
```

More complex variant with five overlapping animated gradient blobs.

## 🎨 Design System

### Colors

The design system uses zinc grays as the base with cyan/teal and violet as accents:

```typescript
// Primary background
--bg-primary: #09090b;    // zinc-950

// Accent colors
--accent-400: #22d3ee;     // Primary accent (teal)
--violet-500: #8b5cf6;     // Secondary accent

// Foreground
--fg-primary: #fafafa;     // zinc-50
```

All color tokens are defined in `lib/design-tokens.ts`.

### Animation

Framer Motion springs and easing curves are configured in `lib/animation-config.ts`:

- **Snappy**: Micro-interactions (300 stiffness, 30 damping)
- **Fluid**: Layout transitions (100 stiffness, 20 damping)
- **Bouncy**: Celebratory moments (400 stiffness, 10 damping)
- **Ambient**: Slow ambient animations (20 stiffness, 15 damping)

## ♿ Accessibility

All visual components:
- Are marked with `aria-hidden="true"` (decorative elements)
- Respect `prefers-reduced-motion` user preference
- Scale particle counts on mobile for better performance
- Use semantic HTML where applicable

## 📱 Responsive Behavior

Components automatically adjust to screen size:

| Breakpoint | Orb Size | Ring Scale | Particles |
|------------|----------|------------|-----------|
| Desktop (1024px+) | 120px | 1.0x | Full count |
| Tablet (640-1024px) | 100px | 0.75x | Reduced |
| Mobile (<640px) | 80px | 0.5x | Minimal |

Interactive features like mouse-follow spotlight are disabled on mobile.

## ⚡ Performance

### Targets
- **Animation FPS**: 60fps
- **First Contentful Paint**: <1.5s
- **Total Blocking Time**: <200ms
- **Bundle Size**: <15KB gzipped

### Optimizations
- Hardware-accelerated CSS transforms
- `will-change` hints for animated elements
- Reduced particle counts on mobile
- Disabled animations for `prefers-reduced-motion`

### Build Output

```
Route (app)                Size  First Load JS
┌ ○ /                   39.2 kB         141 kB
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5 (App Router)
- **Language**: TypeScript 5.6
- **Styling**: Tailwind CSS 4.0
- **Animation**: Framer Motion 11.11
- **Package Manager**: npm

## 📄 License

This project is part of the Splitnik waitlist implementation.

## 🤝 Contributing

This is a specific implementation project. For questions or modifications, please refer to the original design brief.

---

Built with ⚡ by following the [Splitnik Hero Visual Brief](brief.md)
