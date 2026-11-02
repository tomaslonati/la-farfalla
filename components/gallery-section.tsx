"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useFolderImages } from "@/lib/use-folder-images"

interface GallerySectionProps {
  language: "es" | "en"
}

// Respaldo para desarrollo: en el hosting la lista sale de /fotos.php
const fallbackImages = [
  "/images/galeria/6a3c21bf-bd21-4aee-b266-7520c3db6e6a.jpg",
  "/images/galeria/621c1a69-3723-4b6f-b3d8-eafe17ac9ea5.jpg",
  "/images/galeria/737f3379-fee2-4aea-ac43-de60b6af9c48.jpg",
  "/images/galeria/20221023_take01_1500x1200.jpg",
  "/images/galeria/20221023_take02_1500x1200.jpg",
  "/images/galeria/20221023_take05_1500x1200.jpg",
  "/images/galeria/20221023_take08_1500x1200.jpg",
  "/images/galeria/20221023_take09_1500x1200.jpg",
  "/images/galeria/20221023_take12_1200x1500.jpg",
  "/images/galeria/20221023_take13_1500x1200.jpg",
  "/images/galeria/20221023_take14_1500x1200.jpg",
  "/images/galeria/20221023_take17_1500x1200.jpg",
  "/images/galeria/20221023_take18_1500x1200.jpg",
]

export function GallerySection({ language }: GallerySectionProps) {
  const galleryImages = useFolderImages("galeria", fallbackImages)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [visibleImages, setVisibleImages] = useState<number>(12)
  const [showAll, setShowAll] = useState<boolean>(false)

  const content = {
    es: {
      title: "Galería de Imágenes",
      subtitle: "Conocé nuestros acogedores aparts",
      showMore: "Ver más",
      showLess: "Ver menos",
    },
    en: {
      title: "Image Gallery",
      subtitle: "Discover our cozy apartments",
      showMore: "Show more",
      showLess: "Show less",
    },
  }

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  const handleShowMore = () => {
    setShowAll(true)
    setVisibleImages(galleryImages.length)
  }

  const handleShowLess = () => {
    setShowAll(false)
    setVisibleImages(12)
  }

  const imagesToShow = galleryImages.slice(0, visibleImages)

  return (
    <section id="gallery" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{content[language].title}</h2>
          <p className="text-lg text-gray-600">{content[language].subtitle}</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((imageSrc, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className="aspect-square bg-gray-100 border-2 border-gray-300 hover:border-gray-900 transition-colors overflow-hidden cursor-pointer relative group"
            >
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox/Carousel Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-[9999999999999999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Previous button */}
          <button 
            onClick={(e) => {
              e.stopPropagation()
              handlePrevious()
            }} 
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>

          {/* Image */}
          <div 
            className="max-w-4xl w-full aspect-video relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage] || "/placeholder.svg"}
              alt={`Gallery image ${selectedImage + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {/* Next button */}
          <button 
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }} 
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronRight className="h-12 w-12" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-mono text-sm">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  )
}
