# Shadcn UI Integration

Luxxera uses [Shadcn UI](https://ui.shadcn.com/) as the base component library, customized to match the Luxxera design system.

## Philosophy

1. **Start with Shadcn** - Use Shadcn components as the foundation
2. **Customize styling** - Override default styles to match Luxxera's visual language
3. **Extend when needed** - Add Luxxera-specific variants and components
4. **Maintain accessibility** - Preserve Shadcn's built-in accessibility features

## Installation

Shadcn components should be installed via the CLI:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
# etc.
```

## Customization Approach

### CSS Variables

Configure Shadcn's CSS variables to use Luxxera colors in `globals.css` or `app.css`:

```css
@layer base {
  :root {
    /* Luxxera Primary Green */
    --primary: 171 47% 21%;           /* #1b4d4d - green-100 */
    --primary-foreground: 0 0% 100%;  /* white */

    /* Luxxera Secondary (for secondary buttons) */
    --secondary: 0 0% 100%;           /* white */
    --secondary-foreground: 171 47% 21%; /* green-100 */

    /* Luxxera Backgrounds */
    --background: 60 8% 92%;          /* #edede9 - neutral background */
    --foreground: 171 47% 21%;        /* green-100 */

    /* Luxxera Muted */
    --muted: 160 18% 85%;             /* #cde0d2 - green-40 */
    --muted-foreground: 171 18% 50%;  /* green-60 */

    /* Luxxera Accent (Brown) */
    --accent: 35 50% 58%;             /* #bc9d6e - brown-10 */
    --accent-foreground: 35 68% 18%;  /* brown-100 */

    /* Borders & Inputs */
    --border: 0 0% 0% / 0.1;          /* black/10 */
    --input: 0 0% 0% / 0.1;           /* black/10 */
    --ring: 171 41% 29%;              /* #2c6969 - green-80 (focus ring) */

    /* Radius - Luxxera uses larger radius */
    --radius: 1.5rem;                 /* 24px base */
  }
}
```

### Tailwind Config

Extend Tailwind config to include Luxxera tokens:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          green: {
            100: '#1b4d4d',
            90: '#275c5c',
            80: '#2c6969',
            70: '#526969',
            60: '#699695',
            50: '#7ba9a9',
            40: '#cde0d2',
            30: '#dce9e6',
            20: '#e8eeec',
          },
          brown: {
            100: '#4b330f',
            50: '#946e34',
            30: '#ae8443',
            10: '#bc9d6e',
          },
          neon: '#cdf765',
          neutral: {
            background: '#edede9',
            divider: '#d4d4ce',
          },
          blue: {
            100: '#3769e6',
            10: '#dce8fe',
          },
          state: {
            success: '#199a66',
          },
        },
      },
      borderRadius: {
        '4': '0.25rem',
        '16': '1rem',
        '20': '1.25rem',
        '24': '1.5rem',
        '28': '1.75rem',
        '32': '2rem',
        '40': '2.5rem',
        '48': '3rem',
        '1000': '1000px',
      },
    },
  },
}
```

---

## Component Overrides

### Button

Override Shadcn's Button to match Luxxera styling:

```tsx
// components/ui/button.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // Base styles - Luxxera specific
  "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969] disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        // Primary - dark green bg, white text
        default: "bg-primary-green-100 text-white hover:bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),#1b4d4d] disabled:bg-primary-green-40 disabled:text-primary-green-50",

        // Secondary - white bg, green text
        secondary: "bg-white text-primary-green-100 hover:bg-primary-green-20 focus:border focus:border-primary-green-50 disabled:text-primary-green-50",

        // Tertiary - border only
        outline: "border border-black/10 text-primary-green-100 hover:bg-black/5 focus:border-primary-green-50 disabled:text-primary-green-50 disabled:border-black/5",

        // Blur - glass morphism
        blur: "bg-[rgba(3,46,45,0.24)] backdrop-blur-[10px] text-white hover:bg-[rgba(3,46,45,0.40)] disabled:bg-[rgba(3,46,45,0.12)] disabled:text-white/50",

        // Link - text only with underline
        link: "text-primary-green-90 underline decoration-solid hover:text-primary-green-100 disabled:text-primary-green-50",

        // Ghost - for backwards compatibility
        ghost: "hover:bg-black/5 text-primary-green-100",
      },
      size: {
        xs: "h-8 w-8 rounded-full", // 32px, icon only
        sm: "h-9 px-3 gap-1 rounded-[1000px] text-sm", // 36px
        default: "h-11 px-5 gap-1.5 rounded-[1000px]", // 44px
        lg: "h-[52px] px-5 gap-1.5 rounded-[1000px]", // 52px (xl)
        xl: "h-16 px-8 gap-1.5 rounded-[1000px]", // 64px (xxl)
        icon: "h-11 w-11 rounded-full", // 44px icon
        "icon-sm": "h-9 w-9 rounded-full", // 36px icon
        "icon-lg": "h-[52px] w-[52px] rounded-full", // 52px icon
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

**Usage:**
```tsx
// Primary button (default)
<Button>Get Started</Button>

// Secondary button
<Button variant="secondary">Learn More</Button>

// Tertiary button
<Button variant="outline">Cancel</Button>

// Blur button (on dark backgrounds)
<Button variant="blur">View Details</Button>

// Link button
<Button variant="link">Read more</Button>

// Size variants
<Button size="sm">Small</Button>
<Button size="lg">Large (xl)</Button>
<Button size="xl">Extra Large (xxl)</Button>

// Icon-only
<Button size="icon"><ArrowRight /></Button>
<Button size="icon-lg" variant="secondary"><ArrowRight /></Button>
```

---

### Card

Override Shadcn's Card to match Luxxera styling:

```tsx
// components/ui/card.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "rounded-32 overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-white",
        brown: "bg-primary-brown-10",
        green: "bg-primary-green-40",
        teal: "bg-primary-green-80",
        outline: "bg-white border border-black/10",
        image: "relative", // For image cards with overlays
      },
      padding: {
        none: "",
        sm: "p-5", // 20px
        default: "p-8", // 32px
        lg: "p-12", // 48px
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, padding, className }))}
      {...props}
    />
  )
)
Card.displayName = "Card"

