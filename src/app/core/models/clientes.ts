import { Cuenta } from "./cuentas";
import { Empresas } from "./empresas";

export class Cliente{
  clienteID?: number;
  codigo: string;
  nombre: string;
  nit: string;
  cuentaID?: number;
  cuenta?: Cuenta;
  empresaID?: number;
  empresa?: Empresas;

}
