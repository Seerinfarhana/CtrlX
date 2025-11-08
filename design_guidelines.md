# CULTURA Design Guidelines

## Design Approach: Museum-Quality Digital Experience

Drawing inspiration from prestigious cultural institutions (The Met, Louvre digital platforms, Artsy, Saatchi Art) combined with the professional polish of LinkedIn. Every interaction should evoke the refined experience of curating and viewing art in an elegant gallery.

**Core Principle**: Sophistication through restraint. Visual richness without overwhelming. Let the artwork be the hero.

## Typography System

**Playfair Display (Headings)** - Elegant serif
- Hero titles: 3xl-6xl, weight-700
- Section headers: 2xl-4xl, weight-600  
- Card titles: xl-2xl, weight-600

**Poppins (Body/UI)** - Clean sans-serif
- Body text: base-lg, weight-400
- Labels/metadata: sm-base, weight-500
- Buttons: base, weight-600

## Layout System

**Spacing Units**: 4, 6, 8, 12, 16, 20, 24 (Tailwind scale)
- Sections: py-20 to py-24 (desktop), py-12 (mobile)
- Cards: p-6 to p-8
- Component gaps: gap-6 to gap-8

**Grid Patterns**:
- Artwork galleries: 3-col desktop → 2-col tablet → 1-col mobile
- Stats/metrics: 4-col grid (grid-cols-4)
- Dashboard: Fixed sidebar (256px) + fluid content area

## Component Library

### Landing Page Structure (6-8 Sections)

**Hero** (90vh): Large museum interior image with 50% dark gradient overlay, centered headline with gold accent underline, three glass-morphic CTA buttons (Artist/Collector/Organization) with blurred backgrounds

**Featured Artworks**: Auto-rotating carousel, 5 artworks, smooth fade transitions (500ms), navigation dots in gold

**Trending Artists**: 3-column grid, circular profile images (128px), Playfair names, follower counts, subtle hover lift (translateY -4px)

**Platform Benefits**: 2-column split with cultural pattern image left, benefit list with gold bullet points right

**Mission Statement**: Centered max-width prose (max-w-3xl), framed with subtle gold border-top/bottom

**Recognition Showcase**: 4-column grid of artist achievements with gold badge icons

**Footer**: Navy background, 4-column layout (About/Resources/Community/Legal), gold horizontal divider, social icons in teal

### Navigation Components

**Main Header**: Sticky, logo left (Playfair Display), center menu items (Explore/Artists/Organizations), profile dropdown right with avatar

**Dashboard Sidebar**: Fixed left (256px), role-specific menu with icons (Heroicons outline), gold left-border on active state, collapsible on tablet

**Breadcrumbs**: On detail pages, navy text with gold separators

### Artwork Display Cards

**Gallery Card**: Image with 6px ivory border creating frame effect, subtle shadow (shadow-md), dark gradient overlay on hover revealing title/artist in white Playfair, status badge (Available/Reserved/Sold) top-right corner

**Detail View**: Large centered image (max 65vh), metadata sidebar with artist card, engagement row (Like/Comment/Rate icons in gold), description in prose width below

**Upload Interface**: Dotted gold border drop zone, cultural icon placeholder, grid preview of uploaded images

### Forms & Inputs

**Text Fields**: Ivory background, 1px navy border, gold focus ring (ring-2), rounded-md corners
**Primary Buttons**: Gold background, navy text, slight gold glow on hover (shadow-lg shadow-gold/20)
**Secondary Buttons**: Navy outline, transparent background, fills with navy on hover
**Tertiary Actions**: Teal text, underline on hover
**File Upload**: Large drop zone with damask pattern background (5% opacity), progress bar in gold

### Dashboard Widgets

**Stats Cards**: White with gold left-border (border-l-4), large Playfair numbers, teal icons, descriptive label below

**Activity Timeline**: Vertical line connector in gold, circular user avatars, card-based activity items with timestamps

**Request Manager** (Organizations): Elevated cards with project thumbnail, title in Playfair, artist response count badge, dual action buttons

### Interactive Elements

**Rating System**: Gold outlined stars, fill animation on selection (300ms)
**Comment Threads**: Nested indent with subtle connecting lines, circular avatars, timestamps in muted text
**Status Badges**: Pill shape, colored backgrounds (Available: green-500, Reserved: amber-500, Sold: red-500), white uppercase text
**Recognition Badge**: Gold trophy icon with "Recognized Artist" text on profiles
**Like Button**: Heart icon, fills with gold animation, count appears

### Gallery Layouts

**Masonry Grid** (Explore): Variable height cards creating dynamic staggered layout
**Portfolio View**: Full-width alternating rows, image left/right pattern
**Carousel**: Horizontal scroll with snap-to-center, navigation arrows in gold circles

## Animations & Micro-interactions

Use Framer Motion sparingly for premium feel:
- Page transitions: Fade in + slide up 20px (250ms)
- Card hover: Lift 4px with shadow increase
- Image loading: Fade from ivory placeholder
- Button press: Scale down to 0.98
- Parallax hero: Background moves at 0.6x scroll speed
- Carousel transitions: Smooth slide (450ms ease-in-out)

**No** scroll-triggered animations beyond parallax—maintain performance and elegance.

## Images & Visual Strategy

**Hero Image**: High-quality museum interior, art gallery corridor, or abstract cultural installation. Must be panoramic (21:9 ratio), professional photography with proper lighting. Apply 50% dark overlay for text readability.

**Artist Avatars**: Circular crops (128px for profiles, 48px for cards), professional headshots preferred

**Artwork Images**: The primary content—support multiple aspect ratios (16:9, 4:3, 1:1), framed presentation with ivory borders

**Background Patterns**: Subtle damask or art deco patterns at 5-8% opacity on ivory sections, never competing with content

**Organization Logos**: Square format in ivory circular containers (64px)

**Cultural Illustrations**: Use on empty states, onboarding flows, and query page sidebars—elegant line art style

**Icons**: Heroicons (outline variant), 24px standard, gold for primary actions, navy for secondary

## Responsive Strategy

**Desktop (1280px+)**: Full sidebar, 3-column grids, expansive hero
**Tablet (768-1279px)**: Collapsible sidebar, 2-column grids, py-16 sections
**Mobile (<768px)**: Bottom nav, single column, py-12 sections, full-width cards

## Page-Specific Patterns

**Landing**: Generous whitespace between sections, each section tells complete story, impactful imagery breaks

**Artist Dashboard**: Upload zone featured prominently, recent works in 3-col grid, analytics in 4-col stats row

**Detail Pages**: Centered container (max-w-5xl), large image hero, two-column metadata layout

**Explore**: Left filter sidebar (256px), main gallery grid, sticky filter section headers

This creates a cohesive museum-quality platform that honors art while delivering modern social networking functionality.