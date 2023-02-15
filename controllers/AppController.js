const { apiKey } = require('../env')
const categories = require('../lib/categories')
const response = require('../lib/response')

const router = (app) => {
    app.get('/:category', (req, res) => {
        const categoryId = categories(req, res)
        if(req.query.apikey != apiKey) {
            res.status(401).json({
                statusCode: res.statusCode,
                message: "Not authorized"
            })
        } else {
            response(`SELECT * FROM soal WHERE id_category = ${categoryId}`, 200, "Data found", res)
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
            response(`SELECT * FROM soal WHERE id_category = ${categoryId} && level = ${level}`, 200, "Data found", res)
        }
    })
}

module.exports = router