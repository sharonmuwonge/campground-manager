import { useState } from "react"
import Login from "../Buttons/SignIn"
import { Stack, FormControl, FormLabel, Input } from '@chakra-ui/react'
import {useSignIn} from '../../hooks/useSignIn'

const SignInForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signIn, error, setError, isLoading} = useSignIn()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signIn(email, password)

        // if (edit) {
        //     const response = await fetch(`/reservations/${id}`, {
        //         method: 'PUT',
        //         body: JSON.stringify(reservation),
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     })
    
        //     const json = await response.json()
    
        //     if (!response.ok) {
        //         setError(json.error)
        //         console.log(error)
        //     }
    
        //     if (response.ok) {
        //         setError(null)
        //         console.log('Reservation updated', json)
        //         dispatch({type: 'SET_RESERVATIONS', payload: json})
        //         onClose()
        //     }
        // }

        // else {

        //     const response = await fetch('/reservations', {
        //         method: 'POST',
        //         body: JSON.stringify(reservation),
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     })
    
        //     const json = await response.json()
    
        //     if (!response.ok) {
        //         setError(json.error)
        //         console.log(error)
        //     }
    
        //     if (response.ok) {
        //         console.log('New reservation added', json)
        //         dispatch({type: 'CREATE_RESERVATION', payload: json})
        //         clear()
        //         onClose()
        //     }
        // }
    }

    return (
        <>
            <form id='signInForm' onSubmit={handleSubmit}>
                <Stack>

                < FormControl isRequired>
                <FormLabel>Email</FormLabel>
                    <Input type="email" onChange={(e) => setEmail(e.target.value)} value={email || ''} 
                    />
                </FormControl>

                < FormControl isRequired>
                <FormLabel>Password</FormLabel>
                    <Input type="password" onChange={(e) => setPassword(e.target.value)} value={password || ''} 
                    />
                </FormControl>

                </Stack>
            </form>
            <Login formName='signInForm' disabled={isLoading}/>
        </>
    )
}

export default SignInForm