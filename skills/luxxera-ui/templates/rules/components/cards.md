# Cards

Luxxera uses several card variants with consistent styling patterns.

## Common Properties

All cards share:
- **Border radius**: `rounded-32` (large) or `rounded-24` (small)
- **Overflow**: `overflow-hidden` (for image containment)
- **Position**: `relative` (for absolute-positioned overlays)
- **Size variants**: Most cards have Large and Small sizes
- **State variants**: Many cards have Default, Hover, and Active states

---

## Landing Page Cards

### Procedure Card

Image card with title at bottom. Use for treatment/procedure listings on landing pages.

```tsx
<div className="relative h-[533px] w-[438px] rounded-32 overflow-hidden">
  <img src="..." alt="..." className="absolute inset-0 object-cover size-full" />
  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/36 to-transparent
    p-24 flex flex-col gap-32 justify-end">
    <h3 className="title-1 text-white">Scalp Micropigmentation</h3>
    <button className="bg-white size-[52px] rounded-full flex items-center justify-center">
      <ArrowRightIcon className="size-6 text-primary-green-100" />
    </button>
  </div>
</div>
```

### Article Card

Image card with tag and title. Use for blog posts and articles.

```tsx
<div className="relative h-[632px] w-[592px] rounded-32 overflow-hidden">
  <img src="..." alt="..." className="absolute inset-0 object-cover size-full" />
  <div className="absolute inset-0 bg-black/10" /> {/* Overlay */}
  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/36 to-transparent
    px-28 py-32 flex flex-col gap-8 justify-end">
    <span className="border border-primary-brown-30 px-12 py-4 rounded-24
      caption-3 text-primary-brown-30 self-start">
      Hair Transplant
    </span>
    <div className="flex items-center gap-24">
      <h3 className="title-1 text-white flex-1">What makes a top hair clinic?</h3>
      <button className="bg-white size-[44px] rounded-full flex items-center justify-center">
        <ArrowRightIcon className="size-6 text-primary-green-100" />
      </button>
    </div>
  </div>
</div>
```

### Benefit Card

Large image card with description and CTA. Use for feature highlights.

```tsx
<div className="relative h-[632px] w-[900px] rounded-32 overflow-hidden">
  <img src="..." alt="..." className="absolute inset-0 object-cover size-full" />
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

---

## App/Selection Cards

### Goal Card

Selectable card with image thumbnail, title, and description. Use for quiz/selection flows.

**Sizes**: Large (592px), Small (376px)
**States**: Default, Hover, Active

```tsx
// Large - Default
<div className="bg-white border border-primary-green-40 rounded-20 p-12 w-[592px]
  flex items-center gap-16">
  <div className="size-[80px] rounded-12 overflow-hidden shrink-0">
    <img src="..." className="object-cover size-full" />
  </div>
  <div className="flex flex-col gap-8 flex-1">
    <p className="title-3 text-primary-green-100">Scalp Micropigmentation</p>
    <p className="body-3 text-primary-green-60">Top, back or front of your head</p>
  </div>
</div>

// Large - Hover (add shadow)
<div className="bg-white border border-primary-green-50 rounded-20 p-12 w-[592px]
  flex items-center gap-16 shadow-[4px_4px_16px_0px_rgba(27,77,77,0.1)]">
  {/* Same content */}
</div>

// Large - Active
<div className="bg-white border border-primary-green-50 rounded-20 p-12 w-[592px]
  flex items-center gap-16">
  {/* Same content */}
</div>

// Small
<div className="bg-white border border-primary-green-40 rounded-18 p-8 w-[376px]
  flex items-center gap-12">
  <div className="size-[60px] rounded-12 overflow-hidden shrink-0">
    <img src="..." className="object-cover size-full" />
  </div>
  <div className="flex flex-col gap-4 flex-1">
    <p className="title-3 text-primary-green-100 text-[16px] leading-[20px]">Scalp Micropigmentation</p>
    <p className="body-3 text-primary-green-60 text-[14px] leading-[20px]">Top, back or front of your head</p>
  </div>
