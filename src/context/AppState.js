import React, { useReducer } from 'react'
import AppContext from './appContext'
import AppReducer from './appReducer'
import {
    SET_LANG
} from './types'
import cz from '../data/lang/cz'

const AppState = props => {
    const initialState = {
        lang: {
            type: 'cz',
            data: cz
        }
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

    return <AppContext.Provider value={{
        lang: state.lang,
        setLang,
    }}>{props.children}</AppContext.Provider>
} 

export default AppState
