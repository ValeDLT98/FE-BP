import { Component } from '@angular/core';
import { MovimientosService } from '../../../../services/movimientos/movimientos.service';
import { Movimiento } from '../../../../interfaces/movimientos';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-editar-movimiento',
  templateUrl: './editar-movimiento.component.html',
  styleUrl: './editar-movimiento.component.css',
})
export class EditarMovimientoComponent {
  public movimiento?: Movimiento;

  constructor(
    private movimientoService: MovimientosService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activateRoute.params
      .pipe(switchMap(({ id }) => this.movimientoService.getById(id)))
      .subscribe((mov) => {
        this.movimiento = mov;
      });
  }
}
