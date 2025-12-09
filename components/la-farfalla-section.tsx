"use client"

import { Heart, Users, Sparkles, ArrowRight, ChefHat, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface LaFarfallaSectionProps {
  language: "es" | "en"
}

export function LaFarfallaSection({ language }: LaFarfallaSectionProps) {
  const content = {
    es: {
      badge: "Para 2 personas",
      title: "¿Viajan de a dos?",
      subtitle: "Descubrí La Farfalla",
      description: "Alojamiento especializado en habitaciones dobles. Ideal para parejas o amigos.",
      features: ["Habitaciones dobles", "Cocina equipada", "Ambiente privado"],
      cta: "Visitar sitio",
      note: "Sitio externo",
      clickHint: "Click para visitar",
    },
    en: {
      badge: "For 2 people",
      title: "Traveling as a duo?",
      subtitle: "Discover La Farfalla",
      description: "Accommodation specialized in double rooms. Ideal for couples or friends.",
      features: ["Double rooms", "Equipped kitchen", "Private atmosphere"],
      cta: "Visit site",
      note: "External site",
      clickHint: "Click to visit",
    },
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <a 
        href="https://www.lafarfalla.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] hover:border-primary/50 group"
      >
        {/* External Link Badge */}
        <div className="absolute top-4 right-4 z-10 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
          <ExternalLink className="h-3 w-3" />
          {content[language].note}
        </div>

        <div className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center min-h-[300px]">
              <Image
                src="/images/la-farfalla-room.png"
                alt="La Farfalla Room - Habitación doble"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={(e) => {
                  console.log("Error loading La Farfalla image")
                }}
                onLoad={() => {
                  console.log("La Farfalla image loaded successfully")
                }}
                priority
              />
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-2 tracking-tight">{content[language].title}</h2>
                <p className="text-xl md:text-2xl font-medium text-primary mb-3">{content[language].subtitle}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{content[language].description}</p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {content[language].features.map((feature, index) => (
                  <span key={index} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-full text-xs text-gray-700">
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  <span>{content[language].cta}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </section>
  )
}
