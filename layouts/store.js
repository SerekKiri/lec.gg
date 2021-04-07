import Head from 'next/head'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useEffect } from 'react'

// Actions
import { readCart } from 'store/cart/actions'

// Components
import Navigation from 'components/navigation'

function Store({ children, items, readCart }) {
    useEffect(() => {
        readCart()
    }, [])
    return (
        <div className="w-screen xl:flex overflow-hidden">
            <Head>
                <link href="/fonts/fonts.css" rel="stylesheet" />
            </Head>

            <Navigation items={items} />

            {children}
        </div>
    )
}

const mapStateToProps = (state) => ({
    items: state.cart.items.length,
})

const mapDispatchToProps = (dispatch) => {
    return {
        readCart: bindActionCreators(readCart, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Store)