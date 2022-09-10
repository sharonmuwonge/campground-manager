const User = require('../models/userModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'} )
}

// Login user
const loginUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.login(email, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Sign up user

const signupUser = async (req, res) => {

    const {email, password} = req.body

    try {
        const user = await User.signup(email, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


//Get user info, GET /users/:id, private

const getUser = async (req, res) => {
    const {id} = req.params

    // check if request is made by user themselves OR by admin. If not, access not granted.

    // only check db if ObjectId is used
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json('User not found')
    }

    const user = await User.findById(id)

    if (!user){
        return res.status(404).json('User not found')
    }

    res.status(200).json(user)
}

//Create single user, POST /users/:id, private
const createUser = async (req, res) => {
    // check if user is admin

    // const {module items} = req.body

    try {
        const user = await User.create({/* module items */})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//Update single user, PUT /users/:id, private
const updateUser = async (req, res) => {
    
    // check if request is made by user themselves OR by admin. If not, access not granted.

    const {id} = req.params

    // only check db if ObjectId is used
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json('User not found')
    }

    const user = await User.findOneAndUpdate({_id: id}, {...req.body})

    if (!user){
        return res.status(404).json('User not found')
    }

    res.status(200).json(`User ${id} updated: ${reservation}`)
}

//Delete single user, DELETE /users/:id, private
const deleteUser = async (req, res) => {

    // check if request is made by admin. If not, access not granted.

    const {id} = req.params

    // only check db if ObjectId is used
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json('Reservation not found')
    }

    // Check if {id} is of a manager account. If not, user cannot be deleted

    const user = await User.findOneAndDelete({_id: id})
    
    if (!user){
        return res.status(404).json('User not found')
    }

    res.status(200).json(`User ${id} deleted.`)
}

module.exports = { signupUser, loginUser /* getUser, createUser, updateUser, deleteUser */}