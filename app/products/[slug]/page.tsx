// app/products/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProduct, getReviewsForProduct, getMetafieldValue, formatPrice } from '@/lib/cosmic'
import InventoryBadge from '@/components/InventoryBadge'
import StarRating from '@/components/StarRating'
import ReviewCard from '@/components/ReviewCard'
import ProductGallery from '@/components/ProductGallery'

export const revalidate = 60

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  const reviews = await getReviewsForProduct(product.id)

  const name = getMetafieldValue(product.metadata?.product_name) || product.title
  const description = getMetafieldValue(product.metadata?.description)
  const price = product.metadata?.price
  const salePrice = product.metadata?.sale_price
  const onSale = typeof salePrice === 'number' && salePrice > 0 && typeof price === 'number' && salePrice < price
  const sku = getMetafieldValue(product.metadata?.sku)
  const materials = getMetafieldValue(product.metadata?.materials_care)
  const category = product.metadata?.category

  const avgRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + (r.metadata?.rating ?? 0), 0) / reviews.length
      : 0

  return (
    <div className="max-w-container mx-auto px-6 lg:px-10 py-12">
      <nav className="text-xs text-stone mb-8">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-accent">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <ProductGallery
          mainImage={product.metadata?.main_image}
          gallery={product.metadata?.gallery}
          alt={name}
        />

        <div className="lg:py-6">
          {category && (
            <Link href={`/categories/${category.slug}`} className="eyebrow text-accent hover:underline">
              {getMetafieldValue(category.metadata?.name) || category.title}
            </Link>
          )}
          <h1 className="font-display text-4xl md:text-5xl text-ink mt-3">{name}</h1>

          <div className="mt-4 flex items-center gap-4">
            {onSale ? (
              <>
                <span className="text-2xl text-stone line-through">{formatPrice(price)}</span>
                <span className="text-2xl text-accent font-medium">{formatPrice(salePrice)}</span>
              </>
            ) : (
              <span className="text-2xl text-ink">{formatPrice(price)}</span>
            )}
          </div>

          <div className="mt-4">
            <InventoryBadge status={product.metadata?.inventory_status} />
          </div>

          {reviews.length > 0 && (
            <div className="mt-4 flex items-center gap-2">
              <StarRating rating={avgRating} />
              <span className="text-sm text-stone">
                {avgRating.toFixed(1)} ({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})
              </span>
            </div>
          )}

          {description && (
            <p className="mt-6 text-gray-600 leading-relaxed">{description}</p>
          )}

          <div className="mt-8 space-y-3 text-sm text-gray-600">
            {sku && (
              <p><span className="eyebrow text-ink mr-3">SKU</span>{sku}</p>
            )}
            {materials && (
              <div>
                <p className="eyebrow text-ink mb-2">Materials & Care</p>
                <p className="leading-relaxed">{materials}</p>
              </div>
            )}
          </div>

          <button className="mt-10 w-full bg-ink text-cream eyebrow py-5 hover:bg-accent transition-colors">
            Add to Bag
          </button>
        </div>
      </div>

      {reviews.length > 0 && (
        <section className="mt-24">
          <div className="text-center mb-12">
            <p className="eyebrow text-accent mb-3">Reviews</p>
            <h2 className="font-display text-4xl text-ink">What Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}