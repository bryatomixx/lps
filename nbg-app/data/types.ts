// nbg-app/data/types.ts
export type ContentType = 'webview' | 'pdf' | 'link' | 'link-list' | 'email' | 'form' | 'display'

export interface Category {
  slug: string
  name: string
  icon: string
  color: string
  description: string
}

export interface LinkEntry {
  label: string
  url: string
}

export interface Item {
  slug: string
  name: string
  categorySlug: string
  type: ContentType
  description?: string
  url?: string
  links?: LinkEntry[]
  email?: string
}

export interface Bulletin {
  id: string
  text: string
  active: boolean
}

export interface LeaderboardEntry {
  rank: number
  name: string
  sales: number
}
