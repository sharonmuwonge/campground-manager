import { useState } from "react"
import Add from "../Buttons/Add"
import { useAuthContext } from '../../hooks/useAuthContext'

const FacilityForm = () => {
    const [facilityID, setFacilityID] = useState('')
    const [facilityName, setFacilityName] = useState('')
    const [facilityDescription, setFacilityDescription] = useState('')
    const [facilityPhone, setFacilityPhone] = useState('')
    const [facilityURL, setFacilityURL] = useState('')
    const [facilityLongitude, setFacilityLongitude] = useState('')
    const [facilityLatitude, setFacilityLatitude] = useState('')
    const [facilityStreetAddress, setFacilityStreetAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [stateCode, setStateCode] = useState('')
    const [countryCode, setCountryCode] = useState('')
    const [stayLimit, setStayLimit] = useState('')
    const [reservable, setReservable] = useState('')
    const [activity, setActivity] = useState('')
    const [media, setMedia] = useState('')
    const [error, setError] = useState(null)

    const {user} = useAuthContext()


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in')
            return
        }

        const facility = {facilityID, facilityName, facilityDescription, facilityPhone, facilityURL, facilityLongitude, facilityLatitude, facilityStreetAddress, city, postalCode, stateCode, countryCode, stayLimit, reservable, activity, media}

        const response = await fetch('/facilities', {
            method: 'POST',
            body: JSON.stringify(facility),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            console.log(error)
        }

        if (response.ok) {
            setFacilityID('')
            setFacilityName('')
            setFacilityDescription('')
            setFacilityPhone('')
            setFacilityURL('')
            setFacilityLongitude('')
            setFacilityLatitude('')
            setFacilityStreetAddress('')
            setCity('')
            setPostalCode('')
            setStateCode('')
            setCountryCode('')
            setStayLimit('')
            setReservable('')
            setActivity('')
            setMedia('')

            setError(null)
            console.log('New facility added', json)
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h2>Add new facility</h2>

            <label>Facility ID:</label>
            <input type="text" onChange={(e) => setFacilityID(e.target.value)} value={facilityID} />

            <label>Facility Name:</label>
            <input type="text" onChange={(e) => setFacilityName(e.target.value)} value={facilityName} />

            <label>Description:</label>
            <input type="text" onChange={(e) => setFacilityDescription(e.target.value)} value={facilityDescription} />

            <label>Facility Phone:</label>
            <input type="tel" onChange={(e) => setFacilityPhone(e.target.value)} value={facilityPhone} />

            <label>Facility URL:</label>
            <input type="url" onChange={(e) => setFacilityURL(e.target.value)} value={facilityURL} />

            <label>Facility Longitude:</label>
            <input type="text" onChange={(e) => setFacilityLongitude(e.target.value)} value={facilityLongitude} />

            <label>Facility Latitude:</label>
            <input type="text" onChange={(e) => setFacilityLatitude(e.target.value)} value={facilityLatitude} />

            <label>Facility Street Address:</label>
            <input type="text" onChange={(e) => setFacilityStreetAddress(e.target.value)} value={facilityStreetAddress} />

            <label>City:</label>
            <input type="text" onChange={(e) => setCity(e.target.value)} value={city} />

            <label>Postal Code:</label>
            <input type="text" onChange={(e) => setPostalCode(e.target.value)} value={postalCode} />

            <label>State Code:</label>
            <input type="text" onChange={(e) => setStateCode(e.target.value)} value={stateCode} />

            <label>Country Code:</label>
            <input type="text" onChange={(e) => setCountryCode(e.target.value)} value={countryCode} />

            <label>Stay Limit:</label>
            <input type="number" onChange={(e) => setStayLimit(e.target.value)} value={stayLimit} />

            <label>Reservable:</label>
            <input type="checkbox" onChange={(e) => setReservable(e.target.value)} value={reservable} />

            <label>Activity:</label>
            <input type="text" onChange={(e) => setActivity(e.target.value)} value={activity} />

            <label>Media:</label>
            <input type="file" onChange={(e) => setMedia(e.target.value)} value={media} />

            < Add />
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default FacilityForm