'use client'
import React, { ChangeEvent, useEffect, useState } from 'react'
import '@src/components/MobileSearch/styles.css'
import Image from 'next/image'
import CloseIcon from '@src/assets/icon/close.svg'
import SearchIcon from '@src/assets/icon/search.svg'
import ClearIcon from '@src/assets/icon/clear.svg'
import clsx from 'clsx'
import useMediaQuery from '@src/lib/hooks/useMediaQuery'

const MobileSearch = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const desktop = useMediaQuery('(min-width:960px)')

  const popularSearches = [
    '이아트',
    '해머씨',
    '스티브',
    '스마트워치',
    '노트북',
    '태블릿PC',
    '키보드',
    '비디오프로젝터',
    '게임기대여',
    '시즌드박스',
    '드론',
  ]

  const onClose = () => {
    const mobileSearch = document.querySelector(
      '.mobile-search',
    ) as HTMLDivElement
    mobileSearch.classList.remove('active')
  }

  const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    if (desktop) {
      onClose()
    }
  }, [desktop])

  return (
    <div
      className={`mobile-search fixed flex items-center justify-center inset-0 z-[100] w-full h-dvh desktop:hidden`}>
      <div
        className={'backdrop absolute mx-auto inset-0 bg-black opacity-50 z-0'}
        onClick={onClose}></div>
      <div
        className={
          'container relative bg-white max-w-mobile min-w-mobile full h-full z-10'
        }>
        <div className={'flex flex-col p-4 gap-4'}>
          <div
            className={
              'flex justify-center items-center ml-auto w-10 h-10 cursor-pointer'
            }
            onClick={onClose}>
            <Image width={21} height={21} src={CloseIcon} alt={'close'} />
          </div>
          <h2 className={'text-[1.5rem] font-semibold'}>검색</h2>

          {/*Seacrh Input*/}
          <div className={'relative w-auto items-center text-sm font-light'}>
            <input
              type={'text'}
              name={'search'}
              placeholder={'찾고 계신 제품이 있나요?'}
              className={
                'pr-10 pl-4 py-2.5 bg-white w-full border-[1px] border-gray-300 rounded border-primary outline-0 align-middle'
              }
              value={searchValue}
              onChange={onSearchInputChange}
              autoComplete={'off'}
              autoCorrect={'off'}
            />
            <Image
              src={searchValue ? ClearIcon : SearchIcon}
              alt={'Clear'}
              className={clsx('absolute w-5 h-5 right-3 top-3 cursor-pointer')}
              onClick={() => setSearchValue('')}
            />
          </div>

          <h2 className={'text-[1.5rem] font-semibold'}>인기 검색어</h2>
          <div className="flex flex-wrap">
            {popularSearches.map((item, index) => (
              <div
                key={index}
                className="m-1 bg-gray-100 rounded-full px-3 py-2 text-sm font-medium text-gray-700 cursor-pointer"
                onClick={() => setSearchValue(item)}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileSearch
