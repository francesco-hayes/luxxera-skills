# Articles

Articles are long-form content pages for blog posts, guides, and educational content. They follow a specific layout and typography hierarchy to ensure readability and visual appeal.

## Page Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│  Navigation (sticky)                                                │
├─────────────────────────────────────────────────────────────────────┤
│  Hero Image with Overlay                                            │
│  ┌─────────────────────────────────────────────────────────────────┐│
│  │  [Tag]                                                          ││
│  │  Article Title (title-1, white)                                 ││
│  │  Author • Date • Read time                                      ││
│  └─────────────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│     ┌─────────────────────────────────────────────────────────┐     │
│     │  Page Title (headline-2, serif, centered)               │     │
│     └─────────────────────────────────────────────────────────┘     │
│                                                                     │
│     ┌─────────────────────────────────────────────────────────┐     │
│     │  Featured Image (rounded-32, full-width)                │     │
│     └─────────────────────────────────────────────────────────┘     │
│                                                                     │
│     ┌─────────────────────────────────────────────────────────┐     │
│     │  Article Body (max-w-[900px])                           │     │
│     │  - Introduction                                         │     │
│     │  - Section headers                                      │     │
│     │  - Paragraphs                                           │     │
│     │  - Callouts                                             │     │
│     │  - Tables                                               │     │
│     │  - Images                                               │     │
│     └─────────────────────────────────────────────────────────┘     │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│  More Articles Section (3-column grid)                              │
├─────────────────────────────────────────────────────────────────────┤
│  Footer                                                             │
└─────────────────────────────────────────────────────────────────────┘
```

## Layout Specifications

### Content Width

| Element | Width | Tailwind |
|---------|-------|----------|
| Page container | 1920px max | `max-w-[1920px]` |
| Title area | 1208px | `w-[1208px]` or `max-w-[1208px]` |
| Article body | 900px | `w-[900px]` or `max-w-[900px]` |
| Featured image | Full width within container | `w-full` |

### Spacing

| Context | Value | Tailwind |
|---------|-------|----------|
| Page sections | 132px | `gap-[132px]` or `py-[132px]` |
| Content sections | 80px | `gap-20` or `gap-[80px]` |
| Within sections | 32px | `gap-8` or `gap-[32px]` |
| Paragraph spacing | 32px | `gap-8` |
| Hero padding | 48px horizontal | `px-12` or `px-[48px]` |

---

## Hero Section

The hero section features a full-width image with an overlay containing the article tag, title, and metadata.

```tsx
<div className="relative h-[632px] w-[592px] overflow-hidden rounded-32">
  {/* Background Image */}
  <img
    src="/article-hero.jpg"
    alt=""
    className="absolute inset-0 size-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/10" />

  {/* Gradient Overlay */}
  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/36 to-transparent px-7 py-8">
    {/* Tag */}
    <div className="mb-6 inline-flex items-center rounded-24 border border-primary-brown-30 px-3 py-1">
      <span className="caption-3 text-primary-brown-30">Hair Restoration</span>
    </div>

    {/* Title */}
    <h1 className="title-1 mb-3 text-white">
      Robotic Hair Transplantation: Combining Cutting-Edge Artificial Intelligence
    </h1>

    {/* Metadata */}
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <Avatar className="size-6" />
        <span className="title-5 text-white/80">Dr. Sarah Chen</span>
      </div>
      <span className="title-5 text-white/60">•</span>
      <span className="title-5 text-white/60">Dec 15, 2024</span>
      <span className="title-5 text-white/60">•</span>
      <span className="title-5 text-white/60">8 min read</span>
    </div>
  </div>

  {/* Share Button */}
  <button className="absolute right-6 top-6 flex size-11 items-center justify-center rounded-full bg-white">
    <ShareIcon className="size-5 text-primary-green-100" />
  </button>
</div>
```

---

## Page Title Section

The main page title is centered and uses serif typography.

```tsx
<div className="flex flex-col items-center gap-8 px-12">
  <div className="flex w-[1208px] flex-col items-center gap-8">
    {/* Breadcrumb / Meta */}
    <div className="flex items-center gap-4">
      <span className="text-primary-green-60">Home</span>
      <ChevronRight className="size-4 text-primary-green-60" />
      <span className="text-primary-green-60">Articles</span>
      <ChevronRight className="size-4 text-primary-green-60" />
      <span className="text-primary-green-100">Hair Restoration</span>
    </div>

    {/* Main Title */}
    <h1 className="headline-2 text-center font-serif text-primary-green-90">
      Robotic Hair Transplantation: Combining Cutting-Edge Artificial Intelligence
    </h1>
  </div>
