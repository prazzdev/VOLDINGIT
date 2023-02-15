const { baseUrl } = require('./env')

const datas = [
    {
        level: 1,
        category_id: 1,
        category: "Hardware",
        gambar: `${baseUrl}/329y49.jpg`,
        jawaban_A: "Flashdisk",
        jawaban_B: "Monitor",
        jawaban_C: "Mouse",
        jawaban_D: "Keyboard",
        jawaban_benar: "Monitor"
    },
    {
        level: 2,
        category_id: 1,
        category: "Hardware",
        gambar: "http://tebaknasib.ehehe/oduhw099.jpg",
        jawaban_A: "Flashdisk",
        jawaban_B: "Monitor",
        jawaban_C: "Mouse",
        jawaban_D: "Keyboard",
        jawaban_benar: "Mouse"
    },
    {
        level: 1,
        category_id: 2,
        category: "Software",
        gambar: "http://tebaknasib.ehehe/dsiu389.jpg",
        jawaban_A: "Davinci",
        jawaban_B: "Inscape",
        jawaban_C: "LibreOffice",
        jawaban_D: "WPS Office",
        jawaban_benar: "Inscape"
    },
    {
        level: 1,
        category_id: 3,
        category: "Programming",
        gambar: "http://tebaknasib.ehehe/dd5768.jpg",
        jawaban_A: "Sublime Text",
        jawaban_B: "VSCode",
        jawaban_C: "Atom",
        jawaban_D: "Vim",
        jawaban_benar: "VSCode"
    },
    {
        level: 1,
        category_id: 4,
        category: "Seputar IT",
        gambar: "http://tebaknasib.ehehe/4878348.jpg",
        jawaban_A: "Tabung LPG",
        jawaban_B: "Kabel Las",
        jawaban_C: "Mouse",
        jawaban_D: "Keyboard",
        jawaban_benar: "Keyboard"
    }
]

module.exports = datas