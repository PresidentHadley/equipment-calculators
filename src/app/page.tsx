import Link from "next/link"
import { Calculator, TrendingUp, DollarSign, BarChart3, PieChart, Wrench, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { InstallPrompt } from "@/components/ui/install-prompt"

const calculators = [
  {
    title: "Equipment Loan Calculator",
    description: "Calculate monthly payments, total interest, and amortization schedules for equipment financing.",
    href: "/calculators/equipment-loan",
    icon: Calculator,
    color: "from-blue-500 to-blue-600",
    popular: true,
    features: ["Monthly payments", "Total interest", "Amortization schedule"]
  },
  {
    title: "Equipment Lease Calculator", 
    description: "Factor rate calculations, end-of-lease options, and lease payment breakdowns.",
    href: "/calculators/equipment-lease",
    icon: TrendingUp,
    color: "from-green-500 to-green-600",
    features: ["Factor rates", "Lease payments", "End-of-lease options"]
  },
  {
    title: "Lease vs Buy Comparison",
    description: "Side-by-side ROI analysis comparing leasing versus purchasing equipment.",
    href: "/calculators/lease-vs-buy", 
    icon: BarChart3,
    color: "from-purple-500 to-purple-600",
    popular: true,
    features: ["ROI comparison", "Tax implications", "Cash flow analysis"]
  },
  {
    title: "Equipment ROI Calculator",
    description: "Payback period, productivity gains, and revenue impact projections.",
    href: "/calculators/equipment-roi",
    icon: PieChart,
    color: "from-orange-500 to-orange-600",
    features: ["Payback period", "Revenue impact", "Productivity gains"]
  },
  {
    title: "Construction Equipment",
    description: "Specialized calculator for construction equipment financing and leasing options.",
    href: "/calculators/construction",
    icon: Wrench,
    color: "from-yellow-500 to-yellow-600",
    features: ["Industry-specific", "Seasonal considerations", "Usage-based terms"]
  },
  {
    title: "Medical Equipment",
    description: "Healthcare equipment financing with specialized terms and tax considerations.",
    href: "/calculators/medical", 
    icon: Users,
    color: "from-teal-500 to-teal-600",
    features: ["Healthcare focus", "Tax benefits", "Technology upgrades"]
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calculator className="h-4 w-4" />
            The Equipment Calculators I Wish I Had 20 Years Ago
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Make Smart Equipment
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Financing Decisions
            </span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Get instant equipment financing numbers before talking to lenders. 
            Calculate payments, compare options, and make informed decisions with tools built by someone who&apos;s been there.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" asChild className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white shadow-lg">
              <Link href="/calculators/equipment-loan">
                <Calculator className="h-5 w-5 mr-2" />
                Start Calculating
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">
                Learn Patrick&apos;s Story
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              ✓ No email required
            </span>
            <span className="flex items-center gap-1">
              ✓ Instant calculations
            </span>
            <span className="flex items-center gap-1">
              ✓ Free to use
            </span>
            <span className="flex items-center gap-1">
              ✓ Mobile optimized
            </span>
          </div>
        </div>
      </section>

            {/* Calculator Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Equipment Financing Calculators
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Professional-grade calculators built from 20+ years of industry experience. Get instant, accurate numbers
              to make informed equipment purchase and lease decisions—no email required.
            </p>
          </div>
          
          <div className="calculator-grid">
            {calculators.map((calc, index) => {
              const IconComponent = calc.icon
              return (
                <Card key={calc.href} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  {calc.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${calc.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2 text-gray-900">{calc.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {calc.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {calc.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild className="w-full" variant={calc.popular ? "default" : "outline"}>
                      <Link href={calc.href}>
                        Use Calculator
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-muted py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Built by Someone Who&apos;s Been There</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <DollarSign className="h-12 w-12 text-green-600 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-900">20+ Years Experience</h3>
              <p className="text-gray-600">
                Two decades of equipment financing experience across multiple industries and business types.
              </p>
            </div>
            <div className="space-y-4">
              <Calculator className="h-12 w-12 text-blue-600 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-900">Developer-Built Tools</h3>
              <p className="text-gray-600">
                I learned to code specifically to build these calculators. No guesswork, just proven formulas.
              </p>
            </div>
            <div className="space-y-4">
              <Users className="h-12 w-12 text-purple-600 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-900">Vetted Lender Network</h3>
              <p className="text-gray-600">
                Connect with my personally vetted network of equipment financing specialists when you&apos;re ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-gray-900">
            Ready to Get Your Equipment Numbers?
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed">
            Start with our most popular calculator and get instant, accurate financing estimates. 
            Built by an industry expert with 20+ years experience—no email required, completely free to use.
          </p>
          <Button size="lg" asChild className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white shadow-lg">
            <Link href="/calculators/equipment-loan">
              <Calculator className="h-5 w-5 mr-2" />
              Calculate Equipment Loan
            </Link>
          </Button>
        </div>
      </section>
      
      <InstallPrompt />
    </div>
  )
}
