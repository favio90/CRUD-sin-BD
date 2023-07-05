import { Component, Input } from '@angular/core';
import { Articulos } from '../Articulos';
import { GestorDeDatosService } from '../gestor-de-datos.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {

@Input() articuloSeleccionado : Articulos;

constructor(private miServicio: GestorDeDatosService) {
}




modificar() {
  this.miServicio.modificar(this.articuloSeleccionado)
  }
 
 
  agregar() {
    this.miServicio.agregar(this.articuloSeleccionado);
  }
  
}
