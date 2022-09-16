const Campsite = require('../models/campsiteModel')
const mongoose = require('mongoose')

//Get all campsites, GET /campsites, private

const getCampsites = async (req, res) => {

    try {
        const facility = req.user.facility
        const campsites = await Campsite.find({}).sort({campsiteID: 1})
        res.status(200).json(campsites)
        console.log(campsites)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//Get single campsite, GET /campsites/:id, private
const getCampsite = async (req, res) => {
    const {id} = req.params

    // only check db if ObjectId is used
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json('Not a valid ID')
    }

    const campsite = await Campsite.findById(id)

    if (!campsite){
        return res.status(404).json('Campsite not found')
    }

    res.status(200).json(campsite)
}

//Create single campsite, POST /campsite/:id, private
const createCampsite = async (req, res) => {
    const {campsiteID, campsiteName, facilityID, facilityName, campsiteType, facilityLongitude, facilityLatitude, uses, onLoop, permittedEquipment, amenities, feePerNight, reservationFee, maxVehicles, vehicleFee, maxPersons, tentsAllowed, maxTents, petsAllowed, maxPets, petFee, media} = req.body

    // check if request is made by admin. If not, access not granted.

    try {
        const campsite = await Campsite.create({campsiteID, campsiteName, facilityID, facilityName, campsiteType, facilityLongitude, facilityLatitude, uses, onLoop, permittedEquipment, amenities, feePerNight, reservationFee, maxVehicles, vehicleFee, maxPersons, tentsAllowed, maxTents, petsAllowed, maxPets, petFee, media})
        res.status(200).json(campsite)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//Update single campsite, PUT /campsites/:id, private
const updateCampsite = async (req, res) => {
    const {id} = req.params

    // check if request is made by admin. If not, access not granted.

    // only check db if ObjectId is used
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json('Not a valid ID')
    }

    const campsite = await Campsite.findOneAndUpdate({_id: id}, {...req.body})

    if (!campsite){
        return res.status(404).json('Campsite not found')
    }

    res.status(200).json(`Campsite ${id}.`)
}

//Delete single campsite, DELETE /campsites/:id, private
const deleteCampsite = async (req, res) => {
    const {id} = req.params

    // check if request is made by admin. If not, access not granted.

    // only check db if ObjectId is used
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json('Campsite not found')
    }

    const campsite = await Campsite.findOneAndDelete({_id: id})
    
    if (!campsite){
        return res.status(404).json('Campsite not found')
    }

    res.status(200).json(`Campsite ${id} deleted.`)
}

module.exports = {getCampsites, getCampsite, createCampsite, updateCampsite, deleteCampsite}