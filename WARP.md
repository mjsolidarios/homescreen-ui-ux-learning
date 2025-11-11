# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Common commands

- Install dependencies
  - npm install
- Start development server (Vite, opens on port 3000)
  - npm run dev
- Build for production (outputs to build/)
  - npm run build
- Preview a production build locally
  - npm run build && npx vite preview

Notes
- There are no lint, typecheck, or test scripts configured in package.json.
- README repeats the install and dev commands above.

## High-level architecture

Tech stack
- Vite + React + TypeScript (react-swc)
- Tailwind CSS v4 utilities precompiled in src/index.css, plus project design tokens in src/styles/globals.css
- Radix UI primitives wrapped as local UI components (shadcn-style) in src/components/ui, composed with Tailwind classes and a cn() helper (src/components/ui/utils.ts)

Entry points and app flow
- index.html loads the client bundle and mounts at #root
- src/main.tsx creates the React root and renders App
- src/App.tsx coordinates the interactive lesson via tabs, progress bar, and five sections:
  - Visual Hierarchy, Spacing & Layout, Navigation, Accessibility, Best Practices Summary
- Each section’s interactivity is implemented in dedicated components under src/components/* (e.g., InteractiveHierarchy.tsx, InteractiveSpacing.tsx, InteractiveNavigation.tsx, AccessibilityChecklist.tsx, BestPracticesSummary.tsx) and rendered inside a common LessonSection card layout

UI component pattern
- src/components/ui contains small, focused wrappers over Radix primitives (e.g., tabs, progress, checkbox, dialog, select).
  - These wrappers centralize accessibility attributes, Tailwind classes, sizes/variants, and focus rings.
  - Prefer using these wrappers rather than importing Radix directly to maintain consistent styling and behavior.
- Class name composition uses cn() from src/components/ui/utils.ts (clsx + tailwind-merge) to safely merge utility classes and variants.

Styling and theming
- src/index.css includes Tailwind v4 layers and a large set of utilities; it also defines many CSS custom properties used by the UI wrappers.
- src/styles/globals.css defines design tokens (color, radius, etc.), dark mode variant, and maps tokens via @theme inline to Tailwind color slots (e.g., bg-background, text-foreground).
  - The UI components rely on these variables for consistent theming and dark mode behavior.

Module resolution and aliases
- vite.config.ts
  - Sets build.outDir to build and dev server port to 3000.
  - Defines an alias '@' -> ./src for concise imports.
  - Provides aliases that map version-suffixed imports (e.g., '@radix-ui/react-tabs@1.1.3') to the actual packages (e.g., '@radix-ui/react-tabs'). This allows components in src/components/ui to import Radix primitives with explicit version tags in import specifiers while still resolving at runtime.
  - If you add new version-suffixed imports in UI wrappers, add a matching alias here.

State and data flow
- Local component state with React useState is used for interactivity (e.g., section completion, tab selection, spacing sliders); there is no global state management.

Build and output
- Vite build targets esnext and emits to build/.
- Preview a build with npx vite preview (uses the configured outDir).

Conventions for extending the app
- When adding UI pieces, compose from src/components/ui primitives to inherit tokens, focus rings, and sizes.
- Use the '@' alias for imports from src (e.g., import { X } from '@/components/ui/button').
- For new tokens or theme tweaks, prefer editing src/styles/globals.css so UI wrappers pick them up consistently.
