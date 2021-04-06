import useSWR from 'swr'
import Link from 'next/link'
import Head from 'next/head'

// Layout
import Store from 'layouts/store'

const fetcher = async (...args) => {
    const res = await fetch(...args)

    return res.json()
}

export default function AllProducts() {
    const { data, error } = useSWR('/api/products', fetcher)

    if (error) return <Store><div className="w-full min-h-screen flex justify-center items-center">Data failed to load</div></Store>
    if (!data) return <Store><div className="w-full min-h-screen flex justify-center items-center">loading...</div></Store>

    return (
        <Store>
            <Head>
                <title>All products</title>
            </Head>

            <div className="w-full xl:max-h-screen overflow-hidden overflow-y-auto flex justify-center xl:pl-3 pt-28 pb-4 xl:pt-2 xl:pb-0 px-6 xl:px-0 xl:mt-0">
                <div className="w-full min-h-full flex flex-col xl:flex-row xl:flex-wrap items-start  pt-2 xl:pt-0">
                    {data.map((p) => {
                        return (
                            <Link href={`/all-products/${p.name}`} key={p.name}>
                                <a className="w-full xl:w-72 rounded-xl bg-product mx-auto my-2 xl:my-2 xl:mx-3 shadow-md hover:shadow-lg">
                                    <img src={p.pictures[0]}
                                        onMouseOver={e => (e.currentTarget.src = p.pictures[1])}
                                        onMouseOut={e => (e.currentTarget.src = p.pictures[0])}
                                        alt={p.name} className="rounded-t-xl" />

                                    <div className="text-xl max-w-max overflow-hidden text-center truncate font-title px-2 pt-2">
                                        {p.name}
                                    </div>
                                    <div className="text-gray-400 px-2 pt-1 pb-1">
                                        €{p.price}
                                    </div>
                                </a>
                            </Link>
                        )
                    })}
                </div >
            </div >
        </Store >
    )
}