import { MapPin, Phone, Mail, Facebook, Instagram, Download } from "lucide-react"
import { ElBarrancoSection } from "@/components/el-barranco-section"

interface FooterProps {
  language: "es" | "en"
}

export function Footer({ language }: FooterProps) {
  const content = {
    es: {
      about: "Sobre Nosotros",
      aboutText:
        "Te brindamos una cálida bienvenida y atención personalizada que te hará sentir como en casa. Nuestros huéspedes disfrutan de la comodidad de nuestras camas y amenities en un ambiente único.",
      contact: "Contacto",
      address: "Av San Martín 84, El Chaltén, Santa Cruz, Argentina",
      phone: "+54 2966 40 8560",
      email: "lafarfallachalten@yahoo.com",
      quickLinks: "Enlaces Rápidos",
      links: ["Inicio", "Aparts", "Servicios", "Galería", "Contacto"],
      followUs: "Síguenos",
      location: "Ubicación",
      downloadMaps: "Descargar Mapas",
      trailsMap: "Mapa de Senderos",
      townMap: "Mapa del Pueblo",
      openMaps: "Ver en Google Maps",
      rights: "Todos los derechos reservados",
    },
    en: {
      about: "About Us",
      aboutText:
        "We provide a warm welcome and personalized attention that will make you feel at home. Our guests enjoy the comfort of our beds and amenities in a unique environment.",
      contact: "Contact",
      address: "Av San Martín 84, El Chaltén, Santa Cruz, Argentina",
      phone: "+54 2966 40 8560",
      email: "lafarfallachalten@yahoo.com",
      quickLinks: "Quick Links",
      links: ["Home", "Apartments", "Services", "Gallery", "Contact"],
      followUs: "Follow Us",
      location: "Location",
      downloadMaps: "Download Maps",
      trailsMap: "Trails Map",
      townMap: "Town Map",
      openMaps: "View on Google Maps",
      rights: "All rights reserved",
    },
  }

  return (
    <footer id="contact" className="bg-white text-gray-800 py-12 px-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h3 className="font-bold text-lg mb-4 text-gray-900">{content[language].location}</h3>
          
          {/* Download Maps Section */}
          <div className="mb-6">
            <h4 className="font-medium text-base mb-3 text-gray-800">{content[language].downloadMaps}</h4>
            <div className="flex flex-wrap gap-4">
              <a
                href="/mapa senderos la farfalla.pdf"
                download="mapa-senderos-el-chalten.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm"
              >
                <Download className="h-4 w-4" />
                {content[language].trailsMap}
              </a>
              <a
                href="/Mapa pueblo la Farfalla.pdf"
                download="mapa-pueblo-el-chalten.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm"
              >
                <Download className="h-4 w-4" />
                {content[language].townMap}
              </a>
            </div>
          </div>

          <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600.1604520028877!2d-72.8892515231114!3d-49.330180975411125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdbd03fead81d66f%3A0x83cc2673eabdf2c4!2sAparts%20La%20Farfalla!5e0!3m2!1ses!2sar!4v1766441027796!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Aparts%20La%20Farfalla%2C%20Av%20San%20Mart%C3%ADn%2084%2C%20El%20Chalt%C3%A9n%2C%20Santa%20Cruz"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
          >
            <MapPin className="h-4 w-4" />
            {content[language].openMaps}
          </a>

          <ElBarrancoSection language={language} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <img src="/green-logo.png" alt="Aparts La Farfalla" className="h-20 w-auto" />
            </div>
            <h3 className="font-bold text-lg mb-3 text-gray-900">{content[language].about}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{content[language].aboutText}</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">{content[language].contact}</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">{content[language].address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href={`tel:${content[language].phone}`}
                  className="text-gray-600 text-sm hover:text-primary transition-colors"
                >
                  {content[language].phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${content[language].email}`}
                  className="text-gray-600 text-sm hover:text-primary transition-colors"
                >
                  {content[language].email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">{content[language].quickLinks}</h3>
            <ul className="space-y-2">
              {content[language].links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 text-sm hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">{content[language].followUs}</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/apartslafarfalla"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-gray-300 hover:border-primary text-gray-600 hover:text-primary flex items-center justify-center transition-colors rounded"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Aparts La Farfalla. {content[language].rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
