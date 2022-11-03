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

app.get('/products', async (request, response) => {
    const getProducts = await manager.getAll()
    const showProductsOnly = getProducts.message
    response.send(showProductsOnly)
}) 

app.get('/productRandom', async (request, response) => {
    const getProducts = await manager.getAll()
    const showProductsOnly = getProducts.message
    const randomProduct = Math.floor(Math.random() * showProductsOnly.length) 
    response.send(showProductsOnly[randomProduct])
})