const Reservation = require('../models/reservationModel')
const mongoose = require('mongoose')

//Get all reservations for overview, GET /reservations, private

const getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find({}).sort({createdAt: -1})
    res.status(200).json(reservations)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//Get single reservation, GET /reservations/:id, private
const getReservation = async (req, res) => {
    const {id} = req.params

    // only check db if ObjectId is used
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json('Reservation not found')
    }

    const reservation = await Reservation.findById(id)

    if (!reservation){
        return res.status(404).json('Reservation not found')
    }

    res.status(200).json(reservation)
}

//Create single reservation, POST /reservations/:id, private
const createReservation = async (req, res) => {
    const {arriveDate, departDate, firstName, lastName} = req.body
    try {
        const reservation = await Reservation.create({arriveDate, departDate, firstName, lastName})
        res.status(200).json(reservation)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//Update single reservation, PUT /reservations/:id, private
const updateReservation = async (req, res) => {
    const {id} = req.params

    // only check db if ObjectId is used
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json('Reservation not found')
    }

    const reservation = await Reservation.findOneAndUpdate({_id: id}, {...req.body})

    if (!reservation){
        return res.status(404).json('Reservation not found')
    }

    res.status(200).json(`Reservation ${id} updated: ${reservation}`)
}

//Delete single reservation, DELETE /reservations/:id, private
const deleteReservation = async (req, res) => {
    const {id} = req.params

    // only check db if ObjectId is used
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json('Reservation not found')
    }

    const reservation = await Reservation.findOneAndDelete({_id: id})
    
    if (!reservation){
        return res.status(404).json('Reservation not found')
    }

    res.status(200).json(`Reservation ${id} deleted.`)
}

module.exports = {getReservations, getReservation, createReservation, updateReservation, deleteReservation}