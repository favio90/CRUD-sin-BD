import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Componente Principal/app.component';
import {FormsModule} from '@angular/forms';
import { GestorDeDatosService } from './gestor-de-datos.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule
  ],
  providers: [GestorDeDatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
