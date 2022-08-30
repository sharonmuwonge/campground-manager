import { useState, useEffect } from "react"
import ReservationForm from "../components/Forms/Reservation"
import LatestReservations from "../components/Reservations/Latest"
import ReservationTimeline from "../components/Reservations/Timeline"
import { useReservationsContext } from '../hooks/useReservationsContext'

const Reservations = () => {

  const [create] = useState(true)
  const {reservations, dispatch} = useReservationsContext()

    useEffect(() => {

        const fetchLatestReservations = async () => {

            const response = await fetch('/reservations')
            const json = await response.json()
            if (response.ok) {
                dispatch({type: 'SET_RESERVATIONS', payload: json})
            }
        }

        fetchLatestReservations()
    })

  return (
    <div>
      <header>
            <h1>Daily Overview</h1>
      </header>
      < ReservationForm create={create} />
      < ReservationTimeline reservations={reservations} />
      <h2>Latest Reservations</h2>
      < LatestReservations reservations={reservations} />
    </div>
  )
}

export default Reservations
