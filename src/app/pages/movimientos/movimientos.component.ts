import { Component } from '@angular/core';
import { Movimiento } from '../../interfaces/movimientos';
import { MovimientosService } from '../../services/movimientos/movimientos.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrl: './movimientos.component.css',
})
export class MovimientosComponent {
  public movimientos: Movimiento[] = [];
  public hideModal: boolean = true;
  public id: number = 0;
  public filteredMovimientos: Movimiento[] = [];

  constructor(private movimientoService: MovimientosService) {}

  ngOnInit() {
    this.movimientoService.getMovimientos().subscribe((movimientos) => {
      this.movimientos = movimientos;
      this.filteredMovimientos = movimientos;
      console.log(movimientos);
    });
  }

  searchCliente(value: string) {
    this.filteredMovimientos = [...this.movimientos].filter(
      (movimiento) =>
        movimiento?.cuenta?.toString().includes(value) ||
        movimiento?.saldo_disponible?.toString().includes(value) ||
        movimiento?.tipo_movimiento
          ?.toLocaleLowerCase()
          .includes(value.toLocaleLowerCase()) ||
        movimiento?.monto?.toString().includes(value)
    );
  }

  eliminarElemento(value: boolean) {
    if (value) {
      this.movimientoService.deleteMovimiento(this.id).subscribe({
        next: (response) => {
          alert('Movimiento eliminado correctamente');
          this.filteredMovimientos = this.movimientos.filter(
            (mov) => mov.id !== this.id
          );
        },
        error: (err) => {
          alert('Error al eliminar');
        },
        complete: () => {
          this.hideModal = true;
        },
      });
    } else {
      this.hideModal = true;
    }
  }
}
