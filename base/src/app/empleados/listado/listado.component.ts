import { Component, OnInit } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  empleados: IEmpleado[] = [
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
      sueldo: 5000,
    },
    {
      nombres: 'manuel',
      apellidos: 'alvarado',
      direccion: '4023 victory',
      sueldo: 5000,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
