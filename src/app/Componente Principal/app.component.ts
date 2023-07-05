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

   articuloSeleccionado = new Articulos(0, "", 0);


  hayRegistros() {
    return this.articulos.length > 0;
  }



  borrar(indiceaborrar: number) {
    this.miServicio.borrar(indiceaborrar);
  }


  
  
  seleccionar( articulo : Articulos) {
    this.articuloSeleccionado.codigo = articulo.codigo;
    this.articuloSeleccionado.descripcion = articulo.descripcion;
    this.articuloSeleccionado.precio = articulo.precio;
  }
 




  corroborarSeleccion(i: number) {
    this.miServicio.corroborarSeleccion(i);
  }

}











