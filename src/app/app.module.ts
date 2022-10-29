import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { SharedModule } from '@shared/shared.module';
import { LayoutsModule } from '@layouts/layouts.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { TimestampLocalePipe } from '@shared/pipes/timestamp-locale.pipe';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
		AppRoutingModule,
		LayoutsModule,
		SharedModule,
		MaterialModule,
		HttpClientModule,
		NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
			timeOut: 3000,
			positionClass: 'toast-bottom-right',
			closeButton: true,
		}),
  ],
  providers: [TimestampLocalePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
