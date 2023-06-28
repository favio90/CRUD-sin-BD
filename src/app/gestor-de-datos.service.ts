import { Injectable } from '@angular/core';
import { Articulos
 } from './Articulos';
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




  agregar(codigo: number, descripcion: string, precio: number) {
    if (codigo == 0) {
      alert('Debe ingresar un código de articulo distinto a cero');
      return;
    }
    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == codigo) {
        alert('ya existe un articulo con dicho codigo');
        return;
      }
    this.articulos[this.indicecoloreado].colorearfila = false;
    this.seleccionado = false;
    const nuevoArticulo = new Articulos(codigo, descripcion, precio);
     this.articulos.push(nuevoArticulo);
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

//   borrar(codigo: number) {
//     this.seleccionado = false;
//     this.articulos[this.devuelveIndiceArray(this.codigoseleccionado)].colorearfila = false;
//     for (let x = 0; x < this.articulos.length; x++)
//       if (this.articulos[x].codigo == codigo) {
//         if (this.articulos[x].colorearfila == true) {

//           this.seleccionado = false
//         }
//         this.articulos.splice(x, 1);
//         return;
//       }
//   }





