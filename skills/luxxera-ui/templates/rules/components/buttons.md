# Buttons

The Luxxera button system includes 5 hierarchies, 5 sizes, 4 states, and multiple icon configurations.

## Common Properties

All buttons share these base properties:
- **Border radius**: `rounded-[1000px]` (fully rounded)
- **Font**: `font-semibold` (DM Sans)
- **Display**: `flex items-center justify-center`
- **Icon size**: `size-6` (24px)

---

## Size Reference

| Size | Height | Padding X | Gap | Icon Size | Typography | Icon-Only Size |
|------|--------|-----------|-----|-----------|------------|----------------|
| xs | — | — | — | 24px | — | 32px |
| sm | 36px | 12px | 4px | 24px | `button-2` (14px) | 36px |
| md | 44px | 20px | 6px | 24px | `button-1` (16px) | 44px |
| xl | 52px | 20px | 6px | 24px | `button-1` (16px) | 52px |
| xxl | 64px | 32px | 6px | 24px | `button-1` (16px) | — |

---

## Button States

All buttons support 4 states: **Default**, **Hover**, **Focused**, and **Disabled**.

### Focus Ring (Critical)

All focusable buttons use a double-ring focus indicator:

```css
/* Focus ring - white inner, green-80 outer */
shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969]

/* Or with Tailwind classes */
focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-green-80
```

