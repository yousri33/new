"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#automations", label: "Automations" },
  { href: "#capabilities", label: "AI Capabilities" },
  { href: "#who-we-help", label: "Who We Help" },
  { href: "#team", label: "Team" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-100/60 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-extrabold bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
          Aurith AI
        </Link>
        <div className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <span className="block w-6 h-0.5 bg-blue-700 mb-1"></span>
          <span className="block w-6 h-0.5 bg-blue-700 mb-1"></span>
          <span className="block w-6 h-0.5 bg-blue-700"></span>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white/95 px-4 pb-4 pt-2 flex flex-col gap-4">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
