interface Persona {
  nombres: string;
  direccion: string;
  telefono: string;
  edad: number;
  genero: string;
  identificacion: string;
}

export interface Cliente extends Persona {
  id: number;
  contrasena: string;
  estado: boolean;
}
