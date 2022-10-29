import { NotificationsService } from '@services/utils/notifications.service';
import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CentroCosto } from '@models/centro-costo';
import { PartidaDetalle } from '@models/partidas';
import { Cuenta } from '@models/cuentas';
import { CentroCostoService } from '@services/backend/centro-costo.service';
import { CuentasContablesService } from '@services/backend/cuentas-contables.service';

@Component({
	selector: 'app-detalle-dialog-form',
	templateUrl: './detalle-dialog-form.component.html',
	styleUrls: ['./detalle-dialog-form.component.scss'],
})
export class DetalleDialogFormComponent implements OnInit {
	form: UntypedFormGroup;
	partidaDetalle: PartidaDetalle;
	listCuentas: Cuenta[];
	listCentroCosto: CentroCosto[];

	constructor(
		public dialogRef: MatDialogRef<DetalleDialogFormComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private formBuilder: UntypedFormBuilder,
		private notificationsService: NotificationsService,
		private centroCostoService: CentroCostoService,
		private cuentasContablesService: CuentasContablesService
	) {}

	ngOnInit() {
		this.getData();
		this.buildForm();
	}

	async getData() {
    this.listCentroCosto = await this.centroCostoService.getAll();
		this.listCuentas = await this.cuentasContablesService.getAll();
	}

	// Cierra click al responder negativamente
	onNoClick() {
		this.dialogRef.close(null);
	}

	// Cierra click al responder positivamente
	confirmed() {
		if (this.debeField.value === 0 && this.haberField.value === 0) {
			this.notificationsService.errorCatched('El debe o el haber deben ser mayor a 0');
		} else {
			this.partidaDetalle = new PartidaDetalle();
			this.partidaDetalle.cuentaID = this.cuentaIDField.value;
			this.partidaDetalle.centroCostoID = this.centroCostoIDField.value !== '' ? this.centroCostoIDField.value : null;
			this.partidaDetalle.debe = this.debeField.value;
			this.partidaDetalle.haber = this.haberField.value;
			this.partidaDetalle.monto = this.partidaDetalle.debe + this.partidaDetalle.haber;
			this.partidaDetalle.cuenta = this.listCuentas.find(
				(f) => f.cuentaID === this.cuentaIDField.value
			);
			this.partidaDetalle.centroCosto = this.listCentroCosto.find(
				(f) => f.centroCostoID === this.centroCostoIDField.value
			);
		}

		this.dialogRef.close(this.partidaDetalle);
	}

	buildForm() {
		this.form = this.formBuilder.group({
			cuentaID: ['', [Validators.required]],
			centroCostoID: [''],
			monto: [0, [Validators.required]],
			debe: [0, [Validators.required]],
			haber: [0, [Validators.required]],
		});
	}

	async patchForm() {
		this.form.patchValue({
			cuentaID: this.partidaDetalle.cuentaID,
			centroCostoID: this.partidaDetalle.centroCostoID,
			debe: this.partidaDetalle.debe,
			haber: this.partidaDetalle.haber,
			monto: this.partidaDetalle.monto,
		});
	}

	get cuentaIDField() {
		return this.form.get('cuentaID');
	}

	get centroCostoIDField() {
		return this.form.get('centroCostoID');
	}

	get haberField() {
		return this.form.get('haber');
	}

	get debeField() {
		return this.form.get('debe');
	}
}
