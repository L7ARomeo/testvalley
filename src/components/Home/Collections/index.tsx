import React from 'react'
import api from '@src/utils/api'
import { API_COLLECTIONS } from '@src/constants/apis'
import { Collection } from '@src/types/data/collection'
import Items from '@src/components/Home/Collections/Items'
import '@src/components/Home/Collections/styles.css'

const Collections = async () => {
  const { data } = await api().get<Collection>(API_COLLECTIONS)
  const filteredCollectionItems = data.items.filter(
    item => item.type === 'SINGLE' && item.viewType === 'TILE',
  )

  return (
    <div
      className={
        'flex flex-col mt-14 desktop:mt-20 gap-14 min-w-full items-center'
      }>
      {filteredCollectionItems.map((item, index) => (
        <div
          key={String(index)}
          className={
            'relative flex flex-col desktop:flex-row max-w-mobile desktop:max-w-desktop px-4 desktop:px-0 gap-4 w-full'
          }>
          <div
            className={
              'desktop:absolute desktop:w-[240px] h-full bg-white left-0 top-0 flex flex-col min-w-[240px] max-w-[240px] gap-3 desktop:pr-10'
            }>
            <div
              className={
                'desktop:text-2xl text-ellipsis line-clamp-2 text-gray-600 font-semibold desktop:font-medium'
              }>
              {item.title}
            </div>
            <div className={'text-xs text-gray-400'}>{item.subtitle}</div>
          </div>
          <Items items={item.items} />
        </div>
      ))}
    </div>
  )
}

export default Collections
