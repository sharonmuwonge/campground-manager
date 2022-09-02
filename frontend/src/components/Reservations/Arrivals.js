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

            if (!response.ok) {
                setReservationsArrivals('')
            }
        }

        fetchReservationsArrivals()
    }, [date])

    return(
        <>
            {reservationsArrivals && reservationsArrivals.length > 0 ?
                <ul id="arrivals" className='reservations'>
                {reservationsArrivals.map((reservation) => (
                    <li className='reservation' key={reservation._id}><Link to={`/reservations/${reservation._id}`}> 
                    {reservation.firstName} {reservation.lastName} | {reservation.arriveDate.slice(0,10)} - {reservation.departDate.slice(0,10)}
                    </Link></li>
                )) }
                </ul>
            : <p>No arrivals.</p>}
        </>
    )

}

export default ReservationsArrivalsList