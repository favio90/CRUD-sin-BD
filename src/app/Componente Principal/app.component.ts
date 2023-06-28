import { Component } from '@angular/core';
import { Cons } from 'rxjs';
import { GestorDeDatosService } from '../gestor-de-datos.service';
import { Articulos } from '../Articulos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-directiva-ngModel';

  constructor(private miServicio: GestorDeDatosService) {
    this.articulos = miServicio.articulos;
  }

  public articulos: any[];
   art = new Articulos(0, "", 0);
   articuloSeleccionado!: Articulos;


  hayRegistros() {
    return this.articulos.length > 0;
  }



  borrar(indiceaborrar: number) {
    this.miServicio.borrar(indiceaborrar);
  }



  agregar() {
    this.miServicio.agregar(this.art.codigo, this.art.descripcion, this.art.precio);
  }
  
  
  
  seleccionar( art : Articulos) {
    this.art.codigo = art.codigo;
    this.art.descripcion = art.descripcion;
    this.art.precio = art.precio;
  }
 


modificar() {
this.miServicio.modificar(this.art)
}


  corroborarSeleccion(i: number) {
    this.miServicio.corroborarSeleccion(i);
  }



}











