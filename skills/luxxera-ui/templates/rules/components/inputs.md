# Input Fields

Input fields are form controls that follow Luxxera's premium aesthetic with soft borders, clear labels, and helpful guidance text.

## Anatomy

```
┌─────────────────────────────────────┐
│ Label *                             │  ← Label + Required indicator
├─────────────────────────────────────┤
│ ○  Placeholder text            ⓘ   │  ← Input with leading/trailing icons
├─────────────────────────────────────┤
│ This is a hint text to help user.   │  ← Hint text / Error message
└─────────────────────────────────────┘
```

## Sizes

### Large (Default)

| Property | Value | Tailwind |
|----------|-------|----------|
| Height | 56px | `h-14` |
| Padding X | 16px | `px-4` |
| Border Radius | 10px | `rounded-[10px]` |
| Label Size | 16px / 500 | `text-base font-medium` |
| Input Text | 16px / 400 | `text-base` |
| Hint Text | 14px / 400 | `text-sm` |

```tsx
<div className="flex flex-col gap-2">
  <label className="flex gap-1 text-base font-medium tracking-[-0.32px] text-primary-green-80">
    Email
    <span className="text-primary-state-error">*</span>
  </label>
  <div className="flex h-14 items-center gap-2 rounded-[10px] border border-black/10 px-4">
    <CircleIcon className="size-5 text-primary-green-60" />
    <input
      className="flex-1 bg-transparent text-base text-primary-green-100 placeholder:text-primary-green-60 focus:outline-none"
      placeholder="olivia@untitledui.com"
    />
    <InfoIcon className="size-5 text-primary-green-60" />
  </div>
  <p className="text-sm text-primary-green-60">
    This is a hint text to help user.
  </p>
</div>
```

### Small

| Property | Value | Tailwind |
|----------|-------|----------|
| Height | 52px | `h-13` or `h-[52px]` |
| Padding X | 14px | `px-3.5` or `px-[14px]` |
| Border Radius | 10px | `rounded-[10px]` |
| Label Size | 14px / 500 | `text-sm font-medium` |
| Input Text | 14px / 400 | `text-sm` |
| Hint Text | 14px / 400 | `text-sm` |

```tsx
<div className="flex flex-col gap-1">
  <label className="flex gap-0.5 text-sm font-medium tracking-[-0.28px] text-primary-green-80">
    Email
    <span className="text-primary-state-error">*</span>
  </label>
  <div className="flex h-[52px] items-center gap-2 rounded-[10px] border border-black/10 px-[14px]">
    <input
      className="flex-1 bg-transparent text-sm text-primary-green-100 placeholder:text-primary-green-60 focus:outline-none"
      placeholder="olivia@untitledui.com"
    />
  </div>
  <p className="text-sm text-primary-green-60">
    This is a hint text to help user.
  </p>
</div>
```

## States

### 1. Placeholder (Default)

The initial empty state with placeholder text.

| Element | Color | Tailwind |
|---------|-------|----------|
| Border | black/10 | `border-black/10` |
| Label | green-80 | `text-primary-green-80` |
| Placeholder | green-60 | `placeholder:text-primary-green-60` |
| Icons | green-60 | `text-primary-green-60` |
| Hint text | green-60 | `text-primary-green-60` |

### 2. Filled

Input has content entered by user.

| Element | Color | Tailwind |
|---------|-------|----------|
| Border | black/10 | `border-black/10` |
| Label | green-80 | `text-primary-green-80` |
| Input text | green-100 | `text-primary-green-100` |
| Icons | green-60 | `text-primary-green-60` |
| Hint text | green-60 | `text-primary-green-60` |

### 3. Focused

Input is actively being edited.

| Element | Color | Tailwind |
|---------|-------|----------|
| Border | green-100 | `border-primary-green-100` |
| Label | green-80 | `text-primary-green-80` |
| Input text | green-100 | `text-primary-green-100` |
| Icons | green-80 | `text-primary-green-80` |
| Hint text | green-60 | `text-primary-green-60` |

