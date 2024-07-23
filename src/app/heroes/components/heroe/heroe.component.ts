import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public name: string = 'Ironman';
  public age: number = 32;

  get capitalizeName():string {
    return this.name.toUpperCase();
  }

  getHeroeDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  chnageName(name: string): void {
    this.name = name;
  }

  changeAge(age: number): void {
    this.age = age;
  }
}