</div>
```

### Treatment Selection Card

Visual illustration card with numbered badge. Use for treatment area selection.

**Sizes**: Large (438px), Small (342px)
**States**: Default, Active

```tsx
// Large - Default
<div className="bg-black/2 rounded-40 w-[438px] flex flex-col gap-32">
  {/* Illustration area */}
  <div className="relative h-[248px] w-full">
    <img src="..." className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[235px]" />
  </div>
  {/* Label */}
  <div className="px-24 pb-48 pt-32 flex items-center justify-center">
    <p className="sub-headline-3 text-primary-green-100">Along the hairline</p>
  </div>
  {/* Number badge (positioned absolute) */}
  <div className="absolute top-24 left-24 size-[32px] bg-primary-green-100 rounded-full
    flex items-center justify-center">
    <span className="body-3 text-primary-neutral-background">1</span>
  </div>
</div>

// Large - Active (add border)
<div className="bg-black/2 border border-primary-green-50 rounded-40 w-[438px] ...">
  {/* Same content */}
</div>

// Small
<div className="bg-black/2 rounded-28 w-[342px] flex flex-col gap-2">
  <div className="relative flex-1">
    <img src="..." className="absolute bottom-0 left-1/2 -translate-x-1/2" />
  </div>
  <div className="px-24 pb-20 pt-12 flex items-center justify-center">
    <p className="sub-headline-3 text-primary-green-100">Along the hairline</p>
  </div>
  {/* Smaller badge */}
  <div className="absolute top-18 left-18 size-[24px] bg-primary-green-100 rounded-full
    flex items-center justify-center">
    <span className="body-4 text-primary-neutral-background">1</span>
  </div>
</div>
```

### Advanced Card (Expandable)

Info card that expands on hover to show bullet points. Use for treatment method details.

**Sizes**: Large (240px → 320px), Small (240px → 320px)
**States**: Default (compact), Hover (expanded)

```tsx
// Default - Compact
<div className="bg-white rounded-24 p-24 w-[240px] flex items-center">
  <div className="flex flex-col gap-20 flex-1">
    <p className="title-4 text-primary-green-100">
      Follicular Unit Transplantation (FUT)
    </p>
    <div className="h-[140px] flex items-center justify-center">
      <MethodIcon className="size-[75px]" />
    </div>
    <div className="flex items-center justify-between w-full">
      <span className="title-6 text-primary-green-100">Read more</span>
      <button className="bg-white size-[32px] rounded-full flex items-center justify-center">
        <ArrowDownIcon className="size-[17px]" />
      </button>
    </div>
  </div>
</div>

// Hover - Expanded (dark background)
<div className="bg-primary-green-100 rounded-24 p-24 w-[320px] flex flex-col gap-20">
  <p className="title-4 text-white">
    Follicular Unit<br/>Transplantation (FUT)
  </p>
  <div className="flex flex-col gap-[9px] h-[140px]">
    <div className="flex items-center gap-6">
      <div className="size-[3px] bg-primary-green-40 rounded-full" />
      <span className="title-6 text-primary-green-40">Transplants a large number of grafts in one session.</span>
    </div>
    <div className="flex items-center gap-6">
      <div className="size-[3px] bg-primary-green-40 rounded-full" />
      <span className="title-6 text-primary-green-40">Provides natural and long-lasting results.</span>
    </div>
    <div className="flex items-center gap-6">
      <div className="size-[3px] bg-primary-green-40 rounded-full" />
      <span className="title-6 text-primary-green-40">More cost-effective than FUE.</span>
    </div>
    <div className="flex items-center gap-6">
      <div className="size-[3px] bg-primary-green-40 rounded-full" />
      <span className="title-6 text-primary-green-40">Efficient use of donor hair.</span>
    </div>
  </div>
  <div className="flex items-center justify-between w-full">
    <span className="title-6 text-primary-green-20">Read more</span>
    <button className="bg-white size-[32px] rounded-full flex items-center justify-center">
      <ArrowDownIcon className="size-[17px] text-primary-green-100" />
    </button>
  </div>
