'use strict'
/* eslint-disable */

const express = require('express')
const httpProxy = require('http-proxy')

const app = express()
const reverseProxy = httpProxy.createProxyServer({})

app.use(express.static(__dirname))

app.get('/', (req, res) => {
    const last = req.subdomains.length - 1

    if(req.subdomains[last] === 'creator') reverseProxy.web(req, res, { target: 'https://paredros-creator/' })
    if(req.subdomains[last] === 'store') reverseProxy.web(req, res, { target: 'https://paredros-store/' })
    if(req.subdomains[last] === 'player') reverseProxy.web(req, res, { target: 'https://paredros-player/' })
})

const port = 80;

app.listen(port, () => {
    console.log(Date() + ': paredros gateway server running on port ' + port)
})
