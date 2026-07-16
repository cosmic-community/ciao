import { getProducts } from '@/lib/cosmic'
import ProductCard from '@/components/ProductCard'

export const revalidate = 60

export const metadata = {
  title: 'Shop — Ciao',
  description: 'Browse the full Ciao collection.',
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="max-w-container mx-auto px-6 lg:px-10 py-16">
      <div className="text-center mb-14">
        <p className="eyebrow text-accent mb-3">The Collection</p>
        <h1 className="font-display text-5xl md:text-6xl text-ink">Shop All</h1>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-stone">No products found.</p>
      )}
    </div>
  )
}