import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'EquipmentCalculators.com'
  const subtitle = searchParams.get('subtitle') || 'Free Equipment Financing Calculators'
  const theme = searchParams.get('theme') || 'blue-green'

  const gradient = theme === 'construction'
    ? 'linear-gradient(135deg, #f59e0b 0%, #2563eb 100%)'
    : theme === 'medical'
    ? 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)'
    : theme === 'restaurant'
    ? 'linear-gradient(135deg, #ef4444 0%, #f59e0b 100%)'
    : theme === 'manufacturing'
    ? 'linear-gradient(135deg, #4f46e5 0%, #16a34a 100%)'
    : 'linear-gradient(135deg, #2563eb 0%, #16a34a 100%)'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: gradient as unknown as string,
          color: 'white',
          padding: 64,
          fontSize: 48,
          fontWeight: 700
        }}
      >
        <div style={{ fontSize: 64, marginBottom: 16 }}>{title}</div>
        <div style={{ fontSize: 28, fontWeight: 500, opacity: 0.9 }}>{subtitle}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}


