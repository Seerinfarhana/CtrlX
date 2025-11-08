# CULTURA - The Virtual Art & Heritage Network

## Overview

CULTURA is a digital art ecosystem that functions as a hybrid platform combining features of LinkedIn, virtual museums, and art galleries. The platform connects three distinct user groups: artists who showcase their work, art lovers who explore and engage with artworks, and organizations seeking creative talent. Built with a museum-quality aesthetic inspired by prestigious cultural institutions (The Met, Louvre, Artsy), the platform emphasizes sophistication through visual restraint, allowing artwork to remain the primary focus.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management and data fetching

**UI Component System**
- shadcn/ui component library (New York style variant) built on Radix UI primitives
- Tailwind CSS for utility-first styling with custom theme configuration
- Design system based on two primary typefaces: Playfair Display (serif for headings) and Poppins (sans-serif for body/UI)
- Custom color palette: Navy Blue, Gold (#D4AF37), Ivory, and Teal
- Glass-morphism effects and elevation-based hover interactions

**State Management**
- React Query handles all server state with aggressive caching (staleTime: Infinity)
- Local component state with React hooks for UI interactions
- Form state managed via React Hook Form with Zod validation

**Routing Structure**
- `/` - Landing/Home page with hero section and featured content
- `/explore` - Artwork gallery with filtering capabilities
- `/artists` - Artist directory with search and filtering
- `/artists/:id` - Individual artist profile pages
- `/dashboard` - Artist dashboard for managing artworks
- `/artworks/:id` - Detailed artwork view with comments
- `/contact` - Contact form
- `/login` and `/signup` - Authentication pages with role-based signup

### Backend Architecture

**Server Framework**
- Express.js with TypeScript running in ESM mode
- Custom middleware for request/response logging
- Role-based API structure without authentication currently implemented

**API Design**
- RESTful endpoints under `/api` prefix
- Routes organized by resource type (artworks, comments)
- Validation using Zod schemas shared between client and server
- Error handling with appropriate HTTP status codes

**Key API Endpoints**
- `POST /api/artworks` - Create new artwork
- `GET /api/artworks/artist/:artistId` - Retrieve artist's artworks
- `GET /api/artworks/:id` - Get single artwork details
- `POST /api/comments` - Add comment to artwork
- `GET /api/comments/artwork/:artworkId` - Fetch artwork comments

### Data Layer

**ORM & Schema**
- Drizzle ORM configured for PostgreSQL dialect
- Schema-first approach with TypeScript type inference
- Zod schemas generated from Drizzle tables for runtime validation

**Database Schema**
- `users` table: id (UUID), username (unique), password
- `artworks` table: id (UUID), title, imageUrl, artistId, category, status (available/reserved/sold), views, likes
- `comments` table: id (UUID), artworkId, artistId, comment, createdAt

**Current Storage Implementation**
- In-memory storage implementation (`MemStorage`) for development
- Storage interface (`IStorage`) designed for easy transition to database-backed implementation
- UUID-based identifiers using Node.js crypto module

### Development Environment

**Build & Development**
- TypeScript with strict mode enabled
- Path aliases configured: `@/` for client, `@shared/` for shared code, `@assets/` for static assets
- Separate build processes for client (Vite) and server (esbuild)
- Hot module replacement in development via Vite
- Replit-specific plugins for enhanced development experience

**Code Quality**
- TypeScript strict type checking
- Shared types between client and server via `shared/` directory
- Component examples directory for design system documentation

## External Dependencies

### Core Runtime Dependencies

**Database & Data**
- `@neondatabase/serverless` - Neon PostgreSQL serverless driver with WebSocket support
- `drizzle-orm` - TypeScript ORM for type-safe database operations
- `drizzle-zod` - Zod schema generation from Drizzle tables
- `connect-pg-simple` - PostgreSQL session store (currently unused)

**UI Component Libraries**
- `@radix-ui/*` (20+ packages) - Unstyled, accessible component primitives
- `cmdk` - Command menu component
- `vaul` - Drawer/bottom sheet component
- `embla-carousel-react` - Carousel functionality
- `react-day-picker` - Calendar/date picker
- `recharts` - Charting library

**Form & Validation**
- `react-hook-form` - Performant form state management
- `@hookform/resolvers` - Validation resolver integration
- `zod` - Schema validation library

**Utility Libraries**
- `date-fns` - Date manipulation and formatting
- `class-variance-authority` - CSS class variant management
- `clsx` & `tailwind-merge` - Conditional CSS class composition
- `lucide-react` - Icon library

**Development Tools**
- `@vitejs/plugin-react` - React integration for Vite
- `@replit/vite-plugin-*` - Replit development enhancements
- `tsx` - TypeScript execution for development server
- `esbuild` - Production server bundling

### Configuration Notes

- Database connection expects `DATABASE_URL` environment variable
- Drizzle migrations output to `./migrations` directory
- WebSocket constructor polyfill required for Neon serverless driver (using `ws` package)
- Vite configured with custom aliases and asset resolution
- PostCSS configured for Tailwind CSS processing

### Third-Party Service Integration Points

**Not Yet Implemented**
- Authentication system (Firebase Auth or JWT mentioned in requirements)
- File upload/storage for artwork images (currently using placeholder URLs)
- Email verification system
- Payment processing (implied by "sold" artwork status)
- Social media integration (footer includes social icon placeholders)