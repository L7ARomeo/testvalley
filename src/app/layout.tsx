import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://testvalley.vercel.app'),
  title: '테스트밸리 - 전자제품 사는게 즐겁다',
  description:
    '새 상품 구매부터 체험, 검증된 중고, 수리비 보장, 합리적인 중고판매까지 전자제품의 모든 것을 함께 하세요.',
  keywords: [
    '테스트밸리',
    '전자제품',
    '전자제품 체험',
    '무료 체험',
    '렌탈',
    '전자제품 렌탈',
    '전자제품 중고',
    '중고',
    '리퍼',
    '리퍼브',
    '중고나라',
    '번개장터',
    '당근마켓',
    '파손 보험',
    '애플케어',
    '전자제품 쇼핑몰',
    '전자제품 할인',
    '전자제품 최저가',
  ],
  openGraph: {
    url: 'https://testvalley.vercel.app',
  },
  authors: [{ name: 'Ukasyah R Z' }],
  creator: 'Ukasyah R Z',
  publisher: 'Ukasyah R Z',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className={'light'}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
