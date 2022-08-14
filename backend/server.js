const express = require('express')
const app = express()

//.env
require('dotenv').config()

// log req path, method and body for each server call
app.use((req, res, next) => {
    console.log(req.path, req.method, req.body)
    next()
})

// port selection
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))

app.get('*', (req, res) => res.json({message: 'all found'}))
