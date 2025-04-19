"use client"

import { useState, useEffect, useRef } from 'react'
import { MessageSquare, X, Send } from 'lucide-react'
import { Button } from './ui/button'
import ReactMarkdown from 'react-markdown'

interface Message {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'system' as const,
      content: 'You are an AI assistant for Aurith AI, an automation agency that specializes in creating AI solutions that work 24/7. We offer services including Smart Chatbots, RAG AI Search, Predictive Analytics, Smart CRMs, Recruiting Forms, Data Automation, Image/Voice/Text AI processing, Staff Augmentation, and Customer Service Bots. Help users understand how we can automate their business processes.'
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = { role: 'user' as const, content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'google/gemini-2.0-flash-exp:free',
          messages: [...messages, userMessage]
        })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      if (!data.choices?.[0]?.message?.content) {
        throw new Error('Invalid API response format')
      }
      const assistantMessage = { role: 'assistant' as const, content: data.choices[0].message.content }
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error:', error)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant' as const,
          content: 'Sorry, I encountered an error. Please try again.',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 chatbot-mobile">
  {/* Glassy animated background for chatbot area */}
  <style>{`
    @keyframes fade-in-up { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } }
    @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
    .animate-fade-in { animation: fade-in 0.7s cubic-bezier(.4,0,.2,1); }
    .animate-fade-in-up { animation: fade-in-up 0.7s cubic-bezier(.4,0,.2,1); }
  `}</style>
  <link rel="stylesheet" href="/components/chatbot-mobile.css" />
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-br from-indigo-500 via-blue-500 to-blue-400 hover:from-indigo-600 hover:to-blue-500 text-white rounded-full p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 animate-fade-in-up"
        >
          <MessageSquare className="h-10 w-10" />
        </Button>
      ) : (
        <div className="w-[500px] max-w-full rounded-3xl shadow-2xl border border-blue-100/40 glass animate-fade-in-up">
  {/* Gradient glass header */}
          <div className="flex items-center justify-between p-5 border-b border-blue-200/30 bg-gradient-to-r from-indigo-700/90 via-blue-600/80 to-blue-400/80 text-white rounded-t-3xl shadow-lg">
            <h3 className="font-semibold text-white text-lg tracking-tight">Chat with Aurith AI ✨</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-indigo-700/20 rounded-full text-white bg-white/10 backdrop-blur focus:ring-2 focus:ring-blue-300"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="h-[550px] overflow-y-auto p-6 space-y-4 bg-white/80 glass animate-fade-in">
  {/* Enhanced first message */}
  <div className="flex justify-start animate-fade-in-up">
    <div className="max-w-[90%] rounded-3xl p-5 bg-gradient-to-br from-blue-200/90 via-indigo-100/90 to-white/90 shadow-xl border border-blue-100/60 glass flex items-center gap-3">
      <span className="inline-flex items-center justify-center bg-gradient-to-br from-indigo-500 via-blue-400 to-blue-300 text-white rounded-full w-10 h-10 shadow-md text-xl font-bold mr-2">👋</span>
      <div>
        <span className="block font-semibold text-lg text-indigo-700 mb-1">Hi! I’m <span className='text-blue-700'>Aurith AI</span></span>
        <span className="block text-slate-700 text-base">Ask me anything about automating your business or our AI solutions.</span>
      </div>
    </div>
  </div>
            {messages.slice(1).map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in-50`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-4 ${message.role === 'user' ? 'bg-gradient-to-br from-indigo-400/90 via-blue-400/90 to-blue-200/90 text-white shadow-lg animate-fade-in-up' : 'bg-white/90 glass text-slate-800 shadow-md border border-blue-100/40 animate-fade-in'} transition-all duration-200 prose`}
                >
                  <ReactMarkdown>{message.content}</ReactMarkdown>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-lg p-4 max-w-[80%] shadow-sm">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <form onSubmit={handleSubmit} className="border-t border-blue-200/30 p-4 bg-white/80 glass rounded-b-3xl flex items-center gap-3 shadow-md animate-fade-in-up">
  <input
    className="flex-1 rounded-full px-5 py-3 glass bg-white/90 border border-blue-100/40 shadow-inner focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all text-lg"
    type="text"
    value={input}
    onChange={e => setInput(e.target.value)}
    placeholder="Type your message..."
    disabled={isLoading}
  />
  <Button
    type="submit"
    size="icon"
    className="bg-gradient-to-r from-indigo-600 via-blue-600 to-blue-400 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 rounded-full p-0 w-12 h-12 flex items-center justify-center"
    disabled={isLoading || !input.trim()}
  >
    <Send className="h-5 w-5" />
  </Button>
</form>
        </div>
      )}
    </div>
  )
}