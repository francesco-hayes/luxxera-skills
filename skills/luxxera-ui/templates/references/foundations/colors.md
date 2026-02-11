# Colors

Luxxera uses a warm, organic color palette that feels luxurious and trustworthy.

## Primary Green (Brand Color)

The primary brand color family. Use for text, buttons, and section backgrounds.

| Token | Hex | Tailwind Class | Use Case |
|-------|-----|----------------|----------|
| green-100 | `#1b4d4d` | `text-primary-green-100`, `bg-primary-green-100` | Main brand, primary text, buttons |
| green-90 | `#275c5c` | `text-primary-green-90` | Secondary text |
| green-80 | `#2c6969` | `bg-primary-green-80` | Card backgrounds, accents |
| green-70 | `#526969` | `text-primary-green-70` | Muted text |
| green-60 | `#699695` | `text-primary-green-60` | Subtle text |
| green-50 | `#7ba9a9` | `text-primary-green-50` | Hover states |
| green-40 | `#cde0d2` | `bg-primary-green-40` | Light card backgrounds |
| green-30 | `#dce9e6` | `bg-primary-green-30` | Light backgrounds |
| green-20 | `#e8eeec` | `bg-primary-green-20` | Subtle backgrounds |

## Primary Brown (Secondary Accent)

Warm accent color for tags, borders, and italic text accents.

| Token | Hex | Tailwind Class | Use Case |
|-------|-----|----------------|----------|
| brown-100 | `#4b330f` | `text-primary-brown-100` | Dark text on brown cards |
| brown-50 | `#946e34` | `text-primary-brown-50` | Accent text |
| brown-30 | `#ae8443` | `text-primary-brown-30`, `border-primary-brown-30` | Tags, borders, italic accents |
| brown-10 | `#bc9d6e` | `bg-primary-brown-10` | Card backgrounds |

## Primary Neon (Highlight)

High-contrast accent for hero sections on dark backgrounds.

| Token | Hex | Tailwind Class | Use Case |
|-------|-----|----------------|----------|
| neon | `#cdf765` | `text-primary-neon` | Hero accent text, CTAs on dark |

## Neutral

Page-level backgrounds and dividers.

| Token | Hex | Tailwind Class | Use Case |
|-------|-----|----------------|----------|
| background | `#edede9` | `bg-primary-neutral-background` | Page background |
| divider | `#d4d4ce` | `border-primary-neutral-divider` | Borders, dividers |

## State Colors

Colors for status indicators and feedback.

| Token | Hex | Tailwind Class | Use Case |
|-------|-----|----------------|----------|
| blue-100 | `#3769e6` | `text-primary-blue-100` | Pending status text |
| blue-10 | `#dce8fe` | `bg-primary-blue-10` | Pending status background |
| success | `#199a66` | `text-primary-state-success` | Paid/success status text |
| success-bg | `rgba(20,170,105,0.12)` | `bg-[rgba(20,170,105,0.12)]` | Paid/success background |
| error | `#ec4747` | `text-primary-state-error`, `border-primary-state-error` | Error text, error borders, required asterisk |

## Utility Colors

Semi-transparent colors for overlays and subtle effects.

| Token | Tailwind Class | Use Case |
|-------|----------------|----------|
| black/2 | `bg-black/2` | Subtle card backgrounds, hover states |
| black/10 | `border-black/10`, `bg-black/10` | Borders, light overlays |
| black/36 | `from-black/36` | Image gradients (light) |
| black/50 | `from-black/50` | Image gradients (strong) |
| white/30 | `bg-white/30` | Tags on colored backgrounds |
| white/100 | `bg-white` | Card backgrounds |

## Usage Rules

### Text Colors

| Context | Class |
|---------|-------|
| Primary text | `text-primary-green-100` |
| Secondary text | `text-primary-green-90` |
| Muted text | `text-primary-green-60` |
| Text on dark backgrounds | `text-white` |
| Accent text on dark (hero) | `text-primary-neon` |
| Italic accent words | `text-primary-brown-30` or `text-primary-brown-50` |

### Background Colors

| Context | Class |
|---------|-------|
| Page background | `bg-primary-neutral-background` |
| Dark sections | `bg-primary-green-100` |
| Card variant 1 (brown) | `bg-primary-brown-10` |
| Card variant 2 (light green) | `bg-primary-green-40` |
| Card variant 3 (teal) | `bg-primary-green-80` |

### Button Colors

| Hierarchy | Background | Text |
|-----------|------------|------|
| Primary | `bg-primary-green-100` | `text-white` |
| Secondary | `bg-white` | `text-primary-green-100` |
| Tertiary | `border border-black/10` | `text-primary-green-100` |
| Blur | `bg-[rgba(3,46,45,0.24)] backdrop-blur-[10px]` | `text-white` |
| Disabled | `bg-primary-green-40` | `text-primary-green-50` |

## Critical Rules

1. **Never use pure black (`#000`)** - Always use `primary-green-100` for dark text
2. **Stick to the palette** - Use green/brown/neon for UI, blue/green only for status labels
3. **Rotate card colors** - Use the 3-color card rotation (brown, light green, teal) for variety
4. **Neon only on dark** - The neon accent is only for dark backgrounds or hero sections
5. **Status colors** - Blue for pending/processing, green for success/paid
