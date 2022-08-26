import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const ReservationsCheckedinList = ({date}) => {

    const [reservationsCheckedin, setReservationsCheckedin] = useState(null)

    useEffect(() => {

        const fetchReservationsCheckedin = async () => {

            const response = await fetch(`/reservations/${date}/checkedin`)
            const json = await response.json()

            if (response.ok) {
                setReservationsCheckedin(json)
            }
        }

        fetchReservationsCheckedin()
    }, [date])
    

    return(
        <ul id="arrivals" className='reservations'>
            {reservationsCheckedin && reservationsCheckedin.length > 0 ?
            reservationsCheckedin.map((reservation) => (
                <Link to={`/reservations/${reservation._id}`} className='reservation-link' key={reservation._id}> 
                    <li>{reservation.firstName} {reservation.lastName} | {reservation.arriveDate.slice(0,10)} - {reservation.departDate.slice(0,10)}</li>
                </Link>
            )) : <p>No checked in guests.</p>}
        </ul>
    )

}

export default ReservationsCheckedinList