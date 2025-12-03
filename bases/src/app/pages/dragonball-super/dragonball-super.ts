import { Component, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';
import { Character } from '../../interfaces/character';

@Component({
  templateUrl: './dragonball-super.html',
  imports: [CharacterList, CharacterAdd],
})
export class DragonballSuper {
  characters = signal<Character[]>([{ id: 1, name: 'Goku', power: 9001 }]);

  // evento para agregar personaje
  addCharacter(newCh: Character) {
    this.characters.update((list) => [...list, newCh]);
  }
}
