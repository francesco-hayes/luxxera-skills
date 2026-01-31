# Spacing

Luxxera uses a combination of fixed and fluid spacing for responsive layouts.

## Fixed Spacing

Use for consistent small gaps and element-level spacing.

| Token | Value | Tailwind | Use Case |
|-------|-------|----------|----------|
| spacing-4 | 4px | `gap-4`, `p-4` | Micro gaps |
| spacing-8 | 8px | `gap-8`, `p-8` | Small gaps |
| spacing-12 | 12px | `gap-12`, `p-12` | Tag padding |
| spacing-16 | 16px | `gap-16`, `p-16` | Button gaps, small spacing |
| spacing-20 | 20px | `gap-20`, `p-20` | Text stacks, button padding |
| spacing-24 | 24px | `gap-24`, `p-24` | Card grid gaps, card padding |
| spacing-32 | 32px | `gap-32`, `p-32` | Card padding, content gaps |
| spacing-40 | 40px | `gap-40`, `p-40` | Medium gaps |
| spacing-48 | 48px | `gap-48`, `p-48` | Large padding |
| spacing-60 | 60px | `gap-60` | Section content gaps |
| spacing-80 | 80px | `gap-80` | Large section gaps |

## Fluid Spacing

Use for responsive layouts that scale with viewport.

### Global Section Spacing

| Token | CSS Value | Tailwind | Use Case |
|-------|-----------|----------|----------|
| global-1 | `clamp(1rem, 2.07vi + 0.51rem, 3rem)` | `px-spacing-global-1` | Container horizontal padding |
| global-2 | `clamp(5rem, 3.37vi + 4.21rem, 8.25rem)` | `py-spacing-global-2` | Section vertical padding |

### Fluid Gap Values

| Token | Range | Tailwind | Use Case |
|-------|-------|----------|----------|
| spacing-132-60 | 60px → 132px | `gap-spacing-132-60` | Section gaps |
| spacing-60-24 | 24px → 60px | `gap-60-24` | Content gaps |
| spacing-48-24 | 24px → 48px | `p-spacing-48-24` | Card padding |
| spacing-32-16 | 16px → 32px | `gap-32-16` | Element gaps |
| spacing-24-16 | 16px → 24px | `gap-24-16` | Small gaps |

## Usage Guidelines

### Section Structure
```tsx
<section className="px-spacing-global-1 py-spacing-global-2">
  {/* 48px horizontal padding on desktop, 16px on mobile */}
  {/* 132px vertical padding on desktop, 80px on mobile */}
</section>
```

### Content Gaps
```tsx
<div className="flex flex-col gap-60">
  {/* 60px gap between major content blocks */}
</div>

<div className="flex flex-col gap-60-24">
  {/* Fluid: 60px desktop, 24px mobile */}
</div>
```

### Card Grids
```tsx
<div className="grid grid-cols-3 gap-24">
  {/* 24px gap between cards */}
</div>
```

### Card Internal Padding
```tsx
<div className="p-32">
  {/* Fixed 32px padding */}
</div>

<div className="p-spacing-48-24">
  {/* Fluid: 48px desktop, 24px mobile */}
</div>
```

### Text Stacks
```tsx
<div className="flex flex-col gap-20">
  <h2>Headline</h2>
  <p>Body text</p>
</div>
```

### Button Groups
```tsx
<div className="flex gap-16">
  <button>Primary</button>
  <button>Secondary</button>
</div>
```

## Quick Reference

| Context | Recommended Spacing |
|---------|---------------------|
| Section vertical padding | `py-spacing-global-2` |
| Section horizontal padding | `px-spacing-global-1` |
| Between major content blocks | `gap-60` or `gap-60-24` |
| Card grid gaps | `gap-24` |
| Card internal padding | `p-32` or `p-spacing-48-24` |
| Text headline + body | `gap-20` |
| Button groups | `gap-16` |
| Tag internal padding | `px-12 py-6` |

## Critical Rules

1. **Always use fluid spacing for sections** - Never hardcode section padding
2. **Generous whitespace** - When in doubt, add more space
3. **Consistent card gaps** - Always 24px between cards
4. **Mobile-first fluid values** - Smaller value is the mobile size
