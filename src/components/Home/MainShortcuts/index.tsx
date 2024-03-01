import React from 'react'
import api from '@src/utils/api'
import { MainShortcut } from '@src/types/data/dataTypes'
import Image from 'next/image'

export const revalidate = 5 * 60 // Revalidate data fetching every 5 minutes

const MainShortcuts = async () => {
  const response = await api().get<MainShortcut[]>('/main-shortcut/all')
  const mainShortcuts = response.data
  return (
    <div
      className={
        'mt-6 desktop:mt-12 flex flex-row flex-wrap desktop:flex-nowrap justify-center items-center md:max-w-desktop gap-8 desktop:gap-10 px-2 desktop:px-0'
      }>
      {mainShortcuts.map((mainShortcut, index) => (
        <a
          href={mainShortcut.linkUrl}
          key={String(index)}
          className={
            'flex flex-col gap-1.5 cursor-pointer w-[48px] desktop:w-[64px]'
          }>
          <Image
            unoptimized
            src={mainShortcut.imageUrl}
            alt={mainShortcut.title}
            width={62}
            height={62}
          />
          <div
            className={
              'text-xs text-center text-gray-700 break-words font-extralight'
            }>
            {mainShortcut.title}
          </div>
        </a>
      ))}
    </div>
  )
}

export default MainShortcuts
