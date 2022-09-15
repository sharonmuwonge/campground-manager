const express = require('express')
const router = express.Router()

const {getFacilities,
    createFacility,
    getFacility,
    updateFacility,
    deleteFacility
    } = require('../controllers/facilityController')

const requireAuth = require('../middleware/requireAuth')

// pass authorization validation before accessing APIs
router.use(requireAuth)
    

// Get all facilities
router.get('/', getFacilities)

// Create a new facility
router.post('/', createFacility)

// Get, edit or delete a specific facility
router.route('/:id').get(getFacility).put(updateFacility).delete(deleteFacility)

module.exports = router