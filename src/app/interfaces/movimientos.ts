import { Cuenta } from './cuentas';

export interface Movimiento {
  id: number;
  cuenta: number;
  tipo_movimiento: string;
  monto: number;
  fecha: Date;
  saldo_disponible: number;
}

export interface MovimientoDTO {
  id: number;
  cuenta: Cuenta;
  tipo_movimiento: string;
  monto: number;
  fecha: Date;
  saldo_disponible: number;
}
