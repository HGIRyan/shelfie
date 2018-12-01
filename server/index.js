// Requirements
const express = require('express')
const bodyParser = require('body-parser')

const massive = require('massive')
require('dotenv').config()

const controller = require('./controller')

const app = express()
app.use(bodyParser.json())

// Massive
massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
    }).catch(err => console.log('Error', err))

// CRUD
// Get
app.get('/api/inventory', controller.getProducts)

// Post
app.post('/api/product', controller.postProduct)
// Put

// Delete
app.delete('/api/product/:id', controller.deleteProduct)


const port = 3005
app.listen(port, () => { console.log(`Port:${port}`) })