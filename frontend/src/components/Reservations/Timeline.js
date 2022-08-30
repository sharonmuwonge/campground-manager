import React from 'react'
import Timeline from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'


function ReservationTimeline() {

const groups = [{ id: 1, title: 'Site 1' }, { id: 2, title: 'Site 2' }]
// replace with campsites

const items = [
  {
    id: 1,
    group: 1,
    title: 'Jane Baker',
    start_time: moment(),
    end_time: moment().add(1, 'day')
  },
  {
    id: 2,
    group: 2,
    title: 'Flynn Jax',
    start_time: moment().add(-0.5, 'day'),
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