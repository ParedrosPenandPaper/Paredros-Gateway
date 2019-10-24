'use strict'
/* eslint-disable */

const express = require('express')
const app = express()

const axios = require('axios')

app.use(express.static(__dirname))

app.get('/login', (req, res) => {
    axios.get('http://paredros-login/')
        .then(response => {
            res.send(response.body)
        })
})

app.get('/store', (req, res) => {
    axios.get('http://paredros-store/')
        .then(response => {
            res.send(response.body)
        })
})

app.get('/creator', (req, res) => {
    axios.get('http://paredros-creator/')
        .then(response => {
            res.send(response.body)
        })
})

app.get('/player', (req, res) => {
    axios.get('http://paredros-player/')
        .then(response => {
            res.send(response.body)
        })
})

const port = 80;

app.listen(port, () => {
    console.log(Date() + ': paredros gateway server running on port ' + port)
})
