import { ConfirmDialogComponent } from './ui/confirm-dialog/confirm-dialog.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MaterialModule } from '@material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormErrorHandlerPipe } from './pipes/form-error-handler.pipe';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { CircularLoadingComponent } from './ui/circular-loading/circular-loading.component';
import { SearchBarComponent } from './ui/search-bar/search-bar.component';
import {
	MomentDateAdapter,
	MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { TimestampLocalePipe } from './pipes/timestamp-locale.pipe';

export const DATE_FORMAT = {
	parse: {
		dateInput: 'DD/MM/yyyy',
	},
	display: {
		dateInput: 'DD/MM/yyyy',
		monthYearLabel: 'MMM YYYY',
		dateA11yLabel: 'LL',
		monthYearA11yLabel: 'MMMM YYYY',
	},
};

@NgModule({
  providers: [
		DatePipe,
		{
			provide: DateAdapter,
			useClass: MomentDateAdapter,
			deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
		},
		{ provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT },
	],
  declarations: [
    FormErrorHandlerPipe,
    CircularLoadingComponent,
    SearchBarComponent,
    ConfirmDialogComponent,
    TimestampLocalePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    MatPasswordStrengthModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FormErrorHandlerPipe,
    MatPasswordStrengthModule,
    CircularLoadingComponent,
    SearchBarComponent,
    ConfirmDialogComponent,
    TimestampLocalePipe
  ],
})
export class SharedModule {}
