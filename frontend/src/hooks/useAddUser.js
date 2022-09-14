import { useState } from "react"

export const useAddUser = () => {

    const [error, setError] = useState(null)
    const [closeDrawer, setCloseDrawer] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

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

            setError(null)
            console.log('New user added', json)
            setIsLoading(false)
            setCloseDrawer(true)
        }
    }

    return { addUser, isLoading, error, closeDrawer, setCloseDrawer }

}