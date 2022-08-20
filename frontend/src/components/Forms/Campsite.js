import { useState } from "react"
import Add from "../Buttons/Add"

const CampsiteForm = () => {
    const [campsiteID, setCampsiteID] = useState('')
    const [campsiteName, setCampsiteName] = useState('')
    const [facilityID, setFacilityID] = useState('')
    const [facilityName, setFacilityName] = useState('')
    const [campsiteType, setCampsiteType] = useState('')
    const [facilityLongitude, setFacilityLongitude] = useState('')
    const [facilityLatitude, setFacilityLatitude] = useState('')
    const [uses, setUses] = useState('')
    const [onLoop, setOnLoop] = useState('')
    const [permittedEquipment, setPermittedEquipment] = useState('')
    const [amenities, setAmenities] = useState('')
    const [feePerNight, setFeePerNight] = useState('')
    const [reservationFee, setReservationFee] = useState('')
    const [maxVehicles, setMaxVehicles] = useState('')
    const [vehicleFee, setVehicleFee] = useState('')
    const [maxPersons, setMaxPersons] = useState('')
    const [tentsAllowed, setTentsAllowed] = useState('')
    const [maxTents, setMaxTents] = useState('')
    const [petsAllowed, setPetsAllowed] = useState('')
    const [maxPets, setMaxPets] = useState('')
    const [petFee, setPetFee] = useState('')
    const [media, setMedia] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const campsite = {campsiteID, campsiteName, facilityID, facilityName, campsiteType, facilityLongitude, facilityLatitude, uses, onLoop, permittedEquipment, amenities, feePerNight, reservationFee, maxVehicles, vehicleFee, maxPersons, tentsAllowed, maxTents, petsAllowed, maxPets, petFee, media}

        const response = await fetch('/campsites', {
            method: 'POST',
            body: JSON.stringify(campsite),
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
            setCampsiteID('')
            setCampsiteName('')
            setFacilityID('')
            setFacilityName('')
            setCampsiteType('')
            setFacilityLongitude('')
            setFacilityLatitude('')
            setUses('')
            setOnLoop('')
            setPermittedEquipment('')
            setAmenities('')
            setFeePerNight('')
            setReservationFee('')
            setMaxVehicles('')
            setVehicleFee('')
            setMaxPersons('')
            setTentsAllowed('')
            setMaxTents('')
            setPetsAllowed('')
            setMaxPets('')
            setPetFee('')
            setMedia('')
            setError('')

            setError(null)
            console.log('New campsites added', json)
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h2>Add new campsite</h2>

            <label>Campsite ID:</label>
            <input type="text" onChange={(e) => setCampsiteID(e.target.value)} value={campsiteID} />
            
            <label>Campsite Name:</label>
            <input type="text" onChange={(e) => setCampsiteName(e.target.value)} value={campsiteName} />
            
            <label>Facility ID:</label>
            <input type="text" onChange={(e) => setFacilityID(e.target.value)} value={facilityID} />
            
            <label>Facility Name:</label>
            <input type="text" onChange={(e) => setFacilityName(e.target.value)} value={facilityName} />
            
            <label>Campsite Type:</label>
            <input type="text" onChange={(e) => setCampsiteType(e.target.value)} value={campsiteType} />
            
            <label>Facility Longitude:</label>
            <input type="text" onChange={(e) => setFacilityLongitude(e.target.value)} value={facilityLongitude} />
            
            <label>Facility Latitude:</label>
            <input type="text" onChange={(e) => setFacilityLatitude(e.target.value)} value={facilityLatitude} />
            
            <label>Uses:</label>
            <input type="text" onChange={(e) => setUses(e.target.value)} value={uses} />
            
            <label>On Loop:</label>
            <input type="text" onChange={(e) => setOnLoop(e.target.value)} value={onLoop} />
            
            <label>Permitted Equipment:</label>
            <input type="text" onChange={(e) => setPermittedEquipment(e.target.value)} value={permittedEquipment} />
            
            <label>Amenities:</label>
            <input type="text" onChange={(e) => setAmenities(e.target.value)} value={amenities} />
            
            <label>Fee per Night:</label>
            <input type="text" onChange={(e) => setFeePerNight(e.target.value)} value={feePerNight} />
            
            <label>Reservation Fee:</label>
            <input type="text" onChange={(e) => setReservationFee(e.target.value)} value={reservationFee} />
            
            <label>Max. Vehicles:</label>
            <input type="text" onChange={(e) => setMaxVehicles(e.target.value)} value={maxVehicles} />
            
            <label>Vehicle Fee:</label>
            <input type="text" onChange={(e) => setVehicleFee(e.target.value)} value={vehicleFee} />
            
            <label>Max. Persons:</label>
            <input type="text" onChange={(e) => setMaxPersons(e.target.value)} value={maxPersons} />
            
            <label>Tents Allowed:</label>
            <input type="text" onChange={(e) => setTentsAllowed(e.target.value)} value={tentsAllowed} />
            
            <label>Max. Tents:</label>
            <input type="text" onChange={(e) => setMaxTents(e.target.value)} value={maxTents} />
            
            <label>Pets Allowed:</label>
            <input type="text" onChange={(e) => setPetsAllowed(e.target.value)} value={petsAllowed} />
            
            <label>Max. Pets:</label>
            <input type="text" onChange={(e) => setMaxPets(e.target.value)} value={maxPets} />
            
            <label>Pet Fee:</label>
            <input type="text" onChange={(e) => setPetFee(e.target.value)} value={petFee} />
            
            <label>Media:</label>
            <input type="text" onChange={(e) => setMedia(e.target.value)} value={media} />

            < Add />
        </form>
    )
}

export default CampsiteForm
