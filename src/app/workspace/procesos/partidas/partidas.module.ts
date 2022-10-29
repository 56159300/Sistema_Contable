import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { PartidasRoutingModule } from './partidas-routing.module';
import { DetalleDialogFormComponent } from './detalle-dialog-form/detalle-dialog-form.component';



@NgModule({
  declarations: [ListComponent, FormComponent, DetalleDialogFormComponent],
	imports: [CommonModule, SharedModule, PartidasRoutingModule],
})
export class PartidasModule { }
