import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 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',
        'HTTP-Referer': 'https://aurith.ai', // Optional. Site URL for rankings on openrouter.ai.
        'X-Title': 'Aurith AI', // Optional. Site title for rankings on openrouter.ai.
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: body.model || 'google/gemini-2.0-flash-exp:free',
        messages: body.messages || [],
        ...body.extra_body
      })
    })

    const data = await response.json();
    // Ensure the output is always markdown format
    let responseContent = '';
    if (data.choices?.[0]?.message?.content) {
      responseContent = data.choices[0].message.content;
    } else if (data.choices?.[0]?.content) {
      responseContent = data.choices[0].content;
    } else if (data.message) {
      responseContent = data.message;
    } else if (data.content) {
      responseContent = data.content;
    } else if (data.result) {
      responseContent = data.result;
    }
    // Basic check: if not markdown, add line breaks
    if (responseContent && !responseContent.includes('```') && !responseContent.includes('#') && !responseContent.includes('*')) {
      responseContent = responseContent.replace(/\n/g, '  \n');
    }
    return NextResponse.json({ choices: [{ message: { content: responseContent } }] });
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
