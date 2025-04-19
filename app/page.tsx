import HeroSection from "@/components/hero-section"
import HowItWorks from "@/components/how-it-works"
import OurAutomations from "@/components/our-automations"
import AiCapabilities from "@/components/ai-capabilities"
import WhoWeHelp from "@/components/who-we-help"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

import Chatbot from '@/components/chatbot'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <OurAutomations />
      <AiCapabilities />
      <WhoWeHelp />
      <CtaSection />
      <Footer />
      <Chatbot />
    </main>
  )
}
