import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentasComponent } from './cuentas.component';
import { AgregarCuentaComponent } from './crud/agregar-cuenta/agregar-cuenta.component';
import { EditarCuentaComponent } from './crud/editar-cuenta/editar-cuenta.component';

const routes: Routes = [
  {
    path: 'agregar',
    component: AgregarCuentaComponent,
  },
  {
    path: ':id',
    component: EditarCuentaComponent,
  },
  {
    path: '**',
    component: CuentasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentasRoutingModule {}
