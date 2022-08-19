const express = require('express')
const mongoose = require('mongoose')

const reservationsRoutes = require('./routes/reservationRoutes')
const app = express()

//.env
require('dotenv').config()

// use middleware to handle json
app.use(express.json());
// extract form data and add to request.body
app.use(express.urlencoded({extended: true}));

// log req path, method and body for each server call
app.use((req, res, next) => {
    console.log(req.path, req.method, req.body)
    next()
})

// Access to routes
app.use('/reservations', reservationsRoutes)
app.use('/users', userRoutes)

// port selection
const port = process.env.PORT || 5000

// connect to db
let dbConnectionString = process.env.DB_STRING

mongoose.connect(dbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    uaeFindAndModify: false
})
.then(async client => {
        app.listen(port, () => console.log(`Server running on port ${port}`))
     })
.catch((err)=> {
        console.log(err)
})