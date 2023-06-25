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



  art = {
    codigo: 0,
    descripcion: "",
    precio: 0,
    colorearFila: false
  }



  hayRegistros() {
    return this.articulos.length > 0;
  }



  borrar(codigo: number) {
    this.miServicio.borrar(codigo);
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
    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == this.art.codigo) {
        this.articulos[x].descripcion = this.art.descripcion;
        this.articulos[x].precio = this.art.precio;
        return;
      }
    alert('No existe el código de articulo ingresado');
  }



  corroborarSeleccion(i: number) {
    this.miServicio.corroborarSeleccion(i);
  }



  devuelveIndiceArray(codigo: number): number {
    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == codigo) {
        return x;
      }
    return -1;
  }
}











