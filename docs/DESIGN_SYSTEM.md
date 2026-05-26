# Baris Installateur - Design System Documentation

## Overview

This Design System enforces a premium, world-class aesthetic for the Baris Installateur digital presence. It uses a rigorous token-based architecture to ensure consistency, accessibility, and scalability.

## 1. Token System

All visual properties are defined as CSS variables in `src/styles/tokens.css`.

### Colors

#### Tier 1: Primitive

The foundational palette. Do not use these directly in components.

- **Neutrals**: `#0F1419` (950) to `#FFFFFF` (0).
- **Blue (Primary)**: `#003D7A` (700).
- **Feedback**: Green (Success), Amber (Warning), Red (Error).

#### Tier 2: Semantic

Context-aware aliases. Use these in your css/components.

- `var(--color-background-surface-primary)`: Main page background.
- `var(--color-text-primary)`: High-contrast text.
- `var(--color-interactive-primary)`: Primary actions.

### Typography

- **Display**: `Inter` (or `Outfit` as legacy). Used for Headings.
- **Body**: `Inter`. High legibility.
- **Mono**: `IBM Plex Mono`. For technical data.

### Spacing

Strict 8px grid system.

- `var(--spacing-2)` = 8px
- `var(--spacing-4)` = 16px
- `var(--spacing-8)` = 32px

## 2. Component Guidelines

### Button

Use the `Button` component for all actions.

- **Primary**: Main calls to action (Blue).
- **Secondary**: Alternative paths (Light/Gray).
- **Outline**: Low emphasis.

```jsx
<Button variant="default" onClick={...}>Primary Action</Button>
<Button variant="secondary" onClick={...}>Secondary Action</Button>
```

### Cards

Use `ServiceCard` for listing items. Ensure `hover` states are subtle (elevation lift).

### Hero

The `Hero` component should use high-quality photography with a scrum overlay to ensure text readability.

## 3. Accessibility (WCAG 2.2 AA)

- **Contrast**: All text must meet 4.5:1 (AA) or 7:1 (AAA).
- **Focus**: Interactive elements must have a visible focus ring (`--color-interactive-focus`).
- **Structure**: Use semantic HTML (`<main>`, `<nav>`, `<article>`).

## 4. Workflows

- **New Component**: Create a `.contract.json` first, then implement.
- **Update Tokens**: Modify `tokens.css`, then verify `tailwind.config.js` mapping.
