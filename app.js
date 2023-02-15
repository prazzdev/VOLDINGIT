const express = require('express')
const db = require('./models/connection')
const { apiKey } = require('./env')
const bodyParser = require('body-parser')
const router = require('./controllers/AppController')

const app = express()
const port = 3003

app.use(bodyParser.json())

app.get(`/`, (req, res) => {
    if(req.query.apikey != apiKey) {
        res.status(401).json({
            statusCode: res.statusCode,
            message: "Not Authorized"
        })
    } else {
        res.status(204).json({
            statusCode: res.statusCode,
            message: "No Content"
        })
    }
})

// RESPONSE
router(app)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})