import { useEffect, useState } from "react"
import { Heading, Text } from "@chakra-ui/react"

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
            
            <Heading as='h2' size='sm'>Campsite ID</ Heading>
            <Text fontSize='sm'>{campsiteID}</ Text>

            <Heading as='h2' size='sm'>Campsite name</ Heading>
            <Text fontSize='sm'>{campsiteName}</ Text>
            
            <Heading as='h2' size='sm'>Facility ID</ Heading>
            <Text fontSize='sm'>{facilityID}</ Text>

            <Heading as='h2' size='sm'>Facility name</ Heading>
            <Text fontSize='sm'>{facilityName}</ Text>
            
            <Heading as='h2' size='sm'>Campsite type</ Heading>
            <Text fontSize='sm'>{campsiteType}</ Text>
            
            <Heading as='h2' size='sm'>Facility longitude</ Heading>
            <Text fontSize='sm'>{facilityLongitude}</ Text>

            <Heading as='h2' size='sm'>Facility latitude</ Heading>
            <Text fontSize='sm'>{facilityLatitude}</ Text>

            <Heading as='h2' size='sm'>Uses</ Heading>
            <Text fontSize='sm'>{uses}</ Text>

            <Heading as='h2' size='sm'>On loop</ Heading>
            <Text fontSize='sm'>{onLoop}</ Text>

            <Heading as='h2' size='sm'>Permitted equipment</ Heading>
            <Text fontSize='sm'>{permittedEquipment}</ Text>

            <Heading as='h2' size='sm'>Amenities</ Heading>
            <Text fontSize='sm'>{amenities}</ Text>
            
            <Heading as='h2' size='sm'>Fee per night</ Heading>
            <Text fontSize='sm'>{feePerNight}</ Text>
            
            <Heading as='h2' size='sm'>Reservation fee</ Heading>
            <Text fontSize='sm'>{reservationFee}</ Text>
            
            <Heading as='h2' size='sm'>Max vehicles</ Heading>
            <Text fontSize='sm'>{maxVehicles}</ Text>
            
            <Heading as='h2' size='sm'>Vehicle fee</ Heading>
            <Text fontSize='sm'>{vehicleFee}</ Text>
            
            <Heading as='h2' size='sm'>Max persons</ Heading>
            <Text fontSize='sm'>{maxPersons}</ Text>
            
            <Heading as='h2' size='sm'>Tents allowed</ Heading>
            <Text fontSize='sm'>{tentsAllowed}</ Text>
            
            <Heading as='h2' size='sm'>Max tents</ Heading>
            <Text fontSize='sm'>{maxTents}</ Text>
            
            <Heading as='h2' size='sm'>Pets allowed</ Heading>
            <Text fontSize='sm'>{petsAllowed}</ Text>
            
            <Heading as='h2' size='sm'>Max pets</ Heading>
            <Text fontSize='sm'>{maxPets}</ Text>
            
            <Heading as='h2' size='sm'>Pet fee</ Heading>
            <Text fontSize='sm'>{petFee}</ Text>
            
            <Heading as='h2' size='sm'>Media</ Heading>
            <Text fontSize='sm'>{media}</ Text>

        </div>
    )

}

export default SingleCampsite