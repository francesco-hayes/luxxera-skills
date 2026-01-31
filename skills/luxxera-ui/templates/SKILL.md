# Luxxera UI Skill

## Description

**Luxxera UI Builder**: Generate premium healthcare landing pages and React components following the Luxxera design system, built on Shadcn UI.

**MANDATORY TRIGGERS**: Luxxera, landing page, healthcare UI, clinic page, treatment page, Luxxera component, Luxxera button, Luxxera card, Shadcn Luxxera

## Overview

This skill enables you to build pixel-perfect Luxxera web interfaces using **Shadcn UI as the base component library**, customized with Luxxera design tokens. The design system emphasizes a **luxurious, trustworthy, calm, and sophisticated** aesthetic for a premium healthcare platform.

## Technology Stack

- **Component Library**: Shadcn UI (customized)
- **Styling**: Tailwind CSS with Luxxera design tokens
- **Primitives**: Radix UI (via Shadcn)
- **Variant Management**: class-variance-authority (CVA)

## Quick Start

Before generating any Luxxera UI code:

1. **Read the relevant rules** from the `rules/` directory
2. **Check foundations first** (colors, typography, spacing)
3. **Use established components** (buttons, cards, tags)
4. **Follow section patterns** (hero, content, dark sections)

## File Structure

```
luxxera-agent/
├── AGENTS.md                    # Agent identity and workflow
├── SKILL.md                     # This file
├── rules/
│   ├── foundations/
│   │   ├── shadcn.md            # Shadcn UI integration guide (READ FIRST)
│   │   ├── colors.md            # Color palette and usage
│   │   ├── typography.md        # Fonts, scales, patterns
│   │   ├── spacing.md           # Fixed and fluid spacing
│   │   └── layout.md            # Containers and grids
│   ├── components/
│   │   ├── buttons.md           # Button system
│   │   ├── cards.md             # Card variants
│   │   ├── inputs.md            # Input fields and forms
│   │   ├── tags.md              # Tags and pills
│   │   ├── navigation.md        # Nav patterns
│   │   └── accordion.md         # FAQ/expandable
│   └── patterns/
│       ├── hero-sections.md     # Hero layouts
│       ├── content-sections.md  # Section composition
│       ├── articles.md          # Blog/article page formatting
│       ├── image-treatment.md   # Overlays and containers
│       └── best-practices.md    # DO's and DON'Ts
└── LUXXERA_DESIGN_SYSTEM.md     # Full reference document
```

## Usage Instructions

### Shadcn-First Approach

**Always use Shadcn UI components as the base** - never build from scratch if Shadcn provides it:

```
1. Read rules/foundations/shadcn.md first
2. Use Shadcn components (Button, Card, Badge, etc.)
3. Apply Luxxera variants via CVA or className overrides
4. Preserve Radix primitives and accessibility features
```

### When building a new page section:

```
1. Read rules/foundations/shadcn.md for component approach
2. Read rules/patterns/[section-type].md
3. Read rules/foundations/colors.md for color context
4. Read rules/foundations/typography.md for text styles
5. Read rules/components/[needed-components].md
6. Generate code following the patterns
```

### When building an article/blog page:

```
1. Read rules/patterns/articles.md for complete structure
2. Use 900px max-width for article body content
3. Use paragraph-1 (20px/32px) for body text
4. Use headline-5 (36px) for section headers
5. Include callouts, tables, and images per the patterns
6. Add related articles section at bottom
```

### When creating a component:

```
1. Read rules/components/[component].md
2. Check rules/foundations/spacing.md for padding/gaps
3. Apply rules/best-practices.md guidelines
4. Generate code with proper Tailwind classes
```

### When reviewing existing code:

```
1. Read rules/patterns/best-practices.md
2. Cross-reference against foundation rules
3. Identify violations and suggest corrections
```

## Key Design Tokens

### Colors (always use these classes)
- **Page background**: `bg-primary-neutral-background`
- **Primary text**: `text-primary-green-100`
- **Secondary text**: `text-primary-green-90`
- **Primary buttons**: `bg-primary-green-100 text-white`
- **Accent text (dark bg)**: `text-primary-neon`
- **Italic accents**: `text-primary-brown-30`
- **Status (pending)**: `bg-primary-blue-10 text-primary-blue-100`
- **Status (success)**: `bg-[rgba(20,170,105,0.12)] text-primary-state-success`
- **Error state**: `text-primary-state-error border-primary-state-error`
- **Input labels**: `text-primary-green-80`
- **Placeholder/hint**: `text-primary-green-60`

### Typography (contextual usage)
**Headlines:**
- **Page title** (clinic/profile): `headline-2` (56px, serif)
- **Hero overlay**: `headline-4` (40px, sans)
- **Primary section**: `headline-6` (32px, sans) - e.g., "Appointment details"
- **Content section**: `headline-7` (28px, sans) - e.g., "About", "Services"

