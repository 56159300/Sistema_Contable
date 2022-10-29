import { EstadoResultadosComponent } from './estado-resultados/estado-resultados.component';
import { DiarioMayorComponent } from './diario-mayor/diario-mayor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'diarioMayor',
		component: DiarioMayorComponent,
	},
	{
		path: 'estadoResultados',
    component: EstadoResultadosComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ReportesRoutingModule {}
