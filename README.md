# Equipment Calculators

A comprehensive equipment financing calculator platform targeting business owners who need to make smart equipment purchase/lease decisions. Built with the "I've been where you are" authority approach with multiple calculators and instant lender connections.

## Live Demo

Visit the live application at: [EquipmentCalculators.com](https://equipmentcalculators.com)

## Original Build Prompt

### Project Overview
Build equipmentcalculators.com - a comprehensive equipment financing calculator platform targeting business owners who need to make smart equipment purchase/lease decisions. Think "I've been where you are" authority site with multiple calculators and instant lender connections.

### Tech Stack

- **Frontend**: Next.js 14 with App Router + React 18 Server Components
- **Deployment**: Vercel (Edge Runtime where possible)
- **Database**: Supabase (PostgreSQL) with Edge Functions
- **Styling**: Tailwind CSS + CSS-in-JS for critical path
- **State**: Zustand (lightweight, fast state management)
- **Analytics**: Vercel Analytics + Google Analytics 4
- **SEO**: next-seo, structured data, XML sitemaps
- **Forms**: React Hook Form + Zod validation
- **Performance**: Sharp for image optimization, Bundle Analyzer
- **Caching**: React Query for data fetching, SWR for real-time updates

### Site Architecture & Calculators

#### Core Calculators (Priority Order)

1. **Equipment Loan Calculator** (`/calculators/equipment-loan`)
   - Monthly payments, total cost, amortization schedule
   - Down payment scenarios, term length comparison

2. **Equipment Lease Calculator** (`/calculators/equipment-lease`)
   - Factor rate calculations, end-of-lease options
   - Lease vs purchase decision matrix

3. **Lease vs Buy Comparison** (`/calculators/lease-vs-buy`)
   - Side-by-side ROI analysis, tax implications
   - Cash flow impact, ownership benefits

4. **Equipment ROI Calculator** (`/calculators/equipment-roi`)
   - Payback period, productivity gains
   - Revenue impact projections

5. **Equipment Depreciation Calculator** (`/calculators/depreciation`)
   - MACRS, Section 179, bonus depreciation
   - Tax savings scenarios

#### Industry-Specific Calculators

- Construction Equipment Calculator (`/calculators/construction`)
- Medical Equipment Calculator (`/calculators/medical`)
- Restaurant Equipment Calculator (`/calculators/restaurant`)
- Manufacturing Equipment Calculator (`/calculators/manufacturing`)
- Truck/Fleet Calculator (`/calculators/trucks`)

#### Advanced Tools

- Equipment Eligibility Checker (`/calculators/eligibility`)
- Equipment Value Estimator (`/calculators/value`)

### Customer Journey & Messaging

#### Target Customer
Business owners researching equipment financing options

- **Need**: Clear numbers before talking to lenders
- **Pain**: Confusing financing options, pushy salespeople
- **Goal**: Make informed equipment purchase decisions

#### Brand Voice & Tone

- **Authentic**: "I've made these decisions myself"
- **Straightforward**: No financial jargon, clear explanations
- **Supportive**: "You don't have to figure this out alone"
- **Confident**: "These are the tools I wish I had"

### Mobile-First Performance Strategy

#### Speed Requirements

- **Lighthouse Score**: 95+ on mobile, 98+ on desktop
- **Core Web Vitals**:
  - LCP: <1.2s (target: <800ms)
  - FID: <100ms (target: <50ms)
  - CLS: <0.1 (target: <0.05)
- **Bundle Size**: Initial JS <50kb gzipped
- **Calculator Response**: <50ms input → result update
- **Page Load**: Full page interactive <2s on 3G

#### Mobile-First Design Principles

- Touch targets: Minimum 44px tap areas
- Thumb-friendly: Important actions within thumb reach
- Progressive disclosure: Show only essential inputs initially
- One-handed operation: Vertical layout priority
- Readable typography: 16px+ base font size
- Minimal scrolling: Key results above the fold

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/PresidentHadley/equipment-calculators.git
cd equipment-calculators
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Features

### ✅ Completed Features

- **Equipment Loan Calculator**: Full-featured calculator with real-time calculations, amortization schedules, and mobile-optimized UI
- **Home Page**: Professional landing page with calculator grid, hero section, and trust signals
- **About Page**: Patrick's story and credibility-building content
- **Responsive Design**: Mobile-first approach with touch-friendly interfaces
- **Performance Optimized**: Fast loading times and smooth interactions
- **SEO Ready**: Proper meta tags, structured data foundation

### 🚧 In Progress

- Equipment Lease Calculator
- Lease vs Buy Comparison Calculator
- Equipment ROI Calculator

### 📋 Planned Features

- Database integration with Supabase
- Analytics and conversion tracking
- Industry-specific calculators
- Advanced SEO optimization
- Lead capture and lender network integration

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── calculators/        # Calculator pages
│   ├── about/             # About page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── calculators/       # Calculator components
│   ├── layout/           # Header, Footer
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
└── store/                # State management
```

## Contributing

This project was built by Patrick Hadley, a 20+ year equipment financing expert who learned to code to create these tools. The focus is on providing genuine value to business owners without lead capture or hidden agendas.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Built by Patrick Hadley - Equipment Financing Expert & Developer

**The Equipment Calculators I Wish I Had 20 Years Ago**