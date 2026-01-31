# Typography

Luxxera uses elegant serif headlines with clean sans-serif body text.

## Font Families

```css
/* Primary - Headlines & Display */
font-family: 'P22 Mackinac Pro', serif;  /* Tailwind: font-serif */

/* Secondary - Body, UI, Captions */
font-family: 'DM Sans', sans-serif;      /* Tailwind: font-sans */
```

## Typography Decision Framework

Use this framework to select the correct typography style based on context:

### Quick Reference Table

| Context | Style | Size | When to Use |
|---------|-------|------|-------------|
| Page title (profile, detail) | `headline-2` | 56px | Entity names at top of profile/detail pages |
| Hero overlay title | `headline-4` | 40px | Titles on hero images with overlays |
| Primary section header | `headline-6` | 32px | Main page sections (e.g., "Appointment details") |
| Content section header | `headline-7` | 28px | Subsections within a page (e.g., "About", "Services") |
| Group header / Panel title | `title-1` | 24px | Headers for grouped content (e.g., "Clinic Info", "Payment info") |
| Key data value | `title-2` | 22px | Highlighted values (e.g., date, service name, price display) |
| List item title | `title-3` | 20px | Clickable items, field labels (e.g., "Getting there", "Confirmation code") |
| Card title / Name | `title-4` | 18px | Reviewer names, small card titles, status items |
| Tab label / Metadata | `title-5` | 16px | Tab navigation, secondary labels, person names in grids |
| Review/Long text | `paragraph-2` | 18px | Multi-line review content, detailed descriptions |
| Body text | `paragraph-3` | 16px | Standard body text, supporting descriptions |
| Small label | `paragraph-4` | 14px | Field labels, timestamps, secondary metadata |
| Tag text / Counter | `caption-3` | 12px | Tags, image counters, badges |

---

## Detailed Typography Scale

### Headlines (Serif for H1-H3, Sans for H4-H7)

| Style | Class | Size | Line Height | Tracking | Font | Use When... |
|-------|-------|------|-------------|----------|------|-------------|
| Headline 1 | `headline-1` | 72px | 76px | -2.88px | Serif | Landing page hero titles |
| Headline 2 | `headline-2` | 56px | 60px | -2.24px | Serif | **Page titles** - clinic names, entity profiles |
| Headline 3 | `headline-3` | 48px | 52px | -1.92px | Serif | Section titles on landing pages |
| Headline 4 | `headline-4` | 40px | 44px | -1.6px | Sans | **Hero overlays** - titles on images |
| Headline 5 | `headline-5` | 36px | 40px | -1.44px | Sans | Mid-size section headers |
| Headline 6 | `headline-6` | 32px | 36px | -1.28px | Sans | **Primary page sections** - main content areas |
| Headline 7 | `headline-7` | 28px | 36px | -1.12px | Sans | **Content sections** - "About", "Services", "Reviews" |

**Examples from Figma:**
- `headline-2`: "Medart Hair Clinic" (page title on clinic profile)
- `headline-4`: "Appointment at Medart Clinic" (hero overlay)
- `headline-6`: "Appointment details" (main section on detail page)
- `headline-7`: "About", "Client Transformation", "Rating & Review", "Facilities", "Services"

---

### Titles (Sans - DM Sans Medium)

| Style | Class | Size | Line Height | Tracking | Use When... |
|-------|-------|------|-------------|----------|-------------|
| Title 1 | `title-1` | 24px | 32px | -0.96px | **Group headers** - "Clinic Info", "Payment info", "Tracking progress" |
| Title 2 | `title-2` | 22px | 26px | -0.44px | **Key values** - dates, service names, prices as primary display |
| Title 3 | `title-3` | 20px | 24px | -0.8px | **List items** - clickable rows, field labels with values below |
| Title 4 | `title-4` | 18px | 22px | -0.72px | **Card titles** - reviewer names, status item titles |
| Title 5 | `title-5` | 16px | 20px | -0.32px | **Tabs/metadata** - navigation tabs, secondary labels, counts |
| Title 6 | `title-6` | 14px | 18px | -0.28px | Small titles, form labels |
| Title 7 | `title-7` | 12px | 16px | - | Micro labels |

**Examples from Figma:**
- `title-1`: "Clinic Info", "Payment info", "Get support anytime", "Tracking progress"
- `title-2`: "Fri, 23 Dec", "Consultation" (highlighted appointment data)
- `title-3`: "Confirmation code", "Getting there", "Message Clinic", "Total cost"
- `title-4`: "Sarah L.", "Gerard K." (reviewer names), "Appointment confirmed"
- `title-5`: "About" (tab), "(3,586 Reviews)", "Istanbul, Turkey", "Michael B. Luong"

---

### Paragraphs (Sans - DM Sans Regular)

| Style | Class | Size | Line Height | Use When... |
|-------|-------|------|-------------|-------------|
| Paragraph 1 | `paragraph-1` | 20px | 28px | Large body text, important descriptions |
| Paragraph 2 | `paragraph-2` | 18px | 26px | **Review text** - multi-line reviews, detailed content |
| Paragraph 3 | `paragraph-3` | 16px | 24px | **Body text** - descriptions, supporting info, data values |
| Paragraph 4 | `paragraph-4` | 14px | 20px | **Small labels** - timestamps, field labels, hint text |
| Paragraph 5 | `paragraph-5` | 12px | 16px | Fine print, footnotes |

**Examples from Figma:**
- `paragraph-2`: Review body text ("I was nervous about the process...")
- `paragraph-3`: "TAR3940N2750AC" (confirmation code value), "$3,750 USD", clinic descriptions
- `paragraph-4`: "Time", "Service", "10:00 AM", "Beard transplant", "Nov 14, 2024"

