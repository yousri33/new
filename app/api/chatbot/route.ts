import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'HTTP-Referer': process.env.SITE_URL || 'https://aurith.ai',
        'X-Title': 'Aurith AI',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'google/gemini-2.0-flash-exp:free',
        messages: body.messages
      })
    })

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}