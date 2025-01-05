import { Component } from '@angular/core';
import { Cliente } from '../../../../interfaces/cliente';
import { ClientesService } from '../../../../services/clientes/clientes.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrl: './editar-cliente.component.css',
})
export class EditarClienteComponent {
  public cliente: Cliente | null = null;

  constructor(
    private clienteService: ClientesService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activateRoute.params
      .pipe(switchMap(({ id }) => this.clienteService.searchById(id)))
      .subscribe((client) => {
        this.cliente = client;
      });
  }
}
