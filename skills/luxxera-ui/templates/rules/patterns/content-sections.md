# Content Sections

Standard patterns for composing page sections.

## Section Structure Template

All content sections follow this basic structure:

```tsx
<section className="px-spacing-global-1 py-spacing-global-2">
  <div className="flex flex-col gap-60 items-center">
    {/* Section header */}
    {/* Content area */}
  </div>
</section>
```

## Centered Header Section

Most common pattern. Centered headline with optional supporting text.

```tsx
<section className="px-spacing-global-1 py-spacing-global-2">
  <div className="flex flex-col gap-60 items-center">
    {/* Section header */}
    <div className="flex flex-col gap-20 items-center text-center max-w-[752px]">
      <h2 className="headline-3 text-primary-green-100">
        Section headline with{' '}
        <span className="font-serif italic text-primary-brown-30">accent word</span>
      </h2>
      <p className="body-2 text-primary-green-90">
        Supporting description text that provides additional context
        about this section's content.
      </p>
    </div>

    {/* Content grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-24 w-full">
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</section>
```

## Two-Column Header Section

Headline on left, supporting text on right. Good for dark sections.

```tsx
<section className="bg-primary-green-100 px-spacing-global-1 py-spacing-global-2">
  <div className="flex flex-col gap-60">
    {/* Header row */}
    <div className="flex flex-col md:flex-row gap-24 items-end justify-between">
      <h2 className="headline-1 text-white max-w-[746px]">
        Trusted partner clinics for{' '}
        <span className="italic text-primary-neon">exceptional care</span>
      </h2>
      <p className="body-1 text-white/80 max-w-[752px]">
        Our vetted network of top clinics ensures you receive safe,
        quality care from trusted professionals.
      </p>
    </div>

    {/* Content grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-24">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</section>
```

## Split Content Section

50/50 layout with text on one side, visual on the other.

```tsx
<section className="px-spacing-global-1 py-spacing-global-2">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-60 items-center">
    {/* Text column */}
    <div className="flex flex-col gap-32">
      <div className="flex flex-col gap-20">
        <h2 className="headline-3 text-primary-green-100">
          Why choose{' '}
          <span className="font-serif italic text-primary-brown-30">Luxxera</span>
        </h2>
        <p className="body-2 text-primary-green-90">
          We partner with only the most trusted clinics worldwide,
          ensuring you receive exceptional care every step of the way.
        </p>
      </div>
      <button className="bg-primary-green-100 text-white h-[52px] px-20
        rounded-[1000px] button-1 font-semibold self-start">
        Learn More
      </button>
    </div>

    {/* Visual column */}
    <div className="relative h-[500px] rounded-32 overflow-hidden">
      <img src="..." className="absolute inset-0 object-cover size-full" />
    </div>
  </div>
</section>
```

## Card Grid Section

For showcasing multiple items (treatments, articles, clinics).

```tsx
<section className="px-spacing-global-1 py-spacing-global-2">
  <div className="flex flex-col gap-60 items-center">
    {/* Header */}
    <div className="flex flex-col gap-20 items-center text-center max-w-[752px]">
      <h2 className="headline-3 text-primary-green-100">
        Explore our treatments
      </h2>
    </div>

    {/* Card grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 w-full">
      <ProcedureCard />
      <ProcedureCard />
      <ProcedureCard />
    </div>

    {/* Optional CTA */}
    <button className="bg-primary-green-100 text-white h-[52px] px-20
      rounded-[1000px] button-1 font-semibold">
      View All Treatments
    </button>
  </div>
</section>
```

## Dark Section

For visual contrast and emphasis.

```tsx
<section className="bg-primary-green-100 px-spacing-global-1 py-spacing-global-2">
  <div className="flex flex-col gap-60 items-center">
    <div className="flex flex-col gap-20 items-center text-center max-w-[752px]">
      <h2 className="headline-3 text-white">
        Ready to start your{' '}
        <span className="italic text-primary-neon">journey</span>?
      </h2>
      <p className="body-2 text-white/80">
        Take the first step towards your transformation today.
      </p>
    </div>

    <button className="bg-white text-primary-green-100 h-[52px] px-32
      rounded-[1000px] button-1 font-semibold">
      Get Started
    </button>
  </div>
</section>
```

## Stats/Numbers Section

```tsx
<section className="px-spacing-global-1 py-spacing-global-2">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-24">
    <div className="flex flex-col gap-8 items-center text-center">
      <span className="display text-primary-green-100">500+</span>
      <span className="body-2 text-primary-green-90">Partner Clinics</span>
    </div>
    <div className="flex flex-col gap-8 items-center text-center">
      <span className="display text-primary-green-100">50k+</span>
      <span className="body-2 text-primary-green-90">Happy Patients</span>
    </div>
    <div className="flex flex-col gap-8 items-center text-center">
      <span className="display text-primary-green-100">25+</span>
      <span className="body-2 text-primary-green-90">Countries</span>
    </div>
    <div className="flex flex-col gap-8 items-center text-center">
      <span className="display text-primary-green-100">98%</span>
      <span className="body-2 text-primary-green-90">Satisfaction Rate</span>
    </div>
  </div>
</section>
```

## Section Color Variants

| Section Type | Background | Text Colors |
|--------------|------------|-------------|
| Default (light) | `bg-primary-neutral-background` | `text-primary-green-100`, `text-primary-green-90` |
| Dark | `bg-primary-green-100` | `text-white`, `text-white/80` |
| Accent | `bg-primary-green-40` | `text-primary-green-100` |

## Critical Rules

1. **Consistent padding** - Always use `px-spacing-global-1 py-spacing-global-2`
2. **Gap hierarchy** - 60px between header and content, 24px between cards
3. **Max width constraints** - Headers at `max-w-[752px]`, headlines at `max-w-[746px]`
4. **Proper accent colors** - Brown on light, neon on dark
5. **Button placement** - Either below header or centered below content
