import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext()

export const AuthReducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'SIGNIN': 
            return { user: action.payload }
        case 'SIGNOUT':
            return { user: null }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, {
        user: null
    })

useEffect(() => {

    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
        dispatch({type: 'SIGNIN', payload: user})
    }

}, [])

console.log('AuthContext state:', state)

return (
    <AuthContext.Provider value={{...state, dispatch}}>
        { children }
    </AuthContext.Provider>
)
}