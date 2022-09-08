const express = require('express')
const router = express.Router()

const {getFacilities,
    createFacility,
    getFacility,
    updateFacility,
    deleteFacility
    } = require('../controllers/facilityController')

// Get all facilities
router.get('/', getFacilities)

// Create a new facility
router.post('/', createFacility)

// Get, edit or delete a specific facility
router.route('/:id').get(getFacility).put(updateFacility).delete(deleteFacility)

module.exports = router