// app/categories/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getCategory, getProductsByCategory, getMetafieldValue } from '@/lib/cosmic'
import ProductCard from '@/components/ProductCard'

export const revalidate = 60

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = await getCategory(slug)

  if (!category) {
    notFound()
  }

  const products = await getProductsByCategory(category.id)

  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)
  const banner = category.metadata?.banner_image

  return (
    <div>
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        {banner ? (
          <img
            src={`${banner.imgix_url}?w=2400&h=1200&fit=crop&auto=format,compress`}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-cream" />
        )}
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="font-display text-5xl md:text-7xl tracking-wide uppercase">{name}</h1>
          {description && (
            <p className="mt-4 max-w-xl text-sm md:text-base font-light text-white/90">{description}</p>
          )}
        </div>
      </section>

      <div className="max-w-container mx-auto px-6 lg:px-10 py-16">
        {products.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-stone">No products in this collection yet.</p>
        )}
      </div>
    </div>
  )
}