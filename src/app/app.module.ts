import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { CuentasComponent } from './pages/cuentas/cuentas.component';
import { ClientesModule } from './pages/clientes/clientes.module';
import { CuentasModule } from './pages/cuentas/cuentas.module';
import { MovimientosModule } from './pages/movimientos/movimientos.module';
import { ReportesModule } from './pages/reportes/reportes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ClientesModule,
    CuentasModule,
    MovimientosModule,
    ReportesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
