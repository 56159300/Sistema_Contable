import { Cuenta } from '@models/cuentas';
import { CentroCosto } from '@models/centro-costo';
import { Empresas } from '@models/empresas';

export class Partida {
	partidaID?: number;
	empresaID: number;
	fechaDocumento: Date;
	fechaRegistro?: Date;
	moneda: string;
	texto: string;
	total: number;
  empresa?: Empresas;
}

export class PartidaDetalle {
	partidaDetalleID?: number;
	partidaID?: number;
	cuentaID: number;
	centroCostoID?: number;
	monto: number;
	debe: number;
	haber: number;
	cuenta?: Cuenta;
  centroCosto?: CentroCosto;
}
