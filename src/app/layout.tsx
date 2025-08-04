import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
