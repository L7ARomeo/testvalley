type PublicationMedia = {
  seq: number
  type: string
  uri: string
  mimeType: string
  deviceType: string | null
}

type Discount = {
  id: number | null
  name: string | null
  type: string | null
  calcMethod: string | null
  value: number | null
  activeFrom: string | null
  activeTo: string | null
  qty: number | null
  remain: number | null
}

type PriceInfo = {
  price: number
  discountPrice: number
  discountRate: number
  couponDiscountPrice: number
  couponDiscountRate: number
}

type Publication = {
  id: number
  title: string
  code: string
  productId: number
  prdType: number
  detailEntity: string
  content: string
  offeringType: string
  rating: number
  isExistResidual: boolean
  isAdult: number
  preface: string
  prefaceIconUrl: string
  productName: string
  brandName: string
  media: PublicationMedia[]
  isTrial: boolean
  tagsOnImage: string[]
  tagsOnDesc: string[]
  priceInfo: PriceInfo
  discounts: Discount[]
  applyCoupon: boolean
}

type InnerItem = {
  createdAt: string
  updatedAt: string
  deletedAt: string | null
  uuid: string
  name: string
  body: string | null
  collectionId: number
  key: string
  seq: number
  entityType: string
  entityId: number
  optionKey: string | null
  publication: Publication
  prdType: number
}

type Media = {
  createdAt: string
  updatedAt: string
  deletedAt: string | null
  uuid: string
  mimeType: string
  uri: string
  fileName: string
  objectKey: string
  deviceType: string | null
  collectionId: number
  seq: number
  itemKey: string | null
  type: string
}

type Item = {
  id: number
  type: string
  code: string
  title: string
  subtitle: string
  description: string
  trialPeriod: string | null
  installmentPrice: string | null
  installmentPeriod: string | null
  rating: number
  startDate: string | null
  endDate: string | null
  viewType: string | null
  createdAt: string
  items: InnerItem[]
  media: Media[]
  thumbnail: Media
  taggings: any[]
  singleCollections: any[]
}

export type Collection = {
  items: Item[]
  totalCount: number
}
