import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const ReservationsArrivalsList = ({date}) => {

    const [reservationsArrivals, setReservationsArrivals] = useState(null)

    useEffect(() => {

        const fetchReservationsArrivals = async () => {

            const response = await fetch(`/reservations/${date}/arrivals`)
            const json = await response.json()
    
            if (response.ok) {
                setReservationsArrivals(json)
            }
        }

        fetchReservationsArrivals()
    }, [date])

    return(
        <ul id="arrivals" className='reservations'>
            {reservationsArrivals && reservationsArrivals.length > 0 ?
            reservationsArrivals.map((reservation) => (
                <Link to={`/reservations/${reservation._id}`} className='reservation-link' key={reservation._id}> 
                    <li>{reservation.firstName} {reservation.lastName} | {reservation.arriveDate.slice(0,10)} - {reservation.departDate.slice(0,10)}</li>
                </Link>
            ))
            : <p>No arrivals.</p>}
        </ul>
    )

}

export default ReservationsArrivalsList