"use client";
import { Cog } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function OurAutomations() {
  const automations = [
    "Client Onboarding",
    "Sales Pipeline",
    "CRM",
    "Proposal Creation",
    "Payment & Contracts",
    "Project Management",
    "Employee Onboarding",
    "Client Communications",
    "Client Reporting",
    "Operations",
    "And more...",
  ]

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-gradient-to-tl from-indigo-50 via-cyan-50 to-slate-50 relative overflow-hidden"
    >
      {/* Radial background glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] md:w-[1100px] md:h-[1100px] bg-gradient-radial from-cyan-200 via-indigo-100 to-transparent opacity-40 blur-3xl rounded-full mx-auto animate-pulse-slow" />
        <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-gradient-radial from-blue-200 via-cyan-100 to-transparent opacity-60 blur-2xl rounded-full mx-auto animate-pulse-slow" />
      </div>
      {/* Animated sparkles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <span className="absolute top-16 left-1/4 w-3 h-3 bg-cyan-200 rounded-full opacity-70 blur-md animate-float-slow" />
        <span className="absolute top-1/3 right-1/4 w-2 h-2 bg-indigo-200 rounded-full opacity-60 blur-sm animate-float-fast" />
        <span className="absolute bottom-20 left-1/3 w-2.5 h-2.5 bg-blue-100 rounded-full opacity-80 blur-md animate-float-mid" />
        <span className="absolute bottom-28 right-1/5 w-2 h-2 bg-indigo-100 rounded-full opacity-50 blur-sm animate-float-slow" />
        <span className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-100 rounded-full opacity-60 blur-sm animate-float-mid" />
        <span className="absolute top-1/4 right-1/3 w-2 h-2 bg-blue-200 rounded-full opacity-60 blur-md animate-float-fast" />
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-in fade-in slide-in-from-top-10 duration-700 ease-out bg-gradient-to-br from-blue-700 via-indigo-600 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">Our Automations</h2>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {automations.map((automation, idx) => (
            <div
              key={automation}
              className={`relative flex items-center gap-2 px-7 py-3.5 rounded-full shadow-lg border border-blue-100/60 bg-gradient-to-r from-white/80 via-cyan-50/80 to-blue-100/70 backdrop-blur-md text-slate-800 font-semibold transition-all duration-400 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-cyan-300/60 focus-within:ring-2 focus-within:ring-cyan-300/60 hover:border-cyan-300/60 hover:bg-cyan-50/60 group before:content-[''] before:absolute before:inset-0 before:rounded-full before:shadow-[inset_0_2px_8px_0_rgba(0,40,100,0.08)]`}
              tabIndex={0}
              aria-label={automation}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 330, damping: 18, delay: 0.18 + idx * 0.09 }}
                className="flex items-center gap-2 w-full"
              >
                <Cog className="h-5 w-5 text-blue-400 opacity-80 mr-1 group-hover:animate-pulse" aria-hidden="true" />
                <span className="transition-colors duration-200 group-hover:font-bold group-hover:text-blue-700">{automation}</span>
                {/* Badges */}
                {idx === 0 && (
                  <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-semibold shadow animate-bounce-in">New</span>
                )}
                {idx === 1 && (
                  <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gradient-to-r from-indigo-400 to-blue-400 text-white font-semibold shadow animate-bounce-in">Popular</span>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      {/* Section divider */}
      <div className="absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-b from-transparent via-cyan-100 to-white opacity-80 blur-lg pointer-events-none" />
    </section>
  )
}
