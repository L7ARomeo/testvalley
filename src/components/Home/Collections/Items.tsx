'use client'
import React from 'react'
import { Collection } from '@src/types/data/collection'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import useMediaQuery from '@src/lib/hooks/useMediaQuery'
import Item from '@src/components/Home/Collections/Item'
import { Autoplay, Navigation } from 'swiper/modules'

type Props = {
  items: Collection['items'][0]['items']
}
const Items = ({ items = [] }: Props) => {
  const desktop = useMediaQuery('(min-width:960px)')

  if (!desktop) {
    return (
      <div className={'grid grid-cols-2 desktop:hidden gap-x-2 gap-y-6'}>
        {items.map((item, index) => (
          <div key={String(index)}>
            <Item {...{ item }} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <Swiper
      data-swiper={'collectionItems'}
      modules={[Autoplay, Navigation]}
      autoplay
      navigation
      slidesPerView={4}
      spaceBetween={8}
      className={
        'max-w-[calc(100%-240px)] hidden desktop:block desktop:!ml-auto !mr-0 !static'
      }>
      {items.map((item, index) => (
        <SwiperSlide key={String(index)}>
          <Item {...{ item }} />
        </SwiperSlide>
      ))}
      {items.length < 4 &&
        Array(4 - items.length)
          .fill(null)
          .map((_, index) => <SwiperSlide key={`empty-${index}`} />)}
    </Swiper>
  )
}

export default Items
