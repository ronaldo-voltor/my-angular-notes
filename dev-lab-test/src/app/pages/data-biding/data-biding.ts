import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-biding',
  imports: [FormsModule],
  templateUrl: './data-biding.html',
  styles: ``,
})
export default class DataBiding {
  protected readonly title = signal('dev-lab-test');
  imagenProducto = signal('https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg');
  cantidad = signal(0);
  detalles = signal('');
  simboloInterpolacion = '{{value}}';

  // aumentar la cantidad
  aumentar = (value: number) => this.cantidad.update((c) => c + value);

  // disminuir pero validar que la cantidad no sea negativa
  disminuir = (value: number) => {
    this.cantidad.update((c) => Math.max(0, c - value));
  };

  // resetear la cantidad
  reset = () => this.cantidad.set(0);

  // cambiar la imagen del producto
  cambiarImagen = (value: number) => {
    // la url es la misma solo cambia el numero de la imagen
    this.imagenProducto.set(
      `https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${value}.jpg`
    );
  };

  // actualizar los detalles del producto
  reemplazarDetalle(value: string) {
    this.detalles.set(value);
  }
}
