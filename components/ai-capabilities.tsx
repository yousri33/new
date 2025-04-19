import {
  MessageSquare,
  Search,
  BarChart,
  Users,
  FileText,
  Database,
  ImageIcon,
  UserPlus,
  HeadsetIcon as HeadsetMic,
} from "lucide-react"

export default function AiCapabilities() {
  const capabilities = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Smart Chatbots",
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "RAG AI Search",
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Predictive Analytics",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Smart CRMs",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Recruiting Forms",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Automation",
    },
    {
      icon: <ImageIcon className="h-8 w-8" />,
      title: "Image/Voice/Text AI",
    },
    {
      icon: <UserPlus className="h-8 w-8" />,
      title: "Staff Augmentation",
    },
    {
      icon: <HeadsetMic className="h-8 w-8" />,
      title: "Customer Service Bots",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-gradient-to-tl from-indigo-50 via-cyan-50 to-slate-50 relative overflow-hidden">
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
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out delay-200 bg-gradient-to-br from-blue-700 via-indigo-600 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">AI Capabilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {capabilities.map((cap, idx) => (
            <div
              key={cap.title}
              className="group relative bg-white/70 rounded-3xl p-8 flex flex-col items-center shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-cyan-200/60 cursor-pointer overflow-visible animate-in fade-in slide-in-from-bottom-10"
              style={{ animationDelay: `${idx * 120 + 200}ms` }}
              tabIndex={0}
              aria-label={cap.title}
            >
              <div className="mb-4">
                <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-cyan-200 via-indigo-100 to-blue-100 p-4 shadow-md animate-pulse group-hover:animate-bounce">
                  {cap.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2 drop-shadow-sm group-hover:text-blue-600 transition-colors duration-200">
                {cap.title}
              </h3>
              {/* Example floating badge for first item */}
              {idx === 0 && (
                <span className="absolute -top-3 right-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-bounce-in">New</span>
              )}
              {/* Example floating badge for second item */}
              {idx === 1 && (
                <span className="absolute -top-3 left-6 bg-gradient-to-r from-indigo-400 to-blue-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-bounce-in">Popular</span>
              )}
            </div>
          ))}
        </div>
        {/* Decorative floating icons */}
        <div className="pointer-events-none select-none">
          <svg className="absolute left-8 top-8 w-10 h-10 text-cyan-100 opacity-60 animate-float-mid" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /></svg>
          <svg className="absolute right-8 bottom-8 w-8 h-8 text-indigo-100 opacity-50 animate-float-slow" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" /></svg>
        </div>
      </div>
      {/* Section divider */}
      <div className="absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-b from-transparent via-cyan-100 to-white opacity-80 blur-lg pointer-events-none" />
    </section>
  )
}
