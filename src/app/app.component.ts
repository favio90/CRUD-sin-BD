import { Component } from '@angular/core';
import { Cons } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-directiva-ngModel';

  seleccionado: boolean = false;
  indice: number = -1;
  codigoseleccionado: number = -1;


  art = {
    codigo: 0,
    descripcion: "",
    precio: 0,
    colorearFila: false
  }

  articulos = [{ codigo: 1, descripcion: 'Milanesa', precio: 50, colorearFila: false },
  { codigo: 2, descripcion: 'Bife', precio: 35, colorearFila: false },
  { codigo: 3, descripcion: 'Cerveza', precio: 80, colorearFila: false },
  { codigo: 4, descripcion: 'Papas', precio: 26, colorearFila: false },
  { codigo: 5, descripcion: 'Palmitos', precio: 17, colorearFila: false },
  ];

  hayRegistros() {
    return this.articulos.length > 0;
  }

  borrar(codigo: number) {
        this.seleccionado = false;
        this.articulos[this.devuelveIndiceArray(this.codigoseleccionado)] .colorearFila = false;
   
    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == codigo) {

        if (this.articulos[x].colorearFila == true) {

          this.seleccionado = false

        }

        this.articulos.splice(x, 1);
        return;
      }
  }

  agregar() {
    if (this.art.codigo == 0) {
      alert('Debe ingresar un código de articulo distinto a cero');
      return;
    }
    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == this.art.codigo) {
        alert('ya existe un articulo con dicho codigo');
        return;
      }
    this.articulos.push({
      codigo: this.art.codigo,
      descripcion: this.art.descripcion,
      precio: this.art.precio,
      colorearFila: false
       
    });
    this.art.codigo = 0;
    this.art.descripcion = "";
    this.art.precio = 0;
  }

  seleccionar(art: { codigo: number; descripcion: string; precio: number; }) {
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

    if (this.seleccionado) {
     // this.articulos[this.indice].colorearFila = false;  // creo que acá está el error por que el índice ya se movió
      this.articulos[this.devuelveIndiceArray(this.codigoseleccionado)] .colorearFila = false;
     
      let temp = this.articulos[this.indice];
      this.articulos[this.indice] = this.articulos[i];
      this.articulos[i] = temp;

      this.seleccionado = false;
      this.indice = -1;

    } else {

      this.seleccionado = true;
      this.indice = i;
      this.articulos[i].colorearFila = true;   
       this.codigoseleccionado = this.articulos[i].codigo;
    }

  }

  devuelveIndiceArray(codigo: number): number {

    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == codigo) {
        return x;
      }
    return 1;
  }
}











