import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cuenta, CuentaDTO } from '../../interfaces/cuentas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CuentasService {
  private apiUrl: string = 'http://localhost:8080/cuentas';

  constructor(private http: HttpClient) {}

  getCuentas(): Observable<CuentaDTO[]> {
    return this.http.get<CuentaDTO[]>(`${this.apiUrl}/all`);
  }

  getAllCuentas(): Observable<Cuenta[]> {
    return this.http.get<Cuenta[]>(this.apiUrl);
  }

  crearCuenta(cuenta: CuentaDTO) {
    return this.http.post(this.apiUrl, cuenta);
  }

  searchById(id: number): Observable<Cuenta> {
    return this.http.get<Cuenta>(`${this.apiUrl}/${id}`);
  }

  editCuenta(id: number, cuenta: Cuenta) {
    return this.http.put(`${this.apiUrl}/${id}`, cuenta);
  }

  deleteCuenta(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
