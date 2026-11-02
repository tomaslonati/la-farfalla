"use client"

interface IntroSectionProps {
  language: "es" | "en"
}

export function IntroSection({ language }: IntroSectionProps) {
  const content = {
    es: {
      title: "Tu descanso perfecto en un pueblo de montaña",
      description1:
        "Ubicado en el corazón de El Chaltén, La Farfalla te envuelve en un ambiente acogedor rodeado de majestuosas montañas y paisaje patagónico. Aquí se funde la calidez de un ambiente único con la belleza natural del entorno.",
      description2:
        "Nuestros aparts monoambiente están totalmente equipados con todo lo necesario para tener un buen descanso y disfrutar de una estancia confortable. Ubicados en el centro del pueblo, cerca de restaurantes, bares, supermercados, casa de deporte y artesanías.",
      description3:
        "Aparts La Farfalla abrió sus puertas en el año 2022, ofreciendo alojamiento especializado para dos personas con cama matrimonial queen size, ideal para parejas y viajeros solos, tanto nacionales como extranjeros.",
    },
    en: {
      title: "Your perfect rest in a mountain town",
      description1:
        "Located in the heart of El Chaltén, La Farfalla envelops you in a cozy atmosphere surrounded by majestic mountains and Patagonian landscape. Here the warmth of a unique environment merges with the natural beauty of the surroundings.",
      description2:
        "Our studio apartments are fully equipped with everything necessary for a good rest and to enjoy a comfortable stay. Located in the center of town, close to restaurants, bars, supermarkets, sports shops and handicrafts.",
      description3:
        "Aparts La Farfalla opened its doors in 2022, offering specialized accommodation for two people with queen size double bed, ideal for couples and solo travelers, both national and international.",
    },
  }

  const t = content[language]

  return (
    <section className="py-16 md:py-24 bg-gray-50 px-4 md:px-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.title}</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-base">{t.description1}</p>
              <p className="text-base">{t.description2}</p>
              <p className="text-base">{t.description3}</p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="/images/galeria/20221023_take05_1500x1200.jpg"
                alt={language === "es" ? "Aparts La Farfalla - Vista exterior" : "Aparts La Farfalla - Exterior view"}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
