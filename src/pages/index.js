import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '@/components/Layouts/RootLayout';
import Banner from '@/components/UI/Banner';
import ProductCategory from '@/components/UI/ProductCategory';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Banner />
      <ProductCategory />
    </>
  )
}


Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};