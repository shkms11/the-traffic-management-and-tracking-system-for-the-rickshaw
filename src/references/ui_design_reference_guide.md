# Rickshaw System UI Design Reference (Liquid Glass Design System)

Use this as the source of truth for all future components to keep the app visually consistent.

---

## 1. Core Design Principles

### Visual Style
- **Liquid glass aesthetic** (soft translucency + blur)
- **Rounded corners everywhere**
- **Soft shadows, never harsh**
- **Layered depth using glow blobs**
- **High readability for older users**
- **Minimal, calm, premium interface**

### Accessibility Rules
- Minimum button height: **h-10** (prefer **h-12**)
- Strong text contrast (`text-neutral-800` or darker)
- Large clickable areas
- Avoid overly transparent text
- Preserve readability over visual effects

---

## 2. Global Background

### Page background gradient
```tsx
bg-gradient-to-b from-slate-50 via-white to-blue-50
```

### Ambient glow blobs (use once per page)
```tsx
<div className="pointer-events-none fixed inset-0 overflow-hidden">
  <div className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-emerald-200/25 blur-3xl" />
  <div className="absolute top-1/2 left-0 h-[300px] w-[300px] rounded-full bg-cyan-100/25 blur-3xl" />
</div>
```

---

## 3. Standard Glass Container (Primary Wrapper)

Use for cards, sections, dashboard panels.

```tsx
relative overflow-hidden
rounded-3xl
border border-white/30
bg-white/20
backdrop-blur-xl
shadow-[0_8px_32px_rgba(0,0,0,0.08)]
```

### Shine overlay (inside glass container)
```tsx
<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent" />
```

### Content wrapper inside glass
```tsx
<div className="relative z-10">
  {/* content */}
</div>
```

---

## 4. Spacing Scale

### Outer layout
```tsx
max-w-6xl mx-auto px-4 sm:px-6
```

### Section spacing
```tsx
mt-6 sm:mt-8
mt-10 sm:mt-14
py-6 sm:py-8
```

### Card padding
```tsx
p-4 sm:p-6
```

Large panels:
```tsx
p-6 sm:p-8
```

---

## 5. Typography

### Page title
```tsx
text-xl sm:text-2xl font-semibold tracking-tight text-emerald-900
```

### Section title
```tsx
text-lg font-semibold text-neutral-800
```

### Hero title
```tsx
text-3xl sm:text-5xl font-bold leading-tight
```

### Body text
```tsx
text-neutral-600 leading-relaxed
```

### Secondary text
```tsx
text-sm text-neutral-500
```

---

## 6. Buttons

### Primary button
```tsx
bg-emerald-700 text-white hover:bg-emerald-800 rounded-xl h-12
```

### Glass secondary button
```tsx
border-white/40
bg-white/25
backdrop-blur-md
hover:bg-white/40
rounded-xl
h-12
```

### Danger button
```tsx
border-red-200/60
bg-red-50/70
text-red-700
hover:bg-red-100/80
rounded-xl
```

### Standard transitions
```tsx
transition-all
```

---

## 7. Card Variants

### Feature card
```tsx
rounded-2xl
border-white/30
bg-white/20
backdrop-blur-lg
shadow-sm
p-5
```

### Stat box
```tsx
rounded-xl
border border-white/30
bg-white/20
backdrop-blur-md
p-3
```

---

## 8. Header / Footer Style

Use floating glass container.

```tsx
sticky top-0 z-50
rounded-2xl
border border-white/30
bg-white/20
backdrop-blur-xl
shadow-[0_8px_32px_rgba(0,0,0,0.08)]
```

---

## 9. Motion Guidelines

### Page fade in
```tsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.35 }}
```

### Lift in
```tsx
initial={{ y: 10, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
```

### Scroll reveal
```tsx
whileInView={{ y: 0, opacity: 1 }}
viewport={{ once: true, amount: 0.2 }}
```

### Hover interactions
Keep subtle:
- slight brightness
- slight shadow increase
- optional `scale-[1.01]`

---

## 10. Color System

### Primary
- Emerald 700
- Emerald 800

### Neutral text
- Neutral 900
- Neutral 800
- Neutral 600
- Neutral 500

### Accent glows
- Blue 200/30
- Emerald 200/25
- Cyan 100/25

### Semantic
- Danger: Red
- Warning/Admin: Amber

---

## 11. Component Checklist (Use Before Shipping)

For every new component, check:

- [ ] Uses correct max width (`max-w-6xl`)
- [ ] Uses rounded corners (`rounded-xl` or `rounded-2xl`)
- [ ] Uses glass styles if container
- [ ] Includes proper blur (`backdrop-blur-md/lg/xl`)
- [ ] Text contrast is readable
- [ ] Buttons are at least `h-10`
- [ ] Uses consistent emerald primary color
- [ ] Has subtle transitions
- [ ] Matches homepage visual language
- [ ] Works well for older users

---

## Golden Rule

When adding any new component, ask:

**Does this look like it belongs on the same app as the homepage, header, dashboard, and footer?**

If not, apply the glass container + spacing + typography rules above until it does.

