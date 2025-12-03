import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.html',
})
export class CharacterAdd {
  name = signal('');
  power = signal(0);

  // output para emitir el nuevo personaje creado
  newCharacter = output<Character>();

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };

    // this.characters.update((list) => [...list, newCharacter]);
    this.newCharacter.emit(newCharacter); // emitimos el nuevo personaje creado
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
