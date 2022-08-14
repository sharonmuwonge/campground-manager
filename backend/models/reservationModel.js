const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reservationSchema = new Schema({
    arriveDate: {
        type: String,
        required: true
    },
    departDate: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Reservation', reservationSchema)