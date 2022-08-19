import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const ReservationsCheckedinList = () => {

    const [reservationsCheckedin, setReservationsCheckedin] = useState(null)

    useEffect(() => {

        const fetchReservationsCheckedin = async () => {

            const response = await fetch('/reservations/2022-08-15/checkedin')
            const json = await response.json()

            if (response.ok) {
                setReservationsCheckedin(json)
            }
        }

        fetchReservationsCheckedin()
    }, [])

    return(
        <ul id="arrivals" className='reservations'>
            {/* fetch reservations from database and create link + li's */}
            {reservationsCheckedin && reservationsCheckedin.map((reservation) => (
                <Link to={`/reservations/${reservation._id}`} className='reservation-link' key={reservation._id}> 
                    <li>{reservation.firstName} {reservation.lastName} | {reservation.arriveDate.slice(0,10)} - {reservation.departDate.slice(0,10)}</li>
                </Link>
            ))}
        </ul>
    )

}

export default ReservationsCheckedinList