# Tags & Pills

Small labeling components for categorization and metadata.

## Tag Types

### Light Tag

Semi-transparent background. Use on colored card backgrounds.

```tsx
<span className="bg-white/30 px-12 py-6 rounded-24 caption-1 text-primary-green-100">
  2000 Grafts
</span>
```

**Properties:**
- Background: `bg-white/30` (30% white)
- Padding: `px-12 py-6`
- Radius: `rounded-24`
- Typography: `caption-1`
- Text color: `text-primary-green-100`

### Outlined Tag

Border only, no background. Use on image cards or light backgrounds.

```tsx
<span className="border border-primary-brown-30 px-12 py-4 rounded-24
  caption-3 text-primary-brown-30">
  Hair Transplant
</span>
```

**Properties:**
- Border: `border border-primary-brown-30`
- Padding: `px-12 py-4`
- Radius: `rounded-24`
- Typography: `caption-3`
- Text color: `text-primary-brown-30`

## Usage Guidelines

### On Colored Cards
Use **Light Tag** with white background:
```tsx
<div className="bg-primary-brown-10 p-32 rounded-32">
  <span className="bg-white/30 px-12 py-6 rounded-24 caption-1 text-primary-green-100">
    Tag Label
  </span>
</div>
```

### On Image Cards
Use **Outlined Tag** with brown border:
```tsx
<div className="relative rounded-32 overflow-hidden">
  <img src="..." className="absolute inset-0 object-cover size-full" />
  <div className="absolute bottom-0 p-24">
    <span className="border border-primary-brown-30 px-12 py-4 rounded-24
      caption-3 text-primary-brown-30">
      Category
    </span>
  </div>
</div>
```

### Tag Groups
```tsx
<div className="flex flex-wrap gap-8">
  <span className="border border-primary-brown-30 px-12 py-4 rounded-24 caption-3 text-primary-brown-30">
    Hair Transplant
  </span>
  <span className="border border-primary-brown-30 px-12 py-4 rounded-24 caption-3 text-primary-brown-30">
    FUE Method
  </span>
  <span className="border border-primary-brown-30 px-12 py-4 rounded-24 caption-3 text-primary-brown-30">
    Turkey
  </span>
</div>
```

## Pill Variants

### Filter Pill (Interactive)
```tsx
<button className="border border-black/10 px-16 py-8 rounded-24
  caption-1 text-primary-green-100 hover:bg-black/5 transition-colors">
  Filter Option
</button>

// Active state
<button className="bg-primary-green-100 px-16 py-8 rounded-24
  caption-1 text-white">
  Active Filter
</button>
```

### Badge Pill
```tsx
<span className="bg-primary-neon px-8 py-2 rounded-16
  caption-3 text-primary-green-100 font-semibold">
  New
</span>
```

## Status Labels

Colored labels for transaction/data states. Use in cards showing payment or process status.

### Pending Status (Blue)
```tsx
<span className="bg-primary-blue-10 text-primary-blue-100 px-10 py-4 rounded-4
  title-7 font-semibold">
  Pending
</span>
```

**Properties:**
- Background: `bg-primary-blue-10` (#dce8fe)
- Text: `text-primary-blue-100` (#3769e6)
- Padding: `px-10 py-4`
- Radius: `rounded-4`
- Typography: `title-7 font-semibold`

### Paid/Success Status (Green)
```tsx
<span className="bg-[rgba(20,170,105,0.12)] text-primary-state-success px-10 py-4 rounded-4
  title-7 font-semibold">
  Paid
</span>
```

**Properties:**
- Background: `bg-[rgba(20,170,105,0.12)]`
- Text: `text-primary-state-success` (#199a66)
- Padding: `px-10 py-4`
- Radius: `rounded-4`
- Typography: `title-7 font-semibold`

### Status Label Usage
```tsx
// In a Transaction Card
<div className="flex flex-col gap-8">
  <span className="body-4 text-primary-green-50">State</span>
  <span className="bg-primary-blue-10 text-primary-blue-100 px-10 py-4 rounded-4
    title-7 font-semibold">Pending</span>
</div>
```

## Quick Reference

| Type | Background | Border | Text Color | Use Case |
|------|------------|--------|------------|----------|
| Light Tag | `bg-white/30` | none | `text-primary-green-100` | On colored cards |
| Outlined Tag | none | `border-primary-brown-30` | `text-primary-brown-30` | On images |
| Filter Pill | none / `bg-primary-green-100` | `border-black/10` | varies | Interactive filters |
| Badge Pill | `bg-primary-neon` | none | `text-primary-green-100` | Highlights |
| Status (Pending) | `bg-primary-blue-10` | none | `text-primary-blue-100` | Pending state |
| Status (Paid) | `bg-[rgba(20,170,105,0.12)]` | none | `text-primary-state-success` | Success state |

## Critical Rules

1. **Consistent radius** - Always use `rounded-24` for tags
2. **Proper padding** - `px-12` horizontal, `py-4` to `py-6` vertical
3. **Caption typography** - Use `caption-1` or `caption-3`
4. **Self-start alignment** - Use `self-start` when tag is inside a flex column
