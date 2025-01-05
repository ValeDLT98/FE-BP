import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteFormComponent } from './form/cliente-form/cliente-form.component';
import { ClientesComponent } from './clientes.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AgregarClienteComponent } from './agregar/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './agregar/editar-cliente/editar-cliente.component';

@NgModule({
  declarations: [ClienteFormComponent, ClientesComponent, AgregarClienteComponent, EditarClienteComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientesRoutingModule,
    RouterModule,
    SharedModule,
  ],
  exports: [ClienteFormComponent, ClientesComponent],
})
export class ClientesModule {}
