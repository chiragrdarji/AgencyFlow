# Dentrix Connector - PMS to CRM Integration Platform

## Overview

Dentrix Connector is a SaaS platform that provides seamless data synchronization between dental practice management systems (PMS) and GoHighLevel CRM. The platform targets marketing agencies specialized in the dental industry who use GoHighLevel to manage their dental practice clients. The application enables real-time bidirectional sync of patients, providers, appointments, and payment data, eliminating manual data entry and enabling automated marketing campaigns.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **Routing**: Wouter for client-side routing with multi-page architecture
- **State Management**: TanStack Query for server state management and data fetching
- **UI Components**: Radix UI primitives with custom styling for accessibility and consistency

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure with `/api` prefix routing
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Storage Interface**: Abstract storage layer with in-memory implementation for development

### Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle with Neon Database serverless connection
- **Schema Management**: Drizzle migrations with shared schema definitions
- **Development Storage**: In-memory storage implementation for rapid development

### Authentication and Authorization
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple
- **User Schema**: Basic user model with username/password authentication
- **Security**: HIPAA-compliant data handling with automatic data deletion after sync

### Page Structure and Content Strategy
- **Multi-page SaaS Design**: Home, Supported Platforms, Onboarding, Education Materials, Contact pages
- **Agency-First Messaging**: Content specifically tailored for dental marketing agencies
- **Trust Building**: PMS logos, testimonials, and security-first messaging
- **Conversion Optimization**: Clear CTAs for platform-specific connectors and demo booking
- **SEO Optimization**: Comprehensive structured data (JSON-LD), Open Graph, Twitter Cards, and geo-targeting
- **Bidirectional Data Flow**: Enhanced animated visualization showing PMS → Connector App → GoHighLevel sync
- **Email Integration**: SMTP-powered contact form with dual notifications (admin + user confirmation)
- **HIPAA Messaging**: Updated messaging to emphasize "HIPAA conscious" approach to data handling

### Component Design Patterns
- **Reusable UI Components**: Modular component library with consistent styling
- **Animated Elements**: Data flow visualizations and interactive elements for engagement
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: ARIA labels and semantic HTML through Radix UI components

## External Dependencies

### Database and Infrastructure
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle Kit**: Database migration and schema management tooling

### UI and Design System
- **Radix UI**: Headless UI components for accessibility and functionality
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Icon library for consistent iconography
- **Inter Font**: Google Fonts integration for typography

### Development and Build Tools
- **Vite**: Fast build tool with HMR for development
- **Replit Integration**: Development environment plugins and error overlays
- **ESBuild**: Production bundling for server-side code

### Form and Data Handling
- **React Hook Form**: Form state management with validation
- **Zod**: Schema validation and type safety
- **Date-fns**: Date manipulation utilities

### Marketing and Analytics Tools
- **TanStack Query**: Data fetching and caching for real-time updates
- **Wouter**: Lightweight routing for multi-page navigation
- **Class Variance Authority**: Component variant management for design consistency