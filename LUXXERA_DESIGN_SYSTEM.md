# Luxxera Design System — Claude Code Context

> **Purpose**: This file defines the visual language, components, and patterns for Luxxera landing pages. Use this as the single source of truth when building or modifying any Luxxera web pages.

---

## Brand Identity

Luxxera is a premium healthcare platform connecting patients with trusted clinics globally. The visual language should feel **luxurious, trustworthy, calm, and sophisticated**.

**Key Attributes:**
- Warm, organic color palette (greens, browns, neutrals)
- Generous white space and rounded corners
- Elegant serif headlines with clean sans-serif body text
- High-quality imagery with subtle gradient overlays
- Fluid, responsive typography

---

## Typography

### Font Families
```css
/* Primary - Headlines & Display */
font-family: 'P22 Mackinac Pro', serif;  /* Use: font-serif */

/* Secondary - Body, UI, Captions */
font-family: 'DM Sans', sans-serif;      /* Use: font-sans */
```

### Typography Scale (Use Tailwind Utilities)

| Style | Tailwind Class | Font | Use Case |
|-------|---------------|------|----------|
| Display | `display` | Serif | Hero headlines |
| Headline 1 | `headline-1` | Serif | Major section headers |
| Headline 2 | `headline-2` | Serif | Section headers |
| Headline 3 | `headline-3` | Serif | Section headers |
| Headline 4-7 | `headline-4` to `headline-7` | Sans | Subsection headers |
| Title 1-7 | `title-1` to `title-7` | Sans | Card titles, labels |
| Body 1-5 | `body-1` to `body-5` | Sans | Paragraphs |
| Caption 1-3 | `caption-1` to `caption-3` | Sans | Small labels, tags |
| Button 1-2 | `button-1`, `button-2` | Sans | Button text |

### Typography Rules
- **Headlines H1-H3**: Always use `font-serif` (P22 Mackinac Pro)
- **Headlines H4+**: Use `font-sans` (DM Sans)
- **Body text**: Always `font-sans`
- **Letter spacing**: Headlines use `tracking-tightest` (-0.04em)
- **Accent text**: Use italic serif for emphasis (e.g., "smooth and flawless", "partner clinics")

### Headline Pattern
```tsx
// Standard section headline with accent
<h2 className="headline-3 text-primary-green-100">
  Your journey supported by trustworthy{' '}
  <span className="font-serif italic text-primary-brown-30">partner clinics</span>
</h2>
```

---

## Color Palette

### Primary Colors
```css
/* Green (Primary Brand) */
--color-primary-green-100: #1b4d4d;  /* Main brand, text, buttons */
--color-primary-green-90: #275c5c;   /* Secondary text */
--color-primary-green-80: #2c6969;   /* Card backgrounds, accents */
--color-primary-green-70: #526969;   /* Muted text */
--color-primary-green-60: #699695;   /* Subtle text */
--color-primary-green-50: #7ba9a9;   /* Hover states */
--color-primary-green-40: #cde0d2;   /* Light card backgrounds */
--color-primary-green-30: #dce9e6;   /* Light backgrounds */
--color-primary-green-20: #e8eeec;   /* Subtle backgrounds */

/* Brown (Secondary Accent) */
--color-primary-brown-100: #4b330f;  /* Dark text on brown cards */
--color-primary-brown-50: #946e34;   /* Accent text */
--color-primary-brown-30: #ae8443;   /* Tags, borders */
--color-primary-brown-10: #bc9d6e;   /* Card backgrounds */

/* Neon (Highlight) */
--color-primary-neon: #cdf765;       /* Hero accent, CTAs on dark */

/* Neutral */
--color-primary-neutral-background: #edede9;  /* Page background */
--color-primary-neutral-divider: #d4d4ce;     /* Borders, dividers */
```

### Color Usage Rules

| Context | Color | Class |
|---------|-------|-------|
| Page background | Warm beige | `bg-primary-neutral-background` |
| Primary text | Dark green | `text-primary-green-100` |
| Secondary text | Medium green | `text-primary-green-90` |
| Muted text | Light green | `text-primary-green-60` |
| Primary buttons | Dark green | `bg-primary-green-100 text-white` |
| Secondary buttons | White | `bg-white text-primary-green-100` |
| Hero accent text | Neon green | `text-primary-neon` |
| Italic accents | Brown | `text-primary-brown-30` or `text-primary-brown-50` |
| Card variant 1 | Brown | `bg-primary-brown-10` |
| Card variant 2 | Light green | `bg-primary-green-40` |
| Card variant 3 | Teal | `bg-primary-green-80` |
| Dark sections | Dark green | `bg-primary-green-100` |

