'use strict'

const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.send('we here yo')
})


app.listen(PORT, () => {
    console.log(`we here you server on port: ${PORT}`)
})
