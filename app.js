
const Manager = require('./manager.js')
const manager = new Manager()

// const pathToFile = './products.txt'

// const readAndParse = async () => {
//     try {
//         if (fs.existsSync(pathToFile)) {
//             let data = await fs.promises.readFile(pathToFile, 'utf-8')
//             let products = JSON.parse(data)
//             return {status: 'success', message: products}
//         }
        
//     } catch (error) {
//         return {status: 'error', message: error.message}
//     }
// }

// export default readAndParse
manager.getAll()
    .then(res => console.log(res))