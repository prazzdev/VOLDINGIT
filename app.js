const express = require('express')
const cors = require('cors')
const expressLayouts = require('express-ejs-layouts')
const { apiKey } = require('./env')
const bodyParser = require('body-parser')
const categories = require('./lib/categories')
const { getData, postData } = require('./lib/response')

const app = express()
const port = 3003

app.use(bodyParser.json())
app.use(cors())
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.get(`/`, (req, res) => {
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
app.get(`/question`, (req, res) => {
    if(req.query.apikey != apiKey) {
        res.status(401).json({
            statusCode: res.statusCode,
            message: "Not Authorized"
        })
    } else {
        res.render('add-question',
        {
            title: 'Add Question',
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

app.post('/question', (req, res) => {
    console.log(req)
    const { idCategory, level, image, question, jawaban_a, jawaban_b, jawaban_c, jawaban_d, jawaban_benar } = req.body
    const data = {
        idCategory, level, image, question, jawaban_a, jawaban_b, jawaban_c, jawaban_d, jawaban_benar
    }
    if(req.query.apikey != apiKey) {
        res.status(401).json({
            statusCode: res.statusCode,
            message: "Not authorized"
        })
    } else {
        const query = `INSERT INTO soal (id_category, level, image, question, jawaban_a, jawaban_b, jawaban_c, jawaban_d, jawaban_benar) VALUES (${data.idCategory}, ${data.level}, "${data.image}", "${data.question}", "${data.jawaban_a}", "${data.jawaban_b}", "${data.jawaban_c}", "${data.jawaban_d}", "${data.jawaban_benar}")`
        postData(query, res)
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})