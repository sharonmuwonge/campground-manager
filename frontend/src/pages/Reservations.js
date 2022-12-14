import { useEffect, useState } from "react"
import ReservationForm from "../components/Forms/Reservation"
import LatestReservations from "../components/Reservations/Latest"
import ReservationTimeline from "../components/Reservations/Timeline"
import { useReservationsContext } from '../hooks/useReservationsContext'
import { Heading } from "@chakra-ui/react"
import { useAuthContext } from '../hooks/useAuthContext'

const Reservations = () => {

  const {dispatch} = useReservationsContext()
  const [create] = useState(true)
  const [reservations, setReservations] = useState([])
  const {user} = useAuthContext()

  useEffect(() => {

    const fetchLatestReservations = async () => {

        const response = await fetch('/reservations', {
          headers: {
              'Authorization': `Bearer ${user.token}`
          }
      })
        const json = await response.json()

        if (response.ok) {
            setReservations(json)
            dispatch({type: 'SET_RESERVATIONS', payload: json})
        }

      } 

      if (user) {
        fetchLatestReservations()
      }

}, [dispatch, user])

  return (
    <main>
      <Heading as='h1' size='md'>Reservations</Heading>
        < ReservationForm />
        <ReservationTimeline reservations={reservations} />
      <Heading as='h2' size='sm'>Latest Reservations</Heading>
        <LatestReservations reservations={reservations} create={create} />
    </main>
  )
}

export default Reservations
