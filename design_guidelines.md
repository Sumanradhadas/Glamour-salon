# WebGlow Portfolio - Glamour Beauty Salon Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from luxury beauty brands like Sephora, Glossier, and high-end salon websites, combined with modern glassmorphism design principles.

## Core Aesthetic
**Dark Luxury Theme**: Navy-black backgrounds (#0a0e27, #1a1d3a) with pink-violet glow accents (#c084fc, #e879f9, #f0abfc) for premium, soothing beauty brand feel. Glassmorphism panels with semi-transparent backgrounds (rgba(255,255,255,0.05-0.1)) and subtle borders.

## Typography
**Font Families**:
- Headings: 'Playfair Display' or 'Cormorant Garamond' (elegant serif)
- Body: 'Inter' or 'DM Sans' (clean sans-serif)
- Accents: Optionally 'Italiana' for brand name

**Hierarchy**:
- H1: 3xl-5xl, font-semibold to font-bold
- H2: 2xl-3xl, font-semibold
- Body: base-lg, font-normal
- Buttons: sm-base, uppercase tracking-wide

## Spacing System
Use Tailwind units: **4, 6, 8, 12, 16, 20** for consistent rhythm
- Section padding: py-20 (desktop), py-12 (mobile)
- Component gaps: gap-8 to gap-12
- Card padding: p-6 to p-8

## Page-Specific Layouts

### Home Page
**Hero Section** (90vh):
- Full-width background with dark gradient overlay
- Centered content: Salon logo/name, elegant tagline, prominent "Book Now" CTA with blur background and glow effect
- Subtle particle or glow animations in background

**Features/Highlights** (below fold):
- 3-column grid showcasing key services with icons
- Each card: glassmorphism panel, icon, title, brief description, glow on hover

### Services Page
**Header**: Page title with decorative underline glow

**Service Grid**: 
- 3-column layout (1 col mobile, 2 col tablet, 3 col desktop)
- Each service card: image, service name, description, "Learn More" link
- Hover: lift effect (transform translateY), intensified glow border

### Gallery Page
**Masonry-Style Grid**:
- Before/After transformations in side-by-side cards
- 2-3 columns responsive grid
- Lightbox/modal capability for full-size viewing
- Subtle fade-in scroll animations

### Team Page
**Staff Profiles Grid**:
- 2-3 column layout with team member cards
- Each card: professional photo (circular or rounded), name, role, brief bio
- Glassmorphism background with soft shadow
- Subtle hover glow effect

### Contact Page
**Two-Column Layout**:
- Left: Contact form (name, email, phone, service selection, message)
- Right: Business info (address, hours, phone, email) with map placeholder
- Form inputs: glassmorphism style with glow focus states
- Submit button with glow effect

## Component Library

**Navigation**:
- Sticky header with glassmorphism background
- Logo left, menu items right (desktop), hamburger menu (mobile)
- Active page indicator with glow underline

**Buttons**:
- Primary: Solid with pink-violet gradient, glow shadow
- Secondary: Outline with glow border
- All buttons: backdrop-blur background when on images

**Cards/Panels**:
- Glassmorphism: backdrop-blur-md, bg-white/5, border border-white/10
- Rounded corners: rounded-xl to rounded-2xl
- Box shadow with violet glow: shadow-lg shadow-purple-500/20

**Forms**:
- Input fields: glassmorphism background, glow on focus
- Labels: small text above inputs
- Validation: subtle error states with red-pink glow

## Animations
**Minimal Motion Philosophy**:
- Page load: Subtle fade-in for content
- Hover effects: Smooth scale (1.05), glow intensification
- Scroll: Gentle fade-in for gallery items only
- NO excessive animations - maintain elegant simplicity

## Images Strategy
**Hero Image**: Yes - Full-width salon interior or abstract beauty imagery with dark overlay

**Additional Images**:
- Service cards: Representative service images (hair styling, makeup, spa)
- Gallery: 6-9 before/after transformation photos
- Team: 4-6 staff professional headshots
- Background textures: Subtle geometric or bokeh patterns for depth

## Responsive Breakpoints
- Mobile: Single column, stacked navigation
- Tablet (md): 2-column grids
- Desktop (lg): 3-column grids, full navigation

## Accessibility
- High contrast for readability on dark backgrounds
- Focus states with visible glow rings
- Semantic HTML structure
- Alt text for all images