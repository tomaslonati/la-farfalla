"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Globe } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { useState } from "react"
import Image from "next/image"

interface NavbarProps {
  language: "es" | "en"
  onLanguageChange: (lang: "es" | "en") => void
}

export function Navbar({ language, onLanguageChange }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false)

  const navLinks = {
    es: [
      { label: "Inicio", href: "#hero" },
      { label: "Servicios", href: "#services" },
      { label: "Galería", href: "#gallery" },
      { label: "Contacto", href: "#contact" },
    ],
    en: [
      { label: "Home", href: "#hero" },
      { label: "Services", href: "#services" },
      { label: "Gallery", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
  }

  const whatsappNumber = "542966408560"
  const whatsappMessage =
    language === "es" ? "Hola, quisiera consultar disponibilidad en La Farfalla" : "Hello, I would like to check availability at La Farfalla"

  return (
    <nav className="fixed top-0 left-0 right-0 z-[50000000000] bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="shrink-0">
            <Image 
              src="/white-logo.png" 
              alt="Aparts La Farfalla" 
              width={200} 
              height={80} 
              className="h-16 w-auto" 
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks[language].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
                {language === "es" ? "ES" : "EN"}
                <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute right-0 mt-1 w-16 bg-white border border-gray-200 rounded-md shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <button
                  onClick={() => onLanguageChange("es")}
                  className={`w-full text-center px-2 py-2 text-sm transition-colors ${
                    language === "es" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => onLanguageChange("en")}
                  className={`w-full text-center px-2 py-2 text-sm transition-colors ${
                    language === "en" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
            <Button asChild className="bg-primary text-white hover:bg-primary/90">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FaWhatsapp className="w-4 h-4" />
                {language === "es" ? "Reservar" : "Book Now"}
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-900"
              >
                <Globe className="w-3 h-3" />
                {language === "es" ? "ES" : "EN"}
                <ChevronDown className="w-3 h-3" />
              </button>
              {languageDropdownOpen && (
                <div className="absolute right-0 mt-1 w-24 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <button
                    onClick={() => {
                      onLanguageChange("es")
                      setLanguageDropdownOpen(false)
                    }}
                    className={`w-full text-left px-2 py-1 text-xs transition-colors ${
                      language === "es" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    ES
                  </button>
                  <button
                    onClick={() => {
                      onLanguageChange("en")
                      setLanguageDropdownOpen(false)
                    }}
                    className={`w-full text-left px-2 py-1 text-xs transition-colors ${
                      language === "en" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    EN
                  </button>
                </div>
              )}
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-900">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col gap-4">
              {navLinks[language].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-gray-900 hover:text-gray-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="bg-primary text-white hover:bg-primary/90 w-full">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  {language === "es" ? "Reservar" : "Book Now"}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
