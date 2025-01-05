import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { AgregarClienteComponent } from './agregar/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './agregar/editar-cliente/editar-cliente.component';

const routes: Routes = [
  {
    path: 'agregar',
    component: AgregarClienteComponent,
  },
  {
    path: ':id',
    component: EditarClienteComponent,
  },
  {
    path: '**',
    component: ClientesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