---

## Spacing System

### Fixed Spacing (Use for consistent small gaps)
```css
--spacing-4: 0.25rem;   /* 4px */
--spacing-8: 0.5rem;    /* 8px */
--spacing-12: 0.75rem;  /* 12px */
--spacing-16: 1rem;     /* 16px */
--spacing-20: 1.25rem;  /* 20px */
--spacing-24: 1.5rem;   /* 24px */
--spacing-32: 2rem;     /* 32px */
--spacing-40: 2.5rem;   /* 40px */
--spacing-48: 3rem;     /* 48px */
--spacing-60: 3.75rem;  /* 60px */
--spacing-80: 5rem;     /* 80px */
```

### Fluid Spacing (Use for responsive layouts)
```css
/* Section padding */
--spacing-global-1: clamp(1rem, 2.07vi + 0.51rem, 3rem);     /* Container padding */
--spacing-global-2: clamp(5rem, 3.37vi + 4.21rem, 8.25rem);  /* Section vertical */

/* Common fluid values */
--spacing-132-60: clamp(3.75rem, 4.66vi + 2.66rem, 8.25rem); /* Section gaps */
--spacing-60-24: clamp(1.5rem, 2.33vi + 0.95rem, 3.75rem);   /* Content gaps */
--spacing-48-24: clamp(1.5rem, 1.55vi + 1.14rem, 3rem);      /* Card padding */
--spacing-32-16: clamp(1rem, 1.04vi + 0.76rem, 2rem);        /* Element gaps */
--spacing-24-16: clamp(1rem, 0.52vi + 0.88rem, 1.5rem);      /* Small gaps */
```

### Spacing Rules
- **Section vertical padding**: `py-spacing-global-2` (132px desktop → 80px mobile)
- **Section horizontal padding**: `px-spacing-global-1` (48px desktop → 16px mobile)
- **Content gaps**: `gap-60` or `gap-60-24` (fluid)
- **Card grid gaps**: `gap-24` (24px)
- **Card internal padding**: `p-32` or `p-spacing-48-24` (fluid)
- **Text stacks**: `gap-20` or `gap-16`

---

## Border Radius

```css
/* Standard radius values */
--radius-16: 1rem;      /* Small elements, tags */
--radius-20: 1.25rem;   /* Buttons, inputs */
--radius-24: 1.5rem;    /* Small cards */
--radius-32: 2rem;      /* Medium cards */
--radius-40: 2.5rem;    /* Large cards, hero images */
--radius-48: 3rem;      /* Feature cards */

/* Fluid radius */
--radius-32-24: clamp(1.5rem, 0.52vi + 1.38rem, 2rem);
--radius-40-16: clamp(1rem, 1.55vi + 0.64rem, 2.5rem);

/* Pill/Circular */
--radius-1000: 1000px;  /* Buttons, pills */
```

### Radius Rules
- **Buttons**: `rounded-[1000px]` (fully rounded)
- **Tags/Pills**: `rounded-24` 
- **Small cards**: `rounded-24` (mobile) / `rounded-32` (desktop)
- **Large cards**: `rounded-32` (mobile) / `rounded-40` (desktop)
- **Hero images**: `rounded-40`
- **Footer**: `rounded-48`

---

## Layout System

### Container
```tsx
<div className="container">
  {/* Max width: 1280px (xl), Auto margins, Fluid padding */}
</div>

// Or manual:
<div className="mx-auto max-w-screen-xl px-spacing-global-1">
```

### Grid System
```tsx
// Default 12-column grid
<div className="grid-default">
  {/* 4 cols mobile → 12 cols desktop */}
  {/* gap-x-24 gap-y-24 sm:gap-y-60 */}
</div>

// Horizontal scrolling grid (mobile carousel)
<div className="grid-horizontal">
  {/* Scrollable on mobile, 12-col on md+ */}
</div>
```

