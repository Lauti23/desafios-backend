const Manager = require('./manager.js')
const manager = new Manager()
const express = require('express')
const { request } = require('http')
const app = express()
const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

app.get('/', (request, response) => {
    response.send('<h1 style="color:red;">Hola coder</h1>')
})

app.get('/products', (request, response) => {
    response.send(manager.getAll().then(res => console.log(res)))
})