</div>
```

---

## Transaction/Data Cards

### Transaction Card

Financial summary card with status. Use for payment/booking details.

**Sizes**: Large (520px), Small (343px)
**States**: Default (Pending), Paid

```tsx
// Large - Default (Pending)
<div className="bg-white rounded-32 p-32 w-[520px] flex flex-col gap-24">
  {/* Header row */}
  <div className="flex items-center justify-between w-full">
    <div className="flex flex-col gap-[6px]">
      <span className="title-6 text-primary-green-60">Total</span>
      <span className="headline-6 text-primary-green-100">$3,500</span>
    </div>
    <button className="bg-primary-green-100 text-white h-[36px] px-12 rounded-[1000px]
      button-2 font-semibold flex items-center gap-4">
      Button CTA
      <ArrowRightIcon className="size-6" />
    </button>
  </div>

  {/* Divider */}
  <div className="h-0 w-full border-t border-black/10" />

  {/* Details */}
  <div className="flex flex-col gap-20">
    <p className="title-4 text-primary-green-100">Beard transplant</p>
    <div className="flex items-start gap-40">
      <div className="flex flex-col gap-8">
        <span className="body-4 text-primary-green-50 w-[40px]">ID</span>
        <span className="caption-2 text-primary-green-80">3875028450</span>
      </div>
      <div className="flex flex-col gap-8">
        <span className="body-4 text-primary-green-50 w-[40px]">Clinic</span>
        <div className="flex items-center gap-6">
          <img src="..." className="size-[24px] rounded-full" />
          <span className="caption-2 text-primary-green-80">MedArt Hair Clinic</span>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <span className="body-4 text-primary-green-50 w-[40px]">State</span>
        <span className="bg-primary-blue-10 text-primary-blue-100 px-10 py-4 rounded-4
          title-7 font-semibold">Pending</span>
      </div>
    </div>
  </div>
</div>

// Large - Paid (with two buttons)
<div className="bg-white rounded-32 p-32 w-[520px] flex flex-col gap-24">
  <div className="flex items-center justify-between w-full">
    <div className="flex flex-col gap-[6px]">
      <span className="title-6 text-primary-green-60">Total</span>
      <span className="headline-6 text-primary-green-100">$3,500</span>
    </div>
    <div className="flex items-start gap-12">
      <button className="border border-black/10 text-primary-green-100 h-[36px] px-12
        rounded-[1000px] button-2 font-semibold">Button CTA</button>
      <button className="bg-primary-green-100 text-white h-[36px] px-12 rounded-[1000px]
        button-2 font-semibold flex items-center gap-4">
        <TicketIcon className="size-6" />
        Button CTA
      </button>
    </div>
  </div>
  {/* ... details with "Paid" status label (green) */}
  <span className="bg-[rgba(20,170,105,0.12)] text-primary-state-success px-10 py-4
    rounded-4 title-7 font-semibold">Paid</span>
</div>

// Small - stacked layout
<div className="bg-white border border-black/10 rounded-24 px-20 py-24 w-[343px]
  flex flex-col gap-20">
  {/* Content stacks vertically, details are row-based (label | value) */}
</div>
```

### Pricing Card

Package pricing with features checklist. Use for pricing tables.

**Sizes**: Large (876px horizontal), Small (284px vertical)
**Types**: Type_01 (white bg), Type_02 (dark green bg)

```tsx
// Large - Type_01 (White)
<div className="bg-white rounded-24 p-28 w-[876px] flex flex-col gap-16">
  {/* Header */}
  <div className="flex items-center justify-between w-full">
    <div className="flex flex-col gap-8">
      <span className="title-4 text-primary-green-100">Premium Package</span>
      <span className="title-6 text-primary-green-70">Comprehensive Care, Affordable Price</span>
    </div>
    <div className="h-[48px]">
      <span className="headline-4 text-primary-green-100">$2,500</span>
      <span className="title-6 text-primary-green-70"> /Treatment Plan</span>
    </div>
  </div>

  {/* Divider */}
  <div className="h-0 w-full border-t border-black/10" />

  {/* Features */}
  <div className="flex flex-col gap-8">
    <span className="title-6 text-primary-green-100">What's included:</span>
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-wrap gap-x-16 gap-y-8 w-[449px]">
        <div className="flex items-center gap-4">
          <CheckIcon className="size-6 text-primary-green-100" />
          <span className="body-4 text-primary-brown-100">Personal care team</span>
        </div>
        {/* More items... */}
      </div>
      <button className="border border-black/10 text-primary-green-100 h-[44px] px-20
        rounded-[1000px] button-1 font-semibold">Button CTA</button>
    </div>
  </div>
