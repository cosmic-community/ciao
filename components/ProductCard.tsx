import Link from 'next/link'
import { Product } from '@/types'
import { getMetafieldValue, formatPrice } from '@/lib/cosmic'

export default function ProductCard({ product }: { product: Product }) {
  if (!product) return null

  const name = getMetafieldValue(product.metadata?.product_name) || product.title
  const image = product.metadata?.main_image
  const price = product.metadata?.price
  const salePrice = product.metadata?.sale_price
  const onSale = typeof salePrice === 'number' && salePrice > 0 && typeof price === 'number' && salePrice < price

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-cream">
        {image ? (
          <img
            src={`${image.imgix_url}?w=800&h=1067&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={533}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-stone">No image</div>
        )}
        {onSale && (
          <span className="absolute top-3 left-3 bg-ink text-cream text-[0.6rem] uppercase tracking-widest px-2 py-1">
            Sale
          </span>
        )}
      </div>
      <div className="mt-4 text-center">
        <h3 className="font-display text-lg text-ink group-hover:text-accent transition-colors">{name}</h3>
        <div className="mt-1 text-sm text-stone flex items-center justify-center gap-2">
          {onSale ? (
            <>
              <span className="line-through">{formatPrice(price)}</span>
              <span className="text-accent font-medium">{formatPrice(salePrice)}</span>
            </>
          ) : (
            <span>{formatPrice(price)}</span>
          )}
        </div>
      </div>
    </Link>
  )
}