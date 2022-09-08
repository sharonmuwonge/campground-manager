import { useState, useEffect } from "react"
import Edit from "../Buttons/Edit"
import Save from "../Buttons/Save"
import { Stack, Radio, RadioGroup, FormControl,FormLabel, FormErrorMessage, FormHelperText, Input } from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
  } from '@chakra-ui/react'
  import Cancel from "../../components/Buttons/Cancel"
  import Add from "../../components/Buttons/Add"

  const CampsiteForm = ({id, campsite, edit, create, formSubmit, buttonClick}) => {

    const clear = () => {
        setCampsiteID(null)
        setCampsiteName('')
        setFacilityID(null)
        setFacilityName('')
        setCampsiteType('')
        setFacilityLongitude('')
        setFacilityLatitude('')
        setUses('')
        setOnLoop(null)
        setPermittedEquipment('')
        setAmenities('')
        setFeePerNight(null)
        setReservationFee(null)
        setMaxVehicles(null)
        setVehicleFee(null)
        setMaxPersons(null)
        setTentsAllowed('')
        setMaxTents(null)
        setPetsAllowed('')
        setMaxPets(null)
        setPetFee(null)
        setMedia('')
        setError(null)
      }
    
    const bottomOfForm = campsite && campsite.media
    const {onOpen, isOpen, onClose } = useDisclosure()

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
    const [error, setError] = useState(null)

    useEffect(() => {
        if (campsite && campsite) { 
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
        } else {
            console.log(
            'Waiting for campsite...'
            )
        }
    }, [bottomOfForm])

    const handleSubmit = async (e) => {
        e.preventDefault()

        campsite = { campsiteID, campsiteName, facilityID, facilityName, campsiteType, facilityLongitude, facilityLatitude, uses, onLoop, permittedEquipment, amenities, feePerNight, reservationFee, maxVehicles, vehicleFee, maxPersons, tentsAllowed, maxTents, petsAllowed, maxPets, petFee, media }

        if (edit) {
            const response = await fetch(`/campsites/${id}`, {
                method: 'PUT',
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
            setError(null)
            console.log('Campsite updated', json)
            onClose()
        }
    }

    else {

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
            console.log('New campsite added', json)
            clear()
            onClose()
        }
    }
}

    return (
        <>
            {edit ? <>< Edit editClick={onOpen}/> <Cancel formType={' campsite'} /> </>: <Add addClick={onOpen} />}
            <Drawer isOpen={isOpen} onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    {edit ? <DrawerHeader>Edit campsite</DrawerHeader> : <DrawerHeader>Add new campsite</DrawerHeader> }
                    <DrawerBody>
                        <form id='campsiteForm' onSubmit={handleSubmit}>
                            <Stack>

                            < FormControl isRequired>
                            <FormLabel>Campsite ID</FormLabel>
                                <Input type="number" onChange={(e) => setCampsiteID(e.target.value)} value={campsiteID || ''} />
                            </FormControl>

                            < FormControl isRequired>
                            <FormLabel>Campsite name</FormLabel>
                                <Input type="text" onChange={(e) => setCampsiteName(e.target.value)} value={campsiteName || ''} />
                            </FormControl>

                            < FormControl isRequired>
                            <FormLabel>Facility ID</FormLabel>
                                <Input type="number" onChange={(e) => setFacilityID(e.target.value)} value={facilityID || ''} />
                            </FormControl>

                            < FormControl isRequired>
                            <FormLabel>Facility name</FormLabel>
                                <Input type="text" onChange={(e) => setFacilityName(e.target.value)} value={facilityName || ''} />
                            </FormControl>

                            < FormControl isRequired>
                            <FormLabel>Campsite type</FormLabel>
                                <Input type="text" onChange={(e) => setCampsiteType(e.target.value)} value={campsiteType || ''} /> 
                            </FormControl>

                            < FormControl isRequired>
                            <FormLabel>Facility longitude</FormLabel>
                                <Input type="number" onChange={(e) => setFacilityLongitude(e.target.value)} value={facilityLongitude || ''} />
                            </FormControl>

                            < FormControl isRequired>
                            <FormLabel>Facility latitude</FormLabel>
                                <Input type="number" onChange={(e) => setFacilityLatitude(e.target.value)} value={facilityLatitude || '' } />
                            </FormControl>

                            < FormControl isRequired>
                            <FormLabel>Uses</FormLabel>
                                <Input type="text" onChange={(e) => setUses(e.target.value)} value={uses || '' } />
                            </FormControl>

                            < FormControl isRequired>
                            <FormLabel>On loop</FormLabel>
                                <Input type="number" onChange={(e) => setOnLoop(e.target.value)} value={onLoop || '' } />
                            </FormControl>

                            < FormControl isRequired>
                                <FormLabel>Permitted equipment</FormLabel>
                                <Input type="text" onChange={(e) => setPermittedEquipment(e.target.value)} value={permittedEquipment || ''} />    
                            </FormControl>

                            < FormControl isRequired>
                                <FormLabel>Amenities</FormLabel>
                                <Input type="text" onChange={(e) => setAmenities(e.target.value)} value={amenities || ''} />
                            </FormControl>

                            < FormControl isRequired>
                                <FormLabel>Fee per night</FormLabel>
                                <Input type="number" onChange={(e) => setFeePerNight(e.target.value)} value={feePerNight || ''} />
                            </FormControl>

                            < FormControl isRequired>
                                <FormLabel>Reservation fee</FormLabel>
                                <Input type="number" onChange={(e) => setReservationFee(e.target.value)} value={reservationFee || ''} />
                            </FormControl>

                            < FormControl isRequired>
                                <FormLabel>Max vehicles</FormLabel>
                                <Input type="numbers" onChange={(e) => setMaxVehicles(e.target.value)} value={maxVehicles || ''} />
                            </FormControl>

                            < FormControl isRequired>
                                <FormLabel>Vehicle fee</FormLabel>
                                <Input type="number" onChange={(e) => setVehicleFee(e.target.value)} value={vehicleFee || ''} />
                            </FormControl>

                            < FormControl isRequired>
                                <FormLabel>Max persons</FormLabel>
                                <Input type="number" onChange={(e) => setMaxPersons(e.target.value)} value={maxPersons || ''} />
                            </FormControl>

                            < FormControl isRequired>
                                <FormLabel>Tents allowed</FormLabel>
                                <RadioGroup onChange={(e) => setTentsAllowed(e)} value={tentsAllowed || ''}>
                                    <Stack direction='row'>
                                        <Radio value='No'>No</Radio>
                                        <Radio value='Yes'>Yes</Radio>
                                    </Stack>
                                </RadioGroup>
                            </FormControl>

                            < FormControl isRequired>
                                <FormLabel>Max tents</FormLabel>
                                <Input type="number" onChange={(e) => setMaxTents(e.target.value)} value={maxTents || ''} />
                            </FormControl>

                            < FormControl isRequired>
                                <FormLabel>Pets allowed</FormLabel>
                                <RadioGroup onChange={(e) => setPetsAllowed(e)} value={petsAllowed || ''}>
                                    <Stack direction='row'>
                                        <Radio value='No'>No</Radio>
                                        <Radio value='Yes'>Yes</Radio>
                                    </Stack>
                                </RadioGroup>
                            </FormControl>

                            < FormControl isRequired>
                                <FormLabel>Max pets</FormLabel>
                                <Input type="number" onChange={(e) => setMaxPets(e.target.value)} value={maxPets || ''} />
                            </FormControl>

                            < FormControl isRequired>
                                <FormLabel>Pet fee</FormLabel>
                                <Input type="number" onChange={(e) => setPetFee(e.target.value)} value={petFee || ''} />
                            </FormControl>

                            < FormControl isRequired>
                                <FormLabel>Media</FormLabel>
                                <Input type="image" onChange={(e) => setMedia(e.target.value)} value={media || ''} />
                            </FormControl>

                            </Stack>
                        </form>
                    </DrawerBody>
                    <DrawerFooter>
                        <Cancel cancelClick={onClose} /> 
                        {edit ? <Save formName='campsiteForm' /> : <Add formName='campsiteForm' />}
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default CampsiteForm
