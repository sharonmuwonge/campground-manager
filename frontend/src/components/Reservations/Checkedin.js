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
        <>
            {reservationsCheckedin && reservationsCheckedin.length > 0 ?
                <ul id="checkedin" className='reservations'>
                {reservationsCheckedin.map((reservation) => (
                     <li className='reservation' key={reservation._id}><Link to={`/reservations/${reservation._id}`}> 
                     {reservation.firstName} {reservation.lastName} | {reservation.arriveDate.slice(0,10)} - {reservation.departDate.slice(0,10)}
                     </Link></li>
                )) }
                </ul>
            : <p>No checked in guests.</p>}
        </>
    )

}

export default ReservationsCheckedinList