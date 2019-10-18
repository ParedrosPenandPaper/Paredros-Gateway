'use strict'
/* eslint-disable */

const express = require('express')
const app = express()
const port = 80;

app.use(express.static(__dirname))

app.listen(port, () => {
    console.log('paredros gateway server running on port ' + port)
})
