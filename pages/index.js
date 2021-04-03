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

      <div className="w-full min-h-screen h-full flex flex-col py-6 xl:py-0 justify-center items-center bg-home">
        <div className="mb-9">
          <Image src="/home/logo.png" alt="home_logo" height="auto" width={390} />
        </div>

        <span className="font-title font-bold text-5xl text-center uppercase">
          Fake Lec Store
        </span>

        <span className="text-base font-description text-center mt-1">
          This is a sample page that look like old lec store
        </span>

        <Link href="/all-products">
          <a className="text-white text-lg mt-8 font-bold uppercase bg-primary py-4 px-6 rounded-xl">
            Shop Now
          </a>
        </Link>
      </div>
    </Store>
  )
}