### Section Structure
```tsx
<section className="px-spacing-global-1 py-spacing-global-2">
  <div className="flex flex-col gap-60 items-center">
    {/* Section header */}
    <div className="flex flex-col gap-20 items-center text-center max-w-[752px]">
      <h2 className="headline-3 text-primary-green-100">...</h2>
      <p className="body-2 text-primary-green-90">...</p>
    </div>
    
    {/* Content */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-24 w-full">
      {/* Cards */}
    </div>
  </div>
</section>
```

---

## Components

### Buttons

The Luxxera button system includes 5 hierarchies, 5 sizes, and multiple icon configurations. All buttons use `rounded-[1000px]` for fully rounded corners and `font-semibold` DM Sans typography.

#### Button Anatomy
```
┌─────────────────────────────────────┐
│  [Icon]  Button Text  [Icon]        │
│  leading              trailing      │
└─────────────────────────────────────┘
```

#### Size Reference

| Size | Height | Padding X | Gap | Icon Size | Typography |
|------|--------|-----------|-----|-----------|------------|
| xs   | 32px   | —         | —   | 24px      | — (icon only) |
| sm   | 36px   | 12px      | 4px | 24px      | button-2 (14px/20px) |
| md   | 44px   | 20px      | 6px | 24px      | button-1 (16px/24px) |
| xl   | 52px   | 20px      | 6px | 24px      | button-1 (16px/24px) |
| xxl  | 64px   | 32px      | 6px | 24px      | button-1 (16px/24px) |

---

#### Primary Button (Hierarchy: Primary)
Dark green background, white text. Use for primary CTAs.

```tsx
// Size: md (default)
<button className="bg-primary-green-100 text-white h-[44px] px-20 
  rounded-[1000px] button-1 font-semibold flex items-center justify-center gap-[6px]
  hover:opacity-90 transition-opacity">
  <IconLeft className="size-6" />
  <span>Button CTA</span>
  <IconRight className="size-6" />
</button>

// Size: xl (landing pages, hero CTAs)
<button className="bg-primary-green-100 text-white h-[52px] px-20 
  rounded-[1000px] button-1 font-semibold flex items-center justify-center gap-[6px]">
  <span>Button CTA</span>
</button>

// Size: xxl (prominent hero CTAs)
<button className="bg-primary-green-100 text-white h-[64px] px-32 
  rounded-[1000px] button-1 font-semibold flex items-center justify-center gap-[6px]">
  <span>Button CTA</span>
</button>

// Size: sm (compact areas)
<button className="bg-primary-green-100 text-white h-[36px] px-12 
  rounded-[1000px] button-2 font-semibold flex items-center justify-center gap-[4px]">
  <span>Button CTA</span>
</button>

// Disabled state
<button className="bg-primary-green-40 text-primary-green-50 h-[44px] px-20 
  rounded-[1000px] button-1 font-semibold cursor-not-allowed" disabled>
  <span>Button CTA</span>
</button>
```

---

#### Secondary Button (Hierarchy: Secondary)
White background, dark green text. Use for secondary actions alongside primary.

```tsx
// Size: md
<button className="bg-white text-primary-green-100 h-[44px] px-20 
  rounded-[1000px] button-1 font-semibold flex items-center justify-center gap-[6px]
  hover:bg-primary-green-20 transition-colors">
  <span>Button CTA</span>
</button>

// Size: xl
<button className="bg-white text-primary-green-100 h-[52px] px-20 
  rounded-[1000px] button-1 font-semibold flex items-center justify-center gap-[6px]">
  <span>Button CTA</span>
</button>

// Size: xxl
<button className="bg-white text-primary-green-100 h-[64px] px-32 
  rounded-[1000px] button-1 font-semibold flex items-center justify-center gap-[6px]">
  <span>Button CTA</span>
</button>

// Size: sm
<button className="bg-white text-primary-green-100 h-[36px] px-12 
  rounded-[1000px] button-2 font-semibold flex items-center justify-center gap-[4px]">
  <span>Button CTA</span>
</button>
```

---

#### Tertiary Button (Hierarchy: Tertiary color)
Transparent with subtle border. Use for tertiary actions, filters, or ghost buttons.

