const express = require('express')
const router = express.Router()

const {getCampsites,
    createCampsite,
    getCampsite,
    updateCampsite,
    deleteCampsite
    } = require('../controllers/campsiteController')

const requireAuth = require('../middleware/requireAuth')

// pass authorization validation before accessing APIs
router.use(requireAuth)
    

// Get all campsites
router.get('/', getCampsites)

// Create a new campsite
router.post('/', createCampsite)

// Get, edit or delete a specific campsite
router.route('/:id').get(getCampsite).put(updateCampsite).delete(deleteCampsite)

module.exports = router