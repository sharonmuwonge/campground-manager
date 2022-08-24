import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useReservationsContext } from '../../hooks/useReservationsContext'

const LatestReservations = () => {

    const {reservations, dispatch} = useReservationsContext()

    useEffect(() => {

        const fetchLatestReservations = async () => {

            const response = await fetch('/reservations/latest')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_RESERVATIONS', payload: json})
            }
        }

        fetchLatestReservations()
    }, [])

    return(
        <ul id="arrivals" className='latestReservations'>
            {reservations && reservations.map((reservation) => (
                <Link to={`/reservations/${reservation._id}`} className='reservation-link' key={reservation._id}> 
                    <li>{reservation.createdAt} | {reservation.firstName} {reservation.lastName} | {reservation.arriveDate/*.slice(0,10)*/} - {reservation.departDate/*.slice(0,10)*/}</li>
                </Link>
            ))}
        </ul>
    )

}

export default LatestReservations