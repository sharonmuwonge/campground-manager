const mongoose = require('mongoose')

const Schema = mongoose.Schema

const campsiteSchema = new Schema({
    campsiteID: {
        type: Number,
        required: true
    },
    campsiteName: {
        type: String,
        required: true
    },
    facilityID: {
        type: Number,
        required: true
    },
    facilityName: {
        type: String,
        required: true
    },
    campsiteType: {
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
    uses: {
        type: String,
        required: true
    },
    onLoop: {
        type: String,
        required: true
    },
    permittedEquipment: {
        type: String,
        required: true
    },
    amenities: {
        type: Array,
        required: true
    },
    feePerNight: {
        type: Number,
        required: true
    },
    reservationFee: {
        type: Number,
        required: true
    },
    maxVehicles: {
        type: Number,
        required: true
    },
    vehicleFee: {
        type: Number,
        required: true
    },
    maxPersons: {
        type: Number,
        required: true
    },
    tentsAllowed: {
        type: String,
        required: true
    },
    maxTents: {
        type: Number,
        required: true
    },
    petsAllowed: {
        type: String,
        required: true
    },
    maxPets: {
        type: Number,
        required: true
    },
    petFee: {
        type: Number,
        required: true
    },
    media: {
        type: String,
        required: false
    }
}, {timestamps: true})

module.exports = mongoose.model('Campsite', campsiteSchema)