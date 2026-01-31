# Accordion / FAQ

Expandable content sections for FAQs and collapsible information.

## FAQ Item

```tsx
// Collapsed state
<div className="bg-primary-green-40 px-24 py-16 rounded-24
  flex items-center justify-between cursor-pointer
  hover:bg-primary-green-30 transition-colors">
  <div className="flex gap-24 items-center title-2 text-primary-green-100">
    <span>01</span>
    <span>How do I choose the right treatment for me?</span>
  </div>
  <button className="size-[48px] flex items-center justify-center">
    <ChevronDownIcon className="size-6 text-primary-green-100" />
  </button>
</div>

// Expanded state
<div className="bg-primary-green-40 rounded-24 overflow-hidden">
  <div className="px-24 py-16 flex items-center justify-between cursor-pointer">
    <div className="flex gap-24 items-center title-2 text-primary-green-100">
      <span>01</span>
      <span>How do I choose the right treatment for me?</span>
    </div>
    <button className="size-[48px] flex items-center justify-center">
      <ChevronUpIcon className="size-6 text-primary-green-100" />
    </button>
  </div>
  <div className="px-24 pb-24">
    <p className="body-3 text-primary-green-90 ml-[48px]">
      Our team of experts will guide you through a personalized consultation
      to understand your needs and recommend the most suitable treatment options.
      We consider factors like your goals, medical history, and budget to ensure
      you make an informed decision.
    </p>
  </div>
</div>
```

## FAQ Properties

### Container
- Background: `bg-primary-green-40`
- Radius: `rounded-24`
- Header padding: `px-24 py-16`

### Header Row
- Layout: `flex items-center justify-between`
- Number + Question: `flex gap-24 items-center`
- Typography: `title-2 text-primary-green-100`

### Toggle Button
- Size: `size-[48px]`
- Icon: `size-6 text-primary-green-100`
- Chevron rotates on expand/collapse

### Content Area
- Padding: `px-24 pb-24`
- Text offset: `ml-[48px]` (aligns with question text)
- Typography: `body-3 text-primary-green-90`

## FAQ Section Pattern

```tsx
<section className="px-spacing-global-1 py-spacing-global-2">
  <div className="flex flex-col gap-60 items-center">
    {/* Section header */}
    <div className="flex flex-col gap-20 items-center text-center max-w-[752px]">
      <h2 className="headline-3 text-primary-green-100">
        Frequently asked{' '}
        <span className="font-serif italic text-primary-brown-30">questions</span>
      </h2>
      <p className="body-2 text-primary-green-90">
        Find answers to common questions about our services.
      </p>
    </div>

    {/* FAQ list */}
    <div className="flex flex-col gap-16 w-full max-w-[900px]">
      <FAQItem number="01" question="How do I choose the right treatment?" />
      <FAQItem number="02" question="What is the consultation process?" />
      <FAQItem number="03" question="How long is the recovery period?" />
      <FAQItem number="04" question="Are treatments covered by insurance?" />
      <FAQItem number="05" question="What makes Luxxera different?" />
    </div>
  </div>
</section>
```

## React Component Example

```tsx
interface FAQItemProps {
  number: string;
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

function FAQItem({ number, question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="bg-primary-green-40 rounded-24 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-24 py-16 flex items-center justify-between
          hover:bg-primary-green-30 transition-colors"
      >
        <div className="flex gap-24 items-center title-2 text-primary-green-100">
          <span>{number}</span>
          <span className="text-left">{question}</span>
        </div>
        <div className="size-[48px] flex items-center justify-center">
          <ChevronIcon
            className={`size-6 text-primary-green-100 transition-transform
              ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="px-24 pb-24">
          <p className="body-3 text-primary-green-90 ml-[48px]">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}
```

## Alternate Styles

### Dark Background FAQ
```tsx
<div className="bg-primary-green-80 px-24 py-16 rounded-24
  flex items-center justify-between">
  <div className="flex gap-24 items-center title-2 text-white">
    <span>01</span>
    <span>Question text here</span>
  </div>
  <button className="size-[48px]">
    <ChevronDownIcon className="size-6 text-white" />
  </button>
</div>
```

### White Background FAQ
```tsx
<div className="bg-white px-24 py-16 rounded-24 border border-primary-neutral-divider
  flex items-center justify-between">
  <div className="flex gap-24 items-center title-2 text-primary-green-100">
    <span>01</span>
    <span>Question text here</span>
  </div>
  <button className="size-[48px]">
    <ChevronDownIcon className="size-6 text-primary-green-100" />
  </button>
</div>
```

## Critical Rules

1. **Consistent numbering** - Use two-digit format (01, 02, 03)
2. **Full-width clickable** - Entire header row should be clickable
3. **Answer offset** - Align answer text with question using `ml-[48px]`
4. **Smooth transitions** - Add `transition-colors` for hover states
5. **Gap between items** - Use `gap-16` between FAQ items
