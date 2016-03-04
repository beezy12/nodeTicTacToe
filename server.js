'use strict'

const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 3000

app.set('view engine', 'jade')

// this is a middleware function for sass
app.use(require('node-sass-middleware')({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true,
    sourceMap: true
}))

app.use(express.static('public'))

// this one gives a path to anything in public that doesn't already have a path
app.use(express.static(path.join(__dirname, 'public')));
// this one gives a path to anything in views that doesn't already have a path
app.set('views', path.join(__dirname, 'views'));


// rendering main page
app.get('/', (req, res) => {
    res.render('index')
})

// server set up
app.listen(PORT, () => {
    console.log(`we hear you server on port: ${PORT}`)
})