---

### Captions & UI Elements (Sans - DM Sans)

| Style | Class | Size | Line Height | Weight | Use When... |
|-------|-------|------|-------------|--------|-------------|
| Caption 1 | `caption-1` | 14px | 18px | 500 | Standard captions |
| Caption 2 | `caption-2` | 13px | 17px | 500 | Small captions |
| Caption 3 | `caption-3` | 12px | 16px | 500 | **Tags** - "Hair Transplant", image counters "01/22" |
| Button 1 | `button-1` | 16px | 24px | 600 | Standard buttons, action text |
| Button 2 | `button-2` | 14px | 20px | 600 | Small buttons |

**Examples from Figma:**
- `caption-3`: "Hair Transplant" (tag), "01/22" (image counter)
- `button-1`: "View Profile", "Get receipt"

---

## Typography Decision Tree

Use this decision tree to select the correct style:

```
Is this the main page title?
├─ YES → Is it a profile/entity page?
│        ├─ YES → headline-2 (serif)
│        └─ NO → headline-3 or headline-4 (based on size needed)
└─ NO → Is this a section header?
         ├─ YES → Is it the primary section on the page?
         │        ├─ YES → headline-6
         │        └─ NO → headline-7
         └─ NO → Is this a group/panel header?
                  ├─ YES → title-1
                  └─ NO → Is this data that should stand out?
                           ├─ YES → title-2 (key values like dates, prices)
                           └─ NO → Is this a clickable list item?
                                    ├─ YES → title-3
                                    └─ NO → Is this a card/small title?
                                             ├─ YES → title-4 or title-5
                                             └─ NO → Use paragraph-3 (body) or paragraph-4 (small)
```

---

## Common Patterns

### Section Header with Subtext
```tsx
// headline-7 for section, paragraph-3 for subtext
<div className="flex flex-col gap-2">
  <h3 className="headline-7 text-primary-green-100">Rating & Review</h3>
  <p className="paragraph-3 text-primary-green-60">(Based on Google Reviews, Trustpilot)</p>
</div>
```

### Group Header with Content
```tsx
// title-1 for group header
<div className="flex flex-col gap-4">
  <h4 className="title-1 text-primary-green-100">Payment info</h4>
  <div className="flex flex-col gap-2">
    <span className="title-3 text-primary-green-100">Total cost</span>
    <span className="paragraph-3 text-primary-green-60">$3,750 USD</span>
  </div>
</div>
```

### Key Data Display
```tsx
// title-2 for highlighted values
<div className="flex flex-col gap-2 items-center">
  <span className="paragraph-4 text-primary-green-60">Time</span>
  <span className="title-2 text-primary-green-100">Fri, 23 Dec</span>
  <span className="paragraph-4 text-primary-green-60">10:00 AM</span>
</div>
```

### Clickable List Item
```tsx
// title-3 for list items with chevron
<button className="flex items-center justify-between w-full py-4">
  <span className="title-3 text-primary-green-100">Getting there</span>
  <ChevronRight className="size-5 text-primary-green-60" />
</button>
```

### Review Card
```tsx
// title-4 for name, paragraph-3 for subtitle, paragraph-2 for body
<div className="flex flex-col gap-3">
  <div className="flex items-center gap-2">
    <Avatar />
    <div>
      <p className="title-4 text-primary-green-100">Sarah L.</p>
      <p className="paragraph-3 text-primary-green-60">Clinic Ambassador</p>
    </div>
  </div>
  <p className="paragraph-2 text-primary-green-100">
    I was nervous about the process, but the staff made me feel...
  </p>
  <p className="paragraph-4 text-primary-green-60">Nov 14, 2024</p>
</div>
```

### Profile Page Header
```tsx
// headline-2 (serif) for page title, title-5 for metadata
<div className="flex flex-col gap-2">
  <h1 className="headline-2 font-serif text-primary-green-100">Medart Hair Clinic</h1>
  <div className="flex items-center gap-2">
    <span className="title-1 text-primary-green-90">4.7</span>
    <StarRating />
    <span className="title-5 text-primary-blue-100">(3,586 Reviews)</span>
  </div>
  <span className="title-5 text-primary-green-90">Istanbul, Turkey</span>
</div>
```

---

## Font Selection Rules

1. **Headlines H1-H3**: Always use `font-serif` (P22 Mackinac Pro)
2. **Headlines H4-H7**: Use `font-sans` (DM Sans Medium, weight 500)
3. **Titles T1-T7**: Use `font-sans` (DM Sans Medium, weight 500)
4. **Paragraphs**: Use `font-sans` (DM Sans Regular, weight 400)
5. **Buttons**: Use `font-sans` with `font-semibold` (weight 600)
6. **Captions**: Use `font-sans` (DM Sans Medium, weight 500)

---

## Accent Text Pattern

Use italic serif for emphasis on key words in headlines:

```tsx
<h2 className="headline-3 text-primary-green-100">
  Your journey supported by trustworthy{' '}
  <span className="font-serif italic text-primary-brown-30">partner clinics</span>
</h2>
```

### Common Accent Words
- "smooth and flawless"
- "partner clinics"
- "exceptional care"
- "trusted"

---

## Critical Rules

1. **Only 2 fonts** - Never introduce additional fonts
2. **Serif for H1-H3 only** - H4 and below use sans-serif
3. **Tight tracking on headlines** - Built into the headline classes
4. **Italic serif for accents** - Never use bold or underline for accent words
5. **Brown accents on light** - Use `text-primary-brown-30` on light backgrounds
6. **Neon accents on dark** - Use `text-primary-neon` on dark backgrounds
7. **Weight consistency** - Headlines/titles use 500, paragraphs use 400, buttons use 600
