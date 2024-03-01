'use client'
import React from 'react'
import Image from 'next/image'
import SearchBox from '@src/components/Header/SearchBox'
import Logo from '@src/assets/image/logo-new.svg'
import HomeEventIcon from '@src/assets/icon/home-event.svg'
import VerticalBarIcon from '@src/assets/icon/vertical-bar.svg'
import SearchNewIcon from '@src/assets/icon/search_new.svg'
import BellDefaultIcon from '@src/assets/icon/bell_default.svg'
import { WEB_HOST } from '@src/constants/apis'

const Header = () => {
  const onSearchBtnClicked = () => {
    const mobileSearch = document.querySelector(
      '.mobile-search',
    ) as HTMLDivElement
    if (!mobileSearch.classList.contains('active'))
      mobileSearch.classList.add('active')
  }

  return (
    <header
      className={
        'sticky top-0 w-full h-[55px] desktop:h-[72px] bg-white z-10 border-b-[1px] border-customGray'
      }>
      <div
        className={
          'relative h-full flex flex-row flex-nowrap items-center mx-auto my-0 justify-between max-w-desktop'
        }>
        <div className={'flex flex-row items-center justify-center'}>
          <Image
            src={Logo}
            alt={'testvalley'}
            className={
              'ml-4 desktop:ml-0 mr-4 w-[128px] h-[25px] cursor-pointer'
            }
          />
          <div
            className={
              'hidden desktop:block category-menu-btn text-primary cursor-pointer font-light'
            }>
            카테고리
          </div>
          <SearchBox />
        </div>
        <div
          className={'hidden desktop:flex items-center justify-center gap-2'}>
          <a href={'https://www.testvalley.kr/my/event'}>
            <Image src={HomeEventIcon} alt={'Event'} />
          </a>
          <Image src={VerticalBarIcon} alt={'Vertical Bar'} />
          <a href={'https://www.testvalley.kr/sign-in'} className={'text-sm'}>
            로그인 / 회원가입
          </a>
        </div>
        <div
          className={
            'desktop:hidden flex relative items-center justify-center'
          }>
          <a
            className={
              'flex h-[48px] w-[48px] items-center justify-center cursor-pointer'
            }
            href={`${WEB_HOST}/my/alarm`}>
            <Image
              width={24}
              height={24}
              src={BellDefaultIcon}
              alt={'Notification'}
            />
          </a>
          <div
            className={
              'flex h-[48px] w-[48px] items-center justify-center cursor-pointer'
            }
            onClick={onSearchBtnClicked}>
            <Image width={19} height={19} src={SearchNewIcon} alt={'Search'} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
