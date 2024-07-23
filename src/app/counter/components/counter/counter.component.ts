import { Component } from '@angular/core';

@Component({
  selector: 'counter-app',
  template: `
  <h3>
    Counter: {{counter.toString()}}
  </h3>


  <button (click)="increase(2)">+1</button>
  <button (click)="increase(-2)">-1</button>
  <button (click)="reset()">reset</button>
  `
})

export class CountComponent{
  constructor() { }

  public counter: number = 10;

  increase(value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }

}
