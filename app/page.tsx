"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BookingModal } from "@/components/booking-modal"
import { IntroSection } from "@/components/intro-section"
import { BenefitsSection } from "@/components/benefits-section"
import { GallerySection } from "@/components/gallery-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { SectionDivider } from "@/components/section-divider"

export default function Home() {
  const [language, setLanguage] = useState<"es" | "en">("es")

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main>
        <HeroSection language={language} />
        <BookingModal language={language} />
        <IntroSection language={language} />
        <BenefitsSection language={language} />
        <GallerySection language={language} />
        <CtaSection language={language} />
      </main>
      <Footer language={language} />
    </div>
  )
}
