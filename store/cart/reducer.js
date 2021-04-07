import { TYPES } from './actions'

const cartInitialState = {
    items: []
}

export default function reducer(state = cartInitialState, action) {
    switch (action.type) {
        case TYPES.UPDATE:
            return {
                ...state,
                items: state.items.map((item) => {
                    if (item.name === action.payload.name) {
                        return action.data
                    }

                    return item
                })
            }
        case TYPES.REMOVE:
            return {
                ...state,
                items: [...state.items.filter(i => i.name !== action.payload)]
            }
        case TYPES.SET:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}