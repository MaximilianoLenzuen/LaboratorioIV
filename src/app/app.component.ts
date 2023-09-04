import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clase1';
  public edadUno : string = "";
  public edadDos : string = "";

  public valorSuma : string = "";
  public valorPromedio : string = "";

  hacerCalculos(): void {
    this.valorPromedio = ((parseInt(this.edadUno) + parseInt(this.edadDos)) /2).toString();
    this.valorSuma = (parseInt(this.edadUno) + parseInt(this.edadDos)).toString();
  }

  limpiarValores(): void {
    this.edadDos = "";
    this.edadUno = "";
    this.valorSuma = "";
    this.valorPromedio = "";
  }

}

export class Usuario {

  public nombre : string = "";
  public clave : string = "";

}
