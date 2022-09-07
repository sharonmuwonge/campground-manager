import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Box, Image, Badge } from '@chakra-ui/react'

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
    }, [campsites])

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
                        Full hookup 
                        {/* {campsite.campsiteType} */}
                    </Box>

                    <Box>
                        <Box as='p' color='gray.600' fontSize='sm'>
                        {/* {campsite.feePerNight}  */}
                        $ 30 / night
                        </Box>
                    </Box>
                    </Box>
                    <Box as='p' ml='2' color='gray.600' fontSize='sm'><strong>allowed equipment:</strong> 
                    {/* {campsite.permittedEquipment} */}
                    </Box>
                </Box> 
            )) }
        </Box>
      : <p>No campsites.</p>} 
    </>
  )
}

export default CampsiteList
