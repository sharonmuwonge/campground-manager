import { Heading } from '@chakra-ui/react'
import { React, useEffect, useState } from 'react'
import ReservationForm from "../components/Forms/Reservation"
import SingleReservation from "../components/Reservations/SingleReservation"
import { useAuthContext } from '../hooks/useAuthContext'


const Reservation = () => {

  // Only display SingleReservation component
  // Add Edit Reservation button + Cancel reservation button
  // On click Edit Reservation button: hide SingleReservation component and show ReservationForm
  // Remove Edit reservation and Cancel reservation button, add Save and Cancel buttons
  
  const id = window.location.pathname.slice(14)

  const [reservation, setReservation] = useState(null)
  const [edit] = useState(true)

  const {user} = useAuthContext()
    
  useEffect(() => {
  
      const fetchReservation = async () => {
  
          const response = await fetch(`/reservations/${id}`, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
          const json = await response.json()
  
          if (response.ok) {
              setReservation(json)
          }
      }

      if (user) {
        fetchReservation()
    }
      
  }, [id, reservation, user])

  return (
    <main>
      <Heading as='h1' size='md'>Reservation {id}</Heading>
        < ReservationForm id={id} reservation={reservation} edit={edit}/>
        < SingleReservation reservation={reservation} />
    </main>    
  )
}



export default Reservation
