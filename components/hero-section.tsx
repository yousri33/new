"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="py-48 md:py-56 lg:py-64 min-h-[100vh] flex items-center bg-gradient-to-br from-slate-50 via-cyan-50 to-indigo-50 relative overflow-hidden">
      {/* Radial background glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] md:w-[1000px] md:h-[1000px] bg-gradient-radial from-blue-200 via-cyan-100 to-transparent opacity-50 blur-3xl rounded-full mx-auto animate-pulse-slow" />
      </div>
      {/* Animated sparkles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <span className="absolute top-20 left-1/4 w-4 h-4 bg-cyan-200 rounded-full opacity-70 blur-md animate-float-slow" />
        <span className="absolute top-1/3 right-1/4 w-2.5 h-2.5 bg-indigo-200 rounded-full opacity-60 blur-sm animate-float-fast" />
        <span className="absolute bottom-24 left-1/3 w-3 h-3 bg-blue-100 rounded-full opacity-80 blur-md animate-float-mid" />
        <span className="absolute bottom-32 right-1/5 w-2.5 h-2.5 bg-indigo-100 rounded-full opacity-50 blur-sm animate-float-slow" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-white z-0"></div>
      <div className="absolute -right-64 -top-64 w-[800px] h-[800px] bg-blue-200 rounded-full opacity-50 blur-3xl animate-pulse duration-[5000ms]"></div>
      <div className="absolute -left-64 -bottom-64 w-[800px] h-[800px] bg-blue-200 rounded-full opacity-50 blur-3xl animate-pulse duration-[6000ms]"></div>
      <div className="absolute right-1/4 top-1/3 w-96 h-96 bg-indigo-100 rounded-full opacity-40 blur-3xl animate-pulse duration-[7000ms]"></div>
      <div className="absolute left-1/4 bottom-1/3 w-96 h-96 bg-indigo-100 rounded-full opacity-40 blur-3xl animate-pulse duration-[8000ms]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.92, y: 32 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 90, damping: 32, delay: 0.12 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-400 bg-clip-text text-transparent drop-shadow-xl"
          >
            AI Automation That Works While You Sleep
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.92, y: 22 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 90, damping: 32, delay: 0.38 }}
            className="text-xl md:text-2xl lg:text-3xl text-slate-700 mb-12 max-w-3xl mx-auto"
          >
            We replace bottlenecks with smart automations — so you can scale faster.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 18 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 90, damping: 32, delay: 0.64 }}
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 via-blue-600 to-blue-400 hover:from-indigo-700 hover:to-blue-500 text-white rounded-full px-10 py-7 text-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:ring-4 focus:ring-blue-200"
            >
              Book a Free Strategy Call
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </div>
      {/* Section divider */}
      <div className="absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-b from-transparent via-cyan-100 to-white opacity-80 blur-lg pointer-events-none" />
    </section>
  )
}
