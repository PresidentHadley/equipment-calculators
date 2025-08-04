import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calculator, Building, Code, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Patrick Hadley - Equipment Financing Expert & Developer | EquipmentCalculators.com',
  description: 'Learn about Patrick Hadley, the equipment financing expert who learned to code to build the calculators he wished he had during 20+ years in the industry.',
  openGraph: {
    title: 'About Patrick Hadley - Equipment Financing Expert & Developer',
    description: 'The story behind EquipmentCalculators.com and why these tools were built.',
    type: 'website',
    url: 'https://equipmentcalculators.com/about',
  }
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Patrick Hadley
        </h1>
        <p className="text-xl text-muted-foreground">
          The equipment financing expert who learned to code to build the calculators he wished he had.
        </p>
      </div>

      {/* Story Section */}
      <div className="space-y-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5 text-blue-600" />
              20+ Years in Equipment Financing
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              I&apos;ve spent over two decades helping business owners make smart equipment financing decisions. 
              I&apos;ve seen the confusion, the frustration, and the costly mistakes that happen when people 
              don&apos;t have the right tools to understand their options.
            </p>
            <p className="text-muted-foreground">
              Throughout my career, I watched business owners struggle with basic questions: &quot;What will my 
              monthly payment be?&quot; &quot;Should I lease or buy?&quot; &quot;How much will this equipment really cost me?&quot; 
              The tools available were either too basic, too complex, or designed to capture leads rather 
              than provide genuine value.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-green-600" />
              Learning to Code at 45
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              At 45, I made a decision that surprised everyone who knew me: I was going to learn to code. 
              Not for a career change, but to build the equipment financing calculators I wished existed 
              when I was helping clients every day.
            </p>
            <p className="text-muted-foreground">
              I started with basic HTML and CSS, then moved to JavaScript, React, and eventually Next.js. 
              It wasn&apos;t easy, but I had a clear vision: create calculators that give real answers without 
              asking for your email, phone number, or personal information.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-purple-600" />
              Building These Tools
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Every calculator on this site is built from real-world experience. The formulas aren&apos;t just 
              mathematically correct—they reflect how equipment financing actually works in practice. 
              The default values, the ranges, the equipment categories—all based on thousands of real deals.
            </p>
            <p className="text-muted-foreground">
              I built these tools to be fast, accurate, and honest. No lead capture forms, no hidden fees, 
              no surprises. Just the numbers you need to make informed decisions about your equipment financing.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-600" />
              Why I Built This
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              This isn&apos;t a business for me—it&apos;s a mission. I&apos;ve made my money in equipment financing. 
              Now I want to give back by providing the tools I wish every business owner had access to.
            </p>
            <p className="text-muted-foreground">
              When you&apos;re ready to move forward with equipment financing, I&apos;ll connect you with my 
              vetted network of lenders—specialists I&apos;ve worked with for years and trust to treat you fairly. 
              But first, use these calculators to know your numbers and understand your options.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Values Section */}
      <div className="bg-muted rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">My Principles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Transparency First</h3>
            <p className="text-sm text-muted-foreground">
              No hidden fees, no surprise lead captures. Just honest calculations and straightforward information.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Experience Matters</h3>
            <p className="text-sm text-muted-foreground">
              20+ years of real-world equipment financing experience built into every calculator and piece of advice.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Technology for Good</h3>
            <p className="text-sm text-muted-foreground">
              Using modern web technology to create tools that genuinely help business owners make better decisions.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Quality Connections</h3>
            <p className="text-sm text-muted-foreground">
              When you&apos;re ready, I&apos;ll connect you only with lenders I know and trust from years of working together.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}