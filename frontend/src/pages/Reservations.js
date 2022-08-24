import ReservationForm from "../components/Forms/Reservation"
import LatestReservations from "../components/Reservations/Latest"

const Reservations = () => {
  return (
    <div>
      <header>
            <h1>Daily Overview</h1>
      </header>
      < ReservationForm />
      <h2>Latest Reservations</h2>
      < LatestReservations />
    </div>
  )
}

export default Reservations
