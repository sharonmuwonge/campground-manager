import {Link} from 'react-router-dom'
import { useEffect, useState } from "react"
import { useReservationsContext } from '../../hooks/useReservationsContext'

const LatestReservations = () => {

    const {reservations, dispatch} = useReservationsContext()

    const [items, setItems] = useState([])

    useEffect(() => {

        if (reservations && reservations.length > 0) { 
            setItems(reservations)
          }

  }, [reservations])

    useEffect(() => {

        if (reservations && reservations.length > 0) { 
            setItems(dispatch)
        }

    }, [dispatch])

    return(
        <>
            {items && items.length > 0 ? 
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