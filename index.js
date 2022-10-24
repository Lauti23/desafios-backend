const Manager = require('./manager.js')
const manager = new Manager()

let product = {
    title: 'Pantalon corto',
    price: 6000,
    thumbnail: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/s/h/short-de-river-adidas-descanso-gris-100020gu9633001-1.jpg'
}


// manager.save(product)
//     .then(res => console.log(res))

// manager.getById(3)
//     .then(res => console.log(res))

// manager.getAll()
//     .then(res => console.log(res))

// manager.deleteById(2)
//     .then(res => console.log(res))

// manager.deleteAll()
//     .then(res => console.log(res))