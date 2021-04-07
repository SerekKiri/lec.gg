import Head from 'next/head'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import React, { useState, useEffect } from 'react'

// Layout
import Store from 'layouts/store'

// Icons
import { MdDelete } from 'react-icons/md'

// Actions
import { removeItem } from 'store/cart/actions'

const Cart = ({ items, removeItem }) => {
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let sum = 0
        items.forEach(i => sum += (i.price * i.quantity))
        setTotal(sum)
    }, [items])

    return (
        <Store>
            <Head>
                <title>Cart</title>
            </Head>

            <div className="w-full pt-28 xl:pt-0 xl:max-h-screen overflow-hidden">
                <div className="text-3xl pt-4 px-4 font-title font-bold">
                    Your cart:
                </div>
                <div className="flex flex-col px-4 py-2">
                    {items.map((i, n) => {
                        return (
                            <div className="w-full flex flex-col xl:flex-row rounded-xl bg-product my-1" key={n}>
                                <div className="w-full xl:w-1/12 rounded-l-xl">
                                    <img src={i.pictures[0]} alt={n} className="rounded-l-xl py-2" />
                                </div>

                                <div className="px-3 xl:py-4 xl:w-4/12">
                                    <div className="text-lg font-bold font-sans">{i.name}</div>
                                    <div className="mt-2">
                                        <span className="font-bold">Size:</span> {i.size}
                                    </div>
                                </div>

                                <div className="w-full flex flex-col xl:flex-row flex-wrap justify-end items-center xl:text-xl font-sans px-3">
                                    <div className="xl:px-6 self-start xl:self-auto font-bold">
                                        <span className="font-normal">Amount:</span> {i.quantity}
                                    </div>
                                    <div className="w-full xl:w-4/12 flex justify-start xl:justify-end font-bold xl:font-normal">
                                        {i.price}€
                                    </div>
                                    <div className="text-red-500 px-2 text-3xl xl:text-2xl mb-4 xl:mb-0" onClick={() => removeItem(i.name)}>
                                        <MdDelete />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="w-full flex justify-end items-end px-6 pb-3 text-2xl font-bold font-title">
                    Total: {total}€
                </div>
            </div>
        </Store>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.cart.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: bindActionCreators(removeItem, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)