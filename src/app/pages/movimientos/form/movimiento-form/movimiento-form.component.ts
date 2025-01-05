import { Component, Input } from '@angular/core';
import { Movimiento } from '../../../../interfaces/movimientos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovimientosService } from '../../../../services/movimientos/movimientos.service';
import { CuentasService } from '../../../../services/cuentas/cuentas.service';
import { CuentaDTO } from '../../../../interfaces/cuentas';

@Component({
  selector: 'app-movimiento-form',
  templateUrl: './movimiento-form.component.html',
  styleUrl: './movimiento-form.component.css',
})
export class MovimientoFormComponent {
  public sucess: number = 0;
  public myForm: FormGroup = new FormGroup({});
  public cuentas: CuentaDTO[] = [];

  @Input()
  public movimiento!: Movimiento;

  @Input()
  public title: string = '';

  @Input()
  public type: string = '';

  constructor(
    private fb: FormBuilder,
    private movimientoService: MovimientosService,
    private cuentasService: CuentasService
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      cuenta: [this.movimiento?.cuenta, [Validators.required]],
      tipo_movimiento: [
        this.movimiento?.tipo_movimiento,
        [Validators.required],
      ],
      monto: [this.movimiento?.monto, [Validators.required]],
      fecha: [this.movimiento?.fecha, [Validators.required]],
    });

    this.cuentasService
      .getCuentas()
      .subscribe((cuentas) => (this.cuentas = cuentas));
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
        this.movimientoService
          .editMovimiento(this.movimiento.id, formData)
          .subscribe(
            (response) => {
              this.sucess = 1;
            },
            (error) => {
              this.sucess = 2;
            }
          );
      } else {
        this.movimientoService.crearMovimiento(formData).subscribe(
          (response) => {
            this.sucess = 1;
          },
          (error) => {
            this.sucess = 2;
          }
        );
        this.resetForm();
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
      numero_cuenta: '',
      tipo_movimiento: '',
      monto: '',
      fecha: '',
    });
  }
}
