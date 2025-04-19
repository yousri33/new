import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="glass shadow-lg bg-slate-900/80 text-white py-12 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Aurith AI</h2>
          </div>

          <div className="flex space-x-6 mb-8">
            <Link href="/about" className="text-sm text-slate-200 hover:text-blue-300 active:text-blue-400 transition-colors underline-offset-4 hover:underline">
              About
            </Link>
            <Link href="/services" className="text-sm text-slate-200 hover:text-blue-300 active:text-blue-400 transition-colors underline-offset-4 hover:underline">
              Services
            </Link>
            <Link href="/contact" className="text-sm text-slate-200 hover:text-blue-300 active:text-blue-400 transition-colors underline-offset-4 hover:underline">
              Contact
            </Link>
          </div>

          <div className="flex space-x-4 mb-8">
            <Link href="#" className="text-slate-200 hover:text-blue-300 active:text-blue-400 transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-slate-200 hover:text-blue-300 active:text-blue-400 transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-slate-200 hover:text-blue-300 active:text-blue-400 transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-slate-200 hover:text-blue-300 active:text-blue-400 transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>

          <div className="text-xs text-slate-400">© {new Date().getFullYear()} Aurith AI. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
