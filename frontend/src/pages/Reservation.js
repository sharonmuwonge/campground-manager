import { React, useEffect, useState } from 'react'
import ReservationForm from "../components/Forms/Reservation"
import SingleReservation from "../components/Reservations/SingleReservation"
import Edit from "../components/Buttons/Edit"
import Cancel from "../components/Buttons/Cancel"

const Reservation = () => {

  // Only display SingleReservation component
  // Add Edit Reservation button + Cancel reservation button
  // On click Edit Reservation button: hide SingleReservation component and show ReservationForm
  // Remove Edit reservation and Cancel reservation button, add Save and Cancel buttons
  
  const id = window.location.pathname.slice(14)

  const [reservation, setReservation] = useState(null)
  const [toggleEdit, setToggleEdit] = useState(true)
  const [edit] = useState(true)
    
  useEffect(() => {
  
      const fetchReservation = async () => {
  
          const response = await fetch(`/reservations/${id}`)
          const json = await response.json()
  
          if (response.ok) {
              setReservation(json)
          }
      }
  
      fetchReservation()
  }, [id, reservation])

  return (
    <div>
      < ReservationForm id={id} reservation={reservation} edit={edit}/>
      < SingleReservation reservation={reservation} />
    </div>
  )
}



export default Reservation
