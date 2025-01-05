import { Component } from '@angular/core';
import { Cuenta } from '../../interfaces/cuentas';
import { CuentasService } from '../../services/cuentas/cuentas.service';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrl: './cuentas.component.css',
})
export class CuentasComponent {
  public cuentas: Cuenta[] = [];
  public hideModal: boolean = true;
  public id: number = 0;
  public filteredCuentas: Cuenta[] = [];

  constructor(private cuentaService: CuentasService) {}

  ngOnInit() {
    this.cuentaService.getAllCuentas().subscribe((cuentas) => {
      this.cuentas = cuentas;
      this.filteredCuentas = this.cuentas;
    });
  }

  eliminarElemento(value: boolean) {
    if (value) {
      this.cuentaService.deleteCuenta(this.id).subscribe({
        next: (response) => {
          alert('Cuenta eliminada correctamente');
          this.filteredCuentas = this.cuentas.filter(
            (cuenta) => cuenta.numero !== this.id
          );
        },
        error: (err) => {
          alert('Error al eliminar la cuenta');
        },
        complete: () => {
          this.hideModal = true;
        },
      });
    } else {
      this.hideModal = true;
    }
  }

  searchCuenta(value: string) {
    this.filteredCuentas = [...this.cuentas].filter(
      (cuenta) =>
        cuenta?.numero.toString().includes(value) ||
        cuenta?.saldo?.toString().includes(value) ||
        cuenta?.tipo?.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
        cuenta?.estado?.toString().includes(value) ||
        cuenta?.nombreCliente
          ?.toLocaleLowerCase()
          .includes(value.toLocaleLowerCase())
    );
  }
}
