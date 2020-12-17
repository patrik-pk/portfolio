import {
    SET_LANG
} from './types'

const reducer = (state, action) => {
    const { type, payload } = action

    switch(type) {
        case SET_LANG:
            return {
                ...state,
                lang: payload
            }

        default:
            return state
    }
}

export default reducer