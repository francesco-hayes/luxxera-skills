# Layout

Luxxera uses a container-based layout with responsive grids.

## Container

Centered container with fluid padding and max-width.

```tsx
// Using utility class
<div className="container">
  {/* Max width: 1280px, auto margins, fluid padding */}
</div>

// Manual equivalent
<div className="mx-auto max-w-screen-xl px-spacing-global-1">
  {/* Same result */}
</div>
```

### Container Properties
- Max width: 1280px (`max-w-screen-xl`)
- Horizontal padding: Fluid (`px-spacing-global-1`)
- Centered: `mx-auto`

## Grid System

### Default Grid (12 columns)

Responsive grid that adapts from 4 columns on mobile to 12 on desktop.

```tsx
<div className="grid-default">
  {/* 4 cols mobile → 12 cols desktop */}
  {/* gap-x-24 gap-y-24 sm:gap-y-60 */}
</div>
```

### Horizontal Scroll Grid

Scrollable on mobile, standard grid on desktop. Great for card carousels.

```tsx
<div className="grid-horizontal">
  {/* Horizontal scroll mobile, 12-col grid on md+ */}
</div>
```

### Manual Grid Patterns

```tsx
// 3-column card grid
<div className="grid grid-cols-1 md:grid-cols-3 gap-24">
  {/* Cards */}
</div>

// 4-column grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24">
  {/* Cards */}
</div>

// 2-column split
<div className="grid grid-cols-1 md:grid-cols-2 gap-24">
  {/* Left and right content */}
</div>
```

## Section Structure

### Standard Section
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

### Two-Column Header Section
```tsx
<section className="px-spacing-global-1 py-spacing-global-2">
  <div className="flex flex-col gap-60">
    {/* Header row with text + supporting */}
    <div className="flex flex-col md:flex-row gap-24 items-end justify-between">
      <h2 className="headline-1 text-white max-w-[746px]">
        Headline text...
      </h2>
      <p className="body-1 text-white/80 max-w-[752px]">
        Supporting text...
      </p>
    </div>

    {/* Grid content */}
    <div className="grid grid-cols-4 gap-24">
      {/* Cards */}
    </div>
  </div>
</section>
```

### Dark Section
```tsx
<section className="bg-primary-green-100 px-spacing-global-1 py-spacing-global-2">
  {/* Use light text colors */}
  <h2 className="headline-1 text-white">...</h2>
  <p className="body-1 text-white/80">...</p>
</section>
```

### Full-Width Section (Hero)
```tsx
<section className="pt-16 px-16">
  <div className="relative h-[1048px] rounded-40 overflow-hidden">
    {/* Full bleed content with rounded corners */}
  </div>
</section>
```

## Content Width Constraints

| Context | Max Width | Class |
|---------|-----------|-------|
| Page container | 1280px | `max-w-screen-xl` |
| Section header text | 752px | `max-w-[752px]` |
| Headline column | 746px | `max-w-[746px]` |
| Hero headline | 1132px | `max-w-[1132px]` |

## Responsive Breakpoints

| Breakpoint | Width | Use Case |
|------------|-------|----------|
| sm | 640px | Small tablets |
| md | 768px | Tablets, grid changes |
| lg | 1024px | Desktop |
| xl | 1280px | Large desktop |

## Critical Rules

1. **Always use fluid section padding** - `px-spacing-global-1 py-spacing-global-2`
2. **Constrain header text width** - Use `max-w-[752px]` for readability
3. **Center section headers** - Use `items-center text-center` for centered layouts
4. **Consistent grid gaps** - 24px between cards, 60px between content blocks
5. **Mobile-first** - Start with single column, expand on larger screens
