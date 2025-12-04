import { Component, inject, signal } from '@angular/core';
import { EquiposService } from '../services/equipos';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-equipos-list',
  templateUrl: './equipos-list.html',
  imports: [RouterModule],
})
export class EquiposList {
  private service = inject(EquiposService);

  equipos = this.service.equipos;

  delete(id: string) {
    this.service.delete(id);
  }
}
