import { calcularTotal, IProducto } from "./producto";

const ListaProductos: IProducto[] = [
    {
        id: 1,
        descripcion: "Tablet",
        precio: 2000,
    },
    {
        id: 2,
        descripcion: "Laptop",
        precio: 3000,
    },
    {
        id: 3,
        descripcion: "Impresora HP",
        precio: 1500,
    },
];

const totalLista = calcularTotal(ListaProductos);
console.log(totalLista);
