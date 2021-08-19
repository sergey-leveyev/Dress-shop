const express = require('express');
const catalog = require('./catalog.js')

const server = express()

server.get('/catalog', (req, res) => {
res.json(catalog)
})

server.get('/catalog/:id', (req, res) => {
    const {id} = req.params.id
    const product = catalog.find(el => el.id === id)
    res.json(catalog)
})

server.listen(8000, () => {
    console.log('Server is running')
})