</div>
```

---

## Article Typography

### Typography Hierarchy for Articles

| Element | Style | Class | Color |
|---------|-------|-------|-------|
| Page title | 56px serif | `headline-2 font-serif` | `text-primary-green-90` |
| Section header | 36px sans | `headline-5` | `text-primary-green-100` |
| Subsection intro | 28px sans | `headline-7` | `text-primary-green-80` |
| Body paragraph | 20px/32px | `paragraph-1` | `text-primary-green-80` or `text-primary-green-90` |
| Callout text | 24px | `title-1` | `text-primary-green-90` |
| Table text | 20px | `paragraph-1` | `text-primary-green-90` |

### Body Text

Article body uses `paragraph-1` (20px with 32px line height) for optimal readability:

```tsx
<p className="paragraph-1 text-primary-green-80 tracking-[-0.2px]">
  Hair loss can significantly affect self-esteem, and today, cutting out of the most self-conscious conversations. The search for hair restoration methods has led us to an exceptional revolution in transplant: FUE (Follicular Unit Extraction), 2016.
</p>
```

### Section Headers

Use `headline-5` for main content sections:

```tsx
<h2 className="headline-5 text-primary-green-100">
  Why robotic hair transplantation stands out?
</h2>
```

### Subsection Intro Text

Use `headline-7` for introductory paragraphs under section headers:

```tsx
<p className="headline-7 text-primary-green-80">
  Hair loss can significantly affect self-esteem, and today, cutting out of the most self-conscious conversations.
</p>
```

---

## Article Components

### Callout Box

Use callouts to highlight important quotes or key information:

```tsx
<div className="flex items-start gap-7 rounded-16 bg-primary-green-30 p-10">
  <QuoteIcon className="size-8 shrink-0 text-primary-green-60" />
  <div className="flex flex-col gap-7">
    <p className="title-1 text-primary-green-90">
      "With use mechanical robotics and the intelligence of AI means no human interaction during the procedure of hair extraction, grafts are extracted without any human touch."
    </p>
    <div className="flex items-center gap-3">
      <div className="h-px w-6 bg-primary-green-60" />
      <span className="title-5 text-primary-green-80">Dr. Sarah Chen, Hair Restoration Specialist</span>
    </div>
  </div>
</div>
```

### Content Table

Tables use a bordered grid layout with consistent cell padding:

```tsx
<div className="overflow-hidden rounded-8 border border-black/10">
  <table className="w-full">
    <thead>
      <tr>
        <th className="border border-black/10 p-6 text-left">
          <span className="paragraph-1 font-medium text-primary-green-100">Aspect</span>
        </th>
        <th className="border border-black/10 p-6 text-left">
          <span className="paragraph-1 font-medium text-primary-green-100">Manual FUE methods</span>
        </th>
        <th className="border border-black/10 p-6 text-left">
          <span className="paragraph-1 font-medium text-primary-green-100">Robotic FUE</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-black/10 p-6">
          <span className="paragraph-1 text-primary-green-90">Precision</span>
        </td>
        <td className="border border-black/10 p-6">
          <span className="paragraph-1 text-primary-green-90">Dependent on physician's skill</span>
        </td>
        <td className="border border-black/10 p-6">
          <span className="paragraph-1 text-primary-green-90">AI-driven, consistent accuracy</span>
        </td>
      </tr>
      {/* More rows... */}
    </tbody>
  </table>
</div>
```

**Table Specifications:**
- Border radius: `rounded-8`
- Border: `border border-black/10`
- Cell padding: `p-6` (24px)
- Text: `paragraph-1 text-primary-green-90`
- Header text: `paragraph-1 font-medium text-primary-green-100`

### Inline Image

Images within articles use consistent border radius:

```tsx
<div className="relative h-[480px] w-full overflow-hidden rounded-32">
  <img
    src="/article-image.jpg"
    alt="Robotic hair transplantation procedure"
    className="absolute inset-0 size-full object-cover"
  />
</div>
```

### Bullet Lists

Lists in articles use custom styling with paragraph text:

```tsx
<ul className="flex flex-col gap-4">
  <li className="flex items-start gap-3">
    <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary-green-80" />
    <span className="paragraph-1 text-primary-green-80">
      <strong className="font-semibold text-primary-green-100">Unmatched Precision:</strong> Robots guided by AI ensure exact follicle extraction and implantation.
    </span>
  </li>
  <li className="flex items-start gap-3">
    <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary-green-80" />
    <span className="paragraph-1 text-primary-green-80">
      <strong className="font-semibold text-primary-green-100">Consistency:</strong> Unlike manual methods, robotics provides uniform outcomes.
    </span>
  </li>
