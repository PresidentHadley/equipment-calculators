'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Calculator, TrendingUp, BarChart3, PieChart } from 'lucide-react'
import { Button } from '@/components/ui/button'

const menuItems = [
  {
    title: 'Equipment Loan Calculator',
    href: '/calculators/equipment-loan',
    icon: Calculator,
    description: 'Monthly payments & amortization'
  },
  {
    title: 'Equipment Lease Calculator',
    href: '/calculators/equipment-lease',
    icon: TrendingUp,
    description: 'Factor rates & lease payments'
  },
  {
    title: 'Lease vs Buy Calculator',
    href: '/calculators/lease-vs-buy',
    icon: BarChart3,
    description: 'Side-by-side comparison'
  },
  {
    title: 'Equipment ROI Calculator',
    href: '/calculators/equipment-roi',
    icon: PieChart,
    description: 'Return on investment analysis'
  }
]

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="relative z-50"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background border-l shadow-xl z-40 overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Calculators</h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={closeMenu}
                    className="h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* Calculator Links */}
                <div className="space-y-3">
                  {menuItems.map((item) => {
                    const IconComponent = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className="block p-4 rounded-lg border hover:bg-muted transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-2 rounded">
                            <IconComponent className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm leading-tight">
                              {item.title}
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>

                {/* Industry Links */}
                <div className="border-t pt-4 space-y-2">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Industry Calculators</div>
                  <div className="grid grid-cols-1 gap-2">
                    <Link href="/calculators/construction" onClick={closeMenu} className="p-3 rounded-lg hover:bg-muted transition-colors text-sm">Construction Equipment</Link>
                    <Link href="/calculators/medical" onClick={closeMenu} className="p-3 rounded-lg hover:bg-muted transition-colors text-sm">Medical Equipment</Link>
                    <Link href="/calculators/restaurant" onClick={closeMenu} className="p-3 rounded-lg hover:bg-muted transition-colors text-sm">Restaurant Equipment</Link>
                    <Link href="/calculators/manufacturing" onClick={closeMenu} className="p-3 rounded-lg hover:bg-muted transition-colors text-sm">Manufacturing Equipment</Link>
                  </div>
                </div>

                {/* About Link */}
                <div className="border-t pt-4">
                  <Link
                    href="/about"
                    onClick={closeMenu}
                    className="block p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="font-medium">About</div>
                    <div className="text-sm text-muted-foreground">
                      What EquipmentCalculators.com offers
                    </div>
                  </Link>
                </div>

                {/* CTA */}
                <div className="border-t pt-4">
                  <div className="grid grid-cols-1 gap-2">
                    <Button asChild className="w-full" onClick={closeMenu}>
                      <Link href="/calculators/equipment-loan">
                        <Calculator className="h-4 w-4 mr-2" />
                        Start Calculating
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full" onClick={closeMenu}>
                      <Link href="/contact">Contact a Lender</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}