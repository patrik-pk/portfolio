import {
    SET_LANG,
    SET_ABOUT_OFFSET,
    SET_PORTFOLIO_OFFSET,
    SET_CONTACT_OFFSET
} from './types'

const reducer = (state, action) => {
    const { type, payload } = action

    switch(type) {
        case SET_LANG:
            return {
                ...state,
                lang: payload
            }

        case SET_ABOUT_OFFSET:
            return {
                ...state,
                aboutOffset: payload
            }

        case SET_PORTFOLIO_OFFSET:
            return {
                ...state,
                portfolioOffset: payload
            }

        case SET_CONTACT_OFFSET:
            return {
                ...state,
                contactOffset: payload
            }

        default:
            return state
    }
}

export default reducer