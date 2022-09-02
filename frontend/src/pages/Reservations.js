import { useEffect, useState } from "react"
import Add from "../components/Buttons/Add"
import ReservationForm from "../components/Forms/Reservation"
import LatestReservations from "../components/Reservations/Latest"
import ReservationTimeline from "../components/Reservations/Timeline"
import { useReservationsContext } from '../hooks/useReservationsContext'
import { useDisclosure } from "@chakra-ui/react"

const Reservations = () => {

  const {dispatch} = useReservationsContext()
  const [create] = useState(true)
  const [reservations, setReservations] = useState([])
  const {isOpen, onClose, onOpen} = useDisclosure()

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
        <h1>Daily Overview</h1>
        < ReservationForm />
      </header>
      <main>
          <ReservationTimeline reservations={reservations} />
        <h2>Latest Reservations</h2>
          <LatestReservations reservations={reservations} create={create} />
      </main>
  </>
  )
}

export default Reservations
