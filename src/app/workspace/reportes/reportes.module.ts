import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiarioMayorComponent } from './diario-mayor/diario-mayor.component';
import { EstadoResultadosComponent } from './estado-resultados/estado-resultados.component';
import { SharedModule } from '@shared/shared.module';
import { ReportesRoutingModule } from './reportes-routing.module';



@NgModule({
  declarations: [
    DiarioMayorComponent,
    EstadoResultadosComponent
  ],
  imports: [
    CommonModule, ReportesRoutingModule, SharedModule
  ]
})
export class ReportesModule { }
