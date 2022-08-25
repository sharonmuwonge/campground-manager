// import { Input } from '@chakra-ui/react'
import ReservationsArrivalsList from "./Reservations/Arrivals"
import ReservationsDeparturesList from "./Reservations/Departures"
import ReservationsCheckedinList from "./Reservations/Checkedin"
import SelectedDate from "./Forms/Date"

const Overview = () => {


    const handleChange = (e) => {
        console.log(e.target.value)
    }

    return (
    <section>
            < SelectedDate handleThisChange = {handleChange} />
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
