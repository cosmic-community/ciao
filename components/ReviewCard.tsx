import Link from 'next/link'
import { Review } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import StarRating from '@/components/StarRating'

export default function ReviewCard({ review }: { review: Review }) {
  if (!review) return null

  const reviewer = getMetafieldValue(review.metadata?.reviewer_name) || 'Anonymous'
  const headline = getMetafieldValue(review.metadata?.headline)
  const text = getMetafieldValue(review.metadata?.review_text)
  const rating = review.metadata?.rating ?? 0
  const verified = review.metadata?.verified_purchase
  const product = review.metadata?.product

  return (
    <div className="bg-white border border-gray-100 p-8 flex flex-col h-full">
      <StarRating rating={rating} />
      {headline && <h3 className="font-display text-xl text-ink mt-3">{headline}</h3>}
      {text && <p className="text-sm text-gray-600 leading-relaxed mt-3 flex-1">{text}</p>}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <p className="text-sm font-medium text-ink">{reviewer}</p>
        {verified && (
          <span className="text-[0.65rem] uppercase tracking-widest text-accent mt-1 inline-block">
            Verified Purchase
          </span>
        )}
        {product && (
          <div className="mt-2">
            <Link href={`/products/${product.slug}`} className="text-xs text-stone hover:text-accent transition-colors">
              on {getMetafieldValue(product.metadata?.product_name) || product.title}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}