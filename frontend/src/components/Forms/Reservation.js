import { useState } from "react"
import { useReservationsContext } from "../../hooks/useReservationsContext"
import Add from "../Buttons/Add"
import Save from "../Buttons/Save"
import Cancel from "../Buttons/Cancel"

const ReservationForm = ({id, reservation, edit, create, formSubmit, buttonClick}) => {

    const {dispatch} = useReservationsContext()

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
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        reservation = {firstName, lastName, arriveDate, departDate, campsite, people, pets, licensePlate, vehicles, streetAddress, city, postalCode, stateCode, countryCode, customerPhone, customerEmail, paidInFull, checkedin}
        if (edit) {
            const response = await fetch(`/reservations/${id}`, {
                method: 'PUT',
                body: JSON.stringify(reservation),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    
            const json = await response.json()
    
            if (!response.ok) {
                setError(json.error)
                console.log(error)
            }
    
            if (response.ok) {
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
                setError(null)
                console.log('Reservation updated', json)
                dispatch({type: 'SET_RESERVATIONS', payload: json})
                formSubmit()
            }

        }

        if (create) {

            const response = await fetch('/reservations', {
                method: 'POST',
                body: JSON.stringify(reservation),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    
            const json = await response.json()
    
            if (!response.ok) {
                setError(json.error)
                console.log(error)
            }
    
            if (response.ok) {
                setFirstName('')
                setLastName('')
                setArriveDate('')
                setDepartDate('')
                setCampsite('')
                setPeople('')
                setPets('')
                setLicensePlate('')
                setVehicles('')
                setStreetAddress('')
                setCity('')
                setPostalCode('')
                setStateCode('')
                setCountryCode('')
                setCustomerPhone('')
                setCustomerEmail('')
                setPaidInFull('')
                setCheckedin('')
                setError(null)
                console.log('New reservation added', json)
                dispatch({type: 'CREATE_RESERVATION', payload: json})
            }
        }
    }

    return (
        <form id='reservationForm' onSubmit={handleSubmit}>

            {edit && <h2>Edit reservation</h2>}
            {create && <h2>Add new reservation</h2>}

            <label>First name:</label>
            <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName || ''} required />

            <label>Last name:</label>
            <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName || ''} required />
            
            <label>Arrival date:</label>
            <input type="date" onChange={(e) => setArriveDate(e.target.value)} value={arriveDate || ''} required />

            <label>Departure date:</label>
            <input type="date" onChange={(e) => setDepartDate(e.target.value)} value={departDate || ''} required />

            <label>Campsite:</label>
            <input type="number" onChange={(e) => setCampsite(e.target.value)} value={campsite || ''} required />

            <label>People:</label>
            <input type="number" onChange={(e) => setPeople(e.target.value)} value={people || ''} required />

            <label>Pets:</label>
            <input type="Number" onChange={(e) => setPets(e.target.value)} value={pets || ''} required />
            
            <label>License Plate:</label>
            <input type="text" onChange={(e) => setLicensePlate(e.target.value)} value={licensePlate || ''} required />

            <label>Vehicles:</label>
            <input type="text" onChange={(e) => setVehicles(e.target.value)} value={vehicles || ''} required />
            
            <label>Street Address:</label>
            <input type="text" onChange={(e) => setStreetAddress(e.target.value)} value={streetAddress || ''} required />

            <label>City:</label>
            <input type="text" onChange={(e) => setCity(e.target.value)} value={city || ''} required />

            <label>Postal Code:</label>
            <input type="text" onChange={(e) => setPostalCode(e.target.value)} value={postalCode || ''} required />

            <label>State Code:</label>
            <input type="Text" onChange={(e) => setStateCode(e.target.value)} value={stateCode || ''} required />

            <label>Country Code:</label>
            <input type="text" onChange={(e) => setCountryCode(e.target.value)} value={countryCode || ''} required />

            <label>Customer Phone:</label>
            <input type="number" onChange={(e) => setCustomerPhone(e.target.value)} value={customerPhone || ''} required />

            <label>Customer Email:</label>
            <input type="email" onChange={(e) => setCustomerEmail(e.target.value)} value={customerEmail || ''} required />
            
            <label>Paid in Full:</label>
            <input type="text" onChange={(e) => setPaidInFull(e.target.value)} value={paidInFull || ''} required />

            <label>Checked In:</label>
            <input type="string" onChange={(e) => setCheckedin(e.target.value)} value={checkedin || ''} required />

            {edit ? < Save formType={'reservation'} /> : < Add formType={'reservation'} />}
            < Cancel cancelClick={buttonClick}/>
        </form>
    )
}


export default ReservationForm