```tsx
// Size: md
<button className="border border-black/10 text-primary-green-100 h-[44px] px-20 
  rounded-[1000px] button-1 font-semibold flex items-center justify-center gap-[6px]
  hover:bg-black/5 transition-colors">
  <span>Button CTA</span>
</button>

// Size: xl
<button className="border border-black/10 text-primary-green-100 h-[52px] px-20 
  rounded-[1000px] button-1 font-semibold flex items-center justify-center gap-[6px]">
  <span>Button CTA</span>
</button>

// Size: xxl
<button className="border border-black/10 text-primary-green-100 h-[64px] px-32 
  rounded-[1000px] button-1 font-semibold flex items-center justify-center gap-[6px]">
  <span>Button CTA</span>
</button>

// Size: sm
<button className="border border-black/10 text-primary-green-100 h-[36px] px-12 
  rounded-[1000px] button-2 font-semibold flex items-center justify-center gap-[4px]">
  <span>Button CTA</span>
</button>
```

---

#### Blur Button (Hierarchy: Blur)
Glass-morphism effect for use on images/dark backgrounds. Uses backdrop blur.

```tsx
// Size: md
<button className="bg-[rgba(3,46,45,0.24)] backdrop-blur-[10px] text-white h-[44px] px-20 
  rounded-[1000px] button-1 font-semibold flex items-center justify-center gap-[6px]">
  <span>Button CTA</span>
</button>

// Size: xl
<button className="bg-[rgba(3,46,45,0.24)] backdrop-blur-[10px] text-white h-[52px] px-20 
  rounded-[1000px] button-1 font-semibold flex items-center justify-center gap-[6px]">
  <span>Button CTA</span>
</button>

// Size: xxl
<button className="bg-[rgba(3,46,45,0.24)] backdrop-blur-[10px] text-white h-[64px] px-32 
  rounded-[1000px] button-1 font-semibold flex items-center justify-center gap-[6px]">
  <span>Button CTA</span>
</button>

// Size: sm
<button className="bg-[rgba(3,46,45,0.24)] backdrop-blur-[10px] text-white h-[36px] px-12 
  rounded-[1000px] button-2 font-semibold flex items-center justify-center gap-[4px]">
  <span>Button CTA</span>
</button>

// CSS variable alternative
<button className="bg-secondary-background-blur backdrop-blur-[10px] text-white ...">
```

---

#### Link Button (Hierarchy: Link)
Text-only with underline. Use for inline actions or navigation.

```tsx
// Default - underlined, no padding
<button className="text-primary-green-90 underline decoration-solid 
  button-1 font-semibold flex items-center gap-[6px]
  hover:text-primary-green-100 transition-colors">
  <IconLeft className="size-6" />
  <span>Button CTA</span>
  <IconRight className="size-6" />
</button>

// Size: sm
<button className="text-primary-green-90 underline decoration-solid 
  button-2 font-semibold flex items-center gap-[4px]">
  <span>Button CTA</span>
</button>
```

---

#### Icon-Only Buttons
Circular buttons with icon only. Great for actions like arrows, close, menu.

```tsx
// Primary icon-only (md: 44px)
<button className="bg-primary-green-100 text-white size-[44px] 
  rounded-full flex items-center justify-center">
  <ArrowIcon className="size-6" />
</button>

// Primary icon-only (xl: 52px)
<button className="bg-primary-green-100 text-white size-[52px] 
  rounded-full flex items-center justify-center">
  <ArrowIcon className="size-6" />
</button>

// Secondary icon-only (md: 44px)
<button className="bg-white text-primary-green-100 size-[44px] 
  rounded-full flex items-center justify-center">
  <ArrowIcon className="size-6" />
</button>

// Secondary icon-only (xl: 52px)
<button className="bg-white text-primary-green-100 size-[52px] 
  rounded-full flex items-center justify-center">
  <ArrowIcon className="size-6" />
</button>

// Tertiary icon-only (md: 44px)
<button className="border border-black/10 text-primary-green-100 size-[44px] 
  rounded-full flex items-center justify-center">
  <ChevronIcon className="size-6" />
</button>

// Blur icon-only (md: 44px)
<button className="bg-[rgba(3,46,45,0.24)] backdrop-blur-[10px] text-white size-[44px] 
  rounded-full flex items-center justify-center">
  <ArrowIcon className="size-6" />
</button>

// Small sizes (sm: 36px, xs: 32px)
<button className="bg-primary-green-100 text-white size-[36px] rounded-full flex items-center justify-center">
  <ArrowIcon className="size-6" />
</button>
<button className="bg-primary-green-100 text-white size-[32px] rounded-full flex items-center justify-center">
  <ArrowIcon className="size-6" />
</button>
```

