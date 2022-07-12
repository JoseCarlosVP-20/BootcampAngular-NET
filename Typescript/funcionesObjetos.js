var deuda = function (cliente, monto) {
    cliente.credito += monto;
};
var nuevoCliente = {
    nombre: "Carlos",
    apellidos: "Piedra",
    credito: 2000,
    mostrarCliente: function () {
        console.log("Cr\u00E9dito del cliente: ".concat(this.nombre, " ").concat(this.apellidos, " es ").concat(this.credito));
    }
};
deuda(nuevoCliente, 200);
nuevoCliente.mostrarCliente();
