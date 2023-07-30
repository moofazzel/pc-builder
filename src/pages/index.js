import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '@/components/Layouts/RootLayout';
import Banner from '@/components/UI/Banner';
import ProductCategory from '@/components/UI/ProductCategory';
import TopSelling from '@/components/UI/TopSelling';
import Subscribe from '@/components/UI/Subscribe';
import Footer from '@/components/UI/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Banner />
      <ProductCategory />
      <TopSelling />
      <Subscribe />
      <Footer />
    </>
  )
}


Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};