---

#### Button Decision Tree

```
Need a button?
├── Primary action (most important)
│   └── Use: Primary Button
│       ├── Hero CTA → xxl or xl
│       ├── Form submit → md or xl
│       └── Card CTA → sm or md
│
├── Secondary action (alongside primary)
│   └── Use: Secondary Button
│       └── Same size as adjacent primary
│
├── Tertiary action (less emphasis)
│   └── Use: Tertiary Button
│       └── Filters, toggles, ghost actions
│
├── On dark/image background
│   └── Use: Blur Button
│       └── Hero overlays, image cards
│
├── Inline text action
│   └── Use: Link Button
│       └── "Learn more", navigation links
│
└── Icon action only
    └── Use: Icon-Only Button
        └── Arrows, close, menu, expand
```

---

#### Common Button Patterns

```tsx
// Hero CTA pair
<div className="flex gap-16">
  <button className="bg-white text-primary-green-100 h-[52px] px-20 rounded-[1000px] button-1 font-semibold">
    Get Started
  </button>
  <button className="bg-[rgba(3,46,45,0.24)] backdrop-blur-[10px] text-white h-[52px] px-20 rounded-[1000px] button-1 font-semibold">
    Learn More
  </button>
</div>

// Card CTA with arrow
<div className="flex items-center justify-between">
  <h3 className="headline-4">Card Title</h3>
  <button className="bg-white text-primary-green-100 size-[52px] rounded-full flex items-center justify-center">
    <ArrowRightIcon className="size-6" />
  </button>
</div>

// Nav button pair
<div className="flex gap-16">
  <button className="bg-white text-primary-green-100 h-[52px] px-32 rounded-[1000px] button-1 font-semibold">
    Button CTA
  </button>
  <button className="bg-secondary-background-blur backdrop-blur-[10px] text-white h-[52px] px-32 rounded-[1000px] button-1 font-semibold">
    Button CTA
  </button>
</div>

// Form actions
<div className="flex gap-12">
  <button className="bg-primary-green-100 text-white h-[44px] px-20 rounded-[1000px] button-1 font-semibold">
    Submit
  </button>
  <button className="border border-black/10 text-primary-green-100 h-[44px] px-20 rounded-[1000px] button-1 font-semibold">
    Cancel
  </button>
</div>
```

### Tags/Pills

#### Light Tag (on cards)
```tsx
<span className="bg-white/30 px-12 py-6 rounded-24 caption-1 text-primary-green-100">
  2000 Grafts
</span>
```

#### Outlined Tag
```tsx
<span className="border border-primary-brown-30 px-12 py-4 rounded-24 
  caption-3 text-primary-brown-30">
  Hair Transplant
</span>
```

### Cards

#### Procedure Card (Image with Title)
```tsx
<div className="relative h-[533px] w-[438px] rounded-32 overflow-hidden">
  <img src="..." className="absolute inset-0 object-cover size-full" />
  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/36 to-transparent 
    p-24 flex flex-col gap-32 justify-end">
    <h3 className="title-1 text-white">Scalp Micropigmentation</h3>
    <button className="bg-white size-[52px] rounded-full flex items-center justify-center">
      <ArrowRightIcon />
    </button>
  </div>
</div>
```

#### Article Card (Image with Tag + Title)
```tsx
<div className="relative h-[632px] w-[592px] rounded-32 overflow-hidden">
  <img src="..." className="absolute inset-0 object-cover size-full" />
  <div className="absolute inset-0 bg-black/10" /> {/* Overlay */}
  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/36 to-transparent 
    px-28 py-32 flex flex-col gap-8 justify-end">
    <span className="border border-primary-brown-30 px-12 py-4 rounded-24 
      caption-3 text-primary-brown-30 self-start">
      Hair Transplant
    </span>
    <div className="flex items-center gap-24">
      <h3 className="title-1 text-white flex-1">What makes a top hair clinic?</h3>
      <button className="bg-white size-[44px] rounded-full">
        <ArrowRightIcon />
      </button>
    </div>
  </div>
</div>
```

