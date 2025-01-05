import { Cliente } from './cliente';

export interface Cuenta {
  numero: number;
  tipo: string;
  saldo: number;
  estado: boolean;
  nombreCliente: string;
}

export interface CuentaDTO {
  numero: number;
  tipo: string;
  saldo: number;
  estado: boolean;
  cliente: Cliente;
}
