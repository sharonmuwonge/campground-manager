import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const ReservationsArrivalsList = () => {

    const [reservationsArrivals, setReservationsArrivals] = useState(null)

    useEffect(() => {

        const fetchReservationsArrivals = async () => {

            const response = await fetch('/reservations/2022-08-15/arrivals')
            const json = await response.json()

            if (response.ok) {
                setReservationsArrivals(json)
            }
        }

        fetchReservationsArrivals()
    }, [])

    return(
        <ul id="arrivals" className='reservations'>
            {/* fetch reservations from database and create link + li's */}
            {reservationsArrivals && reservationsArrivals.map((reservation) => (
                <Link to={`/reservations/${reservation._id}`} className='reservation-link' key={reservation._id}> 
                    <li>{reservation.firstName} {reservation.lastName} | {reservation.arriveDate.slice(0,10)} - {reservation.departDate.slice(0,10)}</li>
                </Link>
            ))}
        </ul>
    )

}

export default ReservationsArrivalsList