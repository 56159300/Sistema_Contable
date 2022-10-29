import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
		path: 'empresas',
		loadChildren: () => import('./empresas/empresas.module').then((m) => m.EmpresasModule),
	},
  {
		path: 'cuentas',
		loadChildren: () => import('./cuentas-contables/cuentas-contables.module').then((m) => m.CuentasContablesModule),
	},
  {
		path: 'clientes',
		loadChildren: () => import('./clientes/clientes.module').then((m) => m.ClientesModule),
	},
  {
		path: 'proveedores',
		loadChildren: () => import('./proveedores/proveedores.module').then((m) => m.ProveedoresModule),
	},
  {
		path: 'centros',
		loadChildren: () => import('./centro-costo/centro-costo.module').then((m) => m.CentroCostoModule),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CatalogosRoutingModule {}
