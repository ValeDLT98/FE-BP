import { Component, Input, SimpleChanges } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ClientesService } from '../../../../services/clientes/clientes.service';
import { Cliente } from '../../../../interfaces/cliente';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css',
})
export class ClienteFormComponent {
  public sucess: number = 0;

  @Input()
  public client!: Cliente;

  @Input()
  public title: string = '';

  @Input()
  public type: string = '';

  constructor(
    private fb: FormBuilder,
    private clienteService: ClientesService
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      nombres: [
        this.client?.nombres,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
      identificacion: [
        this.client?.identificacion,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      direccion: [this.client?.direccion, [Validators.required]],
      telefono: [this.client?.telefono, [Validators.required]],
      genero: [this.client?.genero, [Validators.required]],
      edad: [this.client?.edad, [Validators.required]],
      estado: [this.client?.estado, [Validators.required]],
      contrasena: [this.client?.contrasena, [Validators.required]],
    });
  }

  public myForm: FormGroup = this.fb.group({
    nombres: [
      this.client?.nombres,
      [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
    ],
    identificacion: [
      this.client?.identificacion,
      [Validators.required, Validators.minLength(10), Validators.maxLength(10)],
    ],
    direccion: [this.client?.direccion, [Validators.required]],
    telefono: [this.client?.telefono, [Validators.required]],
    genero: [this.client?.genero, [Validators.required]],
    edad: [this.client?.edad, [Validators.required]],
    estado: [this.client?.estado, [Validators.required]],
    contrasena: [this.client?.contrasena, [Validators.required]],
  });

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
        this.clienteService.editCliente(this.client.id, formData).subscribe(
          (response) => {
            this.sucess = 1;
          },
          (error) => {
            this.sucess = 2;
          }
        );
      } else {
        this.clienteService.crearCliente(formData).subscribe(
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
      nombres: '',
      identificacion: '',
      direccion: '',
      telefono: '',
      genero: '',
      edad: '',
      estado: '',
      contrasena: '',
    });
  }
}
