"use client"

import { useState } from "react"
import { Users, ChevronDown } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/ui/date-picker"

interface BookingModalProps {
  language: "es" | "en"
}

const content = {
  es: {
    checkIn: "Fecha de entrada",
    checkOut: "Fecha de salida",
    guests: "Huéspedes",
    guest: "Huésped",
    cta1: "Consultar disponibilidad"
  },
  en: {
    checkIn: "Check-in date",
    checkOut: "Check-out date", 
    guests: "Guests",
    guest: "Guest",
    cta1: "Check availability"
  }
}

export function BookingModal({ language }: BookingModalProps) {
  const [checkInDate, setCheckInDate] = useState<Date>()
  const [checkOutDate, setCheckOutDate] = useState<Date>()
  const [guests, setGuests] = useState(2)
  
  const whatsappNumber = "542966408560"

  const createWhatsappMessage = () => {
    const checkInStr = checkInDate ? checkInDate.toLocaleDateString() : (language === "es" ? "No seleccionada" : "Not selected")
    const checkOutStr = checkOutDate ? checkOutDate.toLocaleDateString() : (language === "es" ? "No seleccionada" : "Not selected")
    
    const message = `${language === "es" ? "¡Hola! Me interesa hacer una reserva en Aparts La Farfalla." : "Hello! I'm interested in making a reservation at Aparts La Farfalla."}
    
${language === "es" ? "Detalles de la reserva:" : "Booking details:"}
${language === "es" ? "Check-in:" : "Check-in:"} ${checkInStr}
${language === "es" ? "Check-out:" : "Check-out:"} ${checkOutStr}${
      language === "es" 
        ? `\nHuéspedes: ${guests}` 
        : `\nGuests: ${guests}`
    }`
    
    return encodeURIComponent(message)
  }

  return (
    <div className="relative z-[60] -mt-20 md:-mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="bg-white border border-gray-200 p-4 md:p-6 shadow-xl rounded-xl overflow-visible">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end overflow-visible">
            {/* Check-in Date */}
            <div className="space-y-2">
              <DatePicker
                date={checkInDate}
                setDate={setCheckInDate}
                placeholder={content[language].checkIn}
                language={language}
              />
            </div>

            {/* Check-out Date */}
            <div className="space-y-2">
              <DatePicker
                date={checkOutDate}
                setDate={setCheckOutDate}
                placeholder={content[language].checkOut}
                language={language}
                minDate={checkInDate || new Date()}
                defaultMonth={checkInDate}
              />
            </div>

            {/* Guests */}
            <div className="space-y-2 overflow-visible">
              <div className="relative group overflow-visible">
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal hover:bg-primary/10 hover:text-primary hover:border-primary text-muted-foreground h-10"
                >
                  <Users className="mr-2 h-4 w-4" />
                  <span className="flex-1">
                    {guests} {guests === 1 
                      ? (language === "es" ? content[language].guest : content[language].guest) 
                      : (language === "es" ? content[language].guests : content[language].guests)
                    }
                  </span>
                  <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                </Button>
                <div className="absolute bottom-full left-0 right-0 mb-1 bg-white border border-input rounded-md shadow-lg z-[70] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                    <button
                      key={num}
                      onClick={() => {
                        setGuests(num)
                      }}
                      className={`w-full text-left px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-colors first:rounded-t-md last:rounded-b-md ${
                        guests === num ? "bg-accent text-accent-foreground" : "text-foreground"
                      }`}
                    >
                      {num} {num === 1 
                        ? (language === "es" ? content[language].guest : content[language].guest) 
                        : (language === "es" ? content[language].guests : content[language].guests)
                      }
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-2">
              <Button 
                asChild 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-white h-10 rounded-[80px]"
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${createWhatsappMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="w-4 h-4 mr-2" />
                  {content[language].cta1}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}