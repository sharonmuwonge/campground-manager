const Reservation = require('../models/reservationModel')
const mongoose = require('mongoose')

//Get all reservations in descending order, GET /reservations, private

const getLatestReservations = async (req, res) => {

    try {
        const reservations = await Reservation.find({}).sort({createdAt: -1}).limit(20)
    res.status(200).json(reservations)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//Get reservations that match with selected arrival date, GET /reservations/:date/arrivals

const getReservationsArrivals = async (req, res) => {
    const {date} = req.params
    console.log(date)

    try {
        const reservations = await Reservation.find({arriveDate: date}).sort({createdAt: -1})
    res.status(200).json(reservations)
    } catch (error) {
        res.status(400).json({error: error.message})
    }


}

//Get reservations that match with selected arrival date, GET /reservations/:date/departures

const getReservationsDepartures = async (req, res) => {
    const {date} = req.params
    console.log(date)

    try {
        const reservations = await Reservation.find({departDate: date}).sort({createdAt: -1})
    res.status(200).json(reservations)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//Get reservations that arrive earlier than selected date and depart later than selected date, GET /reservations/:date/checkedin

const getReservationsCheckedin = async (req, res) => {
    const {date} = req.params
    console.log(date)

    try {
        const reservations = await Reservation.find({
            "arriveDate": { $lte: date
            },
            "departDate": { $gt: date
            }
        }).sort({createdAt: -1})
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
    const {firstName, lastName, arriveDate, departDate, campsite, people, pets, licensePlate, vehicles, streetAddress, city, postalCode, stateCode, countryCode, customerPhone, customerEmail, paidInFull, checkedin} = req.body
    try {
        const reservation = await Reservation.create({firstName, lastName, arriveDate, departDate, campsite, people, pets, licensePlate, vehicles, streetAddress, city, postalCode, stateCode, countryCode, customerPhone, customerEmail, paidInFull, checkedin})
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

    res.status(200).json(`Reservation ${id} updated.`)
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

module.exports = {getLatestReservations, getReservationsArrivals, getReservationsDepartures, getReservationsCheckedin, getReservation, createReservation, updateReservation, deleteReservation}