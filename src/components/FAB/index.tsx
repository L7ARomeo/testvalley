'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ChannelTalkIcon from '@src/assets/icon/channeltalk.png'
import ToTopIcon from '@src/assets/icon/to_top.svg'

const FAB = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      let scrollTop = window.scrollY || document.documentElement.scrollTop
      if (scrollTop > window.innerHeight) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={
        'flex flex-col fixed right-5 bottom-20 desktop:bottom-10 z-[999] gap-2'
      }>
      {visible && (
        <div
          className={'cursor-pointer rounded-full'}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Image src={ToTopIcon} width={50} height={50} alt={'Channel chat'} />
        </div>
      )}
      <div className={'cursor-pointer rounded-full'}>
        <Image
          src={ChannelTalkIcon}
          width={50}
          height={50}
          alt={'Channel chat'}
        />
      </div>
    </div>
  )
}

export default FAB
