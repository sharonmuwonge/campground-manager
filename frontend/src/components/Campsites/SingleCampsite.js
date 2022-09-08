import { useEffect, useState } from "react"

const SingleCampsite = ({campsite}) => {

    const [campsiteID, setCampsiteID] = useState(campsite && campsite.campsiteID)
    const [campsiteName, setCampsiteName] = useState(campsite && campsite.campsiteName)
    const [facilityID, setFacilityID] = useState(campsite && campsite.facilityID)
    const [facilityName, setFacilityName] = useState(campsite && campsite.facilityName)
    const [campsiteType, setCampsiteType] = useState(campsite && campsite.campsiteType)
    const [facilityLongitude, setFacilityLongitude] = useState(campsite && campsite.facilityLongitude)
    const [facilityLatitude, setFacilityLatitude] = useState(campsite && campsite.facilityLatitude)
    const [uses, setUses] = useState(campsite && campsite.uses)
    const [onLoop, setOnLoop] = useState(campsite && campsite.onLoop)
    const [permittedEquipment, setPermittedEquipment] = useState(campsite && campsite.permittedEquipment)
    const [amenities, setAmenities] = useState(campsite && campsite.amenities)
    const [feePerNight, setFeePerNight] = useState(campsite && campsite.feePerNight)
    const [reservationFee, setReservationFee] = useState(campsite && campsite.reservationFee)
    const [maxVehicles, setMaxVehicles] = useState(campsite && campsite.maxVehicles)
    const [vehicleFee, setVehicleFee] = useState(campsite && campsite.vehicleFee)
    const [maxPersons, setMaxPersons] = useState(campsite && campsite.maxPersons)
    const [tentsAllowed, setTentsAllowed] = useState(campsite && campsite.tentsAllowed)
    const [maxTents, setMaxTents] = useState(campsite && campsite.maxTents)
    const [petsAllowed, setPetsAllowed] = useState(campsite && campsite.petsAllowed)
    const [maxPets, setMaxPets] = useState(campsite && campsite.maxPets)
    const [petFee, setPetFee] = useState(campsite && campsite.petFee)
    const [media, setMedia] = useState(campsite && campsite.media)

    useEffect(() => {

        setCampsiteID(campsite && campsite.campsiteID)
        setCampsiteName(campsite && campsite.campsiteName)
        setFacilityID(campsite && campsite.facilityID)
        setFacilityName(campsite && campsite.facilityName)
        setCampsiteType(campsite && campsite.campsiteType)
        setFacilityLongitude(campsite && campsite.facilityLongitude)
        setFacilityLatitude(campsite && campsite.facilityLatitude)
        setUses(campsite && campsite.uses)
        setOnLoop(campsite && campsite.onLoop)
        setPermittedEquipment(campsite && campsite.permittedEquipment)
        setAmenities(campsite && campsite.amenities)
        setFeePerNight(campsite && campsite.feePerNight)
        setReservationFee(campsite && campsite.reservationFee)
        setMaxVehicles(campsite && campsite.maxVehicles)
        setVehicleFee(campsite && campsite.vehicleFee)
        setMaxPersons(campsite && campsite.maxPersons)
        setTentsAllowed(campsite && campsite.tentsAllowed)
        setMaxTents(campsite && campsite.maxTents)
        setPetsAllowed(campsite && campsite.petsAllowed)
        setMaxPets(campsite && campsite.maxPets)
        setPetFee(campsite && campsite.petFee)
        setMedia(campsite && campsite.media)

    })

    return(
        <div id="singleCampsite" className='campsite'>
            
            <span>Campsite ID:</span>
            <p>{campsiteID}</p>

            <span>Campsite name:</span>
            <p>{campsiteName}</p>
            
            <span>Facility ID:</span>
            <p>{facilityID}</p>

            <span>Facility name:</span>
            <p>{facilityName}</p>
            
            <span>Campsite type:</span>
            <p>{campsiteType}</p>
            
            <span>Facility longitude:</span>
            <p>{facilityLongitude}</p>

            <span>Facility latitude:</span>
            <p>{facilityLatitude}</p>

            <span>Uses:</span>
            <p>{uses}</p>

            <span>On loop:</span>
            <p>{onLoop}</p>

            <span>Permitted equipment:</span>
            <p>{permittedEquipment}</p>

            <span>Amenities:</span>
            <p>{amenities}</p>
            
            <span>Fee per night:</span>
            <p>{feePerNight}</p>
            
            <span>Reservation fee:</span>
            <p>{reservationFee}</p>
            
            <span>Max vehicles:</span>
            <p>{maxVehicles}</p>
            
            <span>Vehicle fee:</span>
            <p>{vehicleFee}</p>
            
            <span>Max persons:</span>
            <p>{maxPersons}</p>
            
            <span>Tents allowed:</span>
            <p>{tentsAllowed}</p>
            
            <span>Max tents:</span>
            <p>{maxTents}</p>
            
            <span>Pets allowed:</span>
            <p>{petsAllowed}</p>
            
            <span>Max pets:</span>
            <p>{maxPets}</p>
            
            <span>Pet fee:</span>
            <p>{petFee}</p>
            
            <span>Media:</span>
            <p>{media}</p>

        </div>
    )

}

export default SingleCampsite