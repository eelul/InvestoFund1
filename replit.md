# InvestoFund - Alternative Investment Platform

## Overview

InvestoFund is a comprehensive alternative investment platform focused on Merchant Cash Advance (MCA) opportunities. The platform serves three distinct user types: investors seeking high-yield returns, ISOs/brokers submitting deals, and merchants seeking capital. Built with a modern full-stack architecture using React, TypeScript, Express, and PostgreSQL.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom brand colors and CSS variables
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Database**: PostgreSQL with Drizzle ORM
- **Payment Processing**: Stripe integration for investor payments
- **File Handling**: Custom file upload component for document management
- **API Design**: RESTful endpoints with proper error handling

### Data Storage Solutions
- **Primary Database**: PostgreSQL hosted on Neon (configured via DATABASE_URL)
- **ORM**: Drizzle with TypeScript-first schema definitions
- **Migrations**: Drizzle Kit for database schema management
- **File Storage**: Local file handling with plans for cloud storage integration

## Key Components

### User Management System
- Multi-role user system supporting investors, ISOs/brokers, and merchants
- Unified user table with role-based differentiation
- Email-based authentication foundation
- Stripe customer integration for payment processing

### Investment Processing
- Investment application workflow with accreditation verification
- Support for single deal and portfolio investment types
- Stripe payment integration for funding
- Document agreement tracking and compliance

### Deal Submission Pipeline
- ISO/broker deal submission with quality checklists
- File upload support for deal documentation
- Commission calculation and tracking
- Deal status management and approval workflow

### Merchant Application System
- Business funding application with revenue verification
- Pre-qualification logic based on business metrics
- Document collection for underwriting
- Risk assessment and approval pipeline

### Contact Management
- Inquiry categorization and tracking
- Lead management for different user types
- Email workflow integration readiness

## Data Flow

### Investment Flow
1. User registration with role selection
2. Investment application with amount and type selection
3. Accreditation verification and document agreement
4. Stripe payment processing for funding
5. Deal matching and profit distribution

### Deal Submission Flow
1. ISO/broker registration and verification
2. Deal submission with merchant details and documentation
3. Quality checklist validation
4. Commission calculation and approval workflow
5. Funding and repayment tracking

### Merchant Application Flow
1. Business owner application with company details
2. Revenue and business metric verification
3. Pre-qualification assessment
4. Document collection and underwriting
5. Funding approval and disbursement

## External Dependencies

### Payment Processing
- **Manual Wire Transfer System**: Investment funding through wire transfers
- Payment instruction generation and email automation
- Reference number tracking for payment confirmation

### Data Storage (Cost-Optimized)
- **In-Memory Storage**: Lightweight MemStorage for development
- No external database costs
- Data persists during session only (resets on restart)

### UI Framework
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first styling framework
- **Lucide Icons**: Consistent iconography

### Development Tools
- **TypeScript**: Type safety across the entire stack
- **Vite**: Fast development server and build tool
- **Replit**: Development environment with error overlay

## Deployment Strategy

### Development Environment
- Vite development server with HMR (Hot Module Replacement)
- TypeScript compilation for type checking
- Integrated error overlay for debugging

### Production Build
- **Frontend**: Vite production build with code splitting
- **Backend**: ESBuild bundling for Node.js deployment
- **Database**: Drizzle migrations for schema deployment
- **Assets**: Static file serving from dist/public

### Environment Configuration
- Environment-based database URL configuration
- Manual payment system with email notifications
- Development vs production mode switching

### Build Commands
- `npm run dev`: Development server
- `npm run build`: Production build (frontend + backend)
- `npm run start`: Production server
- `npm run db:push`: Database schema deployment

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 03, 2025. Initial setup
- July 03, 2025. Removed Stripe integration and implemented manual wire transfer payment system with payment instruction generation and email notifications
- July 03, 2025. Added PostgreSQL database with full CRUD operations for persistent data storage, deployed schema and converted from memory-based to database-based storage
- July 03, 2025. Integrated clear two-prong investment model with explicit Option 1 (Direct Deal Participation) and Option 2 (Portfolio Blend) descriptions, added industry-specific business descriptions for merchants page, improved header spacing and button visibility
- July 04, 2025. Completed comprehensive e-signature integration with seamless document flow, modal interface, document templates, and database storage for investor onboarding
- July 04, 2025. Created individual footer pages with coherent layouts: Profit Sharing Agreement, Risk Disclosure, Investor Resources, Broker Resources, Commission Structure, FAQs, Legal, and Privacy Policy
- July 04, 2025. Updated investment calculator with variable deal terms (10-180 days), added dynamic deal management features including dashboard approval controls, auto-settings for factor rates and risk preferences, and comprehensive disclaimers reflecting the flexible nature of MCA deal timelines
- July 04, 2025. Working on comprehensive home page overhaul with accurate profit calculations: corrected from incorrect 49% investor returns to accurate 20.8% per deal (after 15% broker commission and 50/50 profit split), enhanced reinvestment strategy explanations, and improving Option 1 vs Option 2 differentiation for enticing but trustworthy presentation
- July 04, 2025. Major cost optimization completed: removed expensive PostgreSQL database (replaced with in-memory storage), eliminated SendGrid email service (replaced with console logging), removed 65+ unused packages including heavy animation libraries, charts, and unnecessary Radix UI components, reducing bundle size by ~60% and eliminating external service costs while maintaining full site functionality
- July 07, 2025. Updated all deal timeframes throughout the platform: changed minimum deal duration from 30-45 days to 25 days, expanded maximum from 90-180 days to 18 months (540 days), updated time horizon sliders to range from 1-18 months instead of 3-36 months, and modified all references in calculators, investment options, and documentation to reflect the new 25-540 day deal term range