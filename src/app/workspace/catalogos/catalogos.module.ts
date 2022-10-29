import { CatalogosRoutingModule } from './catalogos-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

@NgModule({
	declarations: [],
	imports: [CommonModule, CatalogosRoutingModule, SharedModule],
})
export class CatalogosModule {}
