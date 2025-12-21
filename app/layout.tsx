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
  title: {
    default: "Aparts La Farfalla - Alojamiento en Bariloche",
    template: "%s | Aparts La Farfalla"
  },
  description:
    "Alojamiento exclusivo en Bariloche. Aparts La Farfalla ofrece apartamentos totalmente equipados con vistas panorámicas, comodidades modernas y ubicación privilegiada en la Patagonia Argentina.",
  keywords: ["Bariloche", "alojamiento", "apartamentos", "Patagonia", "Argentina", "turismo", "La Farfalla", "hospedaje", "vacaciones"],
  authors: [{ name: "Aparts La Farfalla" }],
  creator: "Aparts La Farfalla",
  publisher: "Aparts La Farfalla",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://apartlafarfalla.com'),
  alternates: {
    canonical: '/',
    languages: {
      'es-AR': '/es',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: "Aparts La Farfalla - Alojamiento en Bariloche",
    description: "Alojamiento exclusivo en Bariloche. Apartamentos totalmente equipados con vistas panorámicas y ubicación privilegiada en la Patagonia Argentina.",
    url: 'https://apartlafarfalla.com',
    siteName: 'Aparts La Farfalla',
    images: [
      {
        url: '/green-logo.png',
        width: 1200,
        height: 630,
        alt: 'Aparts La Farfalla',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aparts La Farfalla - Alojamiento en Bariloche",
    description: "Alojamiento exclusivo en Bariloche. Apartamentos totalmente equipados con vistas panorámicas.",
    images: ['/green-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/shortcut.png',
    shortcut: '/shortcut.png',
    apple: '/shortcut.png',
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR">
      <head>
        <link rel="icon" href="/shortcut.png" sizes="any" />
        <link rel="apple-touch-icon" href="/shortcut.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`font-sans ${dmSans.variable}`}>
        <Suspense fallback={<div className="min-h-screen bg-white" />}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
