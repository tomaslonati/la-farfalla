import { Coffee, MapPin, Clock, Utensils, Home, Flame } from "lucide-react"

interface BenefitsSectionProps {
  language: "es" | "en"
}

export function BenefitsSection({ language }: BenefitsSectionProps) {
  const content = {
    es: {
      title: "Servicios y comodidades",
      slogan: "Tu descanso perfecto en un pueblo de montaña",
      benefits: [
        {
          icon: MapPin,
          title: "Ubicación Privilegiada",
          description: "En el centro del pueblo, cerca de todo",
        },
        {
          icon: Coffee,
          title: "Desayuno Delicioso",
          description: "El broche de oro a tu experiencia",
        },
        {
          icon: Flame,
          title: "Calefacción Perfecta",
          description: "Ambiente cálido y confortable",
        },
        {
          icon: Clock,
          title: "Acceso Autónomo",
          description: "Gestiona tu entrada de forma independiente",
        },
        {
          icon: Utensils,
          title: "Cocina Equipada",
          description: "Variedad de amenities para cocinar",
        },
        {
          icon: Home,
          title: "Camas Acogedoras",
          description: "Queen size para un descanso perfecto",
        },
      ],
    },
    en: {
      title: "Services and Amenities",
      slogan: "Your perfect rest in a mountain town",
      benefits: [
        {
          icon: MapPin,
          title: "Prime Location",
          description: "In the town center, close to everything",
        },
        {
          icon: Coffee,
          title: "Delicious Breakfast",
          description: "The perfect finishing touch to your experience",
        },
        {
          icon: Flame,
          title: "Perfect Heating",
          description: "Warm and comfortable environment",
        },
        {
          icon: Clock,
          title: "Autonomous Access",
          description: "Manage your entry independently",
        },
        {
          icon: Utensils,
          title: "Equipped Kitchen",
          description: "Variety of cooking amenities",
        },
        {
          icon: Home,
          title: "Cozy Beds",
          description: "Queen size for perfect rest",
        },
      ],
    },
  }

  return (
    <section className="py-16 md:py-20 px-4" style={{ backgroundColor: '#18682D' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{content[language].title}</h2>
          <p className="text-lg text-white/80">{content[language].slogan}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content[language].benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white border border-gray-200 hover:border-primary/30 transition-all hover:shadow-md rounded-xl"
              >
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-base font-medium text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
