'use strict'
/* eslint-disable */

const express = require('express')
//const subdomain = require('express-subdomain')

const app = express()

app.use(express.static(__dirname))

app.get('/', (req, res) => {
    const last = req.subdomains.length - 1

    if(req.subdomains[last] === 'store') res.redirect('https://paredros-store/')
    if(req.subdomains[last] === 'creator') res.redirect('https://paredros-creator/')
    if(req.subdomains[last] === 'player') res.redirect('https://paredros-player/')
})

const port = 80;

app.listen(port, () => {
    console.log(Date() + ': paredros gateway server running on port ' + port)
})
