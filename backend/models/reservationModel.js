const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reservationSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    arriveDate: {
        type: Date,
        required: true
    },
    departDate: {
        type: Date,
        required: true
    },
    campsite: {
        type: Number,
        required: true
    },
    people: {
        type: Number,
        required: true
    },
    pets: {
        type: Number,
        required: true
    },
    licensePlate: {
        type: String,
        required: true
    },
    vehicles: {
        type: Number,
        required: true
    },
    streetAddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    stateCode: {
        type: String,
        required: true
    },
    countryCode: {
        type: String,
        required: true
    },
    customerPhone: {
        type: Number,
        required: true
    },
    customerEmail: {
        type: String,
        required: true
    },
    paidInFull: {
        type: String,
        required: true
    },
    checkedin: {
        type: String,
        required: true
    },
    facility: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Reservation', reservationSchema)