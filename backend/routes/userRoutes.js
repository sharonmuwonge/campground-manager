const express = require('express')
const router = express.Router()

const { signupUser, loginUser /* getUser, createUser, updateUser, deleteUser */ } = require('../controllers/userController')


// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// // Create a new user
// router.post('/', createUser)

// // Get, edit or delete a specific user
// router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)

module.exports = router