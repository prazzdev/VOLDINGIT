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

const getData = (query, res) => {
    const sql = query
    db.query(sql, (err, fields) => {
        if(fields.length < 1) {
            res.status(200).json({
                statusCode: res.statusCode,
                message: "Data not available"
            })
        } else {
            res.status(200).json({
                statusCode: res.statusCode,
                message: "Data found",
                payload: {
                    totalData: fields.length,
                    data: fields
                }
            })
        }
    })
}

const postData = (query, res) => {
    const sql = query
    db.query(sql, (err, fields) => {
        res.status(200).json({
            statusCode: res.statusCode,
            message: "Data successfuly to added",
            data: {
                insertId: fields.insertId,
            }
        })
        console.log(fields)
    })
}

module.exports = { getData, postData }