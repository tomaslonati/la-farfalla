"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

interface ReviewsSectionProps {
  language: "es" | "en"
}

export function ReviewsSection({ language }: ReviewsSectionProps) {
  const content = {
    es: {
      title: "Lo Que Dicen Nuestros Huéspedes",
      subtitle: "Reseñas verificadas de viajeros",
    },
    en: {
      title: "What Our Guests Say",
      subtitle: "Verified reviews from travelers",
    },
  }

  const reviews = [
    {
      name: "Marina Perucca",
      date: language === "es" ? "Hace 3 meses en Google" : "3 months ago on Google",
      rating: 5,
      text:
        language === "es"
          ? "Alojamiento súper recomendable: muy buena ubicación, instalaciones nuevas, cama confortable, desayuno súper abundante, vajilla e utensillos variados. Muy buena relación costo calidad."
          : "Highly recommended accommodation: great location, new facilities, comfortable bed, very abundant breakfast, varied crockery and utensils. Very good value for money.",
    },
    {
      name: "Juan Pablo Bongiorno",
      date: language === "es" ? "Hace un año en Google" : "1 year ago on Google",
      rating: 5,
      text:
        language === "es"
          ? "Excelente hospedaje. Nada que objetar durante mi estadía, el departamento súper cómodo y con todo lo necesario para tu estadía. El desayuno es excelente y la dueña una genia, nos asistió en todo lo que le preguntamos. Sin dudas si volvemos al Chaltén, volveremos a elegir este hospedaje."
          : "Excellent lodging. Nothing to complain about during my stay, the apartment is super comfortable and has everything you need. Breakfast is excellent and the owner is great; she helped us with everything we asked. Without a doubt, if we return to El Chaltén, we will choose this accommodation again.",
    },
    {
      name: "Nohemi Arellano",
      date: language === "es" ? "Hace 2 años en Google" : "2 years ago on Google",
      rating: 5,
      text:
        language === "es"
          ? "Linda atención desde la reserva hasta la salida. El lugar como nuevo y de muy buen gusto. La cama perfecta, el baño súper cómodo con agua caliente y buena presión. Excelente calefacción. 100% recomendado. Volvería sin dudarlo ❤️."
          : "Nice attention from the reservation to the checkout. The place feels like new and is very tasteful. The bed is perfect, the bathroom is super comfortable with hot water and good pressure. Excellent heating. 100% recommended. I would return without hesitation ❤️.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{content[language].title}</h2>
          <p className="text-lg text-gray-600">{content[language].subtitle}</p>
        </div>

        {/* Google Reviews Badge */}
        <div className="flex justify-center mb-12">
          <a
            href="https://www.google.com/travel/search?q=la%20farfalla%20chalten&g2lb=4965990%2C72317059%2C72414906%2C72471280%2C72485658%2C72560029%2C72573224%2C72647020%2C72686036%2C72799179%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764%2C73107089%2C73169520%2C73192290&hl=es-AR&gl=ar&cs=1&ssta=1&ts=CAEaRwopEicyJTB4YmRiZDAzZmVhZDgxZDY2ZjoweDgzY2MyNjczZWFiZGYyYzQSGhIUCgcI6Q8QDBgdEgcI6Q8QDBgeGAEyAhAA&qs=CAEyFENnc0l4T1gzMWI3T2llYURBUkFCOAJCCQnE8r3qcybMg0IJCcTyvepzJsyD&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjY25XhldKRAxUAAAAAHQAAAAAQBA"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gray-400 p-6 bg-white hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-20 h-16 bg-white border border-gray-300 rounded-lg flex items-center justify-center shadow-sm">
                <div className="text-xl font-bold">
                  <span style={{ color: "#4285F4" }}>G</span>
                  <span style={{ color: "#EA4335" }}>o</span>
                  <span style={{ color: "#FBBC05" }}>o</span>
                  <span style={{ color: "#4285F4" }}>g</span>
                  <span style={{ color: "#34A853" }}>l</span>
                  <span style={{ color: "#EA4335" }}>e</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-lg font-bold text-gray-900">5.0</span>
                </div>
                <p className="text-sm text-gray-600">
                  {language === "es" ? "Reseñas en Google" : "Reviews on Google"}
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="border-2 border-gray-500 p-6 flex flex-col h-84">
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gray-900 text-gray-900" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed flex-grow">"{review.text}"</p>
              <div className="border-t border-gray-300 pt-4 mt-auto">
                <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                <p className="text-xs text-gray-600">{review.date}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
