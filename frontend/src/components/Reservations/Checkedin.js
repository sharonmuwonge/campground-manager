import { useEffect, useState } from 'react'
import {Table, Thead, Tbody, Tr, Th, Td, TableContainer} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'

const ReservationsCheckedinList = ({date}) => {

    const [reservationsCheckedin, setReservationsCheckedin] = useState(null)
    const navigate = useNavigate()
    const {user} = useAuthContext()

    useEffect(() => {

        const fetchReservationsCheckedin = async () => {

            const response = await fetch(`/reservations/${date}/checkedin`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            }
            )
            const json = await response.json()

            if (response.ok) {
                setReservationsCheckedin(json)
            }

            if (!response.ok) {
                setReservationsCheckedin('')
            }
        }

        if (user) {
            fetchReservationsCheckedin()
        }

    }, [date, user])
    
    const getTableBody = () => {
        if (reservationsCheckedin && reservationsCheckedin.length > 0 ) {
            const tableBody = 
                <Tbody>
                    {reservationsCheckedin.map((reservation) => (
                        <Tr className='reservationInfo' key={reservation._id} onClick={(e) => { navigate(`/reservations/${reservation._id}`)}} cursor='pointer'>
                                <Td>{reservation.campsite}</Td>
                                <Td>{reservation.firstName} {reservation.lastName}</Td>
                                <Td>{reservation.arriveDate && reservation.arriveDate.slice(0,10)}</Td>
                                <Td>{reservation.departDate && reservation.departDate.slice(0,10)}</Td>
                        </Tr>
                    )) }
                </Tbody>
            return tableBody
        } else {
            const tableBody = 
                <Tbody>
                    <Tr className='reservationInfo' >
                            <Td>No arrivals.</Td>
                    </Tr>
                </Tbody>
            return tableBody
        }
    }

    return(
        <>
            <TableContainer>
                <Table variant='simple' size='sm' id="checkedin" className='reservations'>
                    <Thead>
                    <Tr>
                        <Th width='20%'>Campsite</Th>
                        <Th width='40%'>Name</Th>
                        <Th width='20%'>Arrive Date</Th>
                        <Th width='20%'>Depart Date</Th>
                    </Tr>
                    </Thead>
                    {getTableBody()}
                </Table>
            </TableContainer>
        </>
    )

}

export default ReservationsCheckedinList