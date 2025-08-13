import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PerformanceMonitor } from "@/components/ui/performance-monitor";
import { BusinessStructuredData, WebsiteStructuredData, SiteNavigationStructuredData } from "@/components/seo/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | EquipmentCalculators.com',
    default: 'Equipment Calculators - Free Equipment Financing Calculators | EquipmentCalculators.com'
  },
  description: "Free equipment financing calculators built by a 20+ year industry expert. Calculate loan payments, lease options, ROI, and compare financing scenarios. No email required.",
  keywords: "equipment financing, equipment loan calculator, equipment lease calculator, business equipment financing, equipment ROI calculator",
  authors: [{ name: "Patrick Hadley" }],
  creator: "Patrick Hadley",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://equipmentcalculators.com',
    title: 'Equipment Calculators - Free Equipment Financing Calculators',
    description: 'Free equipment financing calculators built by a 20+ year industry expert. Calculate loan payments, lease options, and compare scenarios.',
    siteName: 'EquipmentCalculators.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Equipment Calculators - Free Equipment Financing Calculators',
    description: 'Free equipment financing calculators built by a 20+ year industry expert.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BusinessStructuredData
          name="EquipmentCalculators.com"
          description="Free equipment financing calculators built by a 20+ year industry expert"
          url="https://equipmentcalculators.com"
        />
        <WebsiteStructuredData
          url="https://equipmentcalculators.com"
          name="EquipmentCalculators.com"
          searchUrlTemplate="/search?q={search_term_string}"
        />
        <SiteNavigationStructuredData
          items={[
            { name: 'Equipment Loan Calculator', url: 'https://equipmentcalculators.com/calculators/equipment-loan' },
            { name: 'Equipment Lease Calculator', url: 'https://equipmentcalculators.com/calculators/equipment-lease' },
            { name: 'Lease vs Buy Calculator', url: 'https://equipmentcalculators.com/calculators/lease-vs-buy' },
            { name: 'Equipment ROI Calculator', url: 'https://equipmentcalculators.com/calculators/equipment-roi' },
            { name: 'Construction Equipment', url: 'https://equipmentcalculators.com/calculators/construction' },
            { name: 'Medical Equipment', url: 'https://equipmentcalculators.com/calculators/medical' },
            { name: 'Restaurant Equipment', url: 'https://equipmentcalculators.com/calculators/restaurant' },
            { name: 'Manufacturing Equipment', url: 'https://equipmentcalculators.com/calculators/manufacturing' },
            { name: 'About', url: 'https://equipmentcalculators.com/about' },
          ]}
        />
        <PerformanceMonitor />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
