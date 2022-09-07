import { useState, useEffect } from "react"
import { useReservationsContext } from "../../hooks/useReservationsContext"
import Edit from "../Buttons/Edit"
import Save from "../Buttons/Save"
import { Stack, Radio, RadioGroup, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input } from '@chakra-ui/react'
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
  

const ReservationForm = ({id, reservation, edit, create, formSubmit, buttonClick}) => {

    
    const getToday = () => {
        return new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0,10)
      }
  
    const clear = () => {
        setFirstName('')
        setLastName('')
        setArriveDate(null)
        setDepartDate(null)
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
        setMaxArriveDate(null)
        setMaxDepartDate(null)
        setMinArriveDate(null)
        setMinDepartDate(null)
        setError(null)
    }

    const bottomOfForm = reservation && reservation.checkedin
    const {dispatch} = useReservationsContext()
    const {onOpen, isOpen, onClose } = useDisclosure()

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
    const [maxArriveDate, setMaxArriveDate] = useState(null)
    const [maxDepartDate, setMaxDepartDate] = useState(null)
    const [minArriveDate, setMinArriveDate] = useState(getToday)
    const [minDepartDate, setMinDepartDate] = useState(getToday)
    

    useEffect(() => {
        if (reservation && reservation) { 
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
        } else {
            console.log(
            'Waiting for reservation...'
            )
        }
    }, [bottomOfForm])
    
    useEffect(() => {

        if (departDate) {
            setMaxArriveDate(departDate)

            let maxStay = new Date(departDate);
            maxStay.setDate(maxStay.getDate() - 14)
            setMinArriveDate(maxStay.toISOString().slice(0,10))
        }

    }, [departDate])

    useEffect(() => {

        if (arriveDate) {
            setMinDepartDate(arriveDate)

            let maxStay = new Date(arriveDate);
            maxStay.setDate(maxStay.getDate() + 14)
            setMaxDepartDate(maxStay.toISOString().slice(0,10))
            
        }

    }, [arriveDate])


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
                setError(null)
                console.log('Reservation updated', json)
                dispatch({type: 'SET_RESERVATIONS', payload: json})
                onClose()
            }
        }

        else {

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
                console.log('New reservation added', json)
                dispatch({type: 'CREATE_RESERVATION', payload: json})
                clear()
                onClose()
            }
        }
    }

    return (
        <>
            {edit ? <>< Edit editClick={onOpen}/> <Cancel formType={' reservation'} /> </>: <Add addClick={onOpen} />}
            <Drawer isOpen={isOpen} onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    {edit ? <DrawerHeader>Edit reservation</DrawerHeader> : <DrawerHeader>Add new reservation</DrawerHeader> }
                    <DrawerBody>
                        <form id='reservationForm' onSubmit={handleSubmit}>
                            <Stack>

                            < FormControl isRequired>
                            <FormLabel>First name:</FormLabel>
                                <Input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName || ''} />
                            </FormControl>

                            < FormControl isRequired>
                            <FormLabel>Last name:</FormLabel>
                                <Input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName || ''} />
                            </FormControl>

                            < FormControl isRequired>
                            <FormLabel>Arrival date:</FormLabel>
                                <Input type="date" onChange={(e) => setArriveDate(e.target.value)} value={arriveDate || ''} min={minArriveDate} max={maxArriveDate} />
                            </FormControl>

                            < FormControl isRequired>
                            <FormLabel>Departure date:</FormLabel>
                                <Input type="date" onChange={(e) => setDepartDate(e.target.value)} value={departDate || ''} min={minDepartDate} max={maxDepartDate} />
                            </FormControl>

                            < FormControl isRequired>
                            <FormLabel>Campsite:</FormLabel>
                                <Input type="number" onChange={(e) => setCampsite(e.target.value)} value={campsite || ''} /> 
                            </FormControl>

                            < FormControl isRequired>
                            <FormLabel>People:</FormLabel>
                                <Input type="number" onChange={(e) => setPeople(e.target.value)} value={people || ''} />
                            </FormControl>

                            < FormControl isRequired>
                            <FormLabel>Pets:</FormLabel>
                                <Input type="number" onChange={(e) => setPets(e.target.value)} value={pets || (edit && '0' )|| '' } />
                            </FormControl>

                            < FormControl isRequired>
                            <FormLabel>License Plate:</FormLabel>
                                <Input type="text" onChange={(e) => setLicensePlate(e.target.value)} value={licensePlate || (edit && '-') || '' } />
                            </FormControl>

                            < FormControl isRequired>
                            <FormLabel>Vehicles:</FormLabel>
                                <Input type="number" onChange={(e) => setVehicles(e.target.value)} value={vehicles || (edit && '0' )|| '' } />
                            </FormControl>

                            < FormControl isRequired>
                                <FormLabel>Street Address:</FormLabel>
                                <Input type="text" onChange={(e) => setStreetAddress(e.target.value)} value={streetAddress || ''} />    
                            </FormControl>

                            < FormControl isRequired>
                                <FormLabel>City:</FormLabel>
                                <Input type="text" onChange={(e) => setCity(e.target.value)} value={city || ''} />
                            </FormControl>

                            < FormControl isRequired>
                                <FormLabel>Postal Code:</FormLabel>
                                <Input type="text" onChange={(e) => setPostalCode(e.target.value)} value={postalCode || ''} />
                            </FormControl>

                            < FormControl isRequired>
                                <FormLabel>State:</FormLabel>
                                <Input type="Text" onChange={(e) => setStateCode(e.target.value)} value={stateCode || ''} />
                            </FormControl>

                            < FormControl isRequired>
                                <FormLabel>Country:</FormLabel>
                                <Input type="text" onChange={(e) => setCountryCode(e.target.value)} value={countryCode || ''} />
                            </FormControl>

                            < FormControl isRequired>
                                <FormLabel>Customer Phone:</FormLabel>
                                <Input type="number" onChange={(e) => setCustomerPhone(e.target.value)} value={customerPhone || ''} />
                            </FormControl>

                            < FormControl isRequired>
                                <FormLabel>Customer Email:</FormLabel>
                                <Input type="email" onChange={(e) => setCustomerEmail(e.target.value)} value={customerEmail || ''} />
                            </FormControl>

                            < FormControl isRequired>
                                <FormLabel>Paid in Full:</FormLabel>
                                <RadioGroup onChange={(e) => setPaidInFull(e)} value={paidInFull || ''}>
                                    <Stack direction='row'>
                                        <Radio value='No'>No</Radio>
                                        <Radio value='Yes'>Yes</Radio>
                                    </Stack>
                                </RadioGroup>
                            </FormControl>

                            < FormControl isRequired>
                                <FormLabel>Checked In:</FormLabel>
                                <RadioGroup onChange={(e) => setCheckedin(e)} value={checkedin || ''}>
                                    <Stack direction='row'>
                                        <Radio value='No'>No</Radio>
                                        <Radio value='Yes'>Yes</Radio>
                                    </Stack>
                                </RadioGroup>
                            </FormControl>

                            </Stack>
                        </form>
                    </DrawerBody>
                    <DrawerFooter>
                        <Cancel cancelClick={onClose} /> 
                        {edit ? <Save formName='reservationForm' /> : <Add formName='reservationForm' />}
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}


export default ReservationForm