import { getReviews } from '@/lib/cosmic'
import ReviewCard from '@/components/ReviewCard'
import StarRating from '@/components/StarRating'

export const revalidate = 60

export const metadata = {
  title: 'Reviews — Ciao',
  description: 'Read what our clients say about Ciao.',
}

export default async function ReviewsPage() {
  const reviews = await getReviews()

  const avgRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + (r.metadata?.rating ?? 0), 0) / reviews.length
      : 0

  return (
    <div className="max-w-container mx-auto px-6 lg:px-10 py-16">
      <div className="text-center mb-14">
        <p className="eyebrow text-accent mb-3">Client Voices</p>
        <h1 className="font-display text-5xl md:text-6xl text-ink">Customer Reviews</h1>
        {reviews.length > 0 && (
          <div className="mt-6 flex flex-col items-center gap-2">
            <StarRating rating={avgRating} className="scale-125" />
            <p className="text-sm text-stone">
              {avgRating.toFixed(1)} out of 5 · {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}
            </p>
          </div>
        )}
      </div>

      {reviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      ) : (
        <p className="text-center text-stone">No reviews yet.</p>
      )}
    </div>
  )
}