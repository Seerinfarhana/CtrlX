# CULTURA Design Guidelines

## Design Approach: Museum-Inspired Cultural Excellence

This platform blends the elegance of a virtual museum with the interactivity of a social network. Drawing inspiration from prestigious cultural institutions like The Met, Louvre digital experiences, and modern art platforms like Artsy and Saatchi Art, while maintaining the professional polish of LinkedIn.

**Core Principle**: Every interaction should feel like curating and experiencing art in a prestigious gallery—refined, intentional, and visually rich.

## Color Palette

- **Primary Navy**: #1B1F3B (backgrounds, headers, primary text)
- **Accent Gold**: #C6A664 (CTAs, highlights, borders, badges)
- **Ivory Base**: #F7F4E9 (main backgrounds, cards, light sections)
- **Accent Teal**: #70A8A8 (secondary actions, links, status indicators)
- **Status Colors**: Green (#4CAF50) for Available, Amber (#FFA726) for Reserved, Red (#EF5350) for Sold

## Typography System

**Display/Headings**: Playfair Display (serif, elegant)
- Hero titles: 4xl-6xl, font-weight 700
- Section headers: 3xl-4xl, font-weight 600
- Card titles: xl-2xl, font-weight 600

**Body/Interface**: Poppins (clean, readable)
- Body text: base-lg, font-weight 400
- Labels: sm-base, font-weight 500
- Buttons: base, font-weight 600

## Layout System

**Spacing Scale**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 to py-24 (desktop), py-12 to py-16 (mobile)
- Card padding: p-6 to p-8
- Element gaps: gap-4 to gap-8

**Grid Patterns**:
- Artwork galleries: 3-column on desktop (grid-cols-3), 2-column tablet (md:grid-cols-2), single mobile
- Featured sections: 4-column stats/metrics (grid-cols-4)
- Dashboard layouts: Sidebar navigation + main content area

## Component Library

### Landing Page Components
1. **Hero Section** (80vh): Full-width background with cultural pattern overlay, centered headline with gold accent underline, three role-specific CTA buttons (Artist/User/Organization) with gold borders
2. **Featured Artworks Carousel**: Auto-rotating showcase with 5-6 artworks, navigation dots, smooth fade transitions
3. **Trending Artists Grid**: 3-column cards with circular profile images, artist name in Playfair, follower count, hover lift effect
4. **Mission Statement**: Split layout with cultural imagery left, text content right, framed with subtle gold border
5. **Footer**: Dark navy background, 4-column layout (About, Quick Links, Contact, Social), gold divider lines

### Navigation
- **Main Nav**: Sticky header with logo left, menu items center, profile/dashboard right
- **Dashboard Sidebar**: Fixed left sidebar (256px) with role-specific menu items, gold active state indicator
- **Breadcrumbs**: On detail pages showing navigation path

### Artwork Cards
- **Gallery Card**: Framed image with 8px ivory border, subtle shadow, title overlay on hover with dark gradient, status badge top-right corner
- **Detail View**: Large centered image (max 70vh), metadata sidebar with artist info, engagement buttons (Like/Comment/Rate), description below
- **Upload Preview**: Dotted border upload zone, drag-drop indicator, thumbnail preview grid

### Forms & Inputs
- **Text Inputs**: Ivory background, navy border, gold focus ring, rounded corners (6px)
- **Buttons**: 
  - Primary: Gold background (#C6A664), navy text, hover darkens
  - Secondary: Navy outline, transparent bg, gold text on hover
  - Tertiary: Teal for auxiliary actions
- **Dropdowns**: Custom styled with gold accent on selected items
- **File Upload**: Large drop zone with cultural icon, progress bar in gold

### Dashboard Widgets
- **Stats Cards**: White cards with gold accent border-left, large numbers in Playfair, icon in teal
- **Activity Feed**: Timeline layout with circular avatars, gold connector line, card-based entries
- **Request Cards** (Organization): Elevated cards with project details, artist response count, accept/decline buttons

### Interactive Elements
- **Rating Stars**: Outlined stars, fill with gold on selection, half-star support
- **Comment Threads**: Nested layout with connecting lines, user avatars, timestamp in light text
- **Status Badges**: Pill-shaped, colored background with white text, uppercase small font
- **Recognition Badge**: Gold trophy/medal icon with "Recognized" text on artist profiles

### Gallery Displays
- **Masonry Grid**: Variable height artwork cards creating dynamic layout (on User Explore page)
- **Portfolio View**: Full-width rows with alternating image-left/right layouts showcasing artist work
- **Carousel**: Smooth horizontal scroll with navigation arrows, snap-to-center

## Animations & Interactions

**Subtle & Purposeful** (using Framer Motion):
- Page transitions: Fade in with slight upward slide (200ms)
- Card hover: Lift effect (translateY -4px) with shadow increase
- Image load: Fade in from placeholder
- Parallax: Hero background moves at 0.5x scroll speed
- Button hover: Gold glow effect (box-shadow spread)
- Carousel: Smooth slide transitions (400ms ease-in-out)

**NO** excessive scroll-triggered animations—maintain elegance and performance.

## Images & Visual Assets

**Hero Section**: Large panoramic cultural imagery—museum interior, art gallery, or abstract cultural patterns with 40% dark overlay for text contrast

**Artist Profiles**: Circular cropped profile photos (128px diameter)

**Artwork Images**: Primary content—high-quality uploads displayed in 16:9 or 4:3 aspect ratios, framed presentation

**Organization Logos**: Square format (64px), displayed in ivory circles

**Background Patterns**: Subtle cultural motifs (damask, art deco patterns) at 5% opacity on ivory sections

**Icons**: Use Heroicons (outline style) for UI elements—24px standard size, gold color for primary actions

## Responsive Behavior

**Desktop (1280px+)**: Full sidebar, 3-column grids, large hero imagery
**Tablet (768-1279px)**: Collapsible sidebar, 2-column grids, reduced padding
**Mobile (<768px)**: Bottom nav bar, single column, stacked layouts, full-width cards

## Page-Specific Guidelines

**Landing**: Multi-section scrolling experience with 6-8 sections, generous whitespace, impactful visuals at each section break

**Artist Dashboard**: Left sidebar nav, main content area with upload zone prominent, recent works grid below, analytics cards in 4-column layout

**Artwork Detail**: Centered layout with max-width container (1024px), large image hero, two-column layout for metadata + interactions below

**Explore Page**: Filter sidebar left (256px), gallery grid right taking remaining space, sticky filter headers

**Query Page**: Centered form (max-width 640px), cultural illustration on side, clear field labels, prominent submit button

This creates a cohesive, museum-quality digital experience that honors art and culture while providing modern web functionality.