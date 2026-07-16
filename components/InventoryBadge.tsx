import { getMetafieldValue } from '@/lib/cosmic'

export default function InventoryBadge({ status }: { status: unknown }) {
  const value = getMetafieldValue(status)
  if (!value) return null

  const styles: Record<string, string> = {
    'In Stock': 'bg-green-50 text-green-700 border-green-200',
    'Low Stock': 'bg-amber-50 text-amber-700 border-amber-200',
    'Out of Stock': 'bg-red-50 text-red-700 border-red-200',
    'Pre-Order': 'bg-blue-50 text-blue-700 border-blue-200',
  }

  const cls = styles[value] || 'bg-gray-50 text-gray-700 border-gray-200'

  return (
    <span className={`inline-block text-[0.65rem] uppercase tracking-widest font-medium px-3 py-1 border rounded-full ${cls}`}>
      {value}
    </span>
  )
}