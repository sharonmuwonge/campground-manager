import { React, useEffect, useState } from 'react'
import CampsiteForm from "../components/Forms/Campsite"
import SingleCampsite from "../components/Campsites/SingleCampsite"
import { Heading } from '@chakra-ui/react'
import { useAuthContext } from '../hooks/useAuthContext'

const Campsite = () => {

  // Only display SingleCampsite component
  // Add Edit Campsite button + Cancel campsite button
  // On click Edit campsite button: hide SingleCampsite component and show CampsiteForm
  // Remove Edit campsite and Cancel campsite button, add Save and Cancel buttons
  
  const id = window.location.pathname.slice(11)

  const [campsite, setCampsite] = useState(null)
  const [edit] = useState(true)
  const {user} = useAuthContext()
    
  useEffect(() => {
  
      const fetchCampsite = async () => {
  
          const response = await fetch(`/campsites/${id}`, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
          const json = await response.json()
  
          if (response.ok) {
              setCampsite(json)
          }
      }
  
      if (user) {
        fetchCampsite()
      }
      
  }, [id, campsite, user])

  return (
    <main>
        <Heading as='h1' size='md'>Campsite {campsite && campsite.campsiteID}</Heading>
          < CampsiteForm id={id} campsite={campsite} edit={edit}/>
          < SingleCampsite campsite={campsite} />
    </main> 
  )
}



export default Campsite
