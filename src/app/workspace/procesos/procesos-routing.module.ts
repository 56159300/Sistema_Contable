import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
		path: 'partidas',
		loadChildren: () => import('./partidas/partidas.module').then((m) => m.PartidasModule),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProcesosRoutingModule {}
