import { useAuthContext } from "./useAuthContext"
import { useReservationsContext } from "./useReservationsContext"

export const useSignOut = () => {
    
    const { dispatch } = useAuthContext()
    const { dispatch: reservationsDispatch } = useReservationsContext()
    
    const signOut = () => {

        // Remove user from local storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({type: 'SIGNOUT'})
        reservationsDispatch({type: 'SET_RESERVATIONS', payload: null})
    }

    return {signOut}
}