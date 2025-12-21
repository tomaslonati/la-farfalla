import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aparts La Farfalla',
    short_name: 'La Farfalla',
    description: 'Alojamiento exclusivo en Bariloche. Apartamentos totalmente equipados con vistas panorámicas.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/shortcut.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
