import React, { useReducer } from 'react'
import AppContext from './appContext'
import AppReducer from './appReducer'
import {
    SET_LANG,
    SET_ABOUT_OFFSET,
    SET_PORTFOLIO_OFFSET,
    SET_CONTACT_OFFSET
} from './types'
import cz from '../data/lang/cz'

const AppState = props => {
    const initialState = {
        lang: {
            type: 'cz',
            data: cz
        },
        aboutOffset: 0,
        portfolioOffset: 0,
        contactOffset: 0
    }

    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Set Lang
    const setLang = (type, data) => {
        dispatch({
            type: SET_LANG,
            payload: {
                type,
                data
            }
        })
    }

    // Set Offsets
    const setAboutOffset = val => dispatch({ type: SET_ABOUT_OFFSET, payload: val })
    const setPortfolioOffset = val => dispatch({ type: SET_PORTFOLIO_OFFSET, payload: val })
    const setContactOffset = val => dispatch({ type: SET_CONTACT_OFFSET, payload: val })

    return <AppContext.Provider value={{
        lang: state.lang,
        aboutOffset: state.aboutOffset,
        portfolioOffset: state.portfolioOffset,
        contactOffset: state.contactOffset,
        setLang,
        setAboutOffset,
        setPortfolioOffset,
        setContactOffset
    }}>{props.children}</AppContext.Provider>
} 

export default AppState
