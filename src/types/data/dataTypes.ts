export interface MainBanner {
  mainBannerId: number
  title: string
  sort: number
  pcImageUrl: string
  mobileImageUrl: string
  linkUrl: string
  startDate: string
  endDate: string
  creator: string
  updater: string
  deleter: string | null
  createdAt: string
  updatedAt: string
  deletedAt: string | null
}

export interface MainShortcut {
  mainShortcutId: number
  title: string
  sort: number
  imageUrl: string
  linkUrl: string
  creator: string
  updater: string
  deleter: string | null
  createdAt: string
  updatedAt: string
  deletedAt: string | null
}
