import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball.html',
  styleUrl: './dragonball.scss',
  imports: [CommonModule],
})
export class Dragonball {
  name = signal('Gohan');
  power = signal(7500);

  modalOpen = signal(false);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 9300 },
    { id: 3, name: 'Piccolo', power: 7000 },
    { id: 4, name: 'Yamcha', power: 900 },
  ]);

  openModal() {
    this.modalOpen.set(true);
  }

  closeModal() {
    this.modalOpen.set(false);
  }

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
    this.closeModal();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