</ul>
```

---

## Article Body Layout

The complete article body structure:

```tsx
<article className="flex w-[900px] flex-col gap-20">
  {/* Introduction Section */}
  <section className="flex flex-col gap-8 text-primary-green-80">
    <p className="headline-7">
      Hair loss can significantly affect self-esteem...
    </p>
    <p className="paragraph-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
    <p className="paragraph-1">
      Sed do eiusmod tempor incididunt ut labore et dolore...
    </p>
  </section>

  {/* Content Section */}
  <section className="flex flex-col gap-8">
    <h2 className="headline-5 text-primary-green-100">
      Why robotic hair transplantation stands out?
    </h2>
    <div className="flex flex-col gap-8">
      <p className="paragraph-1 text-primary-green-80">
        Body text explaining the section...
      </p>
      {/* Callout */}
      <CalloutBox quote="..." author="..." />
    </div>
  </section>

  {/* Section with Table */}
  <section className="flex flex-col gap-8">
    <h2 className="headline-5 text-primary-green-100">
      Automated extraction systems
    </h2>
    <p className="paragraph-1 text-primary-green-90">
      Introduction to this section...
    </p>
    <ArticleTable data={tableData} />
    <p className="paragraph-1 text-primary-green-90">
      Additional explanation...
    </p>
  </section>

  {/* Section with Image */}
  <section className="flex flex-col gap-8">
    <h2 className="headline-5 text-primary-green-100">
      Automated implantation systems
    </h2>
    <div className="relative h-[480px] w-full overflow-hidden rounded-32">
      <img src="/procedure.jpg" className="..." />
    </div>
    <p className="paragraph-1 text-primary-green-90">
      Body text following the image...
    </p>
  </section>
</article>
```

---

## Related Articles Section

The "More Articles" section displays related content in a 3-column grid:

```tsx
<section className="flex flex-col gap-16 px-12">
  <h2 className="headline-5 text-primary-green-100">More Article</h2>

  <div className="flex gap-6">
    <ArticleCard
      image="/article-1.jpg"
      tag="Hair Restoration"
      title="Understanding FUE Hair Transplant Methods"
      author="Dr. Michael Park"
      date="Dec 10, 2024"
    />
    <ArticleCard
      image="/article-2.jpg"
      tag="Skin Care"
      title="Advanced Facial Rejuvenation Techniques"
      author="Dr. Emily Wong"
      date="Dec 8, 2024"
    />
    <ArticleCard
      image="/article-3.jpg"
      tag="Recovery"
      title="Post-Procedure Care Guidelines"
      author="Dr. James Lee"
      date="Dec 5, 2024"
    />
  </div>
</section>
```

---

## Complete Page Structure

```tsx
<div className="bg-primary-neutral-background">
  {/* Navigation */}
  <Navigation />

  {/* Hero Card (optional - can be sidebar or top) */}
  <ArticleHeroCard />

  {/* Main Content */}
  <main className="flex flex-col items-center gap-[132px] pt-[156px]">
    {/* Title Section */}
    <div className="flex flex-col items-center gap-[60px] w-full">
      <div className="flex flex-col items-center gap-12 w-full px-12">
        <Breadcrumb />
        <h1 className="headline-2 text-center font-serif text-primary-green-90 max-w-[1208px]">
          Article Title Here
        </h1>
      </div>

      {/* Featured Image */}
      <div className="w-full px-12">
        <div className="relative h-[848px] w-full overflow-hidden rounded-32">
          <img src="/featured.jpg" className="absolute inset-0 size-full object-cover" />
        </div>
      </div>
    </div>

    {/* Article Body */}
    <article className="w-[900px]">
      {/* Sections... */}
    </article>

    {/* Related Articles */}
    <RelatedArticles />
  </main>

  {/* Footer */}
  <Footer />
</div>
```

---

## Critical Rules

1. **Content width**: Always constrain article body to `max-w-[900px]` for readability
2. **Typography**: Use `paragraph-1` (20px/32px) for body text, not smaller sizes
3. **Section spacing**: Use `gap-20` (80px) between major sections
4. **Image radius**: All images use `rounded-32`
5. **Table styling**: Tables have `rounded-8` with `border-black/10` borders
6. **Callout boxes**: Use `bg-primary-green-30` with `rounded-16` and `p-10`
7. **Color hierarchy**:
   - Headers: `text-primary-green-100`
   - Body text: `text-primary-green-80` or `text-primary-green-90`
   - Muted text: `text-primary-green-60`
8. **Hero overlay**: Always include gradient overlay for text legibility
9. **Related articles**: Display in 3-column grid at page bottom
