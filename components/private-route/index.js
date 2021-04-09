import { compose } from "redux"
import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import Router, { useRouter } from 'next/router'

// Actions
import { readAuth } from 'store/auth/actions'

const privateComponent = Component => (props) => {
    const router = useRouter()

    useEffect(() => {
        props.readAuth()
        if (props.logged) return <Component {...props} />
        else {
            Router.replace('/sign-in')
        }
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
    privateComponent
)

export default (composedHoc)
