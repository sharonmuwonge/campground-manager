import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import { useReservationsContext } from '../../hooks/useReservationsContext'
import {Table, Thead, Tbody, Tr, Th, Td, TableContainer} from '@chakra-ui/react'

const LatestReservations = () => {

    const {reservations, dispatch} = useReservationsContext()
    const [items, setItems] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
            setItems(reservations)
    }, [reservations])

    useEffect(() => {
            setItems(dispatch)
    }, [dispatch])

    return(
        <>  
            {items instanceof Array && items.length > 0 ? 
                <TableContainer>
                    <Table variant='simple' id="latest" className='reservations'>
                        <Thead>
                        <Tr>
                            <Th>Campsite</Th>
                            <Th>Name</Th>
                            <Th>Arrive Date</Th>
                            <Th>Depart Date</Th>
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