import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const ReservationsDeparturesList = ({date}) => {

    const [reservationsDepartures, setReservationsDepartures] = useState(null)

    useEffect(() => {

        const fetchReservationsDepartures = async () => {

            const response = await fetch(`/reservations/${date}/departures`)
            const json = await response.json()

            if (response.ok) {
                setReservationsDepartures(json)
            }

            if (!response.ok) {
                setReservationsDepartures('')
            }
        }

        fetchReservationsDepartures()
    }, [date])

    return(
        <>
            {reservationsDepartures && reservationsDepartures.length > 0 ?
                <ul id="departures" className='reservations'>
                {reservationsDepartures.map((reservation) => (
                    <Link to={`/reservations/${reservation._id}`} className='reservation-link' key={reservation._id}> 
                        <li>{reservation.firstName} {reservation.lastName} | {reservation.arriveDate.slice(0,10)} - {reservation.departDate.slice(0,10)}</li>
                    </Link>
                )) }
                </ul>
            : <p>No departures.</p>}
        </>
    )

}

export default ReservationsDeparturesList