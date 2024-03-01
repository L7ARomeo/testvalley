import React from 'react'
import { WEB_HOST } from '@src/constants/apis'
import Image from 'next/image'
import ReturnNewIcon from '@src/assets/icon/return-new.svg'
import currency from 'currency.js'
import clsx from 'clsx'
import StarIcon from '@src/assets/icon/star-darkgray.svg'
import { Collection } from '@src/types/data/collection'

type Props = {
  item: Collection['items'][0]['items'][0]
}

const Item = ({ item }: Props) => {
  const specialTags = ['한정수량', '단독특가', '깜짝할인']
  return (
    <a
      href={`${WEB_HOST}/product/${item.publication.code}?prdType=${item.publication.prdType}`}
      className={'flex flex-col rounded overflow-hidden gap-2 cursor-pointer'}>
      {/*Image*/}
      <div className={'relative w-full pt-[100%] overflow-hidden'}>
        <Image
          fill
          src={
            item.publication.media.filter(m => m.type === 'THUMBNAIL')[0]?.uri
          }
          alt={item.name}
          sizes={'200px'}
          className={'max-w-[200px] max-h-[200px]'}
        />
        <div className={'flex flex-col absolute bottom-0 left-0'}>
          {item.publication.tagsOnImage.map((tag, index) => (
            <div
              key={String(index)}
              className={
                'flex items-center gap-1 bg-teal-600 text-white text-xs px-1 py-1 rounded-sm'
              }>
              <span>
                <Image src={ReturnNewIcon} alt={tag} />
              </span>
              {tag}
            </div>
          ))}
        </div>
      </div>

      {/*Title*/}
      <div
        className={
          'text-ellipsis line-clamp-2 text-sm font-light text-gray-700'
        }>
        {item.publication.title}
      </div>

      {/*Prices*/}
      <div className={'flex font-semibold text-gray-600'}>
        {item.publication.discounts.length > 0 &&
          (item.publication.priceInfo.couponDiscountRate ??
            item.publication.priceInfo.discountRate) > 0 && (
            <span className={'text-red-400'}>
              {item.publication.priceInfo.couponDiscountRate ??
                item.publication.priceInfo.discountRate}
              %
            </span>
          )}
        {currency(
          item.publication.priceInfo.discountPrice ??
            item.publication.priceInfo.price,
          {
            separator: ',',
            precision: 0,
            symbol: '',
          },
        ).format()}
        <div className={'text-xs mt-auto mb-[3px] font-light'}>원</div>
      </div>

      {/*Tags*/}
      <div className={'flex text-[0.65rem] font-semibold items-center gap-1.5'}>
        {item.publication.tagsOnDesc.map((tag, index) => (
          <div
            key={String(index)}
            className={clsx(
              specialTags.includes(tag) ? 'text-red-500' : 'text-gray-700',
              'px-1 py-0.5',
            )}>
            {tag}
          </div>
        ))}
      </div>

      {/*Rating*/}
      <div className={'flex text-xs items-center gap-2'}>
        <div className={'flex items-center'}>
          <span>
            <Image src={StarIcon} alt={'star'} />
          </span>
          {item.publication.rating}
        </div>
        {!!item.publication.discounts?.[0]?.remain && (
          <div>{`한정수량 ${item.publication.discounts?.[0]?.remain}개`}</div>
        )}
      </div>

      {/*Preface*/}
      {item.publication.preface && item.publication.prefaceIconUrl && (
        <div
          className={
            'flex text-xs font-light text-gray-600 items-center p-[1px]'
          }>
          <div
            className={
              'flex gap-1 border-[1px] border-gray-300 border-solid p-1 rounded-sm'
            }>
            <Image
              src={item.publication.prefaceIconUrl}
              width={14}
              height={14}
              alt={item.publication.preface}
            />
            {item.publication.preface}
          </div>
        </div>
      )}
    </a>
  )
}

export default Item
