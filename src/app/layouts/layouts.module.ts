import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NormalLayoutComponent } from './normal-layout/normal-layout.component';
import { MinLayoutComponent } from './min-layout/min-layout.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [NormalLayoutComponent, MinLayoutComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule, RouterModule,SharedModule],
})
export class LayoutsModule {}
