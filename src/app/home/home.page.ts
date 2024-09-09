import { Component } from '@angular/core';  // Asegúrate de tener esta importación

@Component({
  selector: 'app-home',     // Nombre del componente
  templateUrl: 'home.page.html',   // Archivo HTML asociado
  styleUrls: ['home.page.scss'],   // Archivos de estilo asociados
})
export class HomePage {
  nombre!: string;
  apellido!: string;
  edad!: number;
  evento!: string;
  entrada!: string;
  valorEntrada!: number;
  mostrarBoleta = false;

  constructor() {}

  IngresarEntrada() {
    switch (this.entrada) {
      case 'Normal':
        this.valorEntrada = 4000;
        break;
      case 'Vip':
        this.valorEntrada = 5000;
        break;
      case 'Preferencial':
        this.valorEntrada = 3500;
        break;
      default:
        this.valorEntrada = 0;
        break;
    }

    // Mostrar la boleta
    this.mostrarBoleta = true;
  }
}