import { useEffect, useState } from 'react'
import ReservationForm from "../components/Forms/Reservation"
import SingleReservation from "../components/Reservations/SingleReservation"

const Reservation = () => {

  // Only display SingleReservation component
  // Add Edit Reservation button + Cancel reservation button
  // On click Edit Reservation button: hide SingleReservation component and show ReservationForm
  // Remove Edit reservation and Cancel reservation button, add Save and Cancel buttons
  
  const id = window.location.pathname.slice(14)

  const [reservationInfo, setReservationInfo] = useState(null)
    
  useEffect(() => {
  
      const fetchReservationInfo = async () => {
  
          const response = await fetch(`/reservations/${id}`)
          const json = await response.json()
  
          if (response.ok) {
              setReservationInfo(json)
              console.log(json)
          }
      }
  
      fetchReservationInfo()
  }, [id])

  return (
    <div>
      < SingleReservation reservationInfo={reservationInfo} id={id} />     
      < ReservationForm />
    </div>
  )
}



export default Reservation
