const express = require('express')
const router = express.Router()

const {getLatestReservations,
        getReservation,
        getReservationsArrivals,
        getReservationsDepartures,
        getReservationsCheckedin,
        createReservation,
        updateReservation,
        deleteReservation
    } = require('../controllers/reservationController')

const requireAuth = require('../middleware/requireAuth')

// pass authorization validation before accessing APIs
router.use(requireAuth)

// Get all reservations
router.get('/', getLatestReservations)

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