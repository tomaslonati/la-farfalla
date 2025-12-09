import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: "Posada y Cabañas El Barranco - El Chaltén, Patagonia",
  description:
    "Alojamiento en El Chaltén con la combinación perfecta de paisaje patagónico y servicios de hotel. Habitaciones y cabañas equipadas en el corazón del Parque Nacional Los Glaciares.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${dmSans.variable}`}>
        <Suspense fallback={<div className="min-h-screen bg-white" />}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
