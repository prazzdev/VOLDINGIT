const { apiKey } = require('../env')
const categories = require('../lib/categories')
const { getData, postData } = require('../lib/response')
const admin = require('../views/admin.ejs')

const router = (app) => {
    app.get('/:category', (req, res) => {
        const categoryId = categories(req, res)
        if(req.query.apikey != apiKey) {
            res.status(401).json({
                statusCode: res.statusCode,
                message: "Not authorized"
            })
        } else {
            getData(`SELECT * FROM soal WHERE id_category = ${categoryId}`, 200, "Data found", res)
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
            getData(`SELECT * FROM soal WHERE id_category = ${categoryId} && level = ${level}`, 200, "Data found", res)
        }
    })
    app.post('/add-question', (req, res) => {
        res.render('/add-question', {layout: 'views/admin'})
        const { idCategory, level, image, question, jawaban_a, jawaban_b, jawaban_c, jawaban_d, jawaban_benar } = req.body
        if(req.query.apikey != apiKey) {
            res.status(401).json({
                statusCode: res.statusCode,
                message: "Not authorized"
            })
        } else {
            const query = `INSERT INTO soal (id_category, level, image, question, jawaban_a, jawaban_b, jawaban_c, jawaban_d, jawaban_benar) VALUES (${idCategory}, ${level}, "${image}", "${question}", "${jawaban_a}", "${jawaban_b}", "${jawaban_c}", "${jawaban_d}", "${jawaban_benar}")`
            postData(query, "Data successfuly to added", res)
        }
    })
}

module.exports = router