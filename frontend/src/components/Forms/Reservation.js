import { useState } from "react"
import Add from "../Buttons/Add"

const ReservationForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [arriveDate, setArriveDate] = useState('')
    const [departDate, setDepartDate] = useState('')
    const [campsite, setCampsite] = useState('')
    const [people, setPeople] = useState('')
    const [pets, setPets] = useState('')
    const [licensePlate, setLicensePlate] = useState('')
    const [vehicles, setVehicles] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [stateCode, setStateCode] = useState('')
    const [countryCode, setCountryCode] = useState('')
    const [customerPhone, setCustomerPhone] = useState('')
    const [customerEmail, setCustomerEmail] = useState('')
    const [paidInFull, setPaidInFull] = useState('')
    const [checkedin, setCheckedin] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const reservation = {firstName, lastName, arriveDate, departDate, campsite, people, pets, licensePlate, vehicles, streetAddress, city, postalCode, stateCode, countryCode, customerPhone, customerEmail, paidInFull, checkedin}

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
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h2>Add new reservation</h2>

            <label>First name:</label>
            <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />

            <label>Last name:</label>
            <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
            
            <label>Arrival date:</label>
            <input type="date" onChange={(e) => setArriveDate(e.target.value)} value={arriveDate} />

            <label>Departure date:</label>
            <input type="date" onChange={(e) => setDepartDate(e.target.value)} value={departDate} />

            <label>Campsite:</label>
            <input type="number" onChange={(e) => setCampsite(e.target.value)} value={campsite} />

            <label>People:</label>
            <input type="number" onChange={(e) => setPeople(e.target.value)} value={people} />

            <label>Pets:</label>
            <input type="Number" onChange={(e) => setPets(e.target.value)} value={pets} />
            
            <label>License Plate:</label>
            <input type="text" onChange={(e) => setLicensePlate(e.target.value)} value={licensePlate} />

            <label>Vehicles:</label>
            <input type="text" onChange={(e) => setVehicles(e.target.value)} value={vehicles} />
            
            <label>Street Address:</label>
            <input type="text" onChange={(e) => setStreetAddress(e.target.value)} value={streetAddress} />

            <label>City:</label>
            <input type="text" onChange={(e) => setCity(e.target.value)} value={city} />

            <label>Postal Code:</label>
            <input type="text" onChange={(e) => setPostalCode(e.target.value)} value={postalCode} />

            <label>State Code:</label>
            <input type="Text" onChange={(e) => setStateCode(e.target.value)} value={stateCode} />

            <label>Country Code:</label>
            <input type="text" onChange={(e) => setCountryCode(e.target.value)} value={countryCode} />

            <label>Customer Phone:</label>
            <input type="number" onChange={(e) => setCustomerPhone(e.target.value)} value={customerPhone} />

            <label>Customer Email:</label>
            <input type="email" onChange={(e) => setCustomerEmail(e.target.value)} value={customerEmail} />
            
            <label>Paid in Full:</label>
            <input type="text" onChange={(e) => setPaidInFull(e.target.value)} value={paidInFull} />

            <label>Checked In:</label>
            <input type="string" onChange={(e) => setCheckedin(e.target.value)} value={checkedin} />

            <Add/>
        </form>
    )
}

export default ReservationForm