The focus ring is:
- **Inner ring**: 2px white
- **Outer ring**: 4px `primary-green-80` (#2c6969)

### State Transitions

```tsx
// Always add these transition utilities
className="transition-all duration-200"
```

---

## Button Hierarchies

### Primary Button

Dark green background, white text. Use for main CTAs.

**States:**
| State | Background | Text | Additional |
|-------|------------|------|------------|
| Default | `bg-primary-green-100` | `text-white` | — |
| Hover | Darkened (20% black overlay) | `text-white` | — |
| Focused | `bg-primary-green-100` | `text-white` | Focus ring |
| Disabled | `bg-primary-green-40` | `text-primary-green-50` | `cursor-not-allowed` |

```tsx
// Size: md - Default
<button className="bg-primary-green-100 text-white h-[44px] px-20
  rounded-[1000px] button-1 font-semibold flex items-center justify-center gap-[6px]
  transition-all duration-200
  hover:bg-primary-green-hover
  focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969] focus:outline-none
  disabled:bg-primary-green-40 disabled:text-primary-green-50 disabled:cursor-not-allowed">
  <IconLeft className="size-6" />
  Button CTA
  <IconRight className="size-6" />
</button>

// Size: xl (landing pages)
<button className="bg-primary-green-100 text-white h-[52px] px-20
  rounded-[1000px] button-1 font-semibold flex items-center justify-center gap-[6px]
  transition-all duration-200 hover:bg-primary-green-hover
  focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969] focus:outline-none">
  Button CTA
</button>

// Size: xxl (hero CTAs)
<button className="bg-primary-green-100 text-white h-[64px] px-32
  rounded-[1000px] button-1 font-semibold flex items-center justify-center gap-[6px]
  transition-all duration-200 hover:bg-primary-green-hover
  focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969] focus:outline-none">
  Button CTA
</button>

// Size: sm (compact)
<button className="bg-primary-green-100 text-white h-[36px] px-12
  rounded-[1000px] button-2 font-semibold flex items-center justify-center gap-[4px]
  transition-all duration-200 hover:bg-primary-green-hover
  focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969] focus:outline-none">
  Button CTA
</button>
```

**Hover Implementation Note:**
The hover state uses a 20% black overlay. Implement as:
```css
/* CSS custom property approach */
.bg-primary-green-hover {
  background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), #1b4d4d;
}

/* Or Tailwind arbitrary value */
hover:bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),#1b4d4d]
```

---

### Secondary Button

White background, dark green text. Use alongside primary buttons.

**States:**
| State | Background | Text | Border | Additional |
|-------|------------|------|--------|------------|
| Default | `bg-white` | `text-primary-green-100` | none | — |
| Hover | `bg-primary-green-20` | `text-primary-green-100` | none | — |
| Focused | `bg-white` | `text-primary-green-100` | `border-primary-green-50` | Focus ring |
| Disabled | `bg-white` | `text-primary-green-50` | none | `cursor-not-allowed` |

```tsx
// Size: md
<button className="bg-white text-primary-green-100 h-[44px] px-20
  rounded-[1000px] button-1 font-semibold flex items-center justify-center gap-[6px]
  transition-all duration-200
  hover:bg-primary-green-20
  focus:border focus:border-primary-green-50 focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969] focus:outline-none
  disabled:text-primary-green-50 disabled:cursor-not-allowed">
  Button CTA
</button>

// Size: xl
<button className="bg-white text-primary-green-100 h-[52px] px-20
  rounded-[1000px] button-1 font-semibold flex items-center justify-center gap-[6px]
  transition-all duration-200 hover:bg-primary-green-20
  focus:border focus:border-primary-green-50 focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969] focus:outline-none">
  Button CTA
</button>

// Size: xxl
<button className="bg-white text-primary-green-100 h-[64px] px-32
  rounded-[1000px] button-1 font-semibold flex items-center justify-center gap-[6px]
  transition-all duration-200 hover:bg-primary-green-20
  focus:border focus:border-primary-green-50 focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969] focus:outline-none">
  Button CTA
</button>
```

---

### Tertiary Button

Transparent with subtle border. Use for filters, toggles, or ghost actions.

**States:**
| State | Background | Text | Border | Additional |
|-------|------------|------|--------|------------|
| Default | transparent | `text-primary-green-100` | `border-black/10` | — |
| Hover | `bg-black/5` | `text-primary-green-100` | `border-black/10` | — |
| Focused | transparent | `text-primary-green-100` | `border-primary-green-50` | Focus ring |
| Disabled | transparent | `text-primary-green-50` | `border-black/5` | `cursor-not-allowed` |

```tsx
// Size: md
<button className="border border-black/10 text-primary-green-100 h-[44px] px-20
  rounded-[1000px] button-1 font-semibold flex items-center justify-center gap-[6px]
  transition-all duration-200
  hover:bg-black/5
  focus:border-primary-green-50 focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969] focus:outline-none
  disabled:text-primary-green-50 disabled:border-black/5 disabled:cursor-not-allowed">
  Button CTA
</button>

// Size: xl
<button className="border border-black/10 text-primary-green-100 h-[52px] px-20
  rounded-[1000px] button-1 font-semibold flex items-center justify-center gap-[6px]
  transition-all duration-200 hover:bg-black/5
  focus:border-primary-green-50 focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969] focus:outline-none">
  Button CTA
</button>

// Size: xxl
<button className="border border-black/10 text-primary-green-100 h-[64px] px-32
  rounded-[1000px] button-1 font-semibold flex items-center justify-center gap-[6px]
  transition-all duration-200 hover:bg-black/5
  focus:border-primary-green-50 focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969] focus:outline-none">
  Button CTA
</button>
```

---

### Blur Button

Glass-morphism effect for dark/image backgrounds.

**States:**
| State | Background | Text | Additional |
|-------|------------|------|------------|
| Default | `bg-[rgba(3,46,45,0.24)] backdrop-blur-[10px]` | `text-white` | — |
| Hover | `bg-[rgba(3,46,45,0.40)] backdrop-blur-[10px]` | `text-white` | Darker |
| Focused | `bg-[rgba(3,46,45,0.24)] backdrop-blur-[10px]` | `text-white` | Focus ring |
| Disabled | `bg-[rgba(3,46,45,0.12)] backdrop-blur-[10px]` | `text-white/50` | `cursor-not-allowed` |

```tsx
// Size: md
<button className="bg-[rgba(3,46,45,0.24)] backdrop-blur-[10px] text-white h-[44px] px-20
  rounded-[1000px] button-1 font-semibold flex items-center justify-center gap-[6px]
  transition-all duration-200
  hover:bg-[rgba(3,46,45,0.40)]
  focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969] focus:outline-none
  disabled:bg-[rgba(3,46,45,0.12)] disabled:text-white/50 disabled:cursor-not-allowed">
  Button CTA
</button>

// Size: xl
<button className="bg-[rgba(3,46,45,0.24)] backdrop-blur-[10px] text-white h-[52px] px-20
  rounded-[1000px] button-1 font-semibold flex items-center justify-center gap-[6px]
  transition-all duration-200 hover:bg-[rgba(3,46,45,0.40)]
  focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969] focus:outline-none">
  Button CTA
</button>

// Size: xxl
<button className="bg-[rgba(3,46,45,0.24)] backdrop-blur-[10px] text-white h-[64px] px-32
  rounded-[1000px] button-1 font-semibold flex items-center justify-center gap-[6px]
  transition-all duration-200 hover:bg-[rgba(3,46,45,0.40)]
  focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969] focus:outline-none">
  Button CTA
</button>

// Alternative using CSS variable
<button className="bg-secondary-background-blur backdrop-blur-[10px] text-white ...">
```

---

### Link Button

Text-only with underline. Use for inline navigation.

**States:**
| State | Text | Underline | Additional |
|-------|------|-----------|------------|
| Default | `text-primary-green-90` | solid | — |
| Hover | `text-primary-green-100` | solid | — |
| Focused | `text-primary-green-90` | solid | Focus ring |
| Disabled | `text-primary-green-50` | solid | `cursor-not-allowed` |

```tsx
// Default (no height, inline)
<button className="text-primary-green-90 underline decoration-solid
  button-1 font-semibold flex items-center gap-[6px]
  transition-colors duration-200
  hover:text-primary-green-100
  focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969] focus:outline-none focus:rounded-4
  disabled:text-primary-green-50 disabled:cursor-not-allowed">
  <IconLeft className="size-6" />
  Button CTA
  <IconRight className="size-6" />
</button>

// Size: sm
<button className="text-primary-green-90 underline decoration-solid
  button-2 font-semibold flex items-center gap-[4px]
  transition-colors duration-200 hover:text-primary-green-100">
  Button CTA
</button>
```

---

## Icon-Only Buttons

Circular buttons with icon only. Available in all hierarchies.

### Icon-Only Size Reference

| Size | Dimensions | Use Case |
|------|------------|----------|
| xs | 32px × 32px | Compact UI, inline actions |
| sm | 36px × 36px | Small buttons, mobile |
| md | 44px × 44px | Default, cards |
| xl | 52px × 52px | Landing pages, hero sections |

```tsx
// Primary icon-only
<button className="bg-primary-green-100 text-white size-[44px]
  rounded-full flex items-center justify-center
  transition-all duration-200 hover:bg-primary-green-hover
  focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969] focus:outline-none">
  <ArrowIcon className="size-6" />
</button>

// Secondary icon-only
<button className="bg-white text-primary-green-100 size-[52px]
  rounded-full flex items-center justify-center
  transition-all duration-200 hover:bg-primary-green-20
  focus:border focus:border-primary-green-50 focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969] focus:outline-none">
  <ArrowIcon className="size-6" />
</button>

// Tertiary icon-only
<button className="border border-black/10 text-primary-green-100 size-[44px]
  rounded-full flex items-center justify-center
  transition-all duration-200 hover:bg-black/5
  focus:border-primary-green-50 focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969] focus:outline-none">
  <ChevronIcon className="size-6" />
</button>

// Blur icon-only
<button className="bg-[rgba(3,46,45,0.24)] backdrop-blur-[10px] text-white size-[44px]
  rounded-full flex items-center justify-center
  transition-all duration-200 hover:bg-[rgba(3,46,45,0.40)]
  focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969] focus:outline-none">
  <ArrowIcon className="size-6" />
</button>

// Link icon-only
<button className="text-primary-green-90 size-[44px]
  rounded-full flex items-center justify-center
  transition-colors duration-200 hover:text-primary-green-100
  focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969] focus:outline-none">
  <ArrowIcon className="size-6" />
</button>

// Small sizes
<button className="bg-primary-green-100 text-white size-[36px] rounded-full flex items-center justify-center">
  <ArrowIcon className="size-6" />
</button>

<button className="bg-primary-green-100 text-white size-[32px] rounded-full flex items-center justify-center">
  <ArrowIcon className="size-6" />
</button>
```

---

## Icon Configurations

Buttons support three icon configurations:

### Default (Text with Optional Icons)
```tsx
<button className="... flex items-center justify-center gap-[6px]">
  <IconLeading className="size-6" />  {/* Optional */}
  <span>Button CTA</span>
  <IconTrailing className="size-6" /> {/* Optional */}
</button>
```

### Icon Only
```tsx
<button className="... size-[44px] rounded-full flex items-center justify-center">
  <Icon className="size-6" />
</button>
```

### Text Only (No Icons)
```tsx
<button className="... flex items-center justify-center">
  <span>Button CTA</span>
</button>
```

---

## Common Patterns

### Hero CTA Pair
```tsx
<div className="flex gap-16">
  <button className="bg-white text-primary-green-100 h-[52px] px-20 rounded-[1000px] button-1 font-semibold
    transition-all duration-200 hover:bg-primary-green-20
    focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969] focus:outline-none">
    Get Started
  </button>
  <button className="bg-[rgba(3,46,45,0.24)] backdrop-blur-[10px] text-white h-[52px] px-20 rounded-[1000px] button-1 font-semibold
    transition-all duration-200 hover:bg-[rgba(3,46,45,0.40)]
    focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969] focus:outline-none">
    Learn More
  </button>
</div>
```

### Card CTA with Arrow
```tsx
<div className="flex items-center justify-between">
  <h3 className="headline-4">Card Title</h3>
  <button className="bg-white text-primary-green-100 size-[52px] rounded-full flex items-center justify-center
    transition-all duration-200 hover:bg-primary-green-20
    focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969] focus:outline-none">
    <ArrowRightIcon className="size-6" />
  </button>
</div>
```

### Form Actions
```tsx
<div className="flex gap-12">
  <button className="bg-primary-green-100 text-white h-[44px] px-20 rounded-[1000px] button-1 font-semibold
    transition-all duration-200 hover:bg-primary-green-hover
    focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969] focus:outline-none
    disabled:bg-primary-green-40 disabled:text-primary-green-50 disabled:cursor-not-allowed">
    Submit
  </button>
  <button className="border border-black/10 text-primary-green-100 h-[44px] px-20 rounded-[1000px] button-1 font-semibold
    transition-all duration-200 hover:bg-black/5
    focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969] focus:outline-none">
    Cancel
  </button>
</div>
```

---

## Decision Tree

```
Need a button?
├── Primary action (most important) → Primary Button
│   ├── Hero CTA → xxl or xl
│   ├── Form submit → md or xl
│   └── Card CTA → sm or md
├── Secondary action → Secondary Button (same size as primary)
├── Tertiary action (less emphasis) → Tertiary Button
├── On dark/image background → Blur Button
├── Inline text action → Link Button
└── Icon action only → Icon-Only Button
    ├── Prominent action → xl (52px)
    ├── Standard action → md (44px)
    ├── Compact/mobile → sm (36px)
    └── Inline/tight spaces → xs (32px)
```

---

## Critical Rules

1. **Always include focus states** - Use the double-ring focus indicator
2. **Consistent transitions** - Add `transition-all duration-200` to all buttons
3. **Proper disabled styling** - Include `cursor-not-allowed` and muted colors
4. **Icon size consistency** - Always use `size-6` (24px) for icons
5. **Gap consistency** - Use `gap-[6px]` for md/xl/xxl, `gap-[4px]` for sm
6. **Full rounded corners** - Always use `rounded-[1000px]` for buttons with text, `rounded-full` for icon-only
7. **Hierarchy matching** - Secondary button should match Primary button size when used together
