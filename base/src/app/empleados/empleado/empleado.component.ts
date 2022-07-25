import { Component, OnInit } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent implements OnInit {
  tituloAntiguo: string = 'Empleados Antiguos';
  tituloNuevo: string = 'Empleados Nuevos';

  empleadosAntiguos: IEmpleado[] = [
    {
      nombres: 'carlos',
      apellidos: 'piedra',
      direccion: '8225 los angeles',
      sueldo: 5000,
    },
    {
      nombres: 'alberto',
      apellidos: 'gonzalez',
      direccion: '2035 san fernando',
      sueldo: 3000,
    },
    {
      nombres: 'manuel',
      apellidos: 'alvarado',
      direccion: '4023 victory',
      sueldo: 4200,
    },
  ];
  empleadosNuevos: IEmpleado[] = [
    {
      nombres: 'juan',
      apellidos: 'bustos',
      direccion: 'Cartago',
      sueldo: 4400,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
