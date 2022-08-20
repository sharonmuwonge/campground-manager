// import { Input } from '@chakra-ui/react'
import ReservationsArrivalsList from "./Reservations/Arrivals"
import ReservationsDeparturesList from "./Reservations/Departures"
import ReservationsCheckedinList from "./Reservations/Checkedin"

const Overview = () => {
    return (
    <section>
        <form action="">
                <label htmlFor="selectedDate">Date:</label>
                {/* <Input size='sm' type="date" name="selectedDate" id="selectedDate"/> */}
            </form>
            <ul>
                <li>
                    <h3>Arrivals</h3>
                    < ReservationsArrivalsList />
                </li>
                <li>
                    <h3>Departures</h3>
                    < ReservationsDeparturesList />
                </li>
                <li id="checkedInInfo">
                    <h3>Checked in</h3>
                    < ReservationsCheckedinList />
                </li>
            </ul>
    </section>
  )
}

export default Overview
