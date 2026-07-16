import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink text-cream mt-24">
      <div className="max-w-container mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <span className="font-display text-3xl tracking-widest uppercase">Ciao</span>
            <p className="mt-4 text-sm text-stone max-w-sm leading-relaxed">
              Timeless craftsmanship meets modern elegance. Discover pieces made to last a lifetime.
            </p>
          </div>
          <div>
            <h4 className="eyebrow text-stone mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-white transition-colors">Shop</Link></li>
              <li><Link href="/categories" className="hover:text-white transition-colors">Collections</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition-colors">Reviews</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="eyebrow text-stone mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="text-stone">Sustainability</span></li>
              <li><span className="text-stone">Client Care</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-white/10 text-xs text-stone flex flex-col md:flex-row justify-between gap-2">
          <p>© {year} Ciao. All rights reserved.</p>
          <p>Crafted with care.</p>
        </div>
      </div>
    </footer>
  )
}