import { Menu } from '@models/menu';

export class Endpoints {}

// export enum Status {
// 	active = 1,
// 	inactive = 2,
// 	available = 3,
// 	assigned = 4,
// 	linked = 5,
// 	pending = 6,
// 	approved = 7,
// 	denied = 8,
// 	processed = 9,
// 	expired = 10,
// 	finished = 11,
// 	archived = 12,
// 	discarded = 13,
// }

export class AppMenu {
	public static listado: Menu[] = [
		{
			titulo: 'Catalogos',
			opciones: [
				{
					nombre: 'Empresa',
					url: 'catalogos/empresas',
				},
				{
					nombre: 'Cuenta contables',
					url: 'catalogos/cuentas',
				},
				{
					nombre: 'Clientes',
					url: 'catalogos/clientes',
				},
				{
					nombre: 'Proveedores',
					url: 'catalogos/proveedores',
				},
				{
					nombre: 'Centros de Costo',
					url: 'catalogos/centros',
				},
			],
		},
		{
			titulo: 'Procesos',
			opciones: [
				{
					nombre: 'Partidas contables',
					url: 'procesos/partidas',
				},
			],
		},
		{
			titulo: 'Reportes',
			opciones: [
				{
					nombre: 'Diario Mayor',
					url: 'reportes/diarioMayor',
				},
				{
					nombre: 'Estado de Resultados',
					url: 'reportes/estadoResultados',
				},
			],
		},
	];
}

export class StorageKeys {
	public static dateFormat = 'dtf';
	public static deviceIP = 'dip';
	public static loginAccount = 'lac';
	public static loginData = 'ldt';
	public static loginToken = 'ltk';
}

export class Genders {
	public static male = 'male';
	public static female = 'female';
	public static other = 'other';
}

export class ListadoMonedas {
  public static Monedas: string[] = ['Q.',"$.","€."]
};
