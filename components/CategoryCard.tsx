import Link from 'next/link'
import { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CategoryCard({ category }: { category: Category }) {
  if (!category) return null

  const name = getMetafieldValue(category.metadata?.name) || category.title
  const banner = category.metadata?.banner_image

  return (
    <Link href={`/categories/${category.slug}`} className="group relative block overflow-hidden">
      <div className="aspect-[4/5] bg-cream overflow-hidden">
        {banner ? (
          <img
            src={`${banner.imgix_url}?w=800&h=1000&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={500}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-stone">{name}</div>
        )}
      </div>
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-end justify-center pb-8">
        <span className="font-display text-2xl md:text-3xl text-white tracking-wide uppercase">
          {name}
        </span>
      </div>
    </Link>
  )
}