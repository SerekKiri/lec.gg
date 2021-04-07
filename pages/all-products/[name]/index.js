import useSWR from 'swr'
import Head from 'next/head'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import { bindActionCreators } from 'redux'
import { useState, useEffect } from 'react'

// Actions
import { addItem } from 'store/cart/actions'

// Layout
import Store from 'layouts/store'

// Icons
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const fetcher = async (...args) => {
    const res = await fetch(...args)

    return res.json()
}

function Product({ addItem }) {
    const router = useRouter()
    const [added, setAdded] = useState(false)
    const [product, setProduct] = useState({})
    const [picture, setPicture] = useState(0)
    const { data, error } = useSWR(`/api/products/${router.query.name}`, fetcher)

    useEffect(() => {
        if (!data) return
        setProduct({ ...data, size: data.sizes[0], quantity: 1 })
    }, [data])

    const add = () => {
        setAdded(true)
        setTimeout(() => setAdded(false), 2000)
        addItem(product)
    }

    if (error) return <Store><div className="w-full min-h-screen flex justify-center items-center">Data failed to load</div></Store>
    if (!data) return <Store><div className="w-full min-h-screen flex justify-center items-center">loading...</div></Store>

    return (
        <Store>
            <Head>
                <title>{router.query.name}</title>
            </Head>

            <div className="w-full min-h-full max-h-full xl:max-h-screen overflow-hidden overflow-y-auto py-2 px-4 mt-28 xl:mt-0 flex flex-col xl:flex-row justify-start xl:pl-3">
                <div className="w-full xl:w-1/2 flex justify-center h-2/3 bg-product rounded-xl mt-2">
                    <div className="w-full min-h-full xl:min-h-0 flex flex-col justify-center items-start text-5xl bg-product text-gray-600 rounded-l-xl" onClick={() => { (0 < picture ? setPicture(picture - 1) : '') }}>
                        <MdKeyboardArrowLeft className={picture === 0 ? 'hidden' : ''} />
                    </div>
                    <img src={data.pictures[picture]} alt={picture} className="w-8/12 xl:w-auto h-full py-6" />
                    <div className="w-full min-h-full xl:min-h-0 flex flex-col justify-center items-end text-5xl bg-product text-gray-600 rounded-r-xl" onClick={() => { (data.pictures.length > (picture + 1) ? setPicture(picture + 1) : '') }}>
                        <MdKeyboardArrowRight className={(picture + 1) === data.pictures.length ? 'hidden' : ''} />
                    </div>
                </div>
                <div className="w-full xl:w-1/2 flex flex-col xl:px-4 py-4 xl:pt-8">
                    <div className="text-3xl font-title font-bold">
                        {data.name}
                    </div>
                    <div className="text-sm font-sans py-2 xl:pt-4 xl:pb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum, eros eu ultricies hendrerit, dolor nibh pulvinar dolor, sit amet tempus ex sem at nulla. Sed et turpis suscipit, tincidunt tortor euismod, interdum mi. In viverra tincidunt varius. Nullam leo velit, accumsan in leo vel, imperdiet fringilla odio. Vestibulum suscipit condimentum tortor, in rutrum odio. Quisque commodo lectus in nibh volutpat, ut pretium nisi iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc semper felis mi, eu vulputate dui scelerisque id.
                    </div>
                    <div className="font-bold text-lg font-title">
                        Materials:
                    </div>
                    <div className="text-sm font-sans pt-2 pb-2">
                        {data.materials}
                    </div>
                    <div className="font-bold text-lg mb-1 font-title">
                        Sizes:
                    </div>
                    <div className="w-full flex font-title flex-wrap">
                        {data.sizes.map(s => {
                            return (
                                <div key={s} className={`px-4 py-2 w-auto mt-1 mr-2 rounded-lg font-bold ${s === product.size ? 'bg-primary text-white' : 'bg-product'}`} onClick={() => setProduct({ ...product, size: s })}>{s}</div>
                            )
                        })}
                    </div>
                    <div className="font-bold text-lg mt-2 mb-1 font-title">
                        Quantity:
                    </div>
                    <div className="w-min flex flex-row bg-product rounded-lg py-1">
                        <div className="min-h-full flex items-center px-1" onClick={() => setProduct({ ...product, quantity: product.quantity > 1 ? product.quantity - 1 : 1 })}>
                            <AiOutlineCaretLeft />
                        </div>
                        <div className="h-full w-full  font-sans font-bold text-lg text-gray-500 px-2 py-1">
                            {product.quantity}
                        </div>
                        <div className="min-h-full flex items-center px-1" onClick={() => setProduct({ ...product, quantity: product.quantity < 999 ? product.quantity + 1 : 999 })}>
                            <AiOutlineCaretRight />
                        </div>
                    </div>
                    <div className="mt-6 mb-2 ml-auto">
                        <button className="bg-primary uppercase text-white font-title fixed bottom-2 focus:outline-none xl:bottom-auto right-4 xl:right-28 font-bold px-4 py-2 rounded-xl" onClick={() => add()}>
                            <div className={`${added ? 'flex justify-center' : 'hidden'} absolute left-6 bottom-12 w-18 text-primary bg-white px-4 py-1 rounded-xl`}>
                                Added!
                            </div>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </Store >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: bindActionCreators(addItem, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(Product)