const express = require('express')
const router = express.Router()

const {createUser,
    getUser,
    updateUser,
    deleteUser
    } = require('../controllers/userController')

// Create a new user
router.post('/', createUser)

// Get, edit or delete a specific user
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)

module.exports = router