'use strict'
/* eslint-disable */

const express = require('express')
const app = express()
const proxy = require('express-http-proxy');


app.use(express.static(__dirname))

app.get('/login', proxy('paredros-login/'))

app.get('/creator', proxy('paredros-creator/'))

app.get('/store', proxy('paredros-store/'))

app.get('/player', proxy('paredros-player/'))

const port = 80;

app.listen(port, () => {
    console.log(Date() + ': paredros gateway server running on port ' + port)
})
