import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="py-28 bg-gradient-to-br from-slate-50 via-cyan-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute -right-32 -bottom-32 w-64 h-64 bg-blue-100 rounded-full opacity-40 blur-3xl animate-pulse duration-[5000ms]"></div>
      <div className="absolute -left-32 -top-32 w-64 h-64 bg-blue-100 rounded-full opacity-40 blur-3xl animate-pulse duration-[6000ms]"></div>
      
      <div className="relative flex flex-col items-center justify-center max-w-4xl mx-auto text-center py-8 px-4 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
        {/* Radial background glow */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div className="w-[900px] h-[900px] md:w-[1200px] md:h-[1200px] bg-gradient-radial from-cyan-200 via-indigo-100 to-transparent opacity-50 blur-3xl rounded-full mx-auto animate-pulse-slow" />
          <div className="w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-gradient-radial from-blue-200 via-cyan-100 to-transparent opacity-70 blur-2xl rounded-full mx-auto animate-pulse-slow" />
        </div>
        {/* More animated sparkles */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <span className="absolute top-12 left-1/4 w-3 h-3 bg-cyan-200 rounded-full opacity-70 blur-md animate-float-slow" />
          <span className="absolute top-1/3 right-1/4 w-2 h-2 bg-indigo-200 rounded-full opacity-60 blur-sm animate-float-fast" />
          <span className="absolute bottom-16 left-1/3 w-2.5 h-2.5 bg-blue-100 rounded-full opacity-80 blur-md animate-float-mid" />
          <span className="absolute bottom-24 right-1/5 w-2 h-2 bg-indigo-100 rounded-full opacity-50 blur-sm animate-float-slow" />
          <span className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-100 rounded-full opacity-60 blur-sm animate-float-mid" />
          <span className="absolute top-1/4 right-1/3 w-2 h-2 bg-blue-200 rounded-full opacity-60 blur-md animate-float-fast" />
        </div>
        {/* Animated sparkles */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <span className="absolute top-12 left-1/4 w-3 h-3 bg-cyan-200 rounded-full opacity-70 blur-md animate-float-slow" />
          <span className="absolute top-1/3 right-1/4 w-2 h-2 bg-indigo-200 rounded-full opacity-60 blur-sm animate-float-fast" />
          <span className="absolute bottom-16 left-1/3 w-2.5 h-2.5 bg-blue-100 rounded-full opacity-80 blur-md animate-float-mid" />
          <span className="absolute bottom-24 right-1/5 w-2 h-2 bg-indigo-100 rounded-full opacity-50 blur-sm animate-float-slow" />
        </div>
        <h2 className="relative z-20 text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-400 bg-clip-text text-transparent transition-colors duration-300 inline-block group drop-shadow-xl">
          Let's Automate Your Business
          <span className="block h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600 transition-all duration-500 mt-2 mx-auto rounded-full relative overflow-hidden">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/70 to-white/0 opacity-70 animate-shimmer group-hover:opacity-100" />
          </span>
        </h2>
        <p className="relative z-10 text-xl md:text-2xl text-slate-700 mb-12 max-w-3xl mx-auto">
          Book a call. We'll map your workflows and show you what to automate first.
        </p>
        <Button
          size="lg"
          className="relative z-20 bg-gradient-to-r from-indigo-600 via-blue-600 to-blue-400 hover:from-indigo-700 hover:to-blue-500 text-white rounded-full px-14 py-9 text-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 focus:ring-4 focus:ring-blue-200 animate-bounce-in hover:ring-4 hover:ring-cyan-300 hover:ring-offset-2"
        >
          Schedule a Free Call
          <ArrowRight className="ml-4 h-7 w-7" />
        </Button>
      </div>
      {/* Section divider */}
      <div className="absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-b from-transparent via-cyan-100 to-white opacity-80 blur-lg pointer-events-none" />
    </section>
  );
}

