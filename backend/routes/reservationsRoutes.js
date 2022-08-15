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
router.get('/:arriveDate/arrivals', getReservationsArrivals)

// Get all reservations
router.get('/:departDate/departures', getReservationsDepartures)

// Get all reservations
router.get('/:arriveDate&:departDate/checkedin', getReservationsCheckedin)

// Create a new reservation
router.post('/', createReservation)

// Get a single reservation
router.get('/:id', getReservation)

// Update a single reservation
router.patch('/:id', updateReservation)

// Delete a single reservation
router.delete('/:id', deleteReservation)

// router.route('/:id').post(createReservation).get(getReservation).put(updateReservation).delete(deleteReservation)

module.exports = router