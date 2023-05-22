export interface ApiResponse {
    headers: any;
    body: {
      usuario: string | null;
      contraseña: string | null;
      nombre: string | null;
      correo: string | null;
      facultad: string | null;
      grupo: string | null;
      carnet: string | null;
      año: number;
      profesor: boolean;
      admin: boolean;
      estudiante: boolean;
    };
    statusCode: string;
    statusCodeValue: number;
  }