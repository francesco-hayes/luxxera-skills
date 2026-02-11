# Image Treatment

How to properly handle images in the Luxxera design system.

## Image Containers

### Basic Image Container

Always use relative positioning with absolute image and overflow hidden.

```tsx
<div className="relative rounded-32 overflow-hidden">
  <img
    src="..."
    alt="..."
    className="absolute inset-0 object-cover size-full"
  />
</div>
```

### Fixed Height Container

```tsx
<div className="relative h-[500px] rounded-32 overflow-hidden">
  <img src="..." alt="..." className="absolute inset-0 object-cover size-full" />
</div>
```

### Aspect Ratio Container

```tsx
<div className="relative aspect-[16/9] rounded-32 overflow-hidden">
  <img src="..." alt="..." className="absolute inset-0 object-cover size-full" />
</div>

<div className="relative aspect-square rounded-32 overflow-hidden">
  <img src="..." alt="..." className="absolute inset-0 object-cover size-full" />
</div>
```

## Gradient Overlays

Always use gradient overlays when placing text over images.

### Bottom Gradient (Most Common)

For text positioned at the bottom of an image.

```tsx
<div className="relative rounded-32 overflow-hidden">
  <img src="..." className="absolute inset-0 object-cover size-full" />

  {/* Gradient overlay */}
  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/36 to-transparent
    p-24 flex flex-col gap-16">
    <h3 className="title-1 text-white">Card Title</h3>
  </div>
</div>
```

### Stronger Gradient (More Text)

For cards with more content.

```tsx
<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent
  px-48 pb-40 pt-80">
  {/* More content area */}
</div>
```

### Full Overlay

For centered text over images.

```tsx
<div className="relative rounded-40 overflow-hidden">
  <img src="..." className="absolute inset-0 object-cover size-full" />

  {/* Darkening overlay */}
  <div className="absolute inset-0 bg-black/20" />

  {/* Content */}
  <div className="absolute inset-0 flex items-center justify-center">
    <h1 className="headline-3 text-white text-center">Centered Text</h1>
  </div>
</div>
```

## Gradient Values

| Use Case | Gradient | Opacity |
|----------|----------|---------|
| Light text on image | `from-black/36 to-transparent` | 36% |
| More content | `from-black/50 to-transparent` | 50% |
| Hero with text | `from-black/40 to-transparent` | 40% |
| Full darkening | `bg-black/10` to `bg-black/20` | 10-20% |

## Image with Text Patterns

### Card with Title

```tsx
<div className="relative h-[533px] rounded-32 overflow-hidden">
  <img src="..." className="absolute inset-0 object-cover size-full" />
  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/36 to-transparent
    p-24 flex items-end justify-between">
    <h3 className="title-1 text-white">Treatment Name</h3>
    <button className="bg-white size-[52px] rounded-full flex items-center justify-center">
      <ArrowRightIcon className="size-6 text-primary-green-100" />
    </button>
  </div>
</div>
```

### Card with Tag and Title

```tsx
<div className="relative h-[632px] rounded-32 overflow-hidden">
  <img src="..." className="absolute inset-0 object-cover size-full" />
  <div className="absolute inset-0 bg-black/10" />
  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/36 to-transparent
    px-28 py-32 flex flex-col gap-8">
    <span className="border border-primary-brown-30 px-12 py-4 rounded-24
      caption-3 text-primary-brown-30 self-start">
      Category
    </span>
    <div className="flex items-center gap-24">
      <h3 className="title-1 text-white flex-1">Article Title</h3>
      <button className="bg-white size-[44px] rounded-full flex items-center justify-center">
        <ArrowRightIcon className="size-6 text-primary-green-100" />
      </button>
    </div>
  </div>
</div>
```

### Large Feature Card

```tsx
<div className="relative h-[632px] rounded-32 overflow-hidden">
  <img src="..." className="absolute inset-0 object-cover size-full" />
  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent
    px-48 pb-40 pt-80 flex flex-col gap-32">
    <div className="flex flex-col gap-16 text-white">
      <h3 className="headline-6">Feature Title</h3>
      <p className="body-2 max-w-[500px]">
        Feature description text that explains the benefit.
      </p>
    </div>
    <button className="bg-white text-primary-green-100 h-[52px] px-32
      rounded-[1000px] button-1 font-semibold self-start">
      Learn More
    </button>
  </div>
</div>
```

## Border Radius Reference

| Container Type | Radius |
|---------------|--------|
| Hero images | `rounded-40` |
| Large cards | `rounded-32` |
| Medium cards | `rounded-32` |
| Small cards | `rounded-24` |
| Thumbnails | `rounded-16` |

## Image Properties

Always use these properties for images:

```tsx
<img
  src="..."
  alt="..."                              // Always include alt text
  className="absolute inset-0            // Position absolute to fill container
    object-cover                         // Cover the container
    size-full"                           // Full width and height
/>
```

## Critical Rules

1. **Always use gradient overlays** - Never place raw text over images
2. **Contain images properly** - Use `overflow-hidden` on container
3. **Consistent object-fit** - Always use `object-cover`
4. **Round all containers** - Use appropriate border radius (24-40px)
5. **Layer gradients correctly** - Gradient div should be positioned `absolute`
6. **Sufficient contrast** - Use at least 36% opacity gradient for readability