```tsx
// Focus state border
<div className="flex h-14 items-center gap-2 rounded-[10px] border border-primary-green-100 px-4">
```

### 4. Disabled

Input cannot be interacted with.

| Element | Color | Tailwind |
|---------|-------|----------|
| Background | black/2 | `bg-black/[0.02]` |
| Border | black/10 | `border-black/10` |
| Label | green-80 | `text-primary-green-80` |
| Input text | green-60 | `text-primary-green-60` |
| Icons | green-60 | `text-primary-green-60` |
| Hint text | green-60 | `text-primary-green-60` |

```tsx
// Disabled state
<div className="flex h-14 items-center gap-2 rounded-[10px] border border-black/10 bg-black/[0.02] px-4">
  <input
    className="flex-1 bg-transparent text-base text-primary-green-60 cursor-not-allowed"
    disabled
  />
</div>
```

### 5. Error (Destructive)

Input has validation error.

| Element | Color | Tailwind |
|---------|-------|----------|
| Border | error | `border-primary-state-error` |
| Label | green-80 | `text-primary-green-80` |
| Required asterisk | error | `text-primary-state-error` |
| Input text | green-100 | `text-primary-green-100` |
| Error icon | error | `text-primary-state-error` |
| Error message | error | `text-primary-state-error` |

```tsx
<div className="flex flex-col gap-2">
  <label className="flex gap-1 text-base font-medium tracking-[-0.32px] text-primary-green-80">
    Email
    <span className="text-primary-state-error">*</span>
  </label>
  <div className="flex h-14 items-center gap-2 rounded-[10px] border border-primary-state-error px-4">
    <CircleIcon className="size-5 text-primary-green-60" />
    <input
      className="flex-1 bg-transparent text-base text-primary-green-100 focus:outline-none"
      value="olivia@untitledui.com"
    />
    <AlertCircleIcon className="size-5 text-primary-state-error" />
  </div>
  <p className="text-sm text-primary-state-error">
    This is an error message.
  </p>
</div>
```

## Color Reference

| Token | Hex | Usage |
|-------|-----|-------|
| `primary-green-100` | `#1b4d4d` | Filled text, focus border |
| `primary-green-80` | `#2c6969` | Label text, focused icons |
| `primary-green-60` | `#699695` | Placeholder, hint text, icons |
| `primary-state-error` | `#ec4747` | Error border, error text, required asterisk |
| `black/10` | `rgba(0,0,0,0.1)` | Default border |
| `black/2` | `rgba(0,0,0,0.02)` | Disabled background |

## Shadcn Integration

Use Shadcn's `<Input>` component as the base, customized with Luxxera styles:

```tsx
// components/ui/input.tsx
import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // Base styles
          "flex h-14 w-full rounded-[10px] border bg-transparent px-4 text-base",
          "text-primary-green-100 placeholder:text-primary-green-60",
          "transition-colors duration-200",
          // Focus styles
          "focus:outline-none focus:border-primary-green-100",
          // Default border
          "border-black/10",
          // Disabled styles
          "disabled:cursor-not-allowed disabled:bg-black/[0.02] disabled:text-primary-green-60",
          // Error styles
          error && "border-primary-state-error focus:border-primary-state-error",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
```

### Form Field Component

Create a complete form field wrapper:

