import { Component, Input } from '@angular/core';
import { Cuenta } from '../../../../interfaces/cuentas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CuentasService } from '../../../../services/cuentas/cuentas.service';
import { ClientesService } from '../../../../services/clientes/clientes.service';
import { Cliente } from '../../../../interfaces/cliente';

@Component({
  selector: 'app-cuenta-form',
  templateUrl: './cuenta-form.component.html',
  styleUrl: './cuenta-form.component.css',
})
export class CuentaFormComponent {
  public sucess: number = 0;
  public numCuenta: number = 0;
  public myForm!: FormGroup;
  public clientes: Cliente[] = [];

  @Input()
  public cuenta!: Cuenta;

  @Input()
  public title: string = '';

  @Input()
  public type: string = '';

  constructor(
    private fb: FormBuilder,
    private cuentaService: CuentasService,
    private clienteService: ClientesService
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      numero: [
        this.type == 'editar'
          ? this.cuenta?.numero
          : Math.floor(Math.random() * 1000000)
              .toString()
              .padStart(6, '0'),
        [Validators.required],
      ],
      tipo: [this.cuenta?.tipo, [Validators.required]],
      saldo: [this.cuenta?.saldo, [Validators.required]],
      estado: [this.cuenta?.estado, [Validators.required]],
      cliente: [this.cuenta?.nombreCliente, [Validators.required]],
    });

    this.clienteService
      .getAllClients()
      .subscribe((clientes) => (this.clientes = clientes));
  }

  isValidField(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  getFieldError(field: string) {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracters.`;

        case 'maxlength':
          return `Máximo ${errors['maxlength'].requiredLength} caracters.`;
      }
    }
    return null;
  }

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    if (this.myForm.valid) {
      const formData = this.myForm.value;

      if (this.type == 'editar') {
        this.cuentaService.editCuenta(this.cuenta.numero, formData).subscribe(
          (response) => {
            this.sucess = 1;
          },
          (error) => {
            this.sucess = 2;
          }
        );
      } else {
        this.cuentaService.crearCuenta(formData).subscribe(
          (response) => {
            this.sucess = 1;
            this.resetForm();
          },
          (error) => {
            this.sucess = 2;
          }
        );
      }
    }
  }

  validateForm() {
    if (this.myForm.invalid) {
      return true;
    }

    return false;
  }

  resetForm() {
    this.myForm.reset({
      numero: '',
      tipo: '',
      saldo: '',
      estado: '',
      cliente: '',
    });
  }
}
