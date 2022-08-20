const Facility = require('../models/facilityModel')
const mongoose = require('mongoose')

//Get all facilities, GET /facilities, private

const getFacilities = async (req, res) => {

    try {
        const facilities = await Facility.find({}).sort({campsiteID: 1})
    res.status(200).json(facilities)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//Get single facility, GET /facilities/:id, private
const getFacility = async (req, res) => {
    const {id} = req.params

    // only check db if ObjectId is used
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json('Facility not found')
    }

    const facility = await Facility.findById(id)

    if (!facility){
        return res.status(404).json('Facility not found')
    }

    res.status(200).json(facility)
}

//Create single facility, POST /facility/:id, private
const createFacility = async (req, res) => {
    const {facilityID, facilityName, facilityDescription, facilityPhone, facilityURL, facilityLongitude, facilityLatitude, facilityStreetAddress, city, postalCode, stateCode, countryCode, stayLimit, reservable, activity, media} = req.body

    // check if request is made by admin. If not, access not granted.

    try {
        const facility = await Facility.create({facilityID, facilityName, facilityDescription, facilityPhone, facilityURL, facilityLongitude, facilityLatitude, facilityStreetAddress, city, postalCode, stateCode, countryCode, stayLimit, reservable, activity, media})
        res.status(200).json(facility)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//Update single campsite, PUT /campsites/:id, private
const updateFacility = async (req, res) => {
    const {id} = req.params

    // check if request is made by admin. If not, access not granted.

    // only check db if ObjectId is used
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json('Facility not found')
    }

    const facility = await Facility.findOneAndUpdate({_id: id}, {...req.body})

    if (!facility){
        return res.status(404).json('Facility not found')
    }

    res.status(200).json(`Facility ${id} updated: ${facility}`)
}

//Delete single campsite, DELETE /campsites/:id, private
const deleteFacility = async (req, res) => {
    const {id} = req.params

    // check if request is made by admin. If not, access not granted.

    // only check db if ObjectId is used
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json('Facility not found')
    }

    const facility = await Facility.findOneAndDelete({_id: id})
    
    if (!facility){
        return res.status(404).json('Facility not found')
    }

    res.status(200).json(`Facility ${id} deleted.`)
}

module.exports = {getFacilities, getFacility, createFacility, updateFacility, deleteFacility}