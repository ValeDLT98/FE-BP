import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reporte } from '../../interfaces/reporte';

@Injectable({
  providedIn: 'root',
})
export class ReportesService {
  private apiUrl: string = 'http://localhost:8080/reportes';

  constructor(private http: HttpClient) {}

  generateReport(
    clienteId: number,
    fechaInicio: String,
    fechaFin: String
  ): Observable<Reporte[]> {
    return this.http.get<Reporte[]>(
      `${this.apiUrl}?clienteId=${clienteId}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`
    );
  }
}