**Titles:**
- **Group header**: `title-1` (24px) - e.g., "Clinic Info", "Payment info"
- **Key values**: `title-2` (22px) - dates, prices, service names
- **List items**: `title-3` (20px) - clickable rows with chevrons
- **Card titles**: `title-4` (18px) - reviewer names, status items
- **Tabs/metadata**: `title-5` (16px) - navigation, counts

**Body:**
- **Review text**: `paragraph-2` (18px)
- **Body text**: `paragraph-3` (16px)
- **Small labels**: `paragraph-4` (14px) - timestamps, field labels
- **Tags**: `caption-3` (12px)

See `typography.md` for full decision tree and examples.

### Spacing (fluid values)
- **Section padding**: `px-spacing-global-1 py-spacing-global-2`
- **Content gaps**: `gap-60` or `gap-60-24`
- **Card grid gaps**: `gap-24`
- **Card padding**: `p-32` or `p-spacing-48-24`

### Border Radius
- **Buttons**: `rounded-[1000px]`
- **Cards**: `rounded-32` (large) / `rounded-24` (small)
- **Inputs**: `rounded-[10px]`
- **Hero images**: `rounded-40`
- **Status labels**: `rounded-4`

### Card Categories
The card system includes multiple categories:
- **Landing Page Cards**: Procedure, Article, Benefit (image-based)
- **App/Selection Cards**: Goal, Treatment Selection, Advanced (interactive)
- **Transaction/Data Cards**: Transaction, Pricing, Patient (data display)
- **Process Cards**: Process, Quiz/Step (flow indicators)

## Common Patterns

### Section with Centered Header
```tsx
<section className="px-spacing-global-1 py-spacing-global-2">
  <div className="flex flex-col gap-60 items-center">
    <div className="flex flex-col gap-20 items-center text-center max-w-[752px]">
      <h2 className="headline-3 text-primary-green-100">
        Section title with <span className="font-serif italic text-primary-brown-30">accent</span>
      </h2>
      <p className="body-2 text-primary-green-90">Supporting text...</p>
    </div>
    {/* Content grid */}
  </div>
</section>
```

### Primary Button (xl)
```tsx
<button className="bg-primary-green-100 text-white h-[52px] px-20
  rounded-[1000px] button-1 font-semibold flex items-center justify-center">
  Button CTA
</button>
```

### Card with Gradient Overlay
```tsx
<div className="relative rounded-32 overflow-hidden">
  <img className="absolute inset-0 object-cover size-full" />
  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/36 to-transparent p-24">
    {/* Content */}
  </div>
</div>
```

### Input Field with Label
```tsx
<div className="flex flex-col gap-2">
  <label className="flex gap-1 text-base font-medium text-primary-green-80">
    Email <span className="text-primary-state-error">*</span>
  </label>
  <input
    className="h-14 rounded-[10px] border border-black/10 px-4 text-base
      text-primary-green-100 placeholder:text-primary-green-60
      focus:border-primary-green-100 focus:outline-none"
    placeholder="olivia@untitledui.com"
  />
  <p className="text-sm text-primary-green-60">This is a hint text.</p>
</div>
```

## Shadcn Component Mapping

| Luxxera Element | Shadcn Base | Luxxera Customization |
|-----------------|-------------|----------------------|
| Primary Button | `<Button>` | `variant="default"` + Luxxera colors, pill radius |
| Secondary Button | `<Button>` | `variant="secondary"` + white bg, green text |
| Outline Button | `<Button>` | `variant="outline"` + 10% black border |
| Cards | `<Card>` | `rounded-32`, Luxxera padding, color rotation |
| Tags | `<Badge>` | `rounded-24`, caption typography |
| Status Labels | `<Badge>` | Blue/green state colors, `rounded-4` |
| Accordion | `<Accordion>` | Custom chevron, Luxxera spacing |
| Navigation | `<NavigationMenu>` | Serif typography, Luxxera hover states |
| Inputs | `<Input>` | `rounded-[10px]`, green-100 focus border, green-80 labels |
| Form Field | `<Input>` + `<Label>` | With hint text, error states, leading/trailing icons |
| Dialogs | `<Dialog>` | `rounded-32`, generous padding |

## Validation Checklist

Before finalizing any output, verify:

### Design System
- [ ] Using `primary-green-100` for text (never pure black)
- [ ] All corners are rounded (24-48px on cards)
- [ ] Images have gradient overlays when text overlaps
- [ ] Only 2 fonts used (serif for display, sans for body)
- [ ] Generous whitespace between sections
- [ ] Buttons use `rounded-[1000px]`
- [ ] Italic serif used for accent words in headlines

### Shadcn Integration
- [ ] Using Shadcn components as base (not building from scratch)
- [ ] Focus states use Luxxera double-ring: `shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969]`
- [ ] CVA variants defined for Luxxera-specific styling
- [ ] Radix primitives and accessibility features preserved
- [ ] CSS custom properties used for Luxxera tokens
