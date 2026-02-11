# Best Practices

Guidelines for maintaining design consistency across all Luxxera pages.

## DO's

### Colors
- Use `primary-green-100` for all dark text (never pure black)
- Use the 3-color card rotation (brown, light green, teal) for variety
- Use `primary-neon` accent only on dark backgrounds
- Use `primary-brown-30` or `primary-brown-50` for italic accents on light backgrounds

### Typography
- Use serif (`font-serif`) for H1-H3 headlines only
- Use sans-serif (`font-sans`) for H4+ and all body text
- Add `tracking-tightest` to all headlines
- Use italic serif for accent words in headlines

### Spacing
- Maintain generous whitespace between sections (`py-spacing-global-2`)
- Use fluid spacing for responsive layouts
- Keep consistent card grid gaps (24px)
- Use 60px gap between section header and content

### Components
- Round all corners generously (24-48px on cards)
- Use `rounded-[1000px]` for all buttons
- Apply gradient overlays on all images with text
- Use subtle backdrop blur for glass effects

### Layout
- Constrain header text to `max-w-[752px]`
- Center section headers with `items-center text-center`
- Use the container class for consistent page width
- Start mobile-first, then expand for larger screens

## DON'Ts

### Colors
- Never use pure black (`#000`) for text
- Never use generic blue or red colors
- Don't mix neon accent on light backgrounds
- Don't use brown accent on dark backgrounds

### Typography
- Never use more than 2 fonts
- Don't use serif for body text or small headlines
- Don't use bold or underline for accent words
- Never use tight line-height on body text

### Spacing
- Never hardcode section padding (use fluid values)
- Don't create cramped layouts
- Avoid inconsistent gaps between similar elements
- Don't skip the 60px gap between header and content

### Components
- Never use hard edges (everything needs rounded corners)
- Don't put raw text over images without gradients
- Avoid buttons without proper rounded corners
- Don't mix button hierarchies incorrectly

### Layout
- Never create busy layouts - embrace whitespace
- Don't exceed max-width constraints for text
- Avoid asymmetric grids unless intentional
- Don't forget mobile responsiveness

## Validation Checklist

Before finalizing any component or section, verify:

### Colors
- [ ] Primary text uses `text-primary-green-100` (not black)
- [ ] Accent words use correct color (brown on light, neon on dark)
- [ ] Card colors rotate properly if multiple
- [ ] Button colors match hierarchy

### Typography
- [ ] Headlines H1-H3 use `font-serif`
- [ ] Headlines H4+ and body use `font-sans`
- [ ] Headlines include `tracking-tightest`
- [ ] Accent words are italic serif

### Spacing
- [ ] Section uses `px-spacing-global-1 py-spacing-global-2`
- [ ] 60px gap between header and content
- [ ] 24px gap between cards in grid
- [ ] Header text constrained to max-width

### Components
- [ ] All corners are rounded appropriately
- [ ] Buttons use `rounded-[1000px]`
- [ ] Images have gradient overlays when needed
- [ ] Tags/pills use correct styling

### Responsiveness
- [ ] Section padding is fluid
- [ ] Grid adapts to mobile (single column)
- [ ] Text is readable at all sizes
- [ ] Buttons are tappable on mobile (min 44px)

## Common Mistakes to Avoid

### 1. Wrong Text Color
```tsx
// ❌ Wrong
<p className="text-black">...</p>

// ✅ Correct
<p className="text-primary-green-100">...</p>
```

### 2. Missing Gradient on Image
```tsx
// ❌ Wrong - text directly on image
<div className="relative">
  <img src="..." />
  <h3 className="absolute bottom-4 text-white">Title</h3>
</div>

// ✅ Correct - with gradient
<div className="relative">
  <img src="..." />
  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/36 to-transparent p-24">
    <h3 className="text-white">Title</h3>
  </div>
</div>
```

### 3. Wrong Button Radius
```tsx
// ❌ Wrong
<button className="rounded-lg">...</button>

// ✅ Correct
<button className="rounded-[1000px]">...</button>
```

### 4. Sans-Serif for H1
```tsx
// ❌ Wrong
<h1 className="headline-1 font-sans">...</h1>

// ✅ Correct
<h1 className="headline-1 font-serif">...</h1>
```

### 5. Neon on Light Background
```tsx
// ❌ Wrong - neon doesn't contrast on light
<h2 className="text-primary-green-100">
  Word <span className="italic text-primary-neon">accent</span>
</h2>

// ✅ Correct - brown on light
<h2 className="text-primary-green-100">
  Word <span className="font-serif italic text-primary-brown-30">accent</span>
</h2>
```

### 6. Hardcoded Section Padding
```tsx
// ❌ Wrong
<section className="px-12 py-24">...</section>

// ✅ Correct
<section className="px-spacing-global-1 py-spacing-global-2">...</section>
```

## Quick Reference Card

| Element | Required Properties |
|---------|---------------------|
| Page background | `bg-primary-neutral-background` |
| Primary text | `text-primary-green-100` |
| H1-H3 headlines | `font-serif tracking-tightest` |
| Accent on light | `font-serif italic text-primary-brown-30` |
| Accent on dark | `italic text-primary-neon` |
| Section padding | `px-spacing-global-1 py-spacing-global-2` |
| Content gap | `gap-60` |
| Card gap | `gap-24` |
| Button | `rounded-[1000px]` |
| Card | `rounded-32 overflow-hidden` |
| Image text | `bg-gradient-to-t from-black/36` |
