const fs = require('fs')
const pathToFile = './products.json'

class Manager {
    save = async (product) => {
        try {
            if (fs.existsSync(pathToFile)) {
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let products = JSON.parse(data)
            let newId = products[products.length - 1].id + 1 
            product.id = newId
            products.push(product)
            await fs.promises.writeFile(pathToFile, JSON.stringify(products, null, 2))
            return {status: 'success', message: 'saved product'}
            } else {
            product.id = 1
            await fs.promises.writeFile(pathToFile, JSON.stringify([product], null, 2))
            return {status: 'success', message: 'saved product'}
        }
        } catch (error) {
            return {status : 'failed', message: error.message}         
        } 
    }

    getById = async (id) => {
        if (!id) return {status: 'error', message: error.message} 
        if (fs.existsSync(pathToFile)) {
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let products = JSON.parse(data)
            let product = products.find(product => product.id === id)
            if (product) {
                return {status: 'success', message: product}
            } else {
                return {status: 'error', message: error.message}
            }
        }   
    }

    getAll = async () => {
        if (fs.existsSync(pathToFile)) {
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let products = JSON.parse(data)
            return {status: 'success', message: products}
        }
    }

    deleteById = async (id) => {
        if(!id) return {status: 'error', message: error.message}
        if (fs.existsSync(pathToFile)) {
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let products = JSON.parse(data)
            let newProducts = products.filter(product => product.id !== id)
            await fs.promises.writeFile(pathToFile, JSON.stringify([newProducts], null, 2))
            return {status: 'success', message: 'removed product'}
        } else {
            return {status: 'error', message: error.message}
        }
    }

    deleteAll = async () => {
        if (fs.existsSync(pathToFile)) {
            await fs.promises.unlink(pathToFile)
            return {status: 'success', message: 'deleted file'}
        } else {
            return {status: 'error', message: error.message}
        }
    }
}

module.exports = Manager