import Link from "next/link"
import { Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
            <Calculator className="h-5 w-5 text-white" />
          </div>
          EquipmentCalculators.com
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/calculators/equipment-loan" className="text-sm font-medium hover:text-primary transition-colors">
            Loan Calculator
          </Link>
          <Link href="/calculators/equipment-lease" className="text-sm font-medium hover:text-primary transition-colors">
            Lease Calculator  
          </Link>
          <Link href="/calculators/lease-vs-buy" className="text-sm font-medium hover:text-primary transition-colors">
            Lease vs Buy
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
        </nav>

        <Button asChild size="sm" className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
          <Link href="/calculators/equipment-loan">
            Start Calculating
          </Link>
        </Button>
      </div>
    </header>
  )
}