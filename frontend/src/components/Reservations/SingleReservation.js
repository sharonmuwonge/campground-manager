import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const SingleReservation = ({reservationInfo, id}) => {

    return(
        <div id="singleReservation" className='reservation'>
            <span>First name:</span>
            <p>{reservationInfo && reservationInfo.firstName}</p>

            <span>Last name:</span>
            <p>{reservationInfo && reservationInfo.lastName}</p>
            
            <span>Arrival date:</span>
            <p>{reservationInfo && reservationInfo.arriveDate}</p>

            <span>Departure date:</span>
            <p>{reservationInfo && reservationInfo.departDate}</p>

            <span>Campsite:</span>
            <p>{reservationInfo && reservationInfo.campsite}</p>

            <span>People:</span>
            <p>{reservationInfo && reservationInfo.people}</p>

            <span>Pets:</span>
            <p>{reservationInfo && reservationInfo.pets}</p>

            <span>License Plate:</span>
            <p>{reservationInfo && reservationInfo.licensePlate}</p>

            <span>Vehicles:</span>
            <p>{reservationInfo && reservationInfo.vehicles}</p>

            <span>Street Address:</span>
            <p>{reservationInfo && reservationInfo.streetAddress}</p>

            <span>City:</span>
            <p>{reservationInfo && reservationInfo.city}</p>

            <span>Postal Code:</span>
            <p>{reservationInfo && reservationInfo.postalCode}</p>

            <span>State Code:</span>
            <p>{reservationInfo && reservationInfo.stateCode}</p>

            <span>Country Code:</span>
            <p>{reservationInfo && reservationInfo.countryCode}</p>

            <span>Customer Phone:</span>
            <p>{reservationInfo && reservationInfo.customerPhone}</p>

            <span>Customer Email:</span>
            <p>{reservationInfo && reservationInfo.customerEmail}</p>

            <span>Paid in Full:</span>
            <p>{reservationInfo && reservationInfo.paidInFull}</p>

            <span>Checked In:</span>
            <p>{reservationInfo && reservationInfo.checkedin}</p>

        </div>
    )

}

export default SingleReservation