import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function CampsiteList() {

    const [campsites, setCampsite] = useState(null)

    useEffect(() => {

        const fetchCampsites = async () => {

            const response = await fetch('/campsites')
            const json = await response.json()

            if (response.ok) {
                setCampsite(json)
            }
        }

        fetchCampsites()
    }, [])

  return (
    <section className='campsiteList'>
        {campsites && campsites.map((campsite) => (
            <section id='campsite' className='campsiteCard' key={campsite._id}>
                <Link to={`/campsites/${campsite._id}`} className='campsite-link'> 
                    <li>{campsite.campsiteID} {campsite.campsiteName} {campsite.facilityName}</li>
                </Link>
            </section>
        ))}
    </section>
  )
}

export default CampsiteList
