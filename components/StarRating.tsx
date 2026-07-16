export default function StarRating({ rating, className = '' }: { rating: number; className?: string }) {
  const safe = Math.max(0, Math.min(5, Math.round(rating)))
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label={`${safe} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < safe ? 'text-accent' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  )
}