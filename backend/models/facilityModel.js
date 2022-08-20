const mongoose = require('mongoose')

const Schema = mongoose.Schema

const facilitySchema = new Schema({
    facilityID: {
        type: Number,
        required: true
    },
    facilityName: {
        type: String,
        required: true
    },
    facilityDescription: {
        type: String,
        required: true
    },
    facilityPhone: {
        type: Number,
        required: true
    },
    facilityURL: {
        type: String,
        required: true
    },
    facilityLongitude: {
        type: Number,
        required: true
    },
    facilityLatitude: {
        type: Number,
        required: true
    },
    facilityStreetAddress: {
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
    stayLimit: {
        type: Number,
        required: true
    },
    reservable: {
        type: String,
        required: false
    },
    activity: {
        type: Array,
        required: true
    },
    media: {
        type: Array,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Facility', facilitySchema)