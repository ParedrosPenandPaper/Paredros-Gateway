'use strict'
/* eslint-disable */

const express = require('express')
const httpProxy = require('http-proxy')

const app = express()
const reverseProxy = httpProxy.createProxyServer({})

app.use(express.static(__dirname))

app.get('/login', (req, res) => {
    res.redirect('http://paredros-login/')
})

app.get('/store', (req, res) => {
    res.redirect('http://paredros-store/')
})

app.get('/creator', (req, res) => {
    res.redirect('http://paredros-creator/')
})

app.get('/player', (req, res) => {
    res.redirect('http://paredros-player/')
})

const port = 80;

app.listen(port, () => {
    console.log(Date() + ': paredros gateway server running on port ' + port)
})
