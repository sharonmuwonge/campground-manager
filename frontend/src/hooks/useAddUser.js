import { useState } from "react"
import { AuthContext } from "../context/AuthContext"

export const useAddUser = () => {
    const context = useContext(AuthContext)

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const signup = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/users/signup', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'} 
        })
    }
 
    return context
}