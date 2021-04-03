import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

// Layout
import Store from '../layouts/store'



export default function Home() {
  return (
    <Store>
      <Head>
        <title>Old LEC Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="flex flex-col w-full min-h-screen h-full py-6 xl:py-0 xl:h-screen justify-center items-center bg-home">
        <div class="mb-9">
          <Image src="/home/logo.png" alt="home_logo" height="auto" width={390} />
        </div>

        <span class="font-title font-bold text-5xl text-center uppercase">
          Fake Lec Store
        </span>

        <span class="text-base font-description text-center mt-1">
          This is a sample page that look like old lec store
        </span>

        <Link href="/all-products">
          <a class="text-white text-lg mt-8 font-bold uppercase bg-primary py-4 px-6 rounded-xl">
            Shop Now
          </a>
        </Link>
      </div>
    </Store>
  )
}