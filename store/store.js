import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import cart from './cart/reducer'
import auth from './auth/reducer'

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        return compose(applyMiddleware(...middleware), (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f))
    }
    return applyMiddleware(...middleware)
}

const combinedReducer = combineReducers({
    cart,
    auth,
})

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        if (state.cart.items) nextState.cart.items = state.cart.items // preserve cart items on client side navigation
        return nextState
    } else {
        return combinedReducer(state, action)
    }
}

const initStore = () => {
    return createStore(reducer, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(initStore)