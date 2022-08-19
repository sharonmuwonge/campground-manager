import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const ReservationsDeparturesList = () => {

    const [reservationsDepartures, setReservationsDepartures] = useState(null)

    useEffect(() => {

        const fetchReservationsDepartures = async () => {

            const response = await fetch('/reservations/2022-08-15/departures')
            const json = await response.json()

            if (response.ok) {
                setReservationsDepartures(json)
            }
        }

        fetchReservationsDepartures()
    }, [])

    return(
        <ul id="arrivals" className='reservations'>
            {/* fetch reservations from database and create link + li's */}
            {reservationsDepartures && reservationsDepartures.map((reservation) => (
                <Link to={`/reservations/${reservation._id}`} className='reservation-link' key={reservation._id}> 
                    <li>{reservation.firstName} {reservation.lastName} | {reservation.arriveDate.slice(0,10)} - {reservation.departDate.slice(0,10)}</li>
                </Link>
            ))}
        </ul>
    )

}

export default ReservationsDeparturesList