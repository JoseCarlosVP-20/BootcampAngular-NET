import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnimappModule } from './animapp/animapp.module';

import { AppComponent } from './app.component';
import { CompartidoModule } from './compartido/compartido.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CompartidoModule,
    AnimappModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
