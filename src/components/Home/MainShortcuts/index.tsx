import React from 'react'
import api from '@src/utils/api'
import { MainShortcut } from '@src/types/data/dataTypes'
import Image from 'next/image'

const MainShortcuts = async () => {
  const response = await api().get<MainShortcut[]>('/main-shortcut/all')
  const mainShortcuts = response.data
  return (
    <div
      className={
        'mt-6 desktop:mt-14 flex flex-row flex-wrap desktop:flex-nowrap justify-center items-center md:max-w-desktop gap-x-4 gap-y-4 desktop:gap-8'
      }>
      {mainShortcuts.map((mainShortcut, index) => (
        <a
          href={mainShortcut.linkUrl}
          key={String(index)}
          className={
            'flex flex-col gap-1.5 cursor-pointer w-[64px] items-center'
          }>
          <Image
            unoptimized
            src={mainShortcut.imageUrl}
            alt={mainShortcut.title}
            width={64}
            height={64}
            className={'w-[48px] desktop:w-[64px]'}
          />
          <div
            className={
              'text-[0.7rem] desktop:text-xs text-center text-gray-700 break-words font-normal'
            }>
            {mainShortcut.title}
          </div>
        </a>
      ))}
    </div>
  )
}

export default MainShortcuts
