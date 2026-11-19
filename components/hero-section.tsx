"use client"

import { useState, useEffect } from "react"
import { useFolderImages } from "@/lib/use-folder-images"

interface HeroSectionProps {
  language: "es" | "en"
}

// Respaldo para desarrollo: en el hosting la lista sale de la carpeta /images/hero (vía /fotos.php)
const fallbackHeroImages = [
  "/images/hero/01.jpg",
  "/images/hero/02.jpg",
]

export function HeroSection({ language }: HeroSectionProps) {
  const heroImages = useFolderImages("hero", fallbackHeroImages)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const activeIndex = currentImageIndex % heroImages.length

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <section id="hero" className="relative h-[90vh] flex flex-col justify-end pt-20 md:pt-20">
      {/* Background images with zoom effect - matching hero height */}
      <div className="absolute inset-0 h-full overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center animate-zoom-in"
              style={{
                backgroundImage: `url("${image}")`,
                animation: index === activeIndex ?"zoomIn 5s ease-out forwards" : "none",
              }}
            />
          </div>
        ))}
        <div className="" />
      </div>

    </section>
  )
}
