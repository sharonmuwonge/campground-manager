import { React, useEffect, useState } from 'react'
import UserForm from "../components/Forms/User"
import { Heading } from '@chakra-ui/react'

const Settings = ({id}) => {
  
//   const id = window.location.pathname.slice(11)

//   const [campsite, setCampsite] = useState(null)
//   const [edit] = useState(true)
    
//   useEffect(() => {
  
//       const fetchCampsite = async () => {
  
//           const response = await fetch(`/campsites/${id}`)
//           const json = await response.json()
  
//           if (response.ok) {
//               setCampsite(json)
//           }
//       }
  
//       fetchCampsite()
//   }, [id, campsite])

  return (
    <main>
        <Heading as='h1' size='md'>Settings</Heading>
          < UserForm id={id} />
          {/* < SingleCampsite campsite={campsite} /> */}
    </main> 
  )
}

export default Settings