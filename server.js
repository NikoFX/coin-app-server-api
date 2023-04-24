const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

require('dotenv').config();


app.use(cors())

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
})

connection.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log('mysql succesfully connected');
    }
})

app.get('/api/search', (req, res) => {

    const q = req.query.q ?? ''
    const countryFilter = req.query.c ? `and country='${req.query.c}'` : ''
    const typeFilter = req.query.t ? `and type='${req.query.t}'` : ''
    const metalFilter = req.query.m ? `and metal='${req.query.m}'` : ''
    const qualityFilter = req.query.qt ? `and quality='${req.query.qt}'` : ''
    const priceFilter = (req.query.pFrom | req.query.pTo) ? `and price between'${req.query.pFrom || 0}' and '${req.query.pTo || 99999}'` : ''
    const yearFilter = (req.query.yFrom | req.query.yTo) ? `and year between'${req.query.yFrom || 0}' and '${req.query.yTo || 99999}'` : ''

    const query = `select * from coins where (name like '%${q}%' ${typeFilter} ${countryFilter} ${metalFilter} ${qualityFilter} ${priceFilter} ${yearFilter})`
    connection.query(query, (err, rows) => {
        if (err) throw err

        res.json(rows)
    })

})

app.get('/api/description/:id', (req, res) => {
    const query = `select * from coins where id=${req.params.id}`
    connection.query(query, (err, rows) => {
        if (err) throw err

        res.json(rows[0])
    })
})

app.listen(8080, () => {
    console.log('8080 server is running');
})
