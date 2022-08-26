import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PaginaInicioComponent,
    BusquedaComponent,
    ResultadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    PaginaInicioComponent
  ]
})
export class AnimappModule { }
