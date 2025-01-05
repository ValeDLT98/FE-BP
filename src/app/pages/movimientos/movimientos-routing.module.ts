import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovimientosComponent } from './movimientos.component';
import { AgregarMovimientoComponent } from './crud/agregar-movimiento/agregar-movimiento.component';
import { EditarMovimientoComponent } from './crud/editar-movimiento/editar-movimiento.component';

const routes: Routes = [
  {
    path: '',
    component: MovimientosComponent,
  },
  {
    path: 'agregar',
    component: AgregarMovimientoComponent,
  },
  {
    path: ':id',
    component: EditarMovimientoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovimientosRoutingModule {}