#### Benefit Card (Large with CTA)
```tsx
<div className="relative h-[632px] w-[900px] rounded-32 overflow-hidden">
  <img src="..." className="absolute inset-0 object-cover size-full" />
  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent 
    px-48 pb-40 pt-80 flex flex-col gap-32">
    <div className="flex flex-col gap-16 text-white">
      <h3 className="headline-6">The experience</h3>
      <p className="body-2">Embark on a journey with clinics handpicked by Luxxera...</p>
    </div>
    <button className="bg-white text-primary-green-100 h-[52px] px-32 
      rounded-[1000px] button-1 font-semibold self-start">
      Button CTA
    </button>
  </div>
</div>
```

#### Quiz Cards (Step Cards)
```tsx
// Brown variant (Step 1)
<div className="bg-primary-brown-10 p-32 rounded-32 flex flex-col gap-32">
  <span className="bg-white/30 px-12 py-6 rounded-24 caption-1 text-primary-green-100 self-start">
    2000 Grafts
  </span>
  <h3 className="headline-4 text-primary-brown-100">Take a Quiz</h3>
</div>

// Light green variant (Step 2)
<div className="bg-primary-green-40 p-32 rounded-32 flex flex-col gap-32">
  <span className="bg-white/30 px-12 py-6 rounded-24 caption-1 text-primary-green-100 self-start">
    2000 Grafts
  </span>
  <h3 className="headline-4 text-primary-green-100">Select your Clinic</h3>
</div>

// Teal variant (Step 3)
<div className="bg-primary-green-80 p-32 rounded-32 flex flex-col gap-32">
  <span className="bg-white/30 px-12 py-6 rounded-24 caption-1 text-primary-green-100 self-start">
    2000 Grafts
  </span>
  <div className="flex items-center justify-between">
    <h3 className="headline-4 text-primary-green-30">Travel for Treatment</h3>
    <button className="bg-white size-[52px] rounded-full">
      <ArrowRightIcon />
    </button>
  </div>
</div>
```

### Navigation

```tsx
<nav className="fixed top-4 left-4 right-4 h-[100px] px-48 flex items-center justify-between z-50">
  {/* Logo */}
  <Logo className="h-[27px]" />
  
  {/* Nav Links (Glass container) */}
  <div className="backdrop-blur-[10px] bg-secondary-background-blur rounded-60 p-6 flex gap-40">
    <a className="px-[132px] py-2 button-1 text-primary-neutral-background">Ticket</a>
    <a className="px-[132px] py-2 button-1 text-primary-neutral-background">Ticket</a>
    <a className="px-[132px] py-2 button-1 text-primary-neutral-background">Ticket</a>
  </div>
  
  {/* CTA Buttons */}
  <div className="flex gap-16">
    <button className="bg-white text-primary-green-100 h-[52px] px-32 rounded-[1000px]">
      Button CTA
    </button>
    <button className="backdrop-blur bg-secondary-background-blur text-white h-[52px] px-32 rounded-[1000px]">
      Button CTA
    </button>
  </div>
</nav>
```

### FAQ/Accordion

```tsx
<div className="bg-primary-green-40 px-24 py-16 rounded-24 flex items-center justify-between">
  <div className="flex gap-24 items-center title-2 text-primary-green-100">
    <span>01</span>
    <span>How do I choose the right treatment for me?</span>
  </div>
  <button className="size-[48px]">
    <ChevronDownIcon />
  </button>
</div>
```

---

## Section Patterns

### Hero Section
```tsx
<section className="pt-16 px-16">
  <div className="relative h-[1048px] rounded-40 overflow-hidden">
    <img src="..." className="absolute inset-0 object-cover size-full" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center gap-32 max-w-[1132px] text-center">
        <h1 className="headline-3 font-serif text-white">
          With dedication to every detail, we make sure your hair restoration journey is{' '}
          <span className="italic text-primary-neon">smooth and flawless.</span>
        </h1>
        <button className="bg-white text-primary-green-100 h-[52px] px-32 rounded-[1000px]">
          Button CTA
        </button>
      </div>
    </div>
  </div>
</section>
```

