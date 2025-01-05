import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuentasRoutingModule } from './cuentas-routing.module';
import { AgregarCuentaComponent } from './crud/agregar-cuenta/agregar-cuenta.component';
import { CuentasComponent } from './cuentas.component';
import { SharedModule } from '../../shared/shared.module';
import { CuentaFormComponent } from './form/cuenta-form/cuenta-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditarCuentaComponent } from './crud/editar-cuenta/editar-cuenta.component';

@NgModule({
  declarations: [CuentasComponent, AgregarCuentaComponent, CuentaFormComponent, EditarCuentaComponent],
  imports: [
    CommonModule,
    CuentasRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [CuentasComponent],
})
export class CuentasModule {}
