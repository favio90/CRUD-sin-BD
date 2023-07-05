import { Injectable } from '@angular/core';
import { Articulos } from './Articulos';
@Injectable({
  providedIn: 'root'
})
export class GestorDeDatosService {
  static articulos: any[];

  constructor() { }


articulos = [  new Articulos(1, 'Milanesa', 50),
new Articulos(2, 'Bife', 35),
new Articulos(3, 'Cerveza', 80),
new Articulos(4, 'Papas', 26),
new Articulos(5, 'Palmitos', 17),];


  seleccionado: boolean = false;
  indicecoloreado: number = -1;
  codigoseleccionado: number = -1;


  hayRegistros(): boolean {
    return this.articulos.length > 0;
  }


  modificar(art : Articulos) {
    for (let a of this.articulos)
      if (a.codigo == art.codigo) {
        a.descripcion = art.descripcion;
        a.precio = art.precio;
        return;
      }
    alert('No existe el código de articulo ingresado');
  }




  agregar(articuloRecibido : Articulos) {
    if (articuloRecibido.codigo == 0) {
      alert('Debe ingresar un código de articulo distinto a cero');
      return;
    }
    for (let art of this.articulos) {
      
       if (art.codigo == articuloRecibido.codigo) {
        alert('ya existe un articulo con dicho codigo');
        return;
      }
    }
    if(this.seleccionado){
      this.articulos[this.indicecoloreado].colorearfila = false;
      this.seleccionado = false
    }    
     let objetonuevo = new Articulos (articuloRecibido.codigo, articuloRecibido.descripcion, articuloRecibido.precio)
     this.articulos.push(objetonuevo);
    }




  corroborarSeleccion(i: number) {
    if (this.seleccionado) {
      this.articulos[this.indicecoloreado].colorearfila = false;
      let temp = this.articulos[this.indicecoloreado];
      this.articulos[this.indicecoloreado] = this.articulos[i];
      this.articulos[i] = temp;
      this.seleccionado = false;
      this.indicecoloreado = -1;
    } else {
      this.seleccionado = true;
      this.indicecoloreado = i;
      this.articulos[i].colorearfila = true;
      this.codigoseleccionado = this.articulos[i].codigo;
    }
  }




  borrar(indiceaborrar : number) {
    if(this.seleccionado){
      this.seleccionado = false;
      this.articulos[this.indicecoloreado].colorearfila = false;
    }
   
    this.articulos.splice(indiceaborrar, 1);
  }

}




