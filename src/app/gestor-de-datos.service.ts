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
  indice: number = -1;
  codigoseleccionado: number = -1;




  hayRegistros(): boolean {
    return this.articulos.length > 0;
  }



  devuelveIndiceArray(codigo: number): number {
    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == codigo) {
        return x;
      }
    return 1;
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
    this.articulos.push({
      codigo,
      descripcion,
      precio,
      colorearfila: false

    });
  }



  corroborarSeleccion(i: number) {
    if (this.seleccionado) {
      this.articulos[this.devuelveIndiceArray(this.codigoseleccionado)].colorearfila = false;
      let temp = this.articulos[this.indice];
      this.articulos[this.indice] = this.articulos[i];
      this.articulos[i] = temp;
      this.seleccionado = false;
      this.indice = -1;
    } else {
      this.seleccionado = true;
      this.indice = i;
      this.articulos[i].colorearfila = true;
      this.codigoseleccionado = this.articulos[i].codigo;
    }
  }



  borrar(codigo: number) {
    this.seleccionado = false;
    this.articulos[this.devuelveIndiceArray(this.codigoseleccionado)].colorearfila = false;
    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == codigo) {
        if (this.articulos[x].colorearfila == true) {

          this.seleccionado = false
        }
        this.articulos.splice(x, 1);
        return;
      }
  }
}




