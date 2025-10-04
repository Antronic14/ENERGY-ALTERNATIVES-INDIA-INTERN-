# CLIMAFIX Homepage Redesign - Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from leading innovation summit and conference platforms (TED, Web Summit, Slush, Y Combinator events) that successfully blend visual impact with information clarity. The design emphasizes CLIMAFIX Summit 2025 as the hero while maintaining the platform's intelligence offerings.

## Core Design Principles

1. **Summit-First Hierarchy**: Every design decision prioritizes summit visibility and conversion
2. **Impact Through Imagery**: Leverage group photos, speaker headshots, and event visuals to build credibility
3. **Data-Driven Trust**: Display statistics and numbers prominently to convey scale and authority
4. **Action-Oriented**: Multiple, strategically placed CTAs guide users toward registration/engagement

---

## Color Palette

### Primary Colors (Dark Mode)
- **Turquoise Primary**: 180 65% 50% (from CLIMAFIX brand)
- **Deep Teal Background**: 200 20% 10%
- **Dark Canvas**: 200 15% 8%

### Accent & Supporting
- **Energetic Orange**: 25 90% 55% (brand accent, use sparingly for CTAs)
- **Warm Neutral**: 40 15% 85% (text on dark)
- **Muted Teal**: 180 40% 25% (cards, sections)

### Light Mode (if needed)
- White backgrounds with teal/orange accents
- Maintain high contrast for accessibility

---

## Typography

**Font Stack**: 
- **Primary**: 'Inter', system-ui, sans-serif (modern, professional, excellent readability)
- **Headings**: 'Space Grotesk', 'Inter', sans-serif (distinctive, tech-forward for impact)

**Scale & Weights**:
- Hero Headline: text-6xl md:text-7xl lg:text-8xl, font-bold (800)
- Section Titles: text-4xl md:text-5xl, font-bold (700)
- Subsection Headings: text-2xl md:text-3xl, font-semibold (600)
- Body Text: text-base md:text-lg, font-normal (400)
- Small Print/Labels: text-sm, font-medium (500)

---

## Layout System

**Spacing Primitives**: Consistent use of Tailwind units **4, 8, 12, 16, 20, 24** for spacing
- Component padding: p-8 (mobile), p-12 or p-16 (desktop)
- Section spacing: py-16 md:py-20 lg:py-24
- Element gaps: gap-4, gap-8, gap-12

**Container Strategy**:
- Full-width sections: w-full with inner max-w-7xl mx-auto px-6
- Content sections: max-w-6xl mx-auto
- Reading content: max-w-4xl

**Grid Patterns**:
- Mobile: Single column (grid-cols-1)
- Tablet: 2 columns (md:grid-cols-2)
- Desktop: 3-4 columns for cards (lg:grid-cols-3, xl:grid-cols-4)
- Speakers/Stats: Up to 6 columns on large screens (lg:grid-cols-6)

---

## Component Library

### Hero Section
- **Full-screen impact** (min-h-screen) with large hero image from summit
- Overlay gradient: from-teal-900/90 via-teal-900/70 to-transparent
- Centered content: Summit logo, tagline, dates (Sept 11-12, 2025), location
- Dual CTAs: Primary "Register Now" (orange), Secondary "View Agenda" (outline with backdrop-blur)
- Animated scroll indicator

### Summit Timeline Carousel
- Horizontal scrolling cards showcasing 2022, 2023, 2024, 2025
- Each card: Year badge, group photo, key highlights (3-4 bullets), attendance stats
- Auto-scroll with manual controls

### Statistics Grid
- Large numbers display: 400+ Startups, 150+ Investors, 4 Key Themes
- Icon + Number + Label format
- Animated count-up on scroll

### Speaker Showcase
- Masonry or grid layout with circular/rounded profile images
- Hover: Name, title, organization overlay
- Filter by category (Investors, Experts, Startups)

### Agenda Preview
- Day 1 / Day 2 tabs with timeline view
- Highlight 3-4 key sessions per day
- "Download Full Agenda" CTA

### Theme Cards
- 4 main themes: Bio-Economy, Energy Efficiency, Deep Tech, AI 4 Climate
- Large icons, gradient backgrounds, brief descriptions
- Click to expand or link to details

### Previous Summit Gallery
- 3-column grid of group photos with year labels
- Lightbox on click

### Partners Section
- Logo grid (6-8 per row on desktop)
- Grayscale with color on hover

### Information Cards (Secondary)
- Stakeholders, Intelligence Types sections
- Icon + Title + Description format
- Subtle borders, hover elevation

---

## Imagery Strategy

### Hero Image
**Required**: Large, impactful group photo from CLIMAFIX Summit (preferably 2024 or 2025 group shot) as hero background. Alternative: Collage of summit moments.

### Section Images
- Speaker headshots: Circular, consistent sizing (w-24 h-24 or w-32 h-32)
- Summit photos: Group photos for timeline, candid networking shots for atmosphere
- Theme icons: Custom illustrations or high-quality icon set for themes
- Partner logos: Official brand assets

### Image Treatment
- Hero: Overlay with teal gradient (opacity 60-80%)
- Cards: Slight border-radius (rounded-lg or rounded-xl)
- Hover states: Scale (scale-105) with smooth transitions

---

## Animations & Interactions

**Minimal, Purposeful Motion**:
- Scroll-triggered fade-ins for sections (opacity + translateY)
- Hover: Gentle scale (1.02-1.05), shadow elevation
- Button hover: Slight brightness increase, no complex animations
- Carousel: Smooth slide transitions (300ms ease-in-out)
- Statistics: Count-up animation on viewport entry

**Avoid**: Heavy parallax, continuous animations, distracting effects

---

## Navigation & Structure

### Header
- Sticky navigation with backdrop-blur
- Logo (left), Menu items (center/right): Summit 2025, About, Past Summits, Intelligence, Contact
- Prominent "Register" button (orange, top-right)

### Footer
- 4-column layout: Summit Info, Quick Links, Contact, Social
- Newsletter signup inline
- Partner logos ribbon
- Copyright, privacy links

### Page Flow
1. Hero (Summit 2025 focus)
2. Stats Bar (immediate impact)
3. Why Attend / Benefits
4. Speakers Grid
5. Agenda Preview
6. Key Themes
7. Summit Timeline (Past editions)
8. Gallery
9. Partners
10. Secondary: Intelligence Services (Reports, Updates, Consulting)
11. Footer with final CTA

---

## Accessibility & Responsiveness

- High contrast text (WCAG AA minimum)
- Focus states: Visible outline (ring-2 ring-turquoise-400)
- Mobile: Stack all grids to single column, larger touch targets (min 44px)
- Images: Descriptive alt text
- Semantic HTML: Proper heading hierarchy (h1 → h6)

---

## Key Deliverables

- **Live Webpage**: Fully functional, responsive HTML/CSS/JS page
- **ZIP Package**: All assets (HTML, CSS, images, fonts, icons) organized in folders
- **Asset Management**: Use CDN links for icons (Heroicons), Google Fonts for typography
- **Image Optimization**: Compress all images, use WebP format where possible

This design balances visual storytelling with information density, ensuring the CLIMAFIX Summit 2025 commands attention while maintaining the platform's professional credibility and comprehensive content offerings.