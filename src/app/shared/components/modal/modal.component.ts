import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Output()
  public pressEliminar: EventEmitter<boolean> = new EventEmitter();

  eliminarElemento(value: boolean) {
    this.pressEliminar.emit(value);
  }
}
