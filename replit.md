# Glamour Beauty Salon - WebGlow Portfolio Project

## Overview

Glamour Beauty Salon is a multi-page luxury beauty salon website built as a portfolio showcase for WebGlow. The project demonstrates modern web development practices with a focus on elegant design, featuring a dark navy-lavender aesthetic with glassmorphism elements. The site includes five main pages: Home, Services, Gallery, Team, and Contact, with a functional contact form that stores submissions.

This is a full-stack TypeScript application built with React, Express, and PostgreSQL, showcasing professional-grade development practices including form validation, responsive design, and API integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (SPA navigation)

**UI Component Strategy**
- Shadcn UI component library (Radix UI primitives with custom styling)
- Custom component system configured via `components.json` with "new-york" style preset
- Path aliases configured for clean imports (`@/`, `@shared/`, `@assets/`)

**Styling Approach**
- Tailwind CSS with custom design tokens for the luxury beauty brand aesthetic
- CSS variables for theme colors defined in HSL format for easy manipulation
- Dark luxury theme as default with navy-black backgrounds (#0a0e27, #1a1d3a) and pink-violet glow accents (#c084fc, #e879f9, #f0abfc)
- Custom utility classes for glassmorphism effects, hover elevations, and glow animations
- Typography using Google Fonts: Playfair Display (serif headings) and Inter (sans-serif body)

**State Management**
- TanStack Query (React Query) for server state management and API data fetching
- React Hook Form with Zod resolver for form state and validation
- Local component state with React hooks

**Design System**
- Comprehensive design guidelines documented in `design_guidelines.md`
- Glassmorphism panels with semi-transparent backgrounds
- Consistent spacing system using Tailwind units (4, 6, 8, 12, 16, 20)
- Responsive breakpoints for mobile, tablet, and desktop layouts

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for the REST API
- Custom middleware for request logging and JSON body parsing with raw buffer preservation
- Development-only Vite integration for HMR and SSR in dev mode

**API Design**
- RESTful endpoints under `/api` prefix
- Contact form submission endpoint: `POST /api/contact`
- Contact retrieval endpoint: `GET /api/contact` (admin access)
- Centralized error handling with appropriate HTTP status codes
- Request/response validation using Zod schemas

**Data Validation**
- Shared Zod schemas between frontend and backend for type safety
- Drizzle-Zod integration for automatic schema generation from database models
- Custom validation rules (e.g., email format, minimum character lengths)
- User-friendly error messages via zod-validation-error

**Storage Layer**
- In-memory storage implementation (`MemStorage`) for development/demo purposes
- Interface-based storage abstraction (`IStorage`) allowing easy swap to database implementation
- UUID generation for entity IDs
- Automatic timestamp generation for submissions

### Data Storage

**Database Configuration**
- Drizzle ORM for type-safe database queries and migrations
- PostgreSQL dialect configuration via `drizzle.config.ts`
- Neon Database serverless driver for PostgreSQL connections
- Environment variable-based connection configuration (`DATABASE_URL`)

**Schema Design**
- `users` table: Basic user authentication structure with username and password
- `contact_submissions` table: Stores contact form data including name, email, phone, service type, message, and submission timestamp
- Both tables use UUID primary keys with automatic generation
- Timestamps with automatic defaulting to current time

**Migration Strategy**
- Migration files generated in `/migrations` directory
- Schema definitions in `shared/schema.ts` for sharing between client and server
- `db:push` script for applying schema changes to database

### External Dependencies

**Third-Party Services**
- None currently integrated (no email service, payment processor, or analytics)
- Database provisioned separately via environment variable configuration

**Key NPM Packages**
- UI Framework: React, Radix UI components, Lucide icons
- Styling: Tailwind CSS, class-variance-authority, clsx
- Forms: React Hook Form, @hookform/resolvers
- Validation: Zod, drizzle-zod, zod-validation-error
- Data Fetching: TanStack Query
- Database: Drizzle ORM, @neondatabase/serverless
- Build Tools: Vite, esbuild, TypeScript
- Server: Express, connect-pg-simple (session store)
- Development: Replit-specific plugins for cartographer and dev banner

**Asset Management**
- Stock images stored in `/attached_assets/stock_images/` directory
- Vite alias `@assets` for importing images in components
- Image assets for hero sections, service cards, gallery items, and team profiles

**Font Loading**
- Google Fonts preconnected in HTML for performance
- Playfair Display and Inter font families loaded via CSS