import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function CampsiteList() {

    const [campsites, setCampsites] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {

        const fetchCampsites = async () => {

            const response = await fetch('/campsites')
            const json = await response.json()

            if (response.ok) {
                setCampsites(json)
            }
        }

        fetchCampsites()
    }, [])

//   return (
//     <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
//     <Image src={campsite.imageUrl} alt={campsite.imageAlt} />

//     <Box p='6'>
//       <Box display='flex' alignItems='baseline'>
//         <Badge borderRadius='full' px='2' colorScheme='teal'>
//           {campsite.campsiteID}
//         </Badge>
//         <Box
//           color='gray.500'
//           fontWeight='semibold'
//           letterSpacing='wide'
//           fontSize='xs'
//           textTransform='uppercase'
//           ml='2'
//         >
//           {campsite.facilityName}
//         </Box>
//       </Box>

//       <Box
//         mt='1'
//         fontWeight='semibold'
//         as='h4'
//         lineHeight='tight'
//         noOfLines={1}
//       >
//         Full hookup > {campsite.campsiteType}
//       </Box>

//       <Box>
//         <Box as='p' color='gray.600' fontSize='sm'>
//          {campsite.feePerNight} / night
//         </Box>
//       </Box>
//     </Box>
//     <Box as='p' ml='2' color='gray.600' fontSize='sm'><strong>allowed equipment:</strong> {campsite.permittedEquipment}
//         </Box>
//   </Box>

//     <>  
//     {campsites instanceof Array && campsites.length > 0 ? 
//         <TableContainer>
//             <Table variant='simple' size='sm' id="latest" className='campsites'>
//                 <Thead>
//                 <Tr>
//                     <Th width='20%'>Campsite</Th>
//                     <Th width='40%'>Name</Th>
//                     <Th width='20%'>Arrive Date</Th>
//                     <Th width='20%'>Depart Date</Th>
//                 </Tr>
//                 </Thead>
//                 <Tbody>
//                     {campsites.map((campsite) => (
//                         <Tr className='campsiteInfo' key={campsite._id} onClick={(e) => { navigate(`/campsites/${campsite._id}`)}} cursor='pointer'>
//                                 <Td>{campsite.campsiteID}</Td>
//                                 <Td>{campsite.firstName} {campsite.lastName}</Td>
//                                 <Td>{campsite.arriveDate && campsite.arriveDate.slice(0,10)}</Td>
//                                 <Td>{campsite.departDate && campsite.departDate.slice(0,10)}</Td>
//                         </Tr>
//                     )) }
//                 </Tbody>
//             </Table>
//         </TableContainer>
//     : <p>No campsites.</p>}
//     </>

//   )
}

export default CampsiteList
