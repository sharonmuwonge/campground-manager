import { useAuthContext } from "./useAuthContext"

export const useSignOut = () => {
    
    const { dispatch } = useAuthContext()
    
    const signOut = () => {

        // Remove user from local storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch('SIGNOUT')
    }

    return {signOut}
}