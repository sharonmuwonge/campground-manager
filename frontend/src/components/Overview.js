// import { Input } from '@chakra-ui/react'
import ReservationsArrivalsList from "./Reservations/Arrivals"
import ReservationsDeparturesList from "./Reservations/Departures"
import ReservationsCheckedinList from "./Reservations/Checkedin"
import SelectedDate from "./Forms/Date"
import { useEffect, useState } from 'react'

const Overview = () => {

    const [date, setDate] = useState(new Date().toISOString().slice(0,10))

    const handleChange = (e) => {
        setDate(e.target.value)
    }

    return (
    <section>
            < SelectedDate dateChange = {handleChange} />
            <ul>
                <li>
                    <h3>Arrivals</h3>
                    < ReservationsArrivalsList date={date}/>
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
