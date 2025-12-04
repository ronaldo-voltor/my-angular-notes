import { Routes } from '@angular/router';
import { EquiposList } from './equipos-list/equipos-list';
import { EquipoForm } from './equipo-form/equipo-form';

export const routes: Routes = [
  { path: '', component: EquiposList },
  { path: 'crear', component: EquipoForm },
  { path: 'equipos/:id', component: EquipoForm },
];
