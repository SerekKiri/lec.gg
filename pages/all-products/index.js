import useSWR from 'swr'
import Head from 'next/head'

// Layout
import Store from '../../layouts/store'

const fetcher = async (...args) => {
    const res = await fetch(...args)

    return res.json()
}

export default function AllProducts() {
    const { data, error } = useSWR('/api/products', fetcher)

    if (error) return <div className="w-full min-h-screen flex justify-center items-center">Data failed to load</div>
    if (!data) return <div class="w-full min-h-screen flex justify-center items-center">loading...</div>

    return (
        <Store>
            <Head>
                <title>All products</title>
            </Head>

            <div className="w-full min-h-full max-h-screen overflow-hidden overflow-y-auto flex justify-center xl:pl-3">
                <div className="min-h-full max-h-none w-full pt-1 pb-4 xl:pt-4 xl:pb-4 xl:flex xl:flex-wrap xl:flex-1 justify-center items-start xl:justify-start">
                    {data.map((p) => {
                        return (
                            <div class="w-11/12 xl:w-72 overflow-hidden rounded-xl bg-product mx-auto my-4 xl:my-1 xl:mx-3 shadow-md hover:shadow-lg">
                                <img src={p.pictures[0]} alt={p.name} class="rounded-t-xl" />

                                <div class="text-xl max-w-max overflow-hidden text-center truncate font-title px-2 pt-2">
                                    {p.name}
                                </div>
                                <div class="text-gray-400 px-2 pt-1 pb-1">
                                    €{p.price}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Store>
    )
}