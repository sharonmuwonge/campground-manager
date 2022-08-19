import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const LatestReservations = () => {

    const [latestReservations, setLatestReservations] = useState(null)

    useEffect(() => {

        const fetchLatestReservations = async () => {

            const response = await fetch('/reservations/latest')
            const json = await response.json()

            if (response.ok) {
                setLatestReservations(json)
            }
        }

        fetchReservationsArrivals()
    }, [])

    return(
        <ul id="arrivals" className='latestReservations'>
            {latestReservations && latestReservations.map((reservation) => (
                <Link to={`/reservations/${reservation._id}`} className='nav-link'> 
                    <li key={reservation._id}>{reservation.firstName} {reservation.lastName} | {reservation.arriveDate.slice(0,10)} - {reservation.departDate.slice(0,10)}</li>
                </Link>
            ))}
        </ul>
    )

}

export default LatestReservations