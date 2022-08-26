import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const SingleReservation = ({reservationInfo, id}) => {

    return(
        <div id="singleReservation" className='reservation'>
            <span>First name:</span>
    
            <p>{reservationInfo && reservationInfo.firstName}</p>

            {/* <span>Last name:</span>
            <p>
            
            </p><input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
            
            <span>Arrival date:</span>
            <p>
            
            </p><input type="date" onChange={(e) => setArriveDate(e.target.value)} value={arriveDate} />

            <span>Departure date:</span>
            <p>
            
            </p><input type="date" onChange={(e) => setDepartDate(e.target.value)} value={departDate} />

            <span>Campsite:</span>
            <p>
            
            </p><input type="number" onChange={(e) => setCampsite(e.target.value)} value={campsite} />

            <span>People:</span>
            <p>
            
            </p><input type="number" onChange={(e) => setPeople(e.target.value)} value={people} />

            <span>Pets:</span>
            <p>
            
            </p><input type="Number" onChange={(e) => setPets(e.target.value)} value={pets} />
            
            <span>License Plate:</span>
            <p>
            
            </p><input type="text" onChange={(e) => setLicensePlate(e.target.value)} value={licensePlate} />

            <span>Vehicles:</span>
            <p>
            
            </p><input type="text" onChange={(e) => setVehicles(e.target.value)} value={vehicles} />
            
            <span>Street Address:</span>
            <p>
            
            </p><input type="text" onChange={(e) => setStreetAddress(e.target.value)} value={streetAddress} />

            <span>City:</span>
            <p>
            
            </p><input type="text" onChange={(e) => setCity(e.target.value)} value={city} />

            <span>Postal Code:</span>
            <p>
            
            </p><input type="text" onChange={(e) => setPostalCode(e.target.value)} value={postalCode} />

            <span>State Code:</span>
            <p>
            
            </p><input type="Text" onChange={(e) => setStateCode(e.target.value)} value={stateCode} />

            <span>Country Code:</span>
            <p>
            
            </p><input type="text" onChange={(e) => setCountryCode(e.target.value)} value={countryCode} />

            <span>Customer Phone:</span>
            <p>
            
            </p><input type="number" onChange={(e) => setCustomerPhone(e.target.value)} value={customerPhone} />

            <span>Customer Email:</span>
            <p>
                </p><input type="email" onChange={(e) => setCustomerEmail(e.target.value)} value={customerEmail} />
            
            <span>Paid in Full:</span>
            <p>
                </p><input type="text" onChange={(e) => setPaidInFull(e.target.value)} value={paidInFull} />

            <span>Checked In:</span>
            <p>
                </p><p type="string" onChange={(e) => setCheckedin(e.target.value)} value={checkedin} /> */}
        </div>
    )

}

export default SingleReservation