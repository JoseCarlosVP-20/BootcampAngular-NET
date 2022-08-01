import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { ICliente } from '../interfaces/cliente';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css'],
})
export class ListadoClientesComponent implements OnInit {
  // @Input()
  // clientes: ICliente[] = [];
  constructor(private clienteService: ClientesService) {}

  public get clientes(): ICliente[] {
    return this.clienteService.clientes;
  }
  ngOnInit(): void {}
}
