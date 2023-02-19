const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const expressLayouts = require('express-ejs-layouts')
const { apiKey, baseEndpoint } = require('./env')
const bodyParser = require('body-parser')
const categories = require('./lib/categories')
const { getData, postData } = require('./lib/response')
const datas = require('./data')
const Question = require('./models/question')

const app = express()
const port = 3000

mongoose.set('strictQuery', false)
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch(err) {
        console.log(err)
        process.exit(1)
    }
}

app.use(bodyParser.json())
app.use(cors())
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.redirect('https://youtube.com')
})

app.get(`${baseEndpoint}/all-question`, async (req, res) => {
    if(req.query.apikey != apiKey) {
        res.status(401).json({
            statusCode: res.statusCode,
            message: "Not Authorized"
        })
    } else {
        const data = await Question.find()
        res.status(200).json({
            status: res.statusCode,
            data: data
        })
    }
})

app.get(`${baseEndpoint}/add-question`, async (req, res) => {
    try {
        await Question.insertMany([
            {
                book_id: 1,
                title: 'The Hobbit',
                body: "Body text goes here..."
            }
        ])
        res.status(200).json({
            status: res.statusCode,
            message: 'Question added successfully',
        })
    } catch (err) {
        console.log(err)
    }
})

app.get(`${baseEndpoint}/books/:id`, async (req, res) => {
    const data = await Question.find({book_id: req.params.id})
    if(data) {
        res.status(200).json({
            statusCode: res.statusCode,
            message: "Data found",
            payload: data
        })
    } else {
        res.send({message: 'No books found'})
    }
})

app.get(`${baseEndpoint}/`, (req, res) => {
    if(req.query.apikey != apiKey) {
        res.status(401).json({
            statusCode: res.statusCode,
            message: "Not Authorized"
        })
    } else {
        res.render('index',
        {
            title: 'Halaman Home',
            layout: 'layouts/main-layout',
            apikey: apiKey
        })
    }
    
})

app.get('/:category', (req, res) => {
    const categoryId = categories(req, res)
    if(req.query.apikey != apiKey) {
        res.status(401).json({
            statusCode: res.statusCode,
            message: "Not authorized"
        })
    } else {
        getData(`SELECT * FROM soal WHERE id_category = ${categoryId}`, res)
    }
})

app.get('/:category/:level', (req, res) => {
    const categoryId = categories(req, res)
    const level = req.params.level
    if(req.query.apikey != apiKey) {
        res.status(401).json({
            statusCode: res.statusCode,
            message: "Not authorized"
        })
    } else {
        getData(`SELECT * FROM soal WHERE id_category = ${categoryId} && level = ${level}`, res)
    }
})

// app.get('/:category', (req, res) => {
//     const category_id = categories(req, res)
//     if(req.query.apikey != apiKey) {
//         res.status(401).json({
//             statusCode: res.statusCode,
//             message: "Not authorized"
//         })
//     } else {
//         res.send(datas.filter(data => data.category_id == category_id))
//     }
//     run()
// })

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
})