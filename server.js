const { response } = require('express')
const express = require('express')

const app = express()

let visitas = 0

const server = app.listen(8080, () => console.log('Server Up'))

app.get('/', (request, response) => {
    response.send('<h1 style="color:blue">Bienvenidos al servidor express</h1>')
})

app.get('/visitas', (request, response) => {
    visitas++
    response.send('La cantidad de visitas es ' + visitas)
})

app.get('/fyh', (request, response) => {
    let fecha = new Date()
    response.send({
        fyh: fecha
    })
})

