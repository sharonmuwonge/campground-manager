import React from 'react'
import Timeline from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import { useEffect, useState } from "react"
import { useReservationsContext } from '../../hooks/useReservationsContext'

const ReservationTimeline = () => {

  const [items, setItems] = useState([])
  const {reservations, dispatch} = useReservationsContext()
  const groups = [{ id: 1, title: 'Site 1' }, { id: 2, title: 'Site 2' }, { id: 4, title: 'Site 4' }, { id: 6, title: 'Site 6' }] // replace with campsites
  const timeSteps = {day: 1}

  useEffect(() => {

        if (reservations && reservations.length > 0) { 
            setItems(reservations.map( reservation => ({id:reservation._id, title:`${reservation.firstName} ${reservation.lastName}`, start_time:moment(reservation.arriveDate), end_time:moment(reservation.departDate), group: reservation.campsite})))
          }

  }, [reservations, dispatch])

  return (
    <>
      {items && items.length > 0 ? 
        <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(-1, 'day')}
        defaultTimeEnd={moment().add(1, 'day')}
        timeSteps={timeSteps}
        />
        : <p>Loading...</p>}
    </>
  )
}


export default ReservationTimeline