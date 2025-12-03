import { Component, input } from '@angular/core';
import { Character } from '../../../interfaces/character';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
})
export class CharacterList {

  // recibir lista de personajes desde el componente padre
  characters = input.required<Character[]>();
  listName = input.required<string>();
}
