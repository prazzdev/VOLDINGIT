const express = require('express')
const cors = require('cors')
const expressLayouts = require('express-ejs-layouts')
const { apiKey } = require('./env')
const bodyParser = require('body-parser')
const categories = require('./lib/categories')
const { getData, postData } = require('./lib/response')
const datas = require('./data')

// DynamoDB
const CyclicDb = require("@cyclic.sh/dynamodb")
const db = CyclicDb("drab-gray-anemone-kitCyclicDB")

const run = async () => {
    let animals = db.collection('animals')
    let question = db.collection('questions')

    // create an item in collection with key "leo"
    let leo = await animals.set('leo', {
        type:'cat',
        color:'orange'
    })

    // get an item at key "leo" from collection animals :)
    let item = await animals.get('leo')
    console.log(question)
}
run()

const app = express()
const port = 3000

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

app.get('/:category', (req, res) => {
    const category_id = categories(req, res)
    if(req.query.apikey != apiKey) {
        res.status(401).json({
            statusCode: res.statusCode,
            message: "Not authorized"
        })
    } else {
        res.send(datas.filter(data => data.category_id == category_id))
    }
    run()
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})