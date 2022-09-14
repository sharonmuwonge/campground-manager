import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useAddUser = () => {

    const [error, setError] = useState(null)
    const [closeDrawer, setCloseDrawer] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const addUser = async (email, password) => {
        setIsLoading(true)
        setError(null)
        setCloseDrawer(null)

        const response = await fetch('/users/signup', {
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
            console.log('New user added', json)

            // Update auth context

            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
            setCloseDrawer(true)
        }
    }

    return { addUser, isLoading, error, closeDrawer, setCloseDrawer }

}