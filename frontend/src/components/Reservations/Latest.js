import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useReservationsContext } from '../../hooks/useReservationsContext'

const LatestReservations = () => {

    const {reservations, dispatch} = useReservationsContext()

    // useEffect(() => {

    //     const fetchLatestReservations = async () => {

    //         const response = await fetch('/reservations/latest')
    //         const json = await response.json()

    //         if (response.ok) {
    //             dispatch({type: 'SET_RESERVATIONS', payload: json})
    //         }
    //     }

    //     fetchLatestReservations()

    //     console.log(reservations)
    // }, [])

    return(
        <>
            {reservations && reservations.length > 0 ? 
                <ul id="latest" className='reservations'>
                {reservations.map((reservation) => (
                    <li className='reservationInfo' key={reservation._id}><Link to={`/reservations/${reservation._id}`}> 
                    {reservation.firstName} {reservation.lastName} | {reservation.arriveDate.slice(0,10)} - {reservation.departDate.slice(0,10)}
                    </Link></li>
                )) }
                </ul>
            : <p>No reservations.</p>}
        </>
    )

}

export default LatestReservations