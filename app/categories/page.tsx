import { getCategories } from '@/lib/cosmic'
import CategoryCard from '@/components/CategoryCard'

export const revalidate = 60

export const metadata = {
  title: 'Collections — Ciao',
  description: 'Explore Ciao collections.',
}

export default async function CategoriesPage() {
  const categories = await getCategories()

  return (
    <div className="max-w-container mx-auto px-6 lg:px-10 py-16">
      <div className="text-center mb-14">
        <p className="eyebrow text-accent mb-3">Explore</p>
        <h1 className="font-display text-5xl md:text-6xl text-ink">Collections</h1>
      </div>

      {categories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      ) : (
        <p className="text-center text-stone">No collections found.</p>
      )}
    </div>
  )
}