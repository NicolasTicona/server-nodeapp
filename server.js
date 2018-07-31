const express = require('express')
const app = express()

const hbs = require('hbs')
require('./hbs/helpers')

const port = process.env.PORT || 3000

// Middleware
app.use( express.static(__dirname + '/public') )

// Template Engine
hbs.registerPartials(__dirname + '/views/partials/')
app.set('view engine', 'hbs')


app.get('/', (req, res) => {
    
    res.render('home')

})

app.get('/about', (req, res) => {
    
    res.render('about')

})

app.listen('3000', () => console.log('Escuchando peticiones en el puerto ', port))