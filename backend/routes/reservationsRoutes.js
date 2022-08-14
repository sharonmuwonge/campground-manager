const express = require('express')
const Reservation = require('../models/reservationModel.js')

const router = express.Router()

// const {getReservations,
//         getReservation,
//         createReservation,
//         updateReservation,
//         deleteReservation
//     } from '../frontend/controllers/reservationsController.js'

// Get all reservations
router.get('/', (req, res) => res.json({message: 'all good'}))

// Create a new reservation
router.post('/', async (req, res) => {
    const {arriveDate, departDate, firstName, lastName} = req.body
    try {
        const reservation = await Reservation.create({arriveDate, departDate, firstName, lastName})
        res.status(200).json(reservation)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// Get a single reservation
router.get('/:id', (req, res) => res.json({message: 'one good'}))

// Update a single reservation
router.patch('/:id', (req, res) => res.json({message: 'one new'}))

// Delete a single reservation
router.delete('/:id', (req, res) => res.json({message: 'one gone'}))


// router.route('/:id').post(createReservation).get(getReservation).put(updateReservation).delete(deleteReservation)

module.exports = router