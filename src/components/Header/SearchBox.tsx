'use client'
import React, { ChangeEvent, useState } from 'react'
import Image from 'next/image'
import SearchIcon from '@src/assets/icon/search.svg'
import ClearIcon from '@src/assets/icon/clear.svg'
import clsx from 'clsx'

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState<string>('')

  const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <div
      className={
        'desktop:flex relative ml-24 w-[335px] items-center text-sm font-light hidden'
      }>
      <Image
        src={SearchIcon}
        alt={'Search'}
        className={'absolute w-5 h-5 left-3'}
      />
      <input
        type={'text'}
        name={'search'}
        placeholder={'살까말까 고민된다면 검색해보세요!'}
        className={
          'px-10 py-2.5 bg-white w-full border-[1px] border-gray-300 rounded-md focus:border-primary outline-0 align-middle'
        }
        value={searchValue}
        onChange={onSearchInputChange}
        autoComplete={'off'}
        autoCorrect={'off'}
      />
      <Image
        src={ClearIcon}
        alt={'Clear'}
        className={clsx(
          'absolute w-5 h-5 right-3 cursor-pointer',
          !searchValue ? 'hidden' : '',
        )}
        onClick={() => setSearchValue('')}
      />
    </div>
  )
}

export default SearchBox
