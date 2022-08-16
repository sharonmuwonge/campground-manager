const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reservationSchema = new Schema({
    arriveDate: {
        type: Date,
        required: true
    },
    departDate: {
        type: Date,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    checkedin: {
        type: Boolean,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Reservation', reservationSchema)