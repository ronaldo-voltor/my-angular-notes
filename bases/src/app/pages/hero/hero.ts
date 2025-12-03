import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './hero.html',
})
export class Hero {
  // Estado reactivo usando signals
  name = signal('Ironman');
  age = signal(45);

  // Método para cambiar el nombre
  changeName = (newName: string) => this.name.set(newName);

  // Método para cambiar la edad
  changeAge = (newAge: number) => this.age.set(newAge);

  // Método para obtener una descripción completa del héroe
  getHeroDescription = () => `${this.name()} - ${this.age()} años`;

  // Metodo para cambiar Hero
  changeHero = () => {
    this.changeName('Spiderman');
    this.changeAge(21);
  };

  // Método para reiniciar los valores del héroe
  resetHero = () => {
    this.changeName('Ironman');
    this.changeAge(45);
  };
}
