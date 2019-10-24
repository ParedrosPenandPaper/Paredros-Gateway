'use strict'
/* eslint-disable */

const express = require('express')
const httpProxy = require('http-proxy')

const app = express()
const reverseProxy = httpProxy.createProxyServer({})

app.use(express.static(__dirname))

app.get('/', (req, res) => {
    const last = req.subdomains.length - 1

    if(req.subdomains[last] === 'creator') reverseProxy.web(req, res, { target: 'http://paredros-creator/' })
    else if(req.subdomains[last] === 'store') reverseProxy.web(req, res, { target: 'http://paredros-store/' })
    else if(req.subdomains[last] === 'player') reverseProxy.web(req, res, { target: 'http://paredros-player/' })
    else if(req.subdomains[last] === 'login') reverseProxy.web(req, res, { target: 'http://paredros-player/' })
    else reverseProxy.web(req, res, { target: 'http://it-projekt19-6.informatik.fh-nuernberg.de//' })
})

const port = 80;

app.listen(port, () => {
    console.log(Date() + ': paredros gateway server running on port ' + port)
})
