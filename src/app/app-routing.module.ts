import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentasComponent } from './pages/cuentas/cuentas.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ReportesComponent } from './pages/reportes/reportes.component';

const routes: Routes = [
  {
    path: 'clientes',
    loadChildren: () =>
      import('./pages/clientes/clientes.module').then((m) => m.ClientesModule),
  },
  {
    path: 'cuentas',
    loadChildren: () =>
      import('./pages/cuentas/cuentas.module').then((m) => m.CuentasModule),
  },
  {
    path: 'movimientos',
    loadChildren: () =>
      import('./pages/movimientos/movimientos.module').then(
        (m) => m.MovimientosModule
      ),
  },
  {
    path: 'reportes',
    component: ReportesComponent,
  },
  {
    path: '**',
    component: ClientesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
