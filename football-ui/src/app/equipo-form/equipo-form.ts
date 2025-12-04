import { Component, signal, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EquiposService } from '../services/equipos';

@Component({
  selector: 'app-equipo-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './equipo-form.html',
})
export class EquipoForm implements OnInit {

  nombre = signal('');
  liga = signal('');
  id?: string;

  private service = inject(EquiposService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? undefined;

    if (this.id) {
      this.service.getById(this.id).subscribe({
        next: (eq: any) => {
          this.nombre.set(eq.nombre ?? '');
          this.liga.set(eq.liga ?? '');
        },
        error: (err) => console.error('Error cargando equipo', err)
      });
    }
  }

  save() {
    if (!this.nombre() || !this.liga()) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const payload = {
      nombre: this.nombre(),
      liga: this.liga(),
    };

    if (this.id) {
      this.service.edit(this.id, payload);
    } else {
      this.service.create(payload);
    }

    this.router.navigate(['/']);
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
