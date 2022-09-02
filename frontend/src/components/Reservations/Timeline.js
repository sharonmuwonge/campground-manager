import React from 'react'
import Timeline from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import { useEffect, useState } from "react"
import { useReservationsContext } from '../../hooks/useReservationsContext'
import { useNavigate } from 'react-router-dom'

const ReservationTimeline = () => {

  const [items, setItems] = useState([])
  const {reservations, dispatch} = useReservationsContext()
  const groups = [{ id: 1, title: 'Site 1' }, { id: 2, title: 'Site 2' }, { id: 4, title: 'Site 4'}, { id: 6, title: 'Site 6' }] // replace with campsites
  const timeSteps = {day: 1}
  const navigate = useNavigate()

  useEffect(() => {

    if (reservations && reservations instanceof Array ) { 
        setItems(reservations.map( reservation => ({id:reservation._id, title:`${reservation.firstName} ${reservation.lastName}`, start_time:moment(reservation.arriveDate.slice(0,10)).add(12, 'hours'), end_time:moment(reservation.departDate.slice(0,10)).add(12, 'hours'), group: reservation.campsite,  
        itemProps: {
          onMouseUp: (e) => { navigate(`/reservations/${reservation._id}`)},
      }})))
      } else {
        console.log(
          'Waiting for reservations...'
        )
      }

  }, [reservations, dispatch, navigate])

  return (
    <>
      {items && items.length > 0 ? 
        <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(-1, 'day')}
        defaultTimeEnd={moment().add(3, 'day')}
        timeSteps={timeSteps}
        canMove={false}
        />
        : <p>Loading...</p>}
    </>
  )
}


export default ReservationTimeline