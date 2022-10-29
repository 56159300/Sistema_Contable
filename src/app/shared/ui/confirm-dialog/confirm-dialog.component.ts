import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-confirm-dialog',
	templateUrl: './confirm-dialog.component.html',
	styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent {
	constructor(
		public dialogRef: MatDialogRef<ConfirmDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData
	) {}

	// Cierra click al responder negativamente
	onNoClick() {
		this.dialogRef.close(false);
	}

	// Cierra click al responder positivamente
	confirmed() {
		this.dialogRef.close(true);
	}
}

export interface ConfirmDialogData {
	message: string;
	submit: string;
	cancel: string;
}
