import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuentasService } from '../../../../services/cuentas/cuentas.service';
import { switchMap } from 'rxjs';
import { Cuenta } from '../../../../interfaces/cuentas';

@Component({
  selector: 'app-editar-cuenta',
  templateUrl: './editar-cuenta.component.html',
  styleUrl: './editar-cuenta.component.css',
})
export class EditarCuentaComponent {
  public cuenta: Cuenta | null = null;

  constructor(
    private activateRoute: ActivatedRoute,
    private cuentaService: CuentasService
  ) {}

  ngOnInit() {
    this.activateRoute.params
      .pipe(switchMap(({ id }) => this.cuentaService.searchById(id)))
      .subscribe((cuenta) => {
        this.cuenta = cuenta;
      });
  }
}
