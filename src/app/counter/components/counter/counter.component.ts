/* Manera Tradicional de Crear la Clase */
/* import {  Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: '<h1>Hola Counter</h1>'
})
export class CounterComponent {

} */


/*  Manera Moderna de Crear la Clase */

/* import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: '<h1>Hola Counter</h1>'
})

export class CounterComponent {
  constructor() { }

} */

  import { Component } from '@angular/core';

  @Component({
    selector: 'app-counter',
    template: `
      <h3>Counter: {{  counter }}</h3>


      <button (click)="increaseBy(+1)" >+1</button>
      <button (click)="resetCounter()" >Reset</button>
      <button (click)="increaseBy(-1)" >-1</button>


    `
  })

  export class CounterComponent {
    public counter = 10; // Variable de la Clase

    increaseBy( value: number ) :void {
      this.counter += value; // Incrementa el valor de la variable counter
    }

    resetCounter() {
      this.counter = 10;
    }


  }
