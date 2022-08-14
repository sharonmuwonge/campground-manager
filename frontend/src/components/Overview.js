// import { Input } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const Overview = () => {

const [reservations, setReservations] = useState(null)

useEffect(() => {

    const fetchReservations = async () => {

        const response = await fetch('/reservations')
        const json = await response.json()

        if (response.ok) {
            setReservations(json)
        }
    }

    fetchReservations()
}, [])

    return (
    <section>
        <header>
            <h1>Daily overview</h1>
        </header>
        <form action="">
                <label htmlFor="selectedDate">Date:</label>
                {/* <Input size='sm' type="date" name="selectedDate" id="selectedDate"/> */}
            </form>
            <ul>
                <li>
                    <h3>Arrivals</h3>
                    <ul id="arrivals" className='reservations'>
                        {/* fetch reservations from database and create link + li's */}
                        {reservations && reservations.map((reservation) => (
                             <li key={reservation._id}>{reservation.firstName}</li>
                        ))}
                    </ul>
                </li>
                <li>
                    <h3>Departures</h3>
                    <ul id="departures" className="reservationLists">
                    </ul>
                </li>
                <li id="checkedInInfo">
                    <h3>Checked in</h3>
                    <ul id="checkedIn" className="reservationLists">
                    </ul>
                </li>
            </ul>
    </section>
  )
}

export default Overview
