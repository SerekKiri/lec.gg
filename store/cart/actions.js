export const TYPES = {
    SET: 'SET',
    UPDATE: 'UPDATE',
    REMOVE: 'REMOVE'
}

export const addItem = (payload) => (dispatch) => {
    let cart = []
    const localCart = JSON.parse(localStorage.getItem('cart'))
    if (localCart && Array.isArray(localCart)) {
        const currentCart = [...localCart]
        const found = currentCart.findIndex(i => i.name === payload.name)
        if (found >= 0) {
            currentCart[found].quantity = payload.quantity
            currentCart[found].size = payload.size
            cart = [...currentCart]
        } else cart = [...currentCart, payload]
    } else cart.push(payload)

    localStorage.setItem('cart', JSON.stringify(cart))
    return dispatch({
        type: TYPES.SET,
        payload: cart
    })
}

export const readCart = () => (dispatch) => {
    const localCart = JSON.parse(localStorage.getItem('cart'))
    if (localCart && Array.isArray(localCart)) {
        return dispatch({
            type: TYPES.SET,
            payload: localCart
        })
    } else return dispatch({ type: TYPES.SET, payload: [] })
}

export const removeItem = (payload) => (dispatch) => {
    const localCart = JSON.parse(localStorage.getItem('cart'))
    const cart = [...localCart.filter(i => i.name !== payload)]
    localStorage.setItem('cart', JSON.stringify(cart))
    if (localCart && Array.isArray(localCart)) {
        return dispatch({
            type: TYPES.REMOVE,
            payload
        })
    }
    return
}