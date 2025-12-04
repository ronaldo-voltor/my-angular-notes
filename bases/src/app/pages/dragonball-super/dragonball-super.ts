import { Component, inject, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  templateUrl: './dragonball-super.html',
  imports: [CharacterList, CharacterAdd],
})
export class DragonballSuper {
  // inyectamos el servicio
  public dragonballService = inject(DragonballService);
}
