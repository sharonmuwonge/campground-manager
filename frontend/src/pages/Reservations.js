import { useState } from "react"
import ReservationForm from "../components/Forms/Reservation"
import LatestReservations from "../components/Reservations/Latest"
import ReservationTimeline from "../components/Reservations/Timeline"

const Reservations = () => {

  const [create] = useState(true)

  return (
    <div>
      <header>
            <h1>Daily Overview</h1>
      </header>
      < ReservationForm create={create} />
      < ReservationTimeline />
      <h2>Latest Reservations</h2>
      < LatestReservations />
    </div>
  )
}

export default Reservations
