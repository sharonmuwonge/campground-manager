import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Box, Image, Badge } from '@chakra-ui/react'
import { useAuthContext } from '../../hooks/useAuthContext'

function CampsiteList() {

    const [campsites, setCampsites] = useState(null)
    const navigate = useNavigate()
    const {user} = useAuthContext()

    useEffect(() => {

        const fetchCampsites = async () => {

            const response = await fetch('/campsites', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                setCampsites(json)
            }
        }

        if (user) {
            fetchCampsites()
        }

    }, [campsites, user])

  return (
    <>
      {campsites instanceof Array && campsites.length > 0 ? 
        <Box className='campsiteList' w={['100vw', '100vw', '100vw', '25%']} >
            {campsites.map((campsite) => (
                <Box borderWidth='1px' borderRadius='lg' overflow='hidden' className='campsiteInfo' key={campsite._id} onClick={(e) => { navigate(`/campsites/${campsite._id}`)}} cursor='pointer'>
                    {/* <Image src={campsite.imageUrl} alt={campsite.imageAlt} /> */}
                    <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                        {campsite.campsiteID}
                        </Badge>
                        <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                        >
                        {campsite.facilityName}
                        </Box>
                    </Box>

                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        noOfLines={1}
                    >
                        {campsite.campsiteType}
                    </Box>

                    <Box>
                        <Box as='p' color='gray.600' fontSize='sm'>
                        $ {campsite.feePerNight} / night
                        </Box>
                    </Box>
                    </Box>
                    <Box as='p' ml='2' color='gray.600' fontSize='sm'><strong>Permitted equipment:</strong> 
                    {campsite.permittedEquipment}
                    </Box>
                </Box> 
            )) }
        </Box>
      : <p>No campsites.</p>} 
    </>
  )
}

export default CampsiteList
