import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero.html',
  imports: [UpperCasePipe],
})
export class Hero {
  // Estado reactivo usando signals
  name = signal('Ironman');
  age = signal(45);
  heroDescription = computed(() => `${this.name()} - ${this.age()} años`);
  //uppercaseName = computed(() => this.name().toUpperCase());

  // Método para cambiar el nombre
  changeName = (newName: string) => this.name.set(newName);

  // Método para cambiar la edad
  changeAge = (newAge: number) => this.age.set(newAge);


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
