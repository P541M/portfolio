# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

```bash
# Development
npm run dev          # Start development server with Next.js
npm run dev:turbo    # Start development server with Turbopack (faster)

# Building and Production
npm run build        # Build the application for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint for code linting
npm run lint:fix     # Run ESLint with auto-fix
npm run type-check   # Run TypeScript type checking without compilation
```

## Project Architecture

This is a **Next.js 15** portfolio website using the **App Router** architecture with the following key architectural decisions:

### Core Technologies
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui components with Radix UI primitives
- **Animations**: Framer Motion for page transitions and micro-interactions
- **Forms**: React Hook Form with Zod validation
- **Email**: Nodemailer integration for contact form
- **Theme**: next-themes for dark/light mode switching

### Directory Structure
- `src/app/` - Next.js App Router pages and API routes
- `src/components/sections/` - Main page sections (Hero, Projects, Timeline, etc.)
- `src/components/ui/` - Reusable shadcn/ui components
- `src/data/` - Static data files for projects, timeline, and volunteer work
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions and configurations
- `src/types/` - TypeScript type definitions

### Key Architectural Patterns

**Data Management**: Static data is stored in TypeScript files (`src/data/`) rather than a database, making the site fully static and deployable on any platform.

**Component Architecture**: 
- Page sections are separate components in `src/components/sections/`
- Each section is self-contained with its own data imports
- UI components follow shadcn/ui patterns with consistent prop interfaces

**Styling System**:
- Uses Tailwind CSS with CSS variables for theming
- Custom animations defined in `tailwind.config.ts`
- Dark mode implemented with `next-themes` and CSS classes

**Type Safety**: 
- Comprehensive TypeScript interfaces in `src/types/index.ts`
- Strict TypeScript configuration with path aliases (`@/*` -> `./src/*`)

### Email Integration
The contact form uses Nodemailer with Gmail SMTP. Environment variables required:
- `EMAIL_USER` - Gmail address
- `EMAIL_PASS` - Gmail app password (not regular password)

### Key Data Structures
- **Projects**: Stored in `src/data/projects.ts` with detailed project information including technologies, status, and deployment links
- **Timeline**: Professional experience and education in `src/data/timeline.ts`
- **Volunteer**: Volunteer work in `src/data/volunteer.ts`

### State Management
- No global state management library used
- Local component state with React hooks
- Theme state managed by `next-themes`
- Form state managed by `react-hook-form`

### Performance Optimizations
- Next.js App Router for automatic code splitting
- Custom hooks for mounted state and layout effects
- Optimized images in `public/images/` directory
- Static generation for all pages except API routes

## Environment Setup

1. Copy `.env.example` to `.env.local` for email configuration
2. Run `npm install` to install dependencies
3. Use `npm run dev` for development with hot reload
4. Always run `npm run type-check` before committing changes