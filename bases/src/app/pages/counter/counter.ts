import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter.html',
})
export class Counter {
  // Estado reactivo usando signals
  counter = signal(10);

  // Método para aumentar el contador
  increaseBy = (value: number) => this.counter.update((c) => c + value);

  // Método para disminuir el contador
  decreaseBy = (value: number) => this.counter.update((c) => c - value);

  // Método para reiniciar el contador
  resetCounter = () => this.counter.set(0);
}
