"use client"

import { Heart, Users, Sparkles, ArrowRight, ChefHat, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ElBarrancoSectionProps {
  language: "es" | "en"
}

export function ElBarrancoSection({ language }: ElBarrancoSectionProps) {
  const content = {
    es: {
      badge: "Para grupos y familias",
      title: "¿Viajan en grupo?",
      subtitle: "Descubrí Posada El Barranco",
      description: "Posada y cabañas especializadas para grupos y familias. Ideal para quienes buscan más espacio y servicios completos.",
      features: ["Habitaciones múltiples", "Desayuno incluido"],
      cta: "Visitar sitio",
      note: "Sitio externo",
      clickHint: "Click para visitar",
    },
    en: {
      badge: "For groups and families",
      title: "Traveling as a group?",
      subtitle: "Discover Posada El Barranco",
      description: "Lodge and cabins specialized for groups and families. Ideal for those seeking more space and complete services.",
      features: ["Multiple rooms", "Breakfast included"],
      cta: "Visit site",
      note: "External site",
      clickHint: "Click to visit",
    },
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <a 
        href="https://www.posadaelbarranco.com.ar" 
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
                src="/images/Cab 1 mat pla.jpg"
                alt="Posada El Barranco - Vista exterior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={(e) => {
                  console.log("Error loading El Barranco image")
                }}
                onLoad={() => {
                  console.log("El Barranco image loaded successfully")
                }}
                priority
              />
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-light text-primary mb-2 tracking-tight">{content[language].title}</h2>
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