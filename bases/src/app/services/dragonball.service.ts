import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
};

// el service usa singelton, es decir al trabajar con este servicio vamos a tener la misma instancia siempre
// lugar centralizado de mi informacion
@Injectable({ providedIn: 'root' })
export class DragonballService {
  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  // evento para agregar personaje
  addCharacter(newCh: Character) {
    this.characters.update((list) => [...list, newCh]);
  }
}