</div>

// Large - Type_02 (Dark green)
<div className="bg-primary-green-100 rounded-24 p-28 w-[876px] flex flex-col gap-16">
  <div className="flex items-center justify-between w-full">
    <div className="flex flex-col gap-8">
      <span className="title-4 text-primary-green-20">Premium Package</span>
      <span className="title-6 text-primary-green-50">Comprehensive Care, Affordable Price</span>
    </div>
    {/* Price in light colors */}
  </div>
  {/* Features list - checkmarks and text in lighter colors */}
</div>

// Small - vertical layout (stacked)
<div className="bg-white rounded-16 px-16 py-24 w-[284px] flex flex-col gap-16">
  {/* All content stacks vertically */}
</div>
```

### Patient Card (List Row)

User row for patient listings with avatar and actions.

**Sizes**: Large (1167px), Small (343px)
**States**: Default, Hover

```tsx
// Large - Default
<div className="border-b border-black/10 px-20 py-28 w-[1167px]
  flex items-end justify-between">
  <div className="flex items-center gap-20 flex-1">
    <div className="size-[48px] rounded-full overflow-hidden">
      <img src="..." className="object-cover size-full" />
    </div>
    <div className="flex flex-col gap-4 flex-1">
      <p className="sub-headline-2 text-primary-green-100">Michael B. Luong</p>
      <p className="body-2 text-primary-green-80">michael@hotmail.com</p>
    </div>
  </div>
  <div className="flex items-center gap-12">
    <button className="bg-white h-[52px] px-32 rounded-[1000px] button-1 font-semibold
      text-primary-green-100 flex items-center gap-6">
      Button CTA
      <ArrowRightIcon className="size-6" />
    </button>
    <button className="bg-white size-[52px] rounded-full flex items-center justify-center">
      <MessageIcon className="size-6 text-primary-green-100" />
    </button>
  </div>
</div>

// Large - Hover (add background)
<div className="bg-black/2 border-b border-black/10 px-20 py-28 w-[1167px] ...">
  {/* Same content */}
</div>

// Small
<div className="border-b border-black/10 py-20 w-[343px] flex items-center justify-between">
  <div className="flex items-center gap-12 flex-1">
    <div className="flex flex-col gap-2 flex-1">
      <p className="sub-headline-2 text-primary-green-100 text-[16px]">Michael B. Luong</p>
      <p className="body-2 text-primary-green-80 text-[14px]">michael@hotmail.com</p>
    </div>
    <div className="size-[39px] rounded-full overflow-hidden">
      <img src="..." className="object-cover size-full" />
    </div>
  </div>
  <div className="flex items-center gap-8">
    <button className="bg-white size-[36px] rounded-full flex items-center justify-center">
      <ArrowRightIcon className="size-6" />
    </button>
    <button className="bg-white size-[36px] rounded-full flex items-center justify-center">
      <MessageIcon className="size-6" />
    </button>
  </div>
</div>
```

---

## Process/Step Cards

### Process Card

Step card with tag, description, and title. Use for process flows and timelines.

**Sizes**: Large (289px × 328px), Small (343px × 240px)

```tsx
// Large
<div className="bg-primary-brown-10 rounded-24 p-24 w-[289.5px] h-[328px]
  flex flex-col items-start justify-between">
  <div className="flex flex-col gap-16 items-start w-full">
    <span className="bg-white/30 h-[36px] px-12 py-6 rounded-24 caption-1 text-primary-green-100">
      2000 Grafts
    </span>
    <p className="body-3 text-primary-brown-100">
      Book a free consultation at one of our many clinics. At this appointment,
      a hair analysis will be performed to determine the quality of your hair
      and whether you are suitable for the procedure.
    </p>
  </div>
  <p className="title-1 text-primary-brown-100">Initial consultation</p>
</div>

// Small
<div className="bg-primary-brown-10 rounded-24 p-20 w-[343px] h-[240px]
  flex flex-col items-start justify-between">
  <div className="flex flex-col gap-16 items-start w-full">
    <span className="bg-white/30 h-[36px] px-12 py-6 rounded-24 caption-1 text-primary-green-100
      text-[14px]">
      2000 Grafts
    </span>
    <p className="body-3 text-primary-brown-100 text-[14px] leading-[20px]">
      Book a free consultation at one of our many clinics...
    </p>
  </div>
  <p className="title-1 text-primary-brown-100 text-[20px] leading-[26px]">Initial consultation</p>
