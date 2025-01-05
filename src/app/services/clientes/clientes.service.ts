import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../interfaces/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private apiUrl: string = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) {}

  getAllClients(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  crearCliente(cliente: Cliente) {
    return this.http.post(this.apiUrl, cliente);
  }

  deleteCliente(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  searchById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}/${id}`);
  }

  editCliente(id: number, cliente: Cliente) {
    return this.http.put(`${this.apiUrl}/${id}`, cliente);
  }
}
