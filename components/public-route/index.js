import { compose } from "redux"
import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import Router, { useRouter } from 'next/router'

// Actions
import { readAuth } from 'store/auth/actions'

const publicComponent = Component => (props) => {
    const router = useRouter()
    useEffect(() => {
        const isLogged = async () => {
            await props.readAuth()

            console.log(props.logged)
            if (props.logged === false) return <Component {...props} />
            else {
                console.log('asdasdasd')
                Router.replace('/')
            }
        }

        isLogged()
    }, [props, router.pathname])

    return <Component {...props} />
}

const mapStateToProps = (state) => {
    return {
        logged: state.auth.logged
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        readAuth: bindActionCreators(readAuth, dispatch)
    }
}

const composedHoc = compose(
    connect(mapStateToProps, mapDispatchToProps),
    publicComponent
)

export default (composedHoc)
