import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BusinessStructuredData, BreadcrumbStructuredData } from '@/components/seo/StructuredData'
import { Calculator, Building, Code, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About EquipmentCalculators.com | Free Equipment Financing Calculators',
  description: 'Learn about EquipmentCalculators.com — free, accurate equipment loan, lease, ROI, and lease vs buy calculators with amortization and factor rate support. No signups, no lead capture, just clear numbers.',
  openGraph: {
    title: 'About EquipmentCalculators.com',
    description: 'What EquipmentCalculators.com offers: free equipment financing calculators for loans, leases, ROI, and lease vs buy comparisons.',
    type: 'website',
    url: 'https://equipmentcalculators.com/about',
  },
  alternates: {
    canonical: 'https://equipmentcalculators.com/about'
  }
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <BusinessStructuredData
        name="EquipmentCalculators.com"
        description="Free equipment financing calculators for loans, leases, ROI, and lease vs buy comparisons. No signups or lead capture."
        url="https://equipmentcalculators.com/about"
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: 'https://equipmentcalculators.com' },
          { name: 'About', url: 'https://equipmentcalculators.com/about' }
        ]}
      />
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About EquipmentCalculators.com
        </h1>
        <p className="text-xl text-muted-foreground">
          Free, accurate equipment financing calculators — loans, leases, ROI, and lease vs buy — with no signups or lead capture.
        </p>
      </div>

      {/* Story Section */}
      <div className="space-y-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5 text-blue-600" />
              What is EquipmentCalculators.com?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              EquipmentCalculators.com is a collection of free, high-quality tools that help business owners
              model equipment financing with clarity. Get quick answers to essential questions like monthly
              payments, total cost of ownership, and whether leasing or buying makes more sense.
            </p>
            <p className="text-muted-foreground">
              No accounts. No email gates. Just fast, accurate calculations to support smarter decisions.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-green-600" />
              How Our Calculators Work
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              The calculators reflect how equipment financing actually works in practice. They support common
              industry methods like factor rates and standard amortization, and include realistic defaults and ranges
              based on thousands of real deals.
            </p>
            <p className="text-muted-foreground">
              You can fine-tune terms, rates, residuals, and more to see the full impact on monthly payments,
              total interest, and cash flow.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-purple-600" />
              What You Can Do Here
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              • Calculate equipment loan payments and view a full amortization schedule
            </p>
            <p className="text-muted-foreground">
              • Estimate lease payments using factor rates and residual values
            </p>
            <p className="text-muted-foreground">
              • Compare leasing versus buying side-by-side, including ROI considerations
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-600" />
              Why It Exists
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              The goal is simple: provide transparent, trustworthy equipment financing calculators that anyone
              can use in seconds. No sales pressure. No distractions. Just the data you need to make confident choices.
            </p>
            <p className="text-muted-foreground">
              When you are ready to move forward, we can connect you with vetted lenders who specialize in
              equipment financing—so you get accurate terms and a smooth process.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Values Section */}
      <div className="bg-muted rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Our Principles</h2>
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
              Real-world equipment financing experience built into every calculator and recommendation.
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
              When you&apos;re ready, we can connect you with reliable lenders who specialize in equipment financing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}