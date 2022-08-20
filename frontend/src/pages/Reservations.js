import ReservationForm from "../components/Forms/Reservation"
import LatestReservations from "../components/Reservations/Latest"

const Reservations = () => {
  return (
    <div>
      <header>
            <h1>Daily overview</h1>
      </header>
      < ReservationForm />
      < LatestReservations />
    </div>
  )
}

export default Reservations
