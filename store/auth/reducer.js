import { TYPES } from './actions'

const authInitialState = {
    logged: false
}

export default function reducer(state = authInitialState, action) {
    switch (action.type) {
        case TYPES.SET_AUTH:
            return {
                ...state,
                logged: action.payload
            }
        default:
            return state
    }
}