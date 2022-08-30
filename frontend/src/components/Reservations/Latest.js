import {Link} from 'react-router-dom'

const LatestReservations = ({reservations}) => {

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