import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/workspace/dashboard',
		pathMatch: 'full',
	},
	{
		path: 'dashboard',
		loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
	},
  {
		path: 'catalogos',
		loadChildren: () => import('./catalogos/catalogos.module').then((m) => m.CatalogosModule),
	},
  {
		path: 'procesos',
		loadChildren: () => import('./procesos/procesos.module').then((m) => m.ProcesosModule),
	},
  {
		path: 'reportes',
		loadChildren: () => import('./reportes/reportes.module').then((m) => m.ReportesModule),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class WorkspaceRoutingModule {}
