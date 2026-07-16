import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <nav className="hidden md:flex items-center gap-8 flex-1">
            <Link href="/products" className="eyebrow text-ink hover:text-accent transition-colors">
              Shop
            </Link>
            <Link href="/categories" className="eyebrow text-ink hover:text-accent transition-colors">
              Collections
            </Link>
            <Link href="/reviews" className="eyebrow text-ink hover:text-accent transition-colors">
              Reviews
            </Link>
          </nav>

          <Link href="/" className="flex-1 md:flex-none text-center">
            <span className="font-display text-3xl md:text-4xl tracking-widest text-ink uppercase">
              Ciao
            </span>
          </Link>

          <div className="hidden md:flex flex-1 justify-end">
            <Link href="/products" className="eyebrow text-ink hover:text-accent transition-colors">
              Discover
            </Link>
          </div>

          <div className="md:hidden">
            <Link href="/products" className="eyebrow text-ink">
              Menu
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}