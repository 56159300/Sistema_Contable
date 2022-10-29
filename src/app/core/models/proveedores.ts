import { Cuenta } from "./cuentas";
import { Empresas } from "./empresas";

export class Proveedor{
  proveedorID?: number;
  empresaID?: number;
  cuentaID?: number;
  codigo: string;
  nombre: string;
  nit: string;
  empresa?: Empresas;
  cuenta?: Cuenta;
}
