"use client";
import { Building2, ShoppingBag, Truck, Users } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function WhoWeHelp() {
  const industries = [
    {
      icon: <Building2 className="h-10 w-10 text-slate-900" />,
      title: "Service Businesses",
      examples: "Agencies, Consultants, Law Firms",
      useCases: [
        "Automate proposals with AI-generated templates",
        "Onboard clients with dynamic forms + CRM sync",
        "Auto-send reports with insights pulled from live data",
      ],
      caseStudy: "We used GPT-powered workflows to help a law firm generate contracts 80% faster.",
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-slate-900" />,
      title: "eCommerce & Retail",
      examples: "Online Stores, Product Brands",
      useCases: [
        "Auto-reply to support questions with AI chatbots",
        "Predict inventory demand using sales data and seasonality",
        "Create product descriptions using AI content tools",
      ],
      caseStudy: "For a fashion brand, we built a chatbot that handled 70% of support, reducing tickets by half.",
    },
    {
      icon: <Truck className="h-10 w-10 text-slate-900" />,
      title: "Logistics & Ops",
      examples: "Delivery Companies, Warehouse Ops",
      useCases: [
        "Automate scheduling with AI-driven shift logic",
        "Predict route demand with historical + real-time data",
        "Auto-generate invoices and client updates",
      ],
      caseStudy: "We helped a local logistics firm cut down dispatch errors using predictive analytics + Make.com.",
    },
    {
      icon: <Users className="h-10 w-10 text-slate-900" />,
      title: "HR & Recruiting",
      examples: "Agencies, Startups, HR Teams",
      useCases: [
        "AI-powered forms to screen candidates automatically",
        "Schedule interviews with calendar syncing",
        "Auto-onboard new hires with task flows and email triggers",
      ],
      caseStudy: "A hiring agency saved 20+ hours/week by automating resume filtering with GPT + Google Sheets.",
    },
  ]

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-to-tl from-indigo-50 via-cyan-50 to-slate-50 relative overflow-hidden">
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
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-in fade-in slide-in-from-top-10 duration-700 ease-out bg-gradient-to-br from-blue-700 via-indigo-600 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">Who We Help</h2>
        <p className="text-xl text-center text-slate-700 mb-16 max-w-2xl mx-auto animate-in fade-in slide-in-from-top-10 duration-700 ease-out delay-100">With Real AI Use Cases</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-white/70 glass p-8 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 border border-transparent hover:border-blue-200 focus-within:border-blue-300"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 330, damping: 18, delay: 0.18 + index * 0.11 }}
              >
                <div className="flex items-center mb-8">
                  <div className="flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mr-5 shadow-inner transition-all duration-300 group-hover:bg-blue-100 group-hover:scale-110">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">{industry.title}</h3>
                    <div className="text-slate-600 text-base font-medium mb-1">{industry.examples}</div>
                  </div>
                </div>
                <ul className="mb-4 space-y-2">
                  {industry.useCases.map((useCase, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700 text-sm"><span className="mt-1 w-2 h-2 rounded-full bg-cyan-400 inline-block"></span>{useCase}</li>
                  ))}
                </ul>
                <div className="text-xs italic text-slate-500 border-l-4 border-cyan-200 pl-3">{industry.caseStudy}</div>
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