</div>
```

### Quiz/Step Cards (Simple)

Simpler colored cards for quick step indicators. Use the 3-color rotation.

```tsx
// Step 1: Brown variant
<div className="bg-primary-brown-10 p-32 rounded-32 flex flex-col gap-32">
  <span className="bg-white/30 px-12 py-6 rounded-24 caption-1 text-primary-green-100 self-start">
    2000 Grafts
  </span>
  <h3 className="headline-4 text-primary-brown-100">Take a Quiz</h3>
</div>

// Step 2: Light green variant
<div className="bg-primary-green-40 p-32 rounded-32 flex flex-col gap-32">
  <span className="bg-white/30 px-12 py-6 rounded-24 caption-1 text-primary-green-100 self-start">
    2000 Grafts
  </span>
  <h3 className="headline-4 text-primary-green-100">Select your Clinic</h3>
</div>

// Step 3: Teal variant
<div className="bg-primary-green-80 p-32 rounded-32 flex flex-col gap-32">
  <span className="bg-white/30 px-12 py-6 rounded-24 caption-1 text-primary-green-100 self-start">
    2000 Grafts
  </span>
  <div className="flex items-center justify-between">
    <h3 className="headline-4 text-primary-green-30">Travel for Treatment</h3>
    <button className="bg-white size-[52px] rounded-full flex items-center justify-center">
      <ArrowRightIcon className="size-6 text-primary-green-100" />
    </button>
  </div>
</div>
```

---

## Card Color Rotation

When displaying multiple cards, rotate through these background colors:

1. **Brown**: `bg-primary-brown-10` with `text-primary-brown-100`
2. **Light Green**: `bg-primary-green-40` with `text-primary-green-100`
3. **Teal**: `bg-primary-green-80` with `text-primary-green-30` or `text-white`

---

## Status Labels

Use within Transaction cards and data displays.

```tsx
// Pending (blue)
<span className="bg-primary-blue-10 text-primary-blue-100 px-10 py-4 rounded-4
  title-7 font-semibold">Pending</span>

// Paid (green)
<span className="bg-[rgba(20,170,105,0.12)] text-primary-state-success px-10 py-4
  rounded-4 title-7 font-semibold">Paid</span>
```

---

## Card Dimensions Reference

| Card Type | Large Size | Small Size |
|-----------|------------|------------|
| Procedure Card | 438px × 533px | Full width |
| Article Card | 592px × 632px | Full width |
| Benefit Card | 900px × 632px | Full width |
| Goal Card | 592px × 104px | 376px × 76px |
| Treatment Selection | 438px | 342px |
| Advanced Card | 240px → 320px | 240px → 320px |
| Transaction Card | 520px | 343px |
| Pricing Card | 876px (horizontal) | 284px (vertical) |
| Patient Card | 1167px | 343px |
| Process Card | 289px × 328px | 343px × 240px |

---

## Card Grid Patterns

```tsx
// 3-column grid
<div className="grid grid-cols-1 md:grid-cols-3 gap-24">
  <Card />
  <Card />
  <Card />
</div>

// 4-column grid
<div className="grid grid-cols-2 md:grid-cols-4 gap-24">
  <Card />
  <Card />
  <Card />
  <Card />
</div>

// Horizontal scroll (mobile carousel)
<div className="grid-horizontal">
  <Card />
  <Card />
  <Card />
</div>
```

---

## Critical Rules

1. **Always use gradient overlays** on image cards with text
2. **Consistent border radius** - `rounded-32` (large), `rounded-24` (small), `rounded-16` (extra small)
3. **Rotate colors** when displaying multiple non-image cards
4. **CTA placement** - Arrow buttons go in bottom-right or as part of title row
5. **Image containment** - Use `overflow-hidden` and `object-cover`
6. **State borders** - Active state uses `border-primary-green-50`
7. **Hover shadows** - Use `shadow-[4px_4px_16px_0px_rgba(27,77,77,0.1)]` for selection cards
8. **Size consistency** - Always provide both Large and Small variants
9. **Status labels** - Use blue for pending, green for paid/success
