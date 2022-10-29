import { Empresas } from '@models/empresas';

export class CentroCosto{
  centroCostoID?: number;
  empresaID: number;
  nombre: string;
  responsable: string;
  empresa?: Empresas;
}
