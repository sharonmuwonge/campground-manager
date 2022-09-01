import { useEffect, useState } from "react"
import Add from "../components/Buttons/Add"
import ReservationForm from "../components/Forms/Reservation"
import LatestReservations from "../components/Reservations/Latest"
import ReservationTimeline from "../components/Reservations/Timeline"
import { useReservationsContext } from '../hooks/useReservationsContext'

const Reservations = () => {

  const {dispatch} = useReservationsContext()
  const [create] = useState(true)
  const [reservations, setReservations] = useState([])
  const [toggleAdd, setToggleAdd] = useState(true)

  useEffect(() => {

    const fetchLatestReservations = async () => {

        const response = await fetch('/reservations')
        const json = await response.json()
        if (response.ok) {
            dispatch({type: 'SET_RESERVATIONS', payload: json})
            setReservations(json)
        }

      } 

    fetchLatestReservations()

}, [dispatch])

  function handleClick (event) {
    setToggleAdd (current => !current)
  }

  return (
    <div>
      <header>
            <h1>Daily Overview</h1>
            { toggleAdd && < Add addClick={handleClick}  /> }
      </header>
      { !toggleAdd && < ReservationForm create={create} buttonClick={handleClick}/> }
      < ReservationTimeline reservations={reservations} />
      <h2>Latest Reservations</h2>
      < LatestReservations reservations={reservations}/>
    </div>
  )
}

export default Reservations
