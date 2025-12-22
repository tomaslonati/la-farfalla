"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, ChevronLeft, ChevronRight, Bed, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { FaWhatsapp } from "react-icons/fa"
import Image from "next/image"

interface RoomsSectionProps {
  language: "es" | "en"
}

const roomImages = {
  twin: ["/images/exterior-1.jpeg", "/images/exterior-2.jpg", "/images/exterior-3.jpeg"],
  matrimonial: ["/images/exterior-4.jpeg", "/images/exterior-5.jpeg"],
  triple: ["/images/exterior-6.jpg", "/images/exterior-7.jpeg", "/images/exterior-8.jpeg"],
  cuadruple: ["/images/exterior-9.jpg", "/images/exterior-10.jpg", "/images/exterior-1.jpeg"],
  cabanaDoble: ["/images/exterior-2.jpg", "/images/exterior-3.jpeg", "/images/exterior-4.jpeg"],
  cabanaStandard: ["/images/exterior-5.jpeg", "/images/exterior-6.jpg", "/images/exterior-7.jpeg"],
  cabanaSuperior: ["/images/la-farfalla-room.png", "/images/exterior-8.jpeg", "/images/exterior-9.jpg"],
}

function RoomCard({
  room,
  language,
  images,
}: {
  room: { name: string; capacity: string; description: string; beds: string }
  language: "es" | "en"
  images: string[]
}) {
  const [currentImage, setCurrentImage] = useState(0)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1)
    }
  }

  const whatsappNumber = "5492966762332"
  const whatsappMessage =
    language === "es"
      ? `Hola, quisiera consultar disponibilidad para: ${room.name}`
      : `Hello, I would like to check availability for: ${room.name}`

  const buttonText = language === "es" ? "Consultar Disponibilidad" : "Check Availability"

  return (
    <>
      <Card className="border-2 border-gray-200 hover:border-primary transition-colors hover:shadow-lg">
        <div
          className="relative h-56 bg-gray-100 border-b-2 border-gray-200 cursor-pointer group"
          onClick={() => setSelectedImage(currentImage)}
        >
          <Image
            src={images[currentImage] || "/placeholder.svg"}
            alt={`${room.name} - Image ${currentImage + 1}`}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
              {language === "es" ? "Click para ampliar" : "Click to enlarge"}
            </span>
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/95 border border-gray-300 hover:bg-white hover:border-primary flex items-center justify-center transition-all rounded-full shadow-md z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5 text-gray-900" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/95 border border-gray-300 hover:bg-white hover:border-primary flex items-center justify-center transition-all rounded-full shadow-md z-10"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5 text-gray-900" />
              </button>
            </>
          )}

          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentImage(index)
                  }}
                  className={`w-2 h-2 rounded-full border transition-all ${
                    index === currentImage ? "bg-primary border-primary w-6" : "bg-white border-white"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">{room.name}</h3>
          <div className="flex items-center gap-4 text-gray-600 mb-3">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">{room.capacity}</span>
            </div>
            <div className="flex items-center gap-2">
              <Bed className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">{room.beds}</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{room.description}</p>

          <Button asChild variant="secondary" className="w-full">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {buttonText}
            </a>
          </Button>
        </div>
      </Card>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>

          <button onClick={handlePrevious} className="absolute left-4 text-white hover:text-gray-300 transition-colors">
            <ChevronLeft className="h-12 w-12" />
          </button>

          <div className="max-w-4xl w-full aspect-video relative">
            <Image
              src={images[selectedImage] || "/placeholder.svg"}
              alt={`${room.name} - Image ${selectedImage + 1}`}
              fill
              className="object-contain"
            />
          </div>

          <button onClick={handleNext} className="absolute right-4 text-white hover:text-gray-300 transition-colors">
            <ChevronRight className="h-12 w-12" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-mono text-sm">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}

export function RoomsSection({ language }: RoomsSectionProps) {
  const [activeRoomId, setActiveRoomId] = useState<string>("cuadruple")
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<Map<string, HTMLButtonElement>>(new Map())

  const content = {
    es: {
      title: "Nuestras Habitaciones y Cabañas",
      subtitle: "Contamos con 13 habitaciones con baño privado y 4 cabañas completamente equipadas",
      rooms: [
        {
          name: "Habitación Doble Twin",
          capacity: "2 personas",
          beds: "2 camas individuales",
          description:
            "Habitación luminosa y calefaccionada con sommier, TV, cortinas blackout, caja de seguridad, secador de cabello y Wi-Fi.",
          imageKey: "twin" as const,
        },
        {
          name: "Habitación Matrimonial",
          capacity: "2 personas",
          beds: "1 cama matrimonial",
          description:
            "Habitación equipada con baño privado, calefacción, TV, caja de seguridad y todas las comodidades para su descanso.",
          imageKey: "matrimonial" as const,
        },
        {
          name: "Habitación Triple",
          capacity: "3 personas",
          beds: "1 matrimonial + 1 individual",
          description:
            "Amplia habitación con cama matrimonial y una cama individual, ideal para familias o grupos pequeños.",
          imageKey: "triple" as const,
        },
        {
          name: "Habitación Cuádruple",
          capacity: "4 personas",
          beds: "1 matrimonial + 2 individuales",
          description: "Espaciosa habitación perfecta para familias, con todas las comodidades y servicios incluidos.",
          imageKey: "cuadruple" as const,
        },
        {
          name: "Cabaña Doble",
          capacity: "2 personas",
          beds: "1 cama matrimonial",
          description:
            "Cabaña completamente equipada con cocina, heladera, microondas, pava eléctrica, tostadora, Wi-Fi, TV y caja de seguridad.",
          imageKey: "cabanaDoble" as const,
        },
        {
          name: "Cabaña Cuádruple Standard",
          capacity: "4-5 personas",
          beds: "1 matrimonial + 2 individuales",
          description:
            "Cabaña con cocina completa y posibilidad de agregar sillón cama para 5 pasajeros. Totalmente equipada.",
          imageKey: "cabanaStandard" as const,
        },
        {
          name: "Cabaña Cuádruple Superior",
          capacity: "4 personas",
          beds: "2 dormitorios independientes",
          description:
            "Cabaña de dos plantas con cocina-living-comedor y toilette en planta baja, dos dormitorios y baño completo en planta alta.",
          imageKey: "cabanaSuperior" as const,
        },
      ],
    },
    en: {
      title: "Our Rooms and Cabins",
      subtitle: "We have 13 rooms with private bathroom and 4 fully equipped cabins",
      rooms: [
        {
          name: "Twin Double Room",
          capacity: "2 people",
          beds: "2 single beds",
          description: "Bright and heated room with box spring, TV, blackout curtains, safe, hair dryer and Wi-Fi.",
          imageKey: "twin" as const,
        },
        {
          name: "Double Room",
          capacity: "2 people",
          beds: "1 double bed",
          description: "Room equipped with private bathroom, heating, TV, safe and all the comforts for your rest.",
          imageKey: "matrimonial" as const,
        },
        {
          name: "Triple Room",
          capacity: "3 people",
          beds: "1 double + 1 single",
          description: "Spacious room with double bed and one single bed, ideal for families or small groups.",
          imageKey: "triple" as const,
        },
        {
          name: "Quadruple Room",
          capacity: "4 people",
          beds: "1 double + 2 singles",
          description: "Spacious room perfect for families, with all amenities and services included.",
          imageKey: "cuadruple" as const,
        },
        {
          name: "Double Cabin",
          capacity: "2 people",
          beds: "1 double bed",
          description:
            "Fully equipped cabin with kitchen, refrigerator, microwave, electric kettle, toaster, Wi-Fi, TV and safe.",
          imageKey: "cabanaDoble" as const,
        },
        {
          name: "Standard Quadruple Cabin",
          capacity: "4-5 people",
          beds: "1 double + 2 singles",
          description: "Cabin with full kitchen and possibility to add sofa bed for 5 passengers. Fully equipped.",
          imageKey: "cabanaStandard" as const,
        },
        {
          name: "Superior Quadruple Cabin",
          capacity: "4 people",
          beds: "2 independent bedrooms",
          description:
            "Two-story cabin with kitchen-living-dining room and toilet on ground floor, two bedrooms and full bathroom upstairs.",
          imageKey: "cabanaSuperior" as const,
        },
      ],
    },
  }

  const roomsList = (content[language].rooms || []).map((room) => {
    const imageKey = room.imageKey
    const firstImage = roomImages[imageKey]?.[0] || "/placeholder.svg"
    return {
      id: imageKey,
      label: room.name,
      description: room.description,
      image: firstImage,
    }
  })

  const currentMobileRoom = roomsList.find((r) => r.id === activeRoomId) || roomsList[0]

  useEffect(() => {
    const activeButton = buttonsRef.current.get(activeRoomId)
    const container = scrollContainerRef.current

    if (activeButton && container) {
      const buttonRect = activeButton.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()

      const scrollLeft = container.scrollLeft
      const buttonLeft = buttonRect.left - containerRect.left + scrollLeft
      const buttonWidth = buttonRect.width
      const containerWidth = containerRect.width

      const targetScroll = buttonLeft - containerWidth / 2 + buttonWidth / 2

      container.scrollTo({ left: targetScroll, behavior: "smooth" })
    }
  }, [activeRoomId])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoomId((currentId) => {
        const idx = roomsList.findIndex((r) => r.id === currentId)
        const nextIdx = (idx + 1) % roomsList.length
        return roomsList[nextIdx]?.id ?? currentId
      })
    }, 5000)

    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const whatsappNumber = "5492966762332"
  const mobileWhatsappMessage = encodeURIComponent(
    language === "es"
      ? `Hola, me gustaría reservar la ${currentMobileRoom?.label} para...`
      : `Hello, I would like to reserve the ${currentMobileRoom?.label} for...`
  )
  const mobileWhatsappLink = `https://wa.me/${whatsappNumber}?text=${mobileWhatsappMessage}`

  return (
    <section id="rooms-section" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 font-serif">{content[language].title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{content[language].subtitle}</p>
        </div>

        {/* Mobile view: single active room with horizontal selector */}
        <div className="md:hidden">
          <div className="relative h-[300px] sm:h-[350px] rounded-lg overflow-hidden bg-gray-100 shadow-lg">
            {currentMobileRoom && (
              <Image
                src={currentMobileRoom.image}
                alt={currentMobileRoom.label}
                fill
                className="object-cover"
              />
            )}
          </div>

          <div className="bg-white mt-2 rounded-lg shadow-sm">
            <div
              ref={scrollContainerRef}
              className="flex gap-1 overflow-x-auto pb-2 scroll-smooth"
            >
              {roomsList.map((room) => (
                <button
                  ref={(el) => {
                    if (el) buttonsRef.current.set(room.id, el)
                  }}
                  key={room.id}
                  onClick={() => setActiveRoomId(room.id)}
                  type="button"
                  className={`flex-shrink-0 p-2 text-center rounded-lg transition-all duration-300 cursor-pointer text-xs min-w-[140px] ${
                    activeRoomId === room.id ? "text-black" : "text-[#8B8B8B]"
                  }`}
                  style={{ fontWeight: activeRoomId === room.id ? 800 : 900, lineHeight: "1.3" }}
                >
                  <div className="leading-tight uppercase">{room.label}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white px-2 py-4 rounded-lg shadow-sm">
            {currentMobileRoom && (
              <>
                <p className="text-gray-700 mb-4 text-sm" style={{ fontWeight: 300, lineHeight: "1.4" }}>
                  {currentMobileRoom.description}
                </p>
                <a
                  href={mobileWhatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-[80px] font-medium transition-colors text-sm flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  {language === "es" ? "RESERVAR" : "RESERVE"}
                </a>
              </>
            )}
          </div>
        </div>

        {/* Desktop grid remains unchanged */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].rooms.map((room, index) => (
            <RoomCard key={index} room={room} language={language} images={roomImages[room.imageKey]} />
          ))}
        </div>
      </div>
    </section>
  )
}
