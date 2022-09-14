import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useSignIn = () => {

    const [error, setError] = useState(null)
    const [closeDrawer, setCloseDrawer] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signIn = async (email, password) => {
        setIsLoading(true)
        setError(null)
        setCloseDrawer(null)

        const response = await fetch('/users/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'} 
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            // Save user to local storage 

            localStorage.setItem('user', JSON.stringify(json))

            setError(null)
            console.log('User signed in', json)

            // Update auth context

            dispatch({type: 'SIGNIN', payload: json})

            setIsLoading(false)
            setCloseDrawer(true)
        }
    }

    return { signIn, isLoading, error, closeDrawer, setCloseDrawer }

}