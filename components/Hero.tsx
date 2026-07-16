import Link from 'next/link'
import { Product } from '@/types'

export default function Hero({ featured }: { featured?: Product }) {
  const image = featured?.metadata?.main_image
  const bg = image
    ? `${image.imgix_url}?w=2400&h=1600&fit=crop&auto=format,compress`
    : 'https://imgix.cosmicjs.com/d1b64d60-8123-11f1-90a0-bb34f9b6dfc3-autopilot-photo-1490481651871-ab68de25d43d-1784212626733.jpeg?w=2400&h=1600&fit=crop&auto=format,compress'

  return (
    <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
      <img src={bg} alt="Ciao collection" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
        <p className="eyebrow mb-4">The New Collection</p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wide max-w-4xl leading-none">
          Elegance, Redefined
        </h1>
        <p className="mt-6 max-w-xl text-sm md:text-base font-light text-white/90">
          Discover pieces born of exceptional craftsmanship and timeless design.
        </p>
        <Link
          href="/products"
          className="mt-10 inline-block border border-white text-white eyebrow px-10 py-4 hover:bg-white hover:text-ink transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}