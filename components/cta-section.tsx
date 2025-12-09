"use client"

import { FaWhatsapp } from "react-icons/fa"
import { Button } from "@/components/ui/button"

interface CtaSectionProps {
  language: "es" | "en"
}

export function CtaSection({ language }: CtaSectionProps) {
  const content = {
    es: {
      title: "Reservá tu estadía",
      subtitle: "Consultá disponibilidad y precios",
      button: "Consultar por WhatsApp",
    },
    en: {
      title: "Book your stay",
      subtitle: "Check availability and prices",
      button: "Contact via WhatsApp",
    },
  }

  const t = content[language]

  const whatsappNumber = "542966408560"
  const whatsappMessage = encodeURIComponent(
    language === "es"
      ? "Hola, me gustaría consultar disponibilidad en Aparts La Farfalla"
      : "Hello, I would like to check availability at Aparts La Farfalla",
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section className="py-16 md:py-20 px-4" style={{ backgroundColor: '#341414' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          {t.title}
        </h2>
        <p className="text-lg text-white/90 mb-8">
          {t.subtitle}
        </p>
        <Button
          size="lg"
          className="bg-white text-primary hover:bg-white/90 text-base px-8 h-12 rounded-[100px]"
          asChild
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <FaWhatsapp className="w-5 h-5" />
            {t.button}
          </a>
        </Button>
      </div>
    </section>
  )
}
