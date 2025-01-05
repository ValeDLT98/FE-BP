import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movimiento, MovimientoDTO } from '../../interfaces/movimientos';

@Injectable({
  providedIn: 'root',
})
export class MovimientosService {
  private apiUrl: string = 'http://localhost:8080/movimientos';

  constructor(private http: HttpClient) {}

  getMovimientos(): Observable<Movimiento[]> {
    return this.http.get<Movimiento[]>(this.apiUrl);
  }

  crearMovimiento(movimiento: MovimientoDTO): Observable<Movimiento> {
    return this.http.post<Movimiento>(this.apiUrl, movimiento);
  }

  getById(id: number): Observable<Movimiento> {
    return this.http.get<Movimiento>(`${this.apiUrl}/${id}`);
  }

  editMovimiento(id: number, movimiento: Movimiento): Observable<Movimiento> {
    return this.http.put<Movimiento>(`${this.apiUrl}/${id}`, movimiento);
  }

  deleteMovimiento(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
