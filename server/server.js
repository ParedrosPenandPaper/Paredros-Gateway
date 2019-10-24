'use strict'
/* eslint-disable */

const express = require('express')
const app = express()
const proxy = require('express-http-proxy');


app.use(express.static(__dirname))

app.get('/login', proxy('http://paredros-login/'))

app.get('/creator', proxy('http://paredros-creator/'))

app.get('/store', proxy('http://paredros-store/'))

app.get('/player', proxy('http://paredros-player/'))

const port = 80;

app.listen(port, () => {
    console.log(Date() + ': paredros gateway server running on port ' + port)
})
