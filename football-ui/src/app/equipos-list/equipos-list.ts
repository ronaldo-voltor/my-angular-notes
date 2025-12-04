import { Component, inject, signal } from '@angular/core';
import { EquiposService } from '../services/equipos';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equipos-list',
  imports: [RouterModule, CommonModule],
  templateUrl: './equipos-list.html',
})
export class EquiposList {

  private service = inject(EquiposService);

  equipos = this.service.equipos;

  loading = signal(false);
  error = signal('');

  create() {
    // aquí luego haremos navegación / modal
    console.log('Crear equipo');
  }

  edit(id: number) {
    console.log('Editar', id);
  }

  delete(id: string) {
    this.service.delete(id);
  }
}
