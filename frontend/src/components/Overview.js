// import { Input } from '@chakra-ui/react'
import ReservationsArrivalsList from "./Reservations/Arrivals"
import ReservationsDeparturesList from "./Reservations/Departures"
import ReservationsCheckedinList from "./Reservations/Checkedin"
import SelectedDate from "./Forms/Date"
import { useState } from 'react'
import { Heading } from "@chakra-ui/react"

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
                    <Heading as='h3' size='sm'>Arrivals</Heading>
                    <ReservationsArrivalsList date={date} />
                </li>
                <li>
                    <Heading as='h3' size='sm'>Departures</Heading>
                    <ReservationsDeparturesList date={date} />
                </li>
                <li id="checkedInInfo">
                    <Heading as='h3' size='sm'>Checked-in</Heading>
                    <ReservationsCheckedinList date={date} />
                </li>
            </ul>
    </section>
  )
}

export default Overview
