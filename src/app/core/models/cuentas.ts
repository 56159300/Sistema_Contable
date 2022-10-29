import { Empresas } from '@models/empresas';

export class Cuenta {
  cuentaID?: number;
  empresaID: number;
  padreCuentaID?: number;
  codigo: string;
  nombre: string;
  empresa?: Empresas;
  padreCuenta?: Cuenta;
}
