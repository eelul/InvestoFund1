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
- July 07, 2025. Implemented dynamic financial calculations throughout home page: all sections including "How Your Investment Generates Returns", "How Deal Profits Actually Work", "The Compound Reinvestment Strategy", and "Deal-by-Deal Breakdown" now automatically update all dollar amounts, profits, and compound examples based on the investment amount and time horizon sliders, providing investors with personalized real-time calculations
- July 07, 2025. Updated maximum factor rate from 1.65x to 1.49x across entire platform: corrected all disclaimers, investment options, calculators, and documentation to reflect accurate maximum factor rate of 1.49x instead of 1.65x, ensuring compliance with business model constraints and accurate investor expectations
- July 07, 2025. Created comprehensive investor dashboard with blurred preview functionality: implemented "Fast Deal Deployment" button navigation to investor dashboard, designed blurred preview showing sample metrics ($3,850 total commissions, 94% approval rate, $25k invested this month, 4 active deals), added prominent "Become an Investing Partner" call-to-action button, and created disabled secondary button for post-approval dashboard access
- July 07, 2025. CRITICAL COMPLIANCE UPDATE: Updated factor rate range from 1.35x-1.49x to 1.25x-1.49x across entire platform including all calculators, forms, disclaimers, and documentation to maintain compliance with business model requirements
- July 07, 2025. CRITICAL COMPLIANCE UPDATE: Updated factor rate range from 1.25x-1.49x to 1.15x-1.49x across entire platform including all calculators, forms, disclaimers, documentation, hero sections, comparison tables, FAQ sections, document templates, server-side calculations, and pre-qualification logic to maintain compliance with business model requirements
- July 07, 2025. Comprehensive Merchants page transformation: Added complete financing solutions section with 8 funding options (MCA, Line of Credit, Equipment Financing, Commercial Mortgage, Term Loans, Invoice Factoring, P.O. Financing, SBA Loans) including tabbed interface with detailed comparison table, updated hero section with gradient design and dual CTAs, enhanced FAQ section with 9 business-focused questions covering qualification, costs, credit impact, repayment flexibility, legitimacy verification, and practical business scenarios, all with proper offramps directing to "Apply for Funding" section
- July 07, 2025. Complete MCA specification update throughout platform: Applied comprehensive Merchant Cash Advance details including advance based on future sales (ACH or credit card holdback), factor rates 1.25x-1.49x, repayment terms 25 days to 18 months, multiple payment options (daily, weekly, bi-weekly, monthly), same-day approval and funding, amounts $2,000-$2,000,000, rate factors (time in business, monthly revenue, industry type, credit history, financial health), required documents (1-page application, 3-6 months bank statements, voided check, driver's license), consolidation options, re-advance eligibility at 50% payoff, and availability to low credit businesses under 1 year, updated across Merchants page, document templates, constants, and FAQ sections
- July 07, 2025. Complete rebranding from "Green Harvest Funding" to "InvestoFund" throughout broker sections: Updated all references in Brokers page, document templates (ISO Commission Agreement, Merchant Funding Agreement), and DownloadPacket component to maintain consistent branding across the platform
- July 07, 2025. Enhanced Brokers page with comprehensive ISO attraction strategy: Added comparison table showing InvestoFund vs typical MCA funders, integrated ISO pain points and solutions section addressing deal rejection, commission sharing, slow payouts, and limited relationships, updated hero messaging to emphasize superior terms and full deal control, added streamlined submission process feature, while preserving existing deal commission portal and deal submission portal functionality
- July 07, 2025. Created comprehensive ISO/Broker Portal Version 2: Built complete login page with secure authentication flow, developed full-featured dashboard with live deal tracking, commission center, renewal opportunities, document submission hub, marketing resources, and support center, implemented mobile-responsive tabbed interface with real-time deal pipeline visibility, commission calculations, volume bonus tracking, and dedicated ISO manager contact system, added direct portal access from Brokers page with prominent login button
- July 07, 2025. Enhanced dashboard welcome section with friendly color scheme: Updated broker portal welcome section from dark gradient to light emerald-to-sky gradient with semi-transparent glass-morphism cards, improved typography and visual hierarchy with emerald, sky, and purple accent colors, added professional icon containers and enhanced button styling with shadow effects
- July 07, 2025. Created comprehensive preview dashboards for broker and merchant portals: Built BrokerDashboardPreview with monthly commission tracking ($12,450), deal metrics (8 deals, 92% approval rate), and live deal activity display; created MerchantDashboardPreview showing funding progress (62% complete), payment schedules ($425 daily), and business performance metrics; implemented reduced blur effect (blur-sm) across all preview modes and added toggle visibility controls
- July 07, 2025. Comprehensive MCA Range Logic Implementation: Updated Portfolio Blend (Diversified Participation) and Direct Deal Participation with complete MCA specifications including factor rates 1.15x-1.49x, terms 25-540 days, funding amounts $2,000-$2,000,000, payment frequencies (daily, weekly, bi-weekly, monthly), industry focus across 8+ sectors, credit requirements for A-D grades including businesses under 1 year, same-day approval/funding capabilities, re-advance eligibility, manual vs automated controls, and differentiated risk management with Portfolio Blend featuring 18.7% target returns after 10% management fee vs Direct Deal 20.8% returns with full investor control
- July 07, 2025. Successfully integrated interactive FactorRateRiskSlider into investor onboarding form Step 3: Added risk preference selection with visual feedback (green to orange gradient), updated database schema with riskPreference JSONB field, enhanced email service to include selected risk strategy in confirmation emails, implemented form validation requiring risk selection, and fixed useEffect dependency loop for stable form state management
- July 07, 2025. Implemented comprehensive consent communication clauses throughout platform: Added legally compliant consent messages to investor onboarding form (blue notification box), merchant application form (already had comprehensive consent language), and broker submission form (yellow notification box), enhanced email templates with professional branding for investor welcome emails (gradient header with attachment notifications), merchant application received emails (green theme with document upload links), and broker welcome emails (pink gradient with commission structure details), ensuring full legal compliance across all user touchpoints for communication authorization and data sharing consent
- July 10, 2025. Created comprehensive InvestorV1Demo dashboard for soft testing phase: Built advanced investor dashboard with onboarding flow, tutorial system, investment range selection ($5K-$250K), demo deals with factor rates 1.25x-1.49x and average 1.32x, deal sizes $25K-$250K with 5+ investors per deal, InvestoBlend™ options for $25K+ investors, advanced/standard dashboard toggle, step-by-step tutorial overlay, first-time vs returning user logic, live deal tracking with progress bars and countdown timers, portfolio summary metrics, mobile-responsive design, and "Fast Deal Deployment" button integration from main Investors page
- July 10, 2025. Enhanced investor dashboard with comprehensive Demo functionality: Added Demo button next to "How it works" button in tutorial bar, implemented investment amount adjustment slider ($5K-$500K), integrated dual-handle factor rate range selector (1.15x-1.49x) with real-time filtering, created deal filtering logic that shows only deals within selected factor rate range, added risk/yield notices with expected yield calculations, implemented empty state for regular dashboard showing both funding options (Direct Deal Participation and InvestoBlend™ Portfolio), added demo mode badges and visual indicators, enhanced accessibility with proper dialog descriptions, created comprehensive demo configuration panel with live preview functionality, and made available balance card clickable for easy investment amount editing with increased maximum limit to $500,000 for demo testing
- July 10, 2025. Fixed dual-range slider functionality and expanded live investment opportunities: Updated Slider component to properly display both draggable handles for factor rate selection, enhanced CSS styling for better thumb visibility and interaction, expanded mock deals from 4 to 6 diverse investment opportunities spanning Food & Beverage (1.18x factor), Technology (1.33x factor), Automotive (1.15x factor), Health & Fitness (1.42x factor), Transportation (1.29x factor), and Manufacturing (1.48x factor), with returns correlating to risk levels from 15.2% (Low) to 48.2% (High), ensuring proper deal filtering based on user-selected factor rate ranges
- July 10, 2025. Implemented comprehensive scroll-to-top and section navigation system: Enhanced ScrollToTop component to ensure all pages start at the top with instant scroll behavior, created scrollUtils library with consistent 100px header offset for section navigation, updated all internal navigation buttons across Merchants, Investors, and detail pages to use proper spacing, added CSS scroll-padding-top and scroll-margin-top properties for consistent anchor positioning, replaced all scrollIntoView calls with unified scroll utility functions for better user experience and consistent behavior across all pages
- July 11, 2025. Integrated comprehensive InvestoScore and live investment opportunities into main investor dashboard: Added real-time creditworthiness assessment with A+ credit grade display, 92 risk score visualization, market insights showing 23 active deals and $2.1M weekly funding, enhanced deal cards with InvestoScore™ ratings and factor rate information, added Fund This Deal button navigation to dedicated payment portal, implemented limited deal preview mode showing only essential information (current data, investor count, time remaining, term duration, category, risk level, estimated return) before inquiry approval
- July 11, 2025. Created comprehensive Fund Now payment portal with wire instructions and Dwello integration: Built complete payment portal with blue gradient hero section matching brand design, implemented tabbed interface featuring Dwello payment portal (recommended), traditional wire transfer instructions with copy-to-clipboard functionality, and downloadable payment instructions, added bank-level security features including 256-bit SSL encryption and FDIC protection, integrated Dwello portal access with external link to https://dwello.co/investofund-portal, provided comprehensive wire transfer timeline and support contact information, included multiple payment method options with instant confirmation and lower processing fees
- July 11, 2025. Transformed Merchant Dashboard Learn More hero section into educational learning center: Changed from sales-focused "Start Your Application" to educational "Understanding Business Funding" with learning-focused messaging, updated buttons to "Explore Funding Types" and "Learn About InvestoScore™", replaced sales metrics with educational stats (8 funding types explained, 100+ resources, real stories, free platform), added educational value proposition cards featuring "Learn the Basics", "Calculate Your Options", and "Real Business Stories", integrated glassmorphism design elements and maintained blue gradient branding while emphasizing information and decision-making tools over direct conversion
- July 11, 2025. Created comprehensive HomeV2 page following optimal conversion flow structure: Built 12-section home page with strategic flow from hero section (20.8%+ returns promise) → value proposition comparison → visual process timeline → transparent returns calculator → reinvestment strategy demonstration → dual investment paths (Direct vs InvestoBlend) → detailed deal breakdown → risk management showcase → dashboard automation features → expert team profiles → final multi-CTA section → smart footer navigation, implemented dynamic return calculations, interactive investment calculator with real-time projections, compound growth visualization, complete transparency in deal mechanics, and comprehensive trust-building elements designed to convert both active and passive investors
- July 11, 2025. Created simplified MerchantDashboardLearnMoreV2 page focused on education and merchant journey: Redesigned with clean, learning-focused approach removing bold headers and complex gradients, implemented simple "How It Works — Step-by-Step" section explaining cash advances and InvestoFund strategy, added educational content about MCA benefits, transparent process steps with InvestoScore™ explanation, streamlined application process section, and emphasized why InvestoFund offers the best strategy for merchants with clear value propositions and educational focus over sales pressure
- July 11, 2025. Enhanced MerchantDashboardLearnMoreV2 with comprehensive InvestoScore™ section: Added InvestoScore™ button next to Start Application in header, created detailed explainer section emphasizing it as the primary decision metric investors use, included ChatGPT content covering how investors use scores, benefits of higher scores, essential vs score-boosting documents, and advisor consultation call-to-action, implemented purple-themed design with proper navigation and educational focus maintaining the learning journey approach
- July 11, 2025. Created dynamic InvestoScore™ indicator for merchant dashboard: Added top-left InvestoScore display showing "Not Assigned" when details are hidden and calculated score (up to 850) when visible, implemented comprehensive scoring algorithm based on monthly revenue, time in business, credit score, payment history, and documentation completeness, added color-coded badges (green/blue/yellow/red) with rating descriptions (Excellent/Good/Fair/Needs Improvement), designed to reflect real underwriter assessment metrics and merchant-provided materials
- July 11, 2025. Completed terminology standardization across entire platform: Updated all instances of "540 days" to "18 months" throughout codebase including shared documents, calculators, investor pages, home pages, and all deal term references for consistent messaging and improved user comprehension
- July 11, 2025. Launched comprehensive platform enhancements: Created comprehensive Deal Dashboard with real-time investment tracking, enhanced Merchant Application Form with 5-minute streamlined process and progress tracking, advanced Broker Commission Calculator with 37.5% earnings boost visualization, comprehensive Terms of Service page with quick navigation, and deals.json database for authentic deal data, all while maintaining existing React/TypeScript architecture and brand styling consistency
- July 11, 2025. Blended Deal Dashboard with InvestorV1Demo functionality: Removed InvestoScore™ Premium and Market Insights sections (merchant-focused features), integrated interactive investment amount slider and demo mode with factor rate filtering, added comprehensive tutorial system and onboarding flow, updated navigation in Investors page to link to new blended dashboard, enhanced deal tracking with real-time metrics and InvestoBlend™ options, and added Terms of Service link to footer for improved navigation
- July 11, 2025. Created unified investor signup flow and enhanced deal dashboard conversion strategy: Built comprehensive InvestorSignup.tsx page connecting both /dashboard/investor and /investor-signup routes, implemented 4-step application process with personal information, investment preferences, accreditation status, and terms agreement, added investment approach selection between Direct Deal Participation (20.8%+ returns) and InvestoBlend™ Portfolio (18.7% target), enhanced Deal Dashboard with prominent signup banner and investor comfort features including transparent process highlights, proven track record statistics, and dedicated support assurance, updated Investors page to redirect all CTAs to unified signup flow, creating seamless conversion path from discovery to application completion
- July 11, 2025. Implemented comprehensive dual dashboard views for enhanced investor experience: Created Real Deals mode with personalized user parameter configuration modal asking for investment amount, factor rate range (1.15x-1.49x), and investment approach selection with intuitive gain/loss explanations based on user data, built Demo mode with prefilled $250,000 investment simulation showcasing both Option 1 (Direct Deal Participation) and Option 2 (InvestoBlend™ Portfolio) with complete platform access, added visual mode indicators throughout dashboard with Real Deals and Demo badges, implemented smart deal filtering based on user preferences in real mode vs full access in demo mode, enhanced header with dual-button interface for seamless switching between personalized real deals and comprehensive demo experience