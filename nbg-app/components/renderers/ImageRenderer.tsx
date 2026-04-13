import Image from 'next/image'
import type { Item } from '@/data/types'

export default function ImageRenderer({ item }: { item: Item }) {
  if (!item.imageUrl) return null
  return (
    <div className="flex justify-center px-4 py-6">
      <Image
        src={item.imageUrl}
        alt={item.name}
        width={600}
        height={900}
        className="w-full max-w-lg rounded-xl"
        priority
      />
    </div>
  )
}
