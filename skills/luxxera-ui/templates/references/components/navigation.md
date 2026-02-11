# Navigation

The Luxxera navigation uses a glass-morphism style with fixed positioning.

## Main Navigation

```tsx
<nav className="fixed top-4 left-4 right-4 h-[100px] px-48
  flex items-center justify-between z-50">
  {/* Logo */}
  <Logo className="h-[27px]" />

  {/* Nav Links (Glass container) */}
  <div className="backdrop-blur-[10px] bg-secondary-background-blur rounded-60 p-6
    flex gap-40">
    <a className="px-[132px] py-2 button-1 text-primary-neutral-background">
      Treatments
    </a>
    <a className="px-[132px] py-2 button-1 text-primary-neutral-background">
      Clinics
    </a>
    <a className="px-[132px] py-2 button-1 text-primary-neutral-background">
      About
    </a>
  </div>

  {/* CTA Buttons */}
  <div className="flex gap-16">
    <button className="bg-white text-primary-green-100 h-[52px] px-32
      rounded-[1000px] button-1 font-semibold">
      Sign In
    </button>
    <button className="backdrop-blur-[10px] bg-secondary-background-blur text-white h-[52px] px-32
      rounded-[1000px] button-1 font-semibold">
      Get Started
    </button>
  </div>
</nav>
```

## Navigation Properties

### Container
- Position: `fixed top-4 left-4 right-4`
- Height: `h-[100px]`
- Padding: `px-48`
- Z-index: `z-50`
- Layout: `flex items-center justify-between`

### Glass Container (Nav Links)
- Background: `bg-secondary-background-blur` or `bg-[rgba(3,46,45,0.24)]`
- Blur: `backdrop-blur-[10px]`
- Radius: `rounded-60`
- Padding: `p-6`
- Gap: `gap-40`

### Nav Links
- Padding: `px-[132px] py-2`
- Typography: `button-1`
- Color: `text-primary-neutral-background` (light text on blur)

### CTA Group
- Gap: `gap-16`
- Uses Secondary and Blur button variants

## Mobile Navigation

```tsx
{/* Mobile menu button */}
<button className="md:hidden bg-[rgba(3,46,45,0.24)] backdrop-blur-[10px]
  size-[52px] rounded-full flex items-center justify-center">
  <MenuIcon className="size-6 text-white" />
</button>

{/* Mobile menu overlay */}
<div className="fixed inset-0 bg-primary-green-100 z-50 flex flex-col p-24">
  <div className="flex justify-between items-center">
    <Logo className="h-[27px]" />
    <button className="size-[44px] rounded-full border border-white/20
      flex items-center justify-center">
      <CloseIcon className="size-6 text-white" />
    </button>
  </div>

  <nav className="flex flex-col gap-24 mt-60">
    <a className="headline-4 text-white">Treatments</a>
    <a className="headline-4 text-white">Clinics</a>
    <a className="headline-4 text-white">About</a>
  </nav>

  <div className="mt-auto flex flex-col gap-16">
    <button className="bg-white text-primary-green-100 h-[52px]
      rounded-[1000px] button-1 font-semibold w-full">
      Sign In
    </button>
    <button className="border border-white/20 text-white h-[52px]
      rounded-[1000px] button-1 font-semibold w-full">
      Get Started
    </button>
  </div>
</div>
```

## Footer Navigation

```tsx
<footer className="bg-primary-green-100 rounded-48 px-spacing-global-1 py-60">
  <div className="flex flex-col gap-60">
    {/* Top row: Logo + Nav columns */}
    <div className="flex justify-between">
      <Logo className="h-[40px] text-white" />

      <div className="flex gap-80">
        {/* Column */}
        <div className="flex flex-col gap-24">
          <h4 className="title-3 text-white">Treatments</h4>
          <a className="body-3 text-white/70 hover:text-white">Hair Transplant</a>
          <a className="body-3 text-white/70 hover:text-white">Dental</a>
          <a className="body-3 text-white/70 hover:text-white">Cosmetic</a>
        </div>

        {/* Column */}
        <div className="flex flex-col gap-24">
          <h4 className="title-3 text-white">Company</h4>
          <a className="body-3 text-white/70 hover:text-white">About</a>
          <a className="body-3 text-white/70 hover:text-white">Careers</a>
          <a className="body-3 text-white/70 hover:text-white">Contact</a>
        </div>
      </div>
    </div>

    {/* Bottom row: Copyright + Social */}
    <div className="flex justify-between items-center border-t border-white/10 pt-24">
      <p className="caption-2 text-white/50">© 2024 Luxxera. All rights reserved.</p>
      <div className="flex gap-16">
        <a className="size-[40px] rounded-full border border-white/20
          flex items-center justify-center">
          <InstagramIcon className="size-5 text-white" />
        </a>
        <a className="size-[40px] rounded-full border border-white/20
          flex items-center justify-center">
          <TwitterIcon className="size-5 text-white" />
        </a>
      </div>
    </div>
  </div>
</footer>
```

## Footer Properties

- Background: `bg-primary-green-100`
- Border radius: `rounded-48`
- Padding: `px-spacing-global-1 py-60`
- Link colors: `text-white/70` → `hover:text-white`

## Critical Rules

1. **Fixed positioning** - Nav should stay at top on scroll
2. **Glass effect** - Always use `backdrop-blur-[10px]` with semi-transparent bg
3. **Consistent CTA buttons** - Secondary + Blur button pair
4. **Footer radius** - Use `rounded-48` for footer container
5. **Z-index** - Nav should be `z-50` to stay above content
