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

  const [reservationInfo, setReservationInfo] = useState(null)
  const [toggleEdit, setToggleEdit] = useState(true)
  const [edit] = useState(true)
    
  useEffect(() => {
  
      const fetchReservationInfo = async () => {
  
          const response = await fetch(`/reservations/${id}`)
          const json = await response.json()
  
          if (response.ok) {
              setReservationInfo(json)
          }
      }
  
      fetchReservationInfo()
  }, [id])

  function handleClickEdit(event) {
    setToggleEdit(current => !current)
  }

  return (
    <div>
      < Edit editClick={handleClickEdit}  />
      < Cancel />
      {toggleEdit ? < SingleReservation reservationInfo={reservationInfo} /> : < ReservationForm reservationInfo={reservationInfo} edit={edit} /> }
    </div>
  )
}



export default Reservation