### Two-Column Header + Grid
```tsx
<section className="px-spacing-global-1 py-spacing-global-2">
  <div className="flex flex-col gap-60">
    {/* Header with text + supporting text */}
    <div className="flex gap-24 items-end justify-between">
      <h2 className="headline-1 text-white max-w-[746px]">
        Trusted, carefully selected partner clinics for{' '}
        <span className="italic text-primary-neon">exceptional care</span>
      </h2>
      <p className="body-1 text-white/80 max-w-[752px]">
        Our vetted network of top clinics ensures you receive safe, quality care...
      </p>
    </div>
    
    {/* Grid content */}
    <div className="grid grid-cols-4 gap-24">
      {/* Cards */}
    </div>
  </div>
</section>
```

### Centered Header + Card Grid
```tsx
<section className="px-spacing-global-1 py-spacing-global-2">
  <div className="flex flex-col gap-60 items-center">
    <div className="flex flex-col gap-20 items-center text-center max-w-[752px]">
      <h2 className="headline-3 text-primary-green-100">
        Explore our treatments
      </h2>
      <p className="body-2 text-primary-green-100">
        Discover a range of effective cosmetic procedures...
      </p>
    </div>
    
    <div className="flex gap-24">
      {/* Cards */}
    </div>
  </div>
</section>
```

### Dark Section
```tsx
<section className="bg-primary-green-100 px-spacing-global-1 py-spacing-global-2">
  {/* Content with light text */}
  <h2 className="headline-1 text-white">...</h2>
  <p className="body-1 text-white/80">...</p>
  <button className="bg-white text-primary-green-100">...</button>
</section>
```

---

## Image Treatment

### Gradient Overlays
```tsx
// Bottom gradient (for text on images)
<div className="bg-gradient-to-t from-black/36 to-transparent" />
<div className="bg-gradient-to-t from-black/50 to-transparent" />

// Dark overlay (for readability)
<div className="bg-black/10" />
```

### Image Containers
```tsx
// Absolute positioned, object-cover
<img className="absolute inset-0 object-cover size-full" />

// With rounded corners on parent
<div className="relative rounded-32 overflow-hidden">
  <img className="absolute inset-0 object-cover size-full" />
</div>
```

---

## DO's and DON'Ts

### ✅ DO
- Use fluid typography and spacing for responsiveness
- Apply gradient overlays on images with text
- Use the 3-color card rotation (brown, light green, teal)
- Keep generous whitespace between sections
- Use italic serif for accent words in headlines
- Round all corners generously (24-48px on cards)
- Use subtle backdrop blur for glass effects

### ❌ DON'T
- Use pure black (#000) for text — use `primary-green-100`
- Use hard edges — everything should have rounded corners
- Put raw text over images without gradients
- Use more than 2 fonts
- Use tight line-height on body text
- Create busy layouts — embrace whitespace
- Use generic blue or red colors

---

## CSS Utilities Reference

```css
/* Custom utilities defined in app.css */
.display          /* Display heading */
.headline-1 to .headline-7
.title-1 to .title-7
.body-1 to .body-5
.caption-1 to .caption-3
.button-1, .button-2
.sub-headline-2, .sub-headline-3
.container        /* Centered container with padding */
.grid-default     /* 4-col mobile, 12-col desktop grid */
.grid-horizontal  /* Horizontal scroll mobile, grid desktop */
.default-link     /* Underlined link style */
.white-20-blur    /* Glass effect */
.bg-primary-green-hover  /* Hover state for green buttons */
```

---

## Quick Reference

### Most Used Classes
```
bg-primary-neutral-background    Page background
bg-primary-green-100            Primary buttons, dark sections
bg-primary-green-40             Light card backgrounds
bg-primary-green-80             Teal card backgrounds
bg-primary-brown-10             Brown card backgrounds
text-primary-green-100          Primary text
text-primary-green-90           Secondary text
text-white                      Text on dark backgrounds
text-primary-neon               Accent text on dark
rounded-32                      Standard card radius
rounded-40                      Large card/hero radius
rounded-[1000px]                Buttons, pills
p-32 or p-spacing-48-24         Card padding
gap-24                          Card grid gaps
gap-60 or gap-60-24             Section content gaps
px-spacing-global-1             Container horizontal padding
py-spacing-global-2             Section vertical padding
```
