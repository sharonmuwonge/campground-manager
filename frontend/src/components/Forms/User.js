import { useState, useEffect } from "react"
import Edit from "../Buttons/Edit"
import Delete from "../Buttons/Delete"
import Save from "../Buttons/Save"
import { Stack, FormControl, FormLabel, Input } from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
  } from '@chakra-ui/react'
import Cancel from "../../components/Buttons/Cancel"
import Add from "../../components/Buttons/Add"
import { useAddUser } from "../../hooks/useAddUser"

const UserForm = ({edit}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const {onOpen, isOpen, onClose } = useDisclosure()
    const { addUser, isLoading, error, closeDrawer, setCloseDrawer }= useAddUser()

    const handleSubmit = async (e) => {

        e.preventDefault()

        
        await addUser(email, password)
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

    useEffect(() => {

        console.log(closeDrawer)

        if (closeDrawer) {
            onClose()
        }

    }, [closeDrawer])

    return (
        <>
            {edit ? <>< Edit editClick={onOpen}/> <Delete formType={' user'} /> </>: <Add addClick={onOpen} />}
            <Drawer isOpen={isOpen} onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    {edit ? <DrawerHeader>Edit user</DrawerHeader> : <DrawerHeader>Add new user</DrawerHeader> }
                    <DrawerBody>
                        <form id='userForm' onSubmit={handleSubmit}>
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

                        {error && <div className="error">{error}</div>}
                    </DrawerBody>
                    <DrawerFooter>
                        <Cancel cancelClick={onClose} /> 
                        {edit ? <Save formName='userForm' disabled={isLoading} /> : <Add formName='userForm' />}
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default UserForm