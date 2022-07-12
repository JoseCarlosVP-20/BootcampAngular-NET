interface IPelicula{
    id: number,
    nombre:string,
    descripcion: string,
    anio: number,
    director: IDirector
}

interface IDirector{
    nombres:string,
    apellidos: string
}

const pelicula : IPelicula={
    id:1,
    nombre:'Star Wars - guerra de los clones',
    descripcion:'Saga de star wars',
    anio:2000,
    director:{
        nombres: 'George',
        apellidos:'Lucas'
    }
}
const {nombre, anio, director}=pelicula;
const {nombres} = director;

console.log("Pelicula ", nombre);
console.log("Año: ", anio);
console.log("Director: ", nombres);