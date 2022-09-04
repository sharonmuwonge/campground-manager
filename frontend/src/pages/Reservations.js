import { useEffect, useState } from "react"
import ReservationForm from "../components/Forms/Reservation"
import LatestReservations from "../components/Reservations/Latest"
import ReservationTimeline from "../components/Reservations/Timeline"
import { useReservationsContext } from '../hooks/useReservationsContext'
import { Heading } from "@chakra-ui/react"

const Reservations = () => {

  const {dispatch} = useReservationsContext()
  const [create] = useState(true)
  const [reservations, setReservations] = useState([])

  useEffect(() => {

    const fetchLatestReservations = async () => {

        const response = await fetch('/reservations')
        const json = await response.json()
        if (response.ok) {
            dispatch({type: 'SET_RESERVATIONS', payload: json})
            setReservations(json)
        }

      } 

    fetchLatestReservations()

}, [dispatch])

  return (
    <>
      <header>
        <Heading as='h1' size='md'>Reservations</Heading>
        < ReservationForm />
      </header>
      <main>
          <ReservationTimeline reservations={reservations} />
        <Heading as='h2' size='sm'>Latest Reservations</Heading>
          <LatestReservations reservations={reservations} create={create} />
      </main>
  </>
  )
}

export default Reservations
