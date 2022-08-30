import React from 'react'
import Timeline from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'

const ReservationTimeline = ({reservations}) => {

    async function handleReservations() {
        const res = await reservations
        let result = res.map( reservation => ({title:`${reservation.firstName} ${reservation.lastName}`, start_time:reservation.arriveDate, end_time:reservation.departDate, group: reservation.campsite}) );
        return result
    }

promise.then(result => console.log(handleReservations())).catch( err => console.log(err));

const groups = [{ id: 1, title: 'Site 1' }, { id: 2, title: 'Site 2' }, { id: 6, title: 'Site 6' }]
// replace with campsites

let items = 

[
    {
      id: 1,
      group: 1,
      title: 'Jane Baker',
      start_time: moment("2022-08-26"),
      end_time: moment("2022-08-27")
    },
    {
      id: 2,
      group: 2,
      title: 'Flynn Jax',
      start_time: "2022-08-29",
      end_time: moment().add(0.5, 'day')
    },
    {
      id: 3,
      group: 1,
      title: 'Tucker Brown',
      start_time: moment().add(2, 'day'),
      end_time: moment().add(3, 'day')
    }
  ]

 // replace with reservations

const timeSteps = {day: 1}
    
  return (
    <>
        <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(-1, 'day')}
        defaultTimeEnd={moment().add(1, 'day')}
        timeSteps={timeSteps}
        />
    </>
  )
}


export default ReservationTimeline