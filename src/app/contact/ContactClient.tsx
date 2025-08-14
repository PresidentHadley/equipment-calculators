"use client"
import { useState } from 'react'

export default function ContactClient({ initial }: { initial?: { name?: string; email?: string; message?: string } }) {
  const [name, setName] = useState(initial?.name ?? '')
  const [email, setEmail] = useState(initial?.email ?? '')
  const [message, setMessage] = useState(initial?.message ?? '')
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      if (!res.ok) throw new Error('Send failed')
      setStatus('sent')
      setName(''); setEmail(''); setMessage('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input value={name} onChange={e=>setName(e.target.value)} required className="calculator-input w-full h-12 rounded-lg border px-3 bg-background text-foreground" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required className="calculator-input w-full h-12 rounded-lg border px-3 bg-background text-foreground" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea value={message} onChange={e=>setMessage(e.target.value)} required rows={6} className="calculator-input w-full rounded-lg border px-3 py-2 bg-background text-foreground" />
      </div>
      <button disabled={status==='sending'} className="h-12 rounded-lg px-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-medium w-full sm:w-auto">
        {status==='sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status==='sent' && <div className="text-green-600 text-sm">Message sent. We will reply shortly.</div>}
      {status==='error' && <div className="text-red-600 text-sm">There was a problem sending your message.</div>}
    </form>
  )
}


