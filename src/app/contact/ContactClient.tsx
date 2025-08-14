"use client"
import { useState } from 'react'

export default function ContactClient({ initial }: { initial?: { name?: string; email?: string; message?: string } }) {
  const [firstName, setFirstName] = useState(initial?.name?.split(' ')[0] ?? '')
  const [lastName, setLastName] = useState(initial?.name?.split(' ').slice(1).join(' ') ?? '')
  const [email, setEmail] = useState(initial?.email ?? '')
  const [phone, setPhone] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [loanType, setLoanType] = useState('')
  const [amountRange, setAmountRange] = useState('')
  const [message, setMessage] = useState(initial?.message ?? '')
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          businessName,
          loanType,
          amountRange,
          message
        })
      })
      if (!res.ok) throw new Error('Send failed')
      setStatus('sent')
      setFirstName(''); setLastName(''); setEmail(''); setPhone(''); setBusinessName(''); setLoanType(''); setAmountRange(''); setMessage('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input value={firstName} onChange={e=>setFirstName(e.target.value)} required className="calculator-input w-full h-12 rounded-lg border px-3 bg-background text-foreground" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input value={lastName} onChange={e=>setLastName(e.target.value)} required className="calculator-input w-full h-12 rounded-lg border px-3 bg-background text-foreground" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required className="calculator-input w-full h-12 rounded-lg border px-3 bg-background text-foreground" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input type="tel" inputMode="tel" placeholder="(555) 123-4567" value={phone} onChange={e=>setPhone(e.target.value)} className="calculator-input w-full h-12 rounded-lg border px-3 bg-background text-foreground" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Business Name</label>
        <input value={businessName} onChange={e=>setBusinessName(e.target.value)} className="calculator-input w-full h-12 rounded-lg border px-3 bg-background text-foreground" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Loan Type of Interest</label>
          <select value={loanType} onChange={e=>setLoanType(e.target.value)} className="calculator-input w-full h-12 rounded-lg border px-3 bg-background text-foreground">
            <option value="">Select loan type</option>
            <option>Equipment Loan</option>
            <option>Equipment Lease</option>
            <option>Lease vs Buy Help</option>
            <option>ROI Advice</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Estimated Loan Amount</label>
          <select value={amountRange} onChange={e=>setAmountRange(e.target.value)} className="calculator-input w-full h-12 rounded-lg border px-3 bg-background text-foreground">
            <option value="">Select amount range</option>
            <option>Under $25,000</option>
            <option>$25,000 – $50,000</option>
            <option>$50,000 – $100,000</option>
            <option>$100,000 – $250,000</option>
            <option>$250,000+</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea value={message} onChange={e=>setMessage(e.target.value)} required rows={6} className="calculator-input w-full rounded-lg border px-3 py-2 bg-background text-foreground" placeholder="Tell us about your business and financing needs..." />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 items-start">
        <button disabled={status==='sending'} className="h-12 rounded-lg px-5 bg-gradient-to-r from-blue-500 to-green-500 text-white font-medium">
          {status==='sending' ? 'Sending...' : 'Send Message'}
        </button>
        {status==='sent' && <div className="text-green-600 text-sm">Message sent. We will reply shortly.</div>}
        {status==='error' && <div className="text-red-600 text-sm">There was a problem sending your message.</div>}
      </div>
    </form>
  )
}


