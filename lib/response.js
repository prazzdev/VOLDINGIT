const datas = require('../data')
const db = require('../models/connection')

// class Response {
//     constructor(apikey) {
//         this.apikey = apikey
//     }

//     responseGambar() {
//         if(req.query.apikey != apiKey) {
//             res.json({
//                 statusCode: 401,
//                 message: "Not Authorized"
//             })
//         } else {
//             res.json({
//                 statusCode: 200,
//                 message: "Data founded",
//                 data: datas.filter(res => { return res.category_id === category })
//             })
//         }
//     }

//     responseTeks() {
//         if(req.query.apikey != apiKey) {
//             res.json({
//                 statusCode: 401,
//                 message: "Not Authorized"
//             })
//         } else {
//             res.json({
//                 statusCode: 200,
//                 message: "Data founded",
//                 data: datas.filter(res => { return res.category_id === category })
//             })
//         }
//     }
// }

const response = (query, status, message, res) => {
    const sql = query
    db.query(sql, (err, fields) => {
        if(fields.length < 1) {
            res.status(404).json({
                statusCode: res.statusCode,
                message: "Data not found"
            })
        } else {
            res.status(status).json({
                statusCode: status,
                message: message,
                data: fields
            })
        }
    })
}

module.exports = response