import {Link} from 'react-router-dom'
import { useEffect, useState } from "react"
import { useReservationsContext } from '../../hooks/useReservationsContext'


const LatestReservations = () => {

    const {dispatch} = useReservationsContext()
    const [reservations, setReservations] = useState([])

    useEffect(() => {

        const fetchLatestReservations = async () => {

            const response = await fetch('/reservations')
            const json = await response.json()
            if (response.ok) {
                dispatch({type: 'SET_RESERVATIONS', payload: json})
                setReservations(json)
            }
        }

        fetchLatestReservations()
        .catch(console.error);
    }, [dispatch])

    return(
        <>
            {reservations && reservations.length > 0 ? 
                <ul id="latest" className='reservations'>
                {reservations.map((reservation) => (
                    <li className='reservationInfo' key={reservation._id}><Link to={`/reservations/${reservation._id}`}> 
                    {reservation.firstName} {reservation.lastName} | {reservation.arriveDate && reservation.arriveDate.slice(0,10)} - {reservation.departDate && reservation.departDate.slice(0,10)}
                    </Link></li>
                )) }
                </ul>
            : <p>No reservations.</p>}
        </>
    )

}

export default LatestReservations