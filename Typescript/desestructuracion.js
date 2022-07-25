var pelicula = {
    id: 1,
    nombre: 'Star Wars - guerra de los clones',
    descripcion: 'Saga de star wars',
    anio: 2000,
    director: {
        nombres: 'George',
        apellidos: 'Lucas'
    }
};
var nombre = pelicula.nombre, anio = pelicula.anio, director = pelicula.director;
var nombres = director.nombres;
console.log("Pelicula ", nombre);
console.log("Año: ", anio);
console.log("Director: ", nombres);
