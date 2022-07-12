interface ICliente {
    nombre: string;
    apellidos: string;
    credito: number;
    mostrarCliente: () => void;
    direccion: IDireccion
}

interface IDireccion{
    numeroCalle:number,
    nombreCalle: string,
    ciudad:string
}

const deuda = (cliente: ICliente, monto: number): void => {
    cliente.credito += monto;
};
const nuevoCliente: ICliente = {
    nombre: "Carlos",
    apellidos: "Piedra",
    credito: 2000,
    mostrarCliente() {
        console.log(`Crédito del cliente: ${this.nombre} ${this.apellidos} es ${this.credito}`);
    },
    direccion:{
        numeroCalle: 20,
        nombreCalle: 'San Fernando',
        ciudad:'Los Angeles'
    }
};

deuda(nuevoCliente, 200);
nuevoCliente.mostrarCliente();
