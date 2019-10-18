'use strict'
/* eslint-disable */

const express = require('express')
const subdomain = require('express-subdomain')

const app = express()
const storeRouter = express.Router()

storeRouter.get('/', (req, res) => {
    res.redirect('https://paredros-store/')
})

app.use(subdomain('store', storeRouter))


// more subdomain routs will go here


app.use(express.static(__dirname))

const port = 80;

app.listen(port, () => {
    console.log(Date() + ': paredros gateway server running on port ' + port)
})