// Keep existing Shadcn card parts
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-4", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("title-1 text-primary-green-100", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("body-3 text-primary-green-90", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants }
```

**Usage:**
```tsx
// Default white card
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>Content here</CardContent>
</Card>

// Brown variant (for step cards)
<Card variant="brown">...</Card>

// Green variant
<Card variant="green">...</Card>

// Teal variant
<Card variant="teal">...</Card>

// Outlined card
<Card variant="outline">...</Card>
```

---

### Input

Override Shadcn's Input to match Luxxera styling:

```tsx
// components/ui/input.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  // Base styles
  [
    "flex w-full rounded-[10px] border bg-transparent",
    "text-primary-green-100 placeholder:text-primary-green-60",
    "transition-colors duration-200",
    "focus:outline-none focus:border-primary-green-100",
    "disabled:cursor-not-allowed disabled:bg-black/[0.02] disabled:text-primary-green-60",
  ],
  {
    variants: {
      size: {
        default: "h-14 px-4 text-base",  // 56px - Large
        sm: "h-[52px] px-[14px] text-sm", // 52px - Small
      },
      error: {
        true: "border-primary-state-error focus:border-primary-state-error",
        false: "border-black/10",
      },
    },
    defaultVariants: {
      size: "default",
      error: false,
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ size, error, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }
```

**Usage:**
```tsx
// Default input (large)
<Input placeholder="Enter email" />

// Small input
<Input size="sm" placeholder="Enter email" />

// Error state
<Input error placeholder="Invalid email" />

// Disabled
<Input disabled placeholder="Cannot edit" />
```

**Form Field Wrapper:**
```tsx
// Combine with Label and hint text
<div className="flex flex-col gap-2">
  <label className="flex gap-1 text-base font-medium tracking-[-0.32px] text-primary-green-80">
    Email <span className="text-primary-state-error">*</span>
  </label>
  <Input placeholder="olivia@untitledui.com" />
  <p className="text-sm text-primary-green-60">This is a hint text.</p>
</div>
```

See `rules/components/inputs.md` for complete form field patterns.

---

### Badge (Status Labels)

Create a Badge component for status labels:

```tsx
// components/ui/badge.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center px-2.5 py-1 rounded-4 title-7 font-semibold",
  {
    variants: {
      variant: {
        default: "bg-primary-green-40 text-primary-green-100",
        pending: "bg-primary-blue-10 text-primary-blue-100",
        success: "bg-[rgba(20,170,105,0.12)] text-primary-state-success",
        outline: "border border-primary-brown-30 text-primary-brown-30 bg-transparent",
        light: "bg-white/30 text-primary-green-100",
        neon: "bg-primary-neon text-primary-green-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
```

**Usage:**
```tsx
// Status labels
<Badge variant="pending">Pending</Badge>
<Badge variant="success">Paid</Badge>

// Tags
<Badge variant="outline">Hair Transplant</Badge>
<Badge variant="light">2000 Grafts</Badge>
<Badge variant="neon">New</Badge>
```

---

## Component Mapping

| Luxxera Component | Shadcn Base | Customizations |
|-------------------|-------------|----------------|
| Primary Button | `Button` | Green bg, white text, Luxxera focus ring |
| Secondary Button | `Button variant="secondary"` | White bg, green text |
| Tertiary Button | `Button variant="outline"` | Border only |
| Blur Button | `Button variant="blur"` | Glass morphism (custom) |
| Link Button | `Button variant="link"` | Underlined text |
| Card | `Card` | Larger radius, color variants |
| Input | `Input` | Green focus ring, Luxxera placeholder color |
| Tag/Badge | `Badge` | Multiple variants for status/tags |
| Accordion | `Accordion` | Green-40 background, custom styling |
| Dialog/Modal | `Dialog` | Luxxera colors and radius |
| Select | `Select` | Custom trigger styling |
| Checkbox | `Checkbox` | Green-100 checked state |
| Radio | `RadioGroup` | Green-100 selected state |

---

## Best Practices

### 1. Always Use Shadcn Components

```tsx
// ✅ Good - use Shadcn Button
import { Button } from "@/components/ui/button"
<Button variant="secondary">Click me</Button>

// ❌ Bad - raw HTML button
<button className="bg-white text-primary-green-100 ...">Click me</button>
```

### 2. Extend, Don't Replace

When you need a new variant, add it to the existing component:

```tsx
// ✅ Good - add variant to buttonVariants
const buttonVariants = cva("...", {
  variants: {
    variant: {
      // ... existing variants
      custom: "your-custom-classes",
    }
  }
})

// ❌ Bad - create a completely new component
const CustomButton = () => <button>...</button>
```

### 3. Use CVA for Variants

Always use `class-variance-authority` for variant management:

```tsx
import { cva, type VariantProps } from "class-variance-authority"

const componentVariants = cva("base-classes", {
  variants: {
    size: { sm: "...", md: "...", lg: "..." },
    variant: { default: "...", outline: "..." },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
})
```

### 4. Preserve Accessibility

Shadcn components are built with accessibility in mind. Don't remove:
- ARIA attributes
- Keyboard navigation
- Focus management
- Screen reader support

---

## File Structure

```
src/
├── components/
│   └── ui/
│       ├── button.tsx      # Customized Shadcn Button
│       ├── card.tsx        # Customized Shadcn Card
│       ├── input.tsx       # Customized Shadcn Input
│       ├── badge.tsx       # Custom Badge (tags/status)
│       ├── accordion.tsx   # Customized Shadcn Accordion
│       └── ...
├── lib/
│   └── utils.ts            # cn() utility function
└── styles/
    └── globals.css         # CSS variables & base styles
```

---

## Critical Rules

1. **Use Shadcn as the base** - Never build components from scratch if Shadcn provides one
2. **Customize via variants** - Add Luxxera-specific variants to existing components
3. **Maintain the focus ring** - Always include `focus:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#2c6969]`
4. **Use Luxxera colors** - Map Shadcn's color system to Luxxera tokens
5. **Keep accessibility** - Never remove Radix primitives or ARIA attributes
6. **Document variants** - Add JSDoc comments explaining when to use each variant
