'use client'

import { useState } from 'react'
import { CosmicImage } from '@/types'

interface ProductGalleryProps {
  mainImage?: CosmicImage
  gallery?: CosmicImage[]
  alt: string
}

export default function ProductGallery({ mainImage, gallery, alt }: ProductGalleryProps) {
  const images: CosmicImage[] = []
  if (mainImage) images.push(mainImage)
  if (gallery && gallery.length > 0) {
    gallery.forEach((img) => {
      if (img && img.imgix_url) images.push(img)
    })
  }

  const [active, setActive] = useState(0)

  if (images.length === 0) {
    return (
      <div className="aspect-[3/4] bg-cream flex items-center justify-center text-stone">
        No image available
      </div>
    )
  }

  const current = images[active]

  return (
    <div>
      <div className="aspect-[3/4] overflow-hidden bg-cream">
        {current && (
          <img
            src={`${current.imgix_url}?w=1200&h=1600&fit=crop&auto=format,compress`}
            alt={alt}
            width={600}
            height={800}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-5 gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`aspect-square overflow-hidden bg-cream border ${
                i === active ? 'border-ink' : 'border-transparent'
              }`}
            >
              <img
                src={`${img.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                alt={`${alt} view ${i + 1}`}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}