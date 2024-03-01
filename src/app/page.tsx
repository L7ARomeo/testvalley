import Header from '@src/components/Header'
import api from '@src/utils/api'
import MainBanners from '@src/components/Home/MainBanners'
import { MainBanner } from '@src/types/data/dataTypes'
import MainShortcuts from '@src/components/Home/MainShortcuts'
import Collections from '@src/components/Home/Collections'
import MobileNavbar from '@src/components/MobileNavbar'
import Footer from '@src/components/Footer'
import MobileSearch from '@src/components/MobileSearch'
import FAB from '@src/components/FAB'

export const revalidate = 300 // Revalidate data fetching every 5 minutes

export default async function Home() {
  const response = await api().get<MainBanner[]>('/main-banner/all')
  const banners = response.data

  return (
    <div
      className={
        'relative mx-auto shadow min-w-mobile max-w-screen-mobile desktop:max-w-full'
      }>
      <div className={'relative bg-white'}>
        <Header />
        <main className={'flex flex-col items-center overflow-hidden'}>
          <MainBanners {...{ banners }} />
          <MainShortcuts />
          <Collections />
          <MobileSearch />
        </main>
        <Footer />
      </div>
      <MobileNavbar />
      <FAB />
    </div>
  )
}
