import { NextRequest } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const to = process.env.RESEND_TO
    const from = process.env.RESEND_FROM || 'no-reply@equipmentcalculators.com'

    if (!apiKey || !to) {
      return new Response(JSON.stringify({ error: 'Email not configured' }), { status: 500 })
    }

    const resend = new Resend(apiKey)
    const subject = `New contact from EquipmentCalculators.com: ${name}`
    const html = `
      <div>
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      </div>
    `

    const result = await resend.emails.send({
      to,
      from,
      subject,
      html
    })

    if ((result as { error?: unknown }).error) {
      return new Response(JSON.stringify({ error: 'Failed to send' }), { status: 500 })
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    err
  ) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), { status: 400 })
  }
}