```tsx
// components/ui/form-field.tsx
import * as React from "react"
import { cn } from "@/lib/utils"
import { Input, InputProps } from "./input"

interface FormFieldProps extends InputProps {
  label?: string
  required?: boolean
  hint?: string
  errorMessage?: string
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  size?: "default" | "small"
}

export function FormField({
  label,
  required,
  hint,
  errorMessage,
  leadingIcon,
  trailingIcon,
  size = "default",
  className,
  ...props
}: FormFieldProps) {
  const isSmall = size === "small"
  const hasError = !!errorMessage

  return (
    <div className={cn("flex flex-col", isSmall ? "gap-1" : "gap-2")}>
      {label && (
        <label className={cn(
          "flex font-medium tracking-tight text-primary-green-80",
          isSmall ? "gap-0.5 text-sm tracking-[-0.28px]" : "gap-1 text-base tracking-[-0.32px]"
        )}>
          {label}
          {required && <span className="text-primary-state-error">*</span>}
        </label>
      )}

      <div className={cn(
        "flex items-center gap-2 rounded-[10px] border transition-colors duration-200",
        isSmall ? "h-[52px] px-[14px]" : "h-14 px-4",
        hasError ? "border-primary-state-error" : "border-black/10 focus-within:border-primary-green-100",
        props.disabled && "bg-black/[0.02]"
      )}>
        {leadingIcon && (
          <span className="text-primary-green-60">{leadingIcon}</span>
        )}
        <Input
          className={cn(
            "h-full flex-1 border-0 px-0 focus:ring-0",
            isSmall ? "text-sm" : "text-base"
          )}
          error={hasError}
          {...props}
        />
        {trailingIcon && (
          <span className={hasError ? "text-primary-state-error" : "text-primary-green-60"}>
            {trailingIcon}
          </span>
        )}
      </div>

      {(hint || errorMessage) && (
        <p className={cn(
          "text-sm",
          hasError ? "text-primary-state-error" : "text-primary-green-60"
        )}>
          {errorMessage || hint}
        </p>
      )}
    </div>
  )
}
```

## Floating Label Input

For dropdown/select fields with a floating label effect:

```tsx
// Default state - empty
<div className="flex h-14 items-center rounded-[10px] border border-black/10 px-4">
  <span className="flex-1 text-base text-primary-green-60">Empty</span>
  <ChevronRightIcon className="size-5 text-primary-green-60" />
</div>

// Filled state
<div className="flex h-14 items-center rounded-[10px] border border-black/10 px-4">
  <span className="flex-1 text-base text-primary-green-100">Selected Value</span>
  <ChevronRightIcon className="size-5 text-primary-green-60" />
</div>
```

## Social Sign-In Button

For authentication flows:

```tsx
<button className="flex h-[52px] w-full items-center justify-center gap-2.5 rounded-[1000px] border border-black/10 transition-colors hover:bg-black/5">
  <GoogleIcon className="size-5" />
  <span className="text-base font-semibold text-primary-green-100 tracking-[-0.32px]">
    Sign in with Google
  </span>
</button>
```

## Variants Summary

| Variant | Border | Background | Text Color |
|---------|--------|------------|------------|
| Default | `black/10` | transparent | `green-60` (placeholder) |
| Filled | `black/10` | transparent | `green-100` |
| Focused | `green-100` | transparent | `green-100` |
| Disabled | `black/10` | `black/2` | `green-60` |
| Error | `error` | transparent | `green-100` (error text: `error`) |

## Usage Guidelines

### DO's
- Always include labels for accessibility
- Use hint text to provide helpful context
- Show clear error messages with specific guidance
- Use leading icons for input type indication (email, phone, search)
- Use trailing icons for actions (clear, visibility toggle, info)

### DON'Ts
- Don't use placeholder text as a replacement for labels
- Don't use generic error messages like "Invalid input"
- Don't hide required indicators
- Don't use multiple trailing icons (pick one action)
- Don't mix input sizes within the same form

## Accessibility

- Always associate labels with inputs using `htmlFor`
- Use `aria-describedby` to link hint/error text to input
- Ensure sufficient color contrast for all states
- Support keyboard navigation and focus management
- Use `aria-invalid="true"` for error states

```tsx
<div className="flex flex-col gap-2">
  <label htmlFor="email" className="...">Email</label>
  <input
    id="email"
    aria-describedby="email-hint"
    aria-invalid={hasError}
    className="..."
  />
  <p id="email-hint" className="...">Hint or error message</p>
</div>
```
