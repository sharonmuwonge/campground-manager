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
                console.log(reservationsArrivals)
            }
        }

        fetchReservationsArrivals()
    }, [date])

    return(
        <ul id="arrivals" className='reservations'>
            {reservationsArrivals.length > 0 ? reservationsArrivals.map((reservation) => (
                <Link to={`/reservations/${reservation._id}`} className='reservation-link' key={reservation._id}> 
                    <li>{reservation.firstName} {reservation.lastName} | {reservation.arriveDate.slice(0,10)} - {reservation.departDate.slice(0,10)}</li>
                </Link>
            )) : 'No arrivals' }
        </ul>
    )

}

export default ReservationsArrivalsList