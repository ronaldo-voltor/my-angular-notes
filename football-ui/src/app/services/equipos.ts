import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../config/api.config';
import { Observable } from 'rxjs';
import { Equipo } from '../models/equipo';


@Injectable({ providedIn: 'root' })
export class EquiposService {
  private equiposSignal = signal<Equipo[]>([]);
  equipos = this.equiposSignal.asReadonly();

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    this.http.get<Equipo[]>(`${API_URL}/api/Teams`).subscribe({
      next: (data) => this.equiposSignal.set(data),
      error: (err) => console.error('Error cargando equipos', err)
    });
  }

  getById(id: string): Observable<Equipo> {
    return this.http.get<Equipo>(`${API_URL}/api/Teams/${id}`);
  }

  create(equipo: Omit<Equipo, 'id'>) {
    return this.http.post(`${API_URL}/api/Teams`, equipo).subscribe({
      next: () => this.load(),
      error: (err) => console.error('Error creando equipo', err)
    });
  }

  delete(id: string) {
    return this.http.delete(`${API_URL}/api/Teams/${id}`).subscribe({
      next: () => this.load(),
      error: (err) => console.error('Error eliminando equipo', err)
    });
  }

  edit(id: string, equipo: Partial<Equipo>) {
    return this.http.put(`${API_URL}/api/Teams/${id}`, equipo).subscribe({
      next: () => this.load(),
      error: (err) => console.error('Error editando equipo', err)
    });
  }
}
