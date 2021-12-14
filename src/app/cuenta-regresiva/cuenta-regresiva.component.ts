import { Component, OnInit } from '@angular/core';
import { Countdown } from '../interface/countdown.interface';



@Component({
  selector: 'app-cuenta-regresiva',
  templateUrl: './cuenta-regresiva.component.html',
  styleUrls: ['./cuenta-regresiva.component.css']
})
export class CuentaRegresivaComponent implements OnInit {

  fechaActual: Date = new Date();

  cuentaRegresiva!: Countdown;

  constructor() { }

  ngOnInit(): void {

    
  }

  x = setInterval(()=>{

    // fecha futura o fecha final
    let futureDate  = new Date("Oct 26, 2022 00:00:00").getTime(); // Tue Nov 30 2021 22:45:00 GMT-0300 (hora estándar de Argentina)    
    // actual date
    let today       = new Date().getTime();                        // Fri Nov 26 2021 00:28:21 GMT-0300 (hora estándar de Argentina)
    
    // diferencia
    let distance = futureDate - today;

    this.cuentaRegresiva = {
      // obtener días horas minutos segundos
      days      : Math.floor( distance / (1000 * 60 * 60 * 24)),
      hours     : Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes   : Math.floor( (distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds   : Math.floor( (distance % (1000 * 60)) / (1000))
    }

    // cuando termina ...
    if(distance < 0){

      clearInterval(this.x);
      this.cuentaRegresiva = undefined!
      
    }

  }, 1000);



}
