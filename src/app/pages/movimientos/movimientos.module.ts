import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovimientosRoutingModule } from './movimientos-routing.module';
import { MovimientosComponent } from './movimientos.component';
import { SharedModule } from '../../shared/shared.module';
import { AgregarMovimientoComponent } from './crud/agregar-movimiento/agregar-movimiento.component';
import { MovimientoFormComponent } from './form/movimiento-form/movimiento-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarMovimientoComponent } from './crud/editar-movimiento/editar-movimiento.component';

@NgModule({
  declarations: [
    MovimientosComponent,
    AgregarMovimientoComponent,
    MovimientoFormComponent,
    EditarMovimientoComponent,
  ],
  imports: [
    CommonModule,
    MovimientosRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class MovimientosModule {}
