"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import FormModal from "./form-modal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="relative overflow-hidden pt-24 pb-40 md:pt-32 md:pb-48 bg-slate-50">
      {/* Static background with subtle texture */}
      <div className="absolute inset-0 z-0 bg-slate-50"></div>
      
      {/* Subtle texture */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)',
        backgroundSize: '20px 20px',
      }}></div>
      
      {/* Animated sparkles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <span className="absolute top-[20%] left-[25%] w-2.5 h-2.5 bg-cyan-300 rounded-full opacity-60 blur-sm animate-float-slow" style={{
          animationDuration: '18s',
          boxShadow: '0 0 12px 2px rgba(103, 232, 249, 0.4)'
        }} />
        <span className="absolute top-[60%] right-[25%] w-2 h-2 bg-indigo-300 rounded-full opacity-60 blur-sm animate-float-fast" style={{
          animationDuration: '15s',
          boxShadow: '0 0 10px 1px rgba(165, 180, 252, 0.4)'
        }} />
      </div>

      <div className="container mx-auto px-4 h-full relative z-10">
        {/* Top section divider */}
        <div className="absolute left-0 right-0 top-0 h-32 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none -translate-y-full" />
        <div className="h-full flex flex-col justify-center items-center pt-16 md:pt-24">
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
              onClick={openModal}
              size="lg"
              className="bg-gradient-to-r from-indigo-600 via-blue-600 to-blue-400 hover:from-indigo-700 hover:to-blue-500 text-white rounded-full px-10 py-7 text-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:ring-4 focus:ring-blue-200"
            >
              Book a Free Strategy Call
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <FormModal isOpen={isModalOpen} onClose={closeModal} />
          </motion.div>
          </div>
        </div>
      </div>
      {/* Section divider */}
      <div className="absolute left-0 right-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-slate-50 to-slate-50 pointer-events-none" />
    </section>
  )
}
