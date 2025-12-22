"use client"

import { useState, useEffect } from "react"

interface HeroSectionProps {
  language: "es" | "en"
}

const heroImages = [
  "/images/20221023_take01_1500x1200.jpg",
  "/images/20221023_take02_1500x1200.jpg",
]

export function HeroSection({ language }: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative h-[90vh] flex flex-col justify-end pt-20 md:pt-20">
      {/* Background images with zoom effect - matching hero height */}
      <div className="absolute inset-0 h-full overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center animate-zoom-in"
              style={{
                backgroundImage: `url(${image})`,
                animation: index === currentImageIndex ? "zoomIn 5s ease-out forwards" : "none",
              }}
            />
          </div>
        ))}
        <div className="" />
      </div>

    </section>
  )
}
