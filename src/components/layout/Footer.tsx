import Link from "next/link"
import { Calculator } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg">
              <div className="h-6 w-6 bg-gradient-to-r from-blue-500 to-green-500 rounded flex items-center justify-center">
                <Calculator className="h-4 w-4 text-white" />
              </div>
              EquipmentCalculators.com
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional equipment financing calculators built by a 20+ year industry expert.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Core Calculators</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/calculators/equipment-loan" className="text-muted-foreground hover:text-foreground transition-colors">
                  Equipment Loan Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/equipment-lease" className="text-muted-foreground hover:text-foreground transition-colors">
                  Equipment Lease Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/lease-vs-buy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Lease vs Buy Comparison
                </Link>
              </li>
              <li>
                <Link href="/calculators/equipment-roi" className="text-muted-foreground hover:text-foreground transition-colors">
                  Equipment ROI Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Industry Calculators</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/calculators/construction" className="text-muted-foreground hover:text-foreground transition-colors">
                  Construction Equipment
                </Link>
              </li>
              <li>
                <Link href="/calculators/medical" className="text-muted-foreground hover:text-foreground transition-colors">
                  Medical Equipment
                </Link>
              </li>
              <li>
                <Link href="/calculators/restaurant" className="text-muted-foreground hover:text-foreground transition-colors">
                  Restaurant Equipment
                </Link>
              </li>
              <li>
                <Link href="/calculators/manufacturing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Manufacturing Equipment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About EquipmentCalculators.com
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground">Lender Network (Coming Soon)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EquipmentCalculators.com by Patrick Hadley. Built to help business owners make smart equipment financing decisions.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-xs text-muted-foreground">Free • No Email Required • Mobile Optimized</span>
          </div>
        </div>
      </div>
    </footer>
  )
}