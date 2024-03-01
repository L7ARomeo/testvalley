'use client'
import React from 'react'
import Image from 'next/image'
import HomeOn from '@src/assets/icon/navbar/ico-home-on.svg'
import HomeOff from '@src/assets/icon/navbar/ico-home-off.svg'
import SearchOn from '@src/assets/icon/navbar/ico-search-on.svg'
import SearchOff from '@src/assets/icon/navbar/ico-search-off.svg'
import CategoryOn from '@src/assets/icon/navbar/ico-category-on.svg'
import CategoryOff from '@src/assets/icon/navbar/ico-category-off.svg'
import LikeListOn from '@src/assets/icon/navbar/ico-likelist-on.svg'
import LikeListOff from '@src/assets/icon/navbar/ico-likelist-off.svg'
import MyPageOn from '@src/assets/icon/navbar/ico-mypage-on.svg'
import MyPageOff from '@src/assets/icon/navbar/ico-mypage-off.svg'
import { usePathname, useRouter } from 'next/navigation'
import { WEB_HOST } from '@src/constants/apis'

const MobileNavbar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const navbars = [
    {
      name: 'home',
      label: '홈',
      iconOn: HomeOn,
      iconOff: HomeOff,
      activeState: pathname === '/',
      onClick: () => {
        if (pathname !== '/') router.replace('/')
      },
    },
    {
      name: 'search',
      label: '검색',
      iconOn: SearchOn,
      iconOff: SearchOff,
      activeState: pathname === '/search',
      onClick: () => {
        const mobileSearch = document.querySelector(
          '.mobile-search',
        ) as HTMLDivElement
        if (!mobileSearch.classList.contains('active'))
          mobileSearch.classList.add('active')
      },
    },
    {
      name: 'category',
      label: '카테고리',
      iconOn: CategoryOn,
      iconOff: CategoryOff,
      activeState: pathname === '/category',
      onClick: () => {
        if (pathname !== '/category') router.replace(`${WEB_HOST}/category`)
      },
    },
    {
      name: 'likeList',
      label: '좋아요',
      iconOn: LikeListOn,
      iconOff: LikeListOff,
      activeState: pathname === '/like-list',
      onClick: () => {
        if (pathname !== '/my') router.replace(`${WEB_HOST}/my`)
      },
    },
    {
      name: 'myPage',
      label: '마이페이지',
      iconOn: MyPageOn,
      iconOff: MyPageOff,
      activeState: pathname === '/my',
      onClick: () => {
        if (pathname !== '/my') router.replace(`${WEB_HOST}/my`)
      },
    },
  ]

  return (
    <div
      className={
        'sticky bottom-0 flex flex-row flex-nowrap bg-white w-full z-50 p-2 rounded-tl-[1.5rem] rounded-tr-[1.5rem] overflow-hidden desktop:hidden'
      }>
      {navbars.map((nav, index) => (
        <div
          key={String(index)}
          className={
            'flex flex-col w-full items-center justify-center cursor-pointer gap-1.5'
          }
          onClick={nav.onClick}>
          <Image
            width={21}
            height={21}
            src={nav.activeState ? nav.iconOn : nav.iconOff}
            alt={nav.name}
          />
          <span className={'text-[0.7rem] font-light text-gray-600'}>
            {nav.label}
          </span>
        </div>
      ))}
    </div>
  )
}

export default MobileNavbar
