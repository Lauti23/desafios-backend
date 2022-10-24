class Usuario {
    constructor (nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []
    }
    
    // METODO PARA OBTENER EL NOMBRE COMPLETO
    getFullName() {
        return "Mi nombre es " + this.nombre + " " + this.apellido
    }

    // METODO PARA AGREGAR UNA MASCOTA AL ARRAY
    addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    // METODO PARA CONTAR LA CANTIDAD DE MASCOTAS EN EL ARRAY
    countMascotas() {
        return this.mascotas.length
    }

    // METODO PARA AGREGAR UN LIBRO AL ARRAY
    addBook(titulo) {
        this.libros.push(titulo)
    }

    // METODO PARA OBTENER EL NOMBRE DE LOS LIBROS
    getBookNames() {
        return this.libros.map(books => books.titulo)
    }
}

let usuario1 = new Usuario("Milton", "Martinez")


console.log(usuario1.getFullName())

// AGREGANDO MASCOTAS AL ARRAY
usuario1.addMascota("Perro")
usuario1.addMascota("Loro")
usuario1.addMascota("Gato")

//AGREGANDO LIBROS AL ARRAY
usuario1.addBook({titulo: "La odisea", autor: "Homero"})
usuario1.addBook({titulo: "Cumbres borrascosas", autor: "Emily Bronte"})

console.log(usuario1.libros)

console.log(usuario1.getBookNames())