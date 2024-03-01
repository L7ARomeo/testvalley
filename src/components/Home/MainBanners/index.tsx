'use client'
import React from 'react'
import '@src/components/Home/MainBanners/styles.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { MainBanner } from '@src/types/data/dataTypes'
import Image from 'next/image'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import useMediaQuery from '@src/lib/hooks/useMediaQuery'
import { useRouter } from 'next/navigation'

type Props = {
  banners: MainBanner[]
}

const MainBanners = ({ banners }: Props) => {
  const desktop = useMediaQuery('(min-width:960px)')
  const router = useRouter()

  const onBannerClick = (link: string) => () => {
    router.replace(link)
  }

  if (banners.length <= 0) {
    return null
  }

  return (
    <div data-swiper={'mainBanner'} className={'overflow-hidden w-full'}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination
        navigation={desktop}
        loop
        autoplay
        centeredSlides
        spaceBetween={30}
        allowSlidePrev
        allowSlideNext
        allowTouchMove
        className={'flex overflow-visible max-w-desktop desktop:min-h-[320px]'}>
        {banners.map((banner, index) => (
          <SwiperSlide
            key={String(index)}
            className={'flex relative cursor-pointer'}>
            <div
              className={'flex w-full'}
              onClick={onBannerClick(banner.linkUrl)}>
              {!desktop && (
                <Image
                  width={960}
                  height={320}
                  src={banner.mobileImageUrl}
                  alt={banner.title}
                  className={'desktop:hidden'}
                />
              )}
              {desktop && (
                <Image
                  width={960}
                  height={320}
                  src={banner.pcImageUrl}
                  alt={banner.title}
                  className={'hidden desktop:block'}
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MainBanners
