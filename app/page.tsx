import Link from 'next/link'
import { getFeaturedProducts, getProducts, getCategories, getReviews } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import CategoryCard from '@/components/CategoryCard'
import ReviewCard from '@/components/ReviewCard'

export const revalidate = 60

export default async function HomePage() {
  const [featured, allProducts, categories, reviews] = await Promise.all([
    getFeaturedProducts(),
    getProducts(),
    getCategories(),
    getReviews(),
  ])

  const heroProduct = featured[0] || allProducts[0]
  const showcaseProducts = (featured.length > 0 ? featured : allProducts).slice(0, 4)
  const showcaseReviews = reviews.slice(0, 3)

  return (
    <div>
      <Hero featured={heroProduct} />

      {/* Featured products */}
      <section className="max-w-container mx-auto px-6 lg:px-10 py-20">
        <div className="text-center mb-14">
          <p className="eyebrow text-accent mb-3">Curated for You</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink">Featured Pieces</h2>
        </div>
        {showcaseProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {showcaseProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-stone">No products available yet.</p>
        )}
        <div className="text-center mt-14">
          <Link href="/products" className="eyebrow text-ink border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors">
            View All Products
          </Link>
        </div>
      </section>

      {/* Categories */}
      {categories.length > 0 && (
        <section className="max-w-container mx-auto px-6 lg:px-10 py-20 bg-cream">
          <div className="text-center mb-14">
            <p className="eyebrow text-accent mb-3">Explore</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink">Collections</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(0, 3).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>
      )}

      {/* Reviews */}
      {showcaseReviews.length > 0 && (
        <section className="max-w-container mx-auto px-6 lg:px-10 py-20">
          <div className="text-center mb-14">
            <p className="eyebrow text-accent mb-3">Client Voices</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {showcaseReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/reviews" className="eyebrow text-ink border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors">
              Read All Reviews
            </Link>
          </div>
        </section>
      )}
    </div>
  )
}