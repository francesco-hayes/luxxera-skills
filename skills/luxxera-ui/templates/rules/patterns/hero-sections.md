# Hero Sections

Hero sections are the primary visual introduction to pages. They feature large imagery, prominent headlines, and clear CTAs.

## Standard Hero

Full-width hero with centered content overlay.

```tsx
<section className="pt-16 px-16">
  <div className="relative h-[1048px] rounded-40 overflow-hidden">
    {/* Background image */}
    <img
      src="..."
      alt="..."
      className="absolute inset-0 object-cover size-full"
    />

    {/* Content overlay */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center gap-32 max-w-[1132px] text-center px-24">
        <h1 className="headline-3 font-serif text-white">
          With dedication to every detail, we make sure your hair restoration journey is{' '}
          <span className="italic text-primary-neon">smooth and flawless.</span>
        </h1>
        <button className="bg-white text-primary-green-100 h-[52px] px-32
          rounded-[1000px] button-1 font-semibold">
          Get Started
        </button>
      </div>
    </div>
  </div>
</section>
```

## Hero Properties

### Container
- Outer padding: `pt-16 px-16` (creates gap from nav)
- Inner container: `relative h-[1048px] rounded-40 overflow-hidden`
- Image: `absolute inset-0 object-cover size-full`

### Content Overlay
- Position: `absolute inset-0`
- Layout: `flex items-center justify-center`
- Content width: `max-w-[1132px]`
- Text alignment: `text-center`
- Gap between elements: `gap-32`

### Typography
- Headline: `headline-3 font-serif text-white`
- Accent text: `italic text-primary-neon`

### CTA
- Primary: Secondary button (white on dark background)
- Size: xl (`h-[52px]`)

## Hero with Dual CTAs

```tsx
<section className="pt-16 px-16">
  <div className="relative h-[1048px] rounded-40 overflow-hidden">
    <img src="..." className="absolute inset-0 object-cover size-full" />

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center gap-32 max-w-[1132px] text-center">
        <h1 className="headline-3 font-serif text-white">
          Hero headline with{' '}
          <span className="italic text-primary-neon">accent</span>
        </h1>

        <div className="flex gap-16">
          <button className="bg-white text-primary-green-100 h-[52px] px-20
            rounded-[1000px] button-1 font-semibold">
            Primary Action
          </button>
          <button className="bg-[rgba(3,46,45,0.24)] backdrop-blur-[10px] text-white h-[52px] px-20
            rounded-[1000px] button-1 font-semibold">
            Secondary Action
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Hero with Bottom-Aligned Content

```tsx
<section className="pt-16 px-16">
  <div className="relative h-[800px] rounded-40 overflow-hidden">
    <img src="..." className="absolute inset-0 object-cover size-full" />

    {/* Gradient overlay for readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

    <div className="absolute inset-x-0 bottom-0 p-60">
      <div className="flex flex-col gap-24 max-w-[800px]">
        <h1 className="headline-2 font-serif text-white">
          Bottom-aligned headline
        </h1>
        <p className="body-1 text-white/80">
          Supporting description text goes here.
        </p>
        <button className="bg-white text-primary-green-100 h-[52px] px-32
          rounded-[1000px] button-1 font-semibold self-start">
          Get Started
        </button>
      </div>
    </div>
  </div>
</section>
```

## Hero with Side Content

```tsx
<section className="pt-16 px-16">
  <div className="relative h-[800px] rounded-40 overflow-hidden">
    <img src="..." className="absolute inset-0 object-cover size-full" />

    <div className="absolute inset-0 flex items-center">
      <div className="flex flex-col gap-32 max-w-[600px] p-60">
        <h1 className="headline-2 font-serif text-white">
          Left-aligned hero headline
        </h1>
        <p className="body-1 text-white/80">
          Supporting text for context and additional information.
        </p>
        <button className="bg-white text-primary-green-100 h-[52px] px-32
          rounded-[1000px] button-1 font-semibold self-start">
          Get Started
        </button>
      </div>
    </div>
  </div>
</section>
```

## Hero Heights

| Page Type | Height | Use Case |
|-----------|--------|----------|
| Homepage | 1048px | Maximum impact |
| Landing page | 800px | Standard hero |
| Interior page | 600px | Shorter hero |
| Mobile | 80vh | Viewport-relative |

## Responsive Considerations

```tsx
<section className="pt-16 px-16 md:px-16">
  <div className="relative h-[80vh] md:h-[1048px] rounded-24 md:rounded-40 overflow-hidden">
    {/* ... */}
    <div className="flex flex-col items-center gap-24 md:gap-32
      max-w-[90%] md:max-w-[1132px] px-16 md:px-24">
      <h1 className="headline-4 md:headline-3 font-serif text-white text-center">
        {/* ... */}
      </h1>
    </div>
  </div>
</section>
```

## Critical Rules

1. **Always use rounded corners** - `rounded-40` on desktop, `rounded-24` on mobile
2. **Neon accent only** - Use `text-primary-neon` for italic accent on dark
3. **Gradient when needed** - Add `bg-gradient-to-t from-black/50` for bottom content
4. **White buttons on dark** - Use Secondary button style on hero
5. **Limit headline width** - `max-w-[1132px]` for centered, `max-w-[600-800px]` for side
