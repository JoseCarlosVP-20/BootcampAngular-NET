import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcumuladorComponent } from './acumulador/acumulador.component';
import { EmpleadosModule } from './empleados/empleados.module';

@NgModule({
  declarations: [AppComponent, AcumuladorComponent],
  imports: [BrowserModule, EmpleadosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
