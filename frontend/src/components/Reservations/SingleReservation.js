import { useEffect, useState } from "react"
import { Heading, Text } from "@chakra-ui/react"

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

    return(
        <div id="singleReservation" className='reservation'>
            <Heading as='h2' size='sm'>First name</ Heading>
            <Text fontSize='sm'>{firstName}</ Text>

            <Heading as='h2' size='sm'>Last name</ Heading>
            <Text fontSize='sm'>{lastName}</ Text>
            
            <Heading as='h2' size='sm'>Arrival date</ Heading>
            <Text fontSize='sm'>{arriveDate}</ Text>

            <Heading as='h2' size='sm'>Departure date</ Heading>
            <Text fontSize='sm'>{departDate}</ Text>

            <Heading as='h2' size='sm'>Campsite</ Heading>
            <Text fontSize='sm'>{campsite}</ Text>

            <Heading as='h2' size='sm'>People</ Heading>
            <Text fontSize='sm'>{people}</ Text>

            <Heading as='h2' size='sm'>Pets</ Heading>
            <Text fontSize='sm'>{pets || 0}</ Text>

            <Heading as='h2' size='sm'>License Plate</ Heading>
            <Text fontSize='sm'>{licensePlate || '-'}</ Text>

            <Heading as='h2' size='sm'>Vehicles</ Heading>
            <Text fontSize='sm'>{vehicles || 0}</ Text>

            <Heading as='h2' size='sm'>Street Address</ Heading>
            <Text fontSize='sm'>{streetAddress}</ Text>

            <Heading as='h2' size='sm'>City</ Heading>
            <Text fontSize='sm'>{city}</ Text>

            <Heading as='h2' size='sm'>Postal Code</ Heading>
            <Text fontSize='sm'>{postalCode}</ Text>

            <Heading as='h2' size='sm'>State</ Heading>
            <Text fontSize='sm'>{stateCode}</ Text>

            <Heading as='h2' size='sm'>Country</ Heading>
            <Text fontSize='sm'>{countryCode}</ Text>

            <Heading as='h2' size='sm'>Customer Phone</ Heading>
            <Text fontSize='sm'>{customerPhone}</ Text>

            <Heading as='h2' size='sm'>Customer Email</ Heading>
            <Text fontSize='sm'>{customerEmail}</ Text>

            <Heading as='h2' size='sm'>Paid in Full</ Heading>
            <Text fontSize='sm'>{paidInFull}</ Text>

            <Heading as='h2' size='sm'>Checked In</ Heading>
            <Text fontSize='sm'>{checkedin}</ Text>

        </div>
    )

}

export default SingleReservation