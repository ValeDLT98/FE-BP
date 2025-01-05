import { Component } from '@angular/core';
import { ClientesService } from '../../services/clientes/clientes.service';
import { Cliente } from '../../interfaces/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
})
export class ClientesComponent {
  public clientes: Cliente[] = [];
  public hideModal: boolean = true;
  public id: number = 0;
  public filteredClientes: Cliente[] = [];

  constructor(private clienteService: ClientesService) {}

  ngOnInit(): void {
    this.clienteService.getAllClients().subscribe((clientes) => {
      this.clientes = clientes;
      this.filteredClientes = clientes;
    });
  }

  eliminarElemento(value: boolean) {
    if (value) {
      this.clienteService.deleteCliente(this.id).subscribe({
        next: (response) => {
          alert('Cliente eliminado correctamente');
          this.filteredClientes = this.clientes.filter(
            (cliente) => cliente.id !== this.id
          );
        },
        error: (err) => {
          alert('Error al eliminar el cliente');
        },
        complete: () => {
          this.hideModal = true;
        },
      });
    } else {
      this.hideModal = true;
    }
  }

  searchCliente(value: string) {
    this.filteredClientes = [...this.clientes].filter(
      (cliente) =>
        cliente?.nombres
          ?.toLocaleLowerCase()
          .includes(value.toLocaleLowerCase()) ||
        cliente?.direccion
          ?.toLocaleLowerCase()
          .includes(value.toLocaleLowerCase()) ||
        cliente?.identificacion?.toString().includes(value) ||
        cliente?.telefono?.toString().includes(value) ||
        cliente?.genero
          ?.toLocaleLowerCase()
          .includes(value.toLocaleLowerCase()) ||
        cliente?.edad?.toString().includes(value)
    );
  }
}
