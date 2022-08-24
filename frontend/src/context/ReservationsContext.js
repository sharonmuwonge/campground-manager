import { createContext, useReducer } from 'react'

export const ReservationsContext = createContext()

export const reservationsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_RESERVATIONS':
            return {
                reservations: action.payload
            }
        case 'CREATE_RESERVATION':
            return {
                reservations: [action.payload, ...state.reservations]
            }
        default:
            return state
    }
}

export const ReservationsContextProvider = ({ children}) => {
    const [state, dispatch] = useReducer(reservationsReducer, {
        reservations: null
    })

    return (
    <ReservationsContext.Provider value={{...state, dispatch}}>
            { children }
        </ReservationsContext.Provider>
    )
}

