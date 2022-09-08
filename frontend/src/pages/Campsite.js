import { React, useEffect, useState } from 'react'
import CampsiteForm from "../components/Forms/Campsite"
import SingleCampsite from "../components/Campsites/SingleCampsite"

const Campsite = () => {

  // Only display SingleCampsite component
  // Add Edit Campsite button + Cancel campsite button
  // On click Edit campsite button: hide SingleCampsite component and show CampsiteForm
  // Remove Edit campsite and Cancel campsite button, add Save and Cancel buttons
  
  const id = window.location.pathname.slice(11)

  const [campsite, setCampsite] = useState(null)
  const [edit] = useState(true)
    
  useEffect(() => {
  
      const fetchCampsite = async () => {
  
          const response = await fetch(`/campsites/${id}`)
          const json = await response.json()
  
          if (response.ok) {
              setCampsite(json)
          }
      }
  
      fetchCampsite()
  }, [id, campsite])

  return (
    <div>
        < CampsiteForm id={id} campsite={campsite} edit={edit}/>
        < SingleCampsite campsite={campsite} />
    </div>
  )
}



export default Campsite
