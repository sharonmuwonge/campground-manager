const express = require('express')
const router = express.Router()

const {getReservations,
        getReservation,
        getReservationsArrivals,
        getReservationsDepartures,
        getReservationsCheckedin,
        createReservation,
        updateReservation,
        deleteReservation
    } = require('../controllers/reservationController')

// Get all reservations
router.get('/', getReservations)

// Get all reservations
router.get('/:date/arrivals', getReservationsArrivals)

// Get all reservations
router.get('/:date/departures', getReservationsDepartures)

// Get all reservations
router.get('/:date/checkedin', getReservationsCheckedin)

// Create a new reservation
router.post('/', createReservation)

// Get, update or delete a single reservation
router.route('/:id').get(getReservation).put(updateReservation).delete(deleteReservation)

module.exports = router