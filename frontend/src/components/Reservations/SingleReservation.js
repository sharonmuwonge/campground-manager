import { useEffect, useState } from "react"

const SingleReservation = ({reservation}) => {

    const [firstName, setFirstName] = useState(reservation && reservation.firstName)
    const [lastName, setLastName] = useState(reservation && reservation.lastName)
    const [arriveDate, setArriveDate] = useState(reservation && reservation.arriveDate.slice(0,10))
    const [departDate, setDepartDate] = useState(reservation && reservation.departDate.slice(0,10))
    const [campsite, setCampsite] = useState(reservation && reservation.campsite)
    const [people, setPeople] = useState(reservation && reservation.people)
    const [pets, setPets] = useState(reservation && reservation.pets)
    const [licensePlate, setLicensePlate] = useState(reservation && reservation.licensePlate)
    const [vehicles, setVehicles] = useState(reservation && reservation.vehicles)
    const [streetAddress, setStreetAddress] = useState(reservation && reservation.streetAddress)
    const [city, setCity] = useState(reservation && reservation.city)
    const [postalCode, setPostalCode] = useState(reservation && reservation.postalCode)
    const [stateCode, setStateCode] = useState(reservation && reservation.stateCode)
    const [countryCode, setCountryCode] = useState(reservation && reservation.countryCode)
    const [customerPhone, setCustomerPhone] = useState(reservation && reservation.customerPhone)
    const [customerEmail, setCustomerEmail] = useState(reservation && reservation.customerEmail)
    const [paidInFull, setPaidInFull] = useState(reservation && reservation.paidInFull)
    const [checkedin, setCheckedin] = useState(reservation && reservation.checkedin)

    useEffect(() => {

        setFirstName(reservation && reservation.firstName)
        setLastName(reservation && reservation.lastName)
        setArriveDate(reservation && reservation.arriveDate.slice(0,10))
        setDepartDate(reservation && reservation.departDate.slice(0,10))
        setCampsite(reservation && reservation.campsite)
        setPeople(reservation && reservation.people)
        setPets(reservation && reservation.pets)
        setLicensePlate(reservation && reservation.licensePlate)
        setVehicles(reservation && reservation.vehicles)
        setStreetAddress(reservation && reservation.streetAddress)
        setCity(reservation && reservation.city)
        setPostalCode(reservation && reservation.postalCode)
        setStateCode(reservation && reservation.stateCode)
        setCountryCode(reservation && reservation.countryCode)
        setCustomerPhone(reservation && reservation.customerPhone)
        setCustomerEmail(reservation && reservation.customerEmail)
        setPaidInFull(reservation && reservation.paidInFull)
        setCheckedin(reservation && reservation.checkedin)

    }, [reservation])

    console.log(reservation)

    return(
        <div id="singleReservation" className='reservation'>
            <span>First name:</span>
            <p>{firstName}</p>

            <span>Last name:</span>
            <p>{lastName}</p>
            
            <span>Arrival date:</span>
            <p>{arriveDate}</p>

            <span>Departure date:</span>
            <p>{departDate}</p>

            <span>Campsite:</span>
            <p>{campsite}</p>

            <span>People:</span>
            <p>{people}</p>

            <span>Pets:</span>
            <p>{pets || 0}</p>

            <span>License Plate:</span>
            <p>{licensePlate}</p>

            <span>Vehicles:</span>
            <p>{vehicles || 0}</p>

            <span>Street Address:</span>
            <p>{streetAddress}</p>

            <span>City:</span>
            <p>{city}</p>

            <span>Postal Code:</span>
            <p>{postalCode}</p>

            <span>State Code:</span>
            <p>{stateCode}</p>

            <span>Country Code:</span>
            <p>{countryCode}</p>

            <span>Customer Phone:</span>
            <p>{customerPhone}</p>

            <span>Customer Email:</span>
            <p>{customerEmail}</p>

            <span>Paid in Full:</span>
            <p>{paidInFull}</p>

            <span>Checked In:</span>
            <p>{checkedin}</p>

        </div>
    )

}

export default SingleReservation