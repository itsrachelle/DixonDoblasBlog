# Blog Website Application

## Overview

This is a full-stack blog application featuring a React frontend with TypeScript and an Express.js backend. The application showcases personal essays, writing tips, and short stories with a focus on vulnerable storytelling. It uses a PostgreSQL database with Drizzle ORM for data management and includes contact forms and newsletter subscription functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system featuring coral, peach, and sky color palette
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure
- **Development**: Hot reload with Vite middleware integration
- **Error Handling**: Centralized error handling middleware
- **Logging**: Custom request/response logging for API endpoints

### Data Storage
- **Database**: PostgreSQL (configured for Neon Database)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Three main entities - posts, contacts, and subscribers
- **Migrations**: Drizzle Kit for database schema management
- **Fallback**: In-memory storage implementation for development/testing

### Authentication and Authorization
- **Current State**: No authentication system implemented
- **Session Management**: Basic session configuration present but not actively used
- **Security**: Basic CORS and request parsing middleware

## Key Components

### Database Schema
```typescript
// Posts table for blog content
posts: {
  id, title, slug, excerpt, content, category, 
  readingTime, publishedAt, featured
}

// Contacts table for contact form submissions
contacts: {
  id, name, email, subject, message, submittedAt
}

// Subscribers table for newsletter signups
subscribers: {
  id, email, subscribedAt
}
```

### API Endpoints
- `GET /api/posts` - Retrieve all blog posts
- `GET /api/posts/category/:category` - Get posts by category
- `GET /api/posts/featured` - Get featured post
- `GET /api/posts/:slug` - Get specific post by slug
- `POST /api/contact` - Submit contact form
- `POST /api/subscribe` - Newsletter subscription

### Frontend Pages
- **Home**: Hero section with featured content and recent posts
- **Blog**: All posts with category filtering
- **Category Pages**: Essays, Writing Tips, Short Stories
- **Single Post**: Individual blog post view
- **About**: Author information and published work
- **Contact**: Contact form and newsletter subscription

### UI Design System
- **Colors**: Custom coral (#FF6B6B), peach (#FFD1DC), sky blue (#87CEEB)
- **Typography**: Serif fonts for headings, sans-serif for body text
- **Gradients**: Mountain and sunset gradients for hero sections
- **Components**: Consistent card layouts, category badges, responsive design

## Data Flow

1. **Content Management**: Posts are stored in PostgreSQL with rich metadata
2. **API Layer**: Express.js serves data through RESTful endpoints
3. **Client Fetching**: React Query manages API calls with caching and error handling
4. **Form Handling**: Contact and subscription forms use React Hook Form with Zod validation
5. **State Management**: Server state via React Query, local state via React hooks
6. **Routing**: Client-side routing with Wouter for smooth navigation

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL hosting
- **Connection**: Via `@neondatabase/serverless` driver
- **Environment**: `DATABASE_URL` environment variable required

### UI Libraries
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel functionality

### Development Tools
- **TypeScript**: Static type checking
- **ESLint/Prettier**: Code formatting and linting
- **Vite**: Development server and build tool
- **Drizzle Kit**: Database migration management

### Form Handling
- **React Hook Form**: Form library
- **Zod**: Schema validation
- **@hookform/resolvers**: Integration between React Hook Form and Zod

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Server Build**: ESBuild bundles Express server to `dist/index.js`
3. **Static Assets**: Frontend assets served from `dist/public`

### Environment Setup
- **Development**: `npm run dev` - Runs with Vite dev server
- **Production**: `npm run build && npm start` - Builds and runs production server
- **Database**: `npm run db:push` - Applies schema changes

### Configuration
- **TypeScript**: Shared config for client, server, and shared code
- **Vite**: Custom config with path aliases and development plugins
- **Tailwind**: Custom theme with design system colors
- **PostCSS**: Autoprefixer for browser compatibility

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (Neon Database recommended)
- Environment variables for database connection
- Static file serving capability