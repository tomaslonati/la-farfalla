"use client"

import { useEffect, useState } from "react"

// Lee las fotos de una carpeta de /images a través de /fotos.php (solo disponible en el hosting).
// Mientras carga, o si no existe (por ejemplo en `next dev`), se usa la lista de respaldo.
export function useFolderImages(folder: string, fallback: string[]) {
  const [images, setImages] = useState(fallback)

  useEffect(() => {
    fetch(`/fotos.php?carpeta=${encodeURIComponent(folder)}`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((list: string[]) => {
        if (list.length > 0) setImages(list)
      })
      .catch(() => {})
  }, [folder])

  return images
}
