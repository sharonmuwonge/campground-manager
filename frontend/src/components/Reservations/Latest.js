import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import { useReservationsContext } from '../../hooks/useReservationsContext'
import {Table, Thead, Tbody, Tr, Th, Td, TableContainer} from '@chakra-ui/react'
import { useAuthContext } from '../../hooks/useAuthContext'

const LatestReservations = () => {

    const {reservations} = useReservationsContext()
    const [items, setItems] = useState([])
    const navigate = useNavigate()
    const {user} = useAuthContext()

    useEffect(() => {
            setItems(reservations)
    }, [reservations, user])

    return(
        <>  
            {items instanceof Array && items.length > 0 ? 
                <TableContainer>
                    <Table variant='simple' size='sm' id="latest" className='reservations'>
                        <Thead>
                        <Tr>
                            <Th width='20%'>Campsite</Th>
                            <Th width='40%'>Name</Th>
                            <Th width='20%'>Arrival</Th>
                            <Th width='20%'>Departure</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                            {items.map((reservation) => (
                                <Tr className='reservationInfo' key={reservation._id} onClick={(e) => { navigate(`/reservations/${reservation._id}`)}} cursor='pointer'>
                                        <Td>{reservation.campsite}</Td>
                                        <Td>{reservation.firstName} {reservation.lastName}</Td>
                                        <Td>{reservation.arriveDate && reservation.arriveDate.slice(0,10)}</Td>
                                        <Td>{reservation.departDate && reservation.departDate.slice(0,10)}</Td>
                                </Tr>
                            )) }
                        </Tbody>
                    </Table>
                </TableContainer>
            : <p>No reservations.</p>}
        </>
    )

}

export default LatestReservations