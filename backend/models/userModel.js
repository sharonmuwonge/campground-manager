const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    userRole: {
        type: String,
        required: true
    },
    facilityName: {
        type: Array,
        required: true
    },
    facilityID: {
        type: Array,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)