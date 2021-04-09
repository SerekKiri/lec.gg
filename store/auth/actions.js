export const TYPES = {
    SET_AUTH: 'SET_AUTH',
}

export const setLogged = (payload) => (dispatch) => {
    localStorage.setItem('logged', payload)

    return dispatch({
        type: TYPES.SET_AUTH,
        payload
    })
}

export const readAuth = () => (dispatch) => {
    const logged = JSON.parse(localStorage.getItem('logged'))

    return dispatch({
        type: TYPES.SET_AUTH,
        payload: logged ? logged : false
    })
}

