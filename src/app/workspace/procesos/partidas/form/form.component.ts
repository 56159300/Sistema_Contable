import cuentasData from '../../../../../json/cuentas.json';
import empresasData from '../../../../../json/empresas.json';
import centroCostoData from '../../../../../json/centro.json';

import { DetalleDialogFormComponent } from './../detalle-dialog-form/detalle-dialog-form.component';
import { CentroCosto } from '@models/centro-costo';
import { Proveedor } from './../../../../core/models/proveedores';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cuenta } from '@models/cuentas';
import { Partida, PartidaDetalle } from '@models/partidas';
import { Empresas } from '@models/empresas';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDialogComponent } from '@shared/ui/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ListadoMonedas } from '@settings/constants';
import { CentroCostoService } from '@services/backend/centro-costo.service';
import { CuentasContablesService } from '@services/backend/cuentas-contables.service';
import { EmpresasService } from '@services/backend/empresas.service';
import { PartidaService } from '@services/backend/partidas.service';
import { NotificationsService } from '@services/utils/notifications.service';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
	loading: boolean;
	canEdit: boolean;
	partida: Partida;
	partidaDetalle: PartidaDetalle[];
	partidaID: number;
	form: UntypedFormGroup;
	baseKey: string;
	listCuentas: Cuenta[];
	listCentroCosto: CentroCosto[];
	listEmpresas: Empresas[];
	listMonedas: string[];

	dataSource: MatTableDataSource<PartidaDetalle> = new MatTableDataSource<PartidaDetalle>();
	columns: string[] = ['cuenta', 'centroCosto', 'monto', 'debe', 'haber', 'actions'];

	constructor(
		private notificationsService: NotificationsService,
		private formBuilder: UntypedFormBuilder,
		private activeRoute: ActivatedRoute,
		private dialog: MatDialog,
		private router: Router,
		private centroCostoService: CentroCostoService,
		private cuentasContablesService: CuentasContablesService,
		private empresaService: EmpresasService,
		private partidaService: PartidaService
	) {
		this.partidaDetalle = [];
		this.loading = true;
		this.buildForm();

		if (this.router.url.includes('/nuevo')) {
			this.canEdit = false;
			this.baseKey = 'nuevo';
		} else {
			this.activeRoute.params.subscribe((params) => {
				this.partidaID = Number(params.ID);
			});
			this.canEdit = true;
			this.baseKey = 'edit';
			this.patchForm();
		}

		this.listMonedas = ListadoMonedas.Monedas;
	}

	async ngOnInit(): Promise<void> {
		this.loading = false;

		this.listCentroCosto = await this.centroCostoService.getAll();
		this.listCuentas = await this.cuentasContablesService.getAll();
		this.listEmpresas = await this.empresaService.getAll();
	}

	create(event: Event) {
		event.preventDefault();
		if (!this.canEdit) {
			console.log('fasdfasdfasdfsd');
			this.save();
		} else {
			this.update();
		}
		this.canEdit = false;
	}

	async save() {
		if (this.form.valid === true) {
			if (this.getTotalDebe() !== this.getTotalHaber()) {
				this.notificationsService.errorCatched('El debe y el haber deben ser iguales');
			} else {
				const data: Partida = {
					empresaID: this.empresaIDField.value,
					fechaDocumento: this.fechaDocumentoField.value,
					fechaRegistro: new Date(),
					moneda: this.monedaField.value,
					texto: this.textoField.value,
					total: this.totalField.value,
				};

				await this.partidaService
					.savePartida(data)
					.then((result) => {
						console.log(result);
						Promise.all(
							this.partidaDetalle.map(async (element) => {
                console.log(element);
                const detalle: PartidaDetalle = {
                  partidaID: 12,
                  cuentaID: element.cuentaID,
                  centroCostoID: element.centroCostoID,
                  monto: element.monto,
                  debe: element.debe,
                  haber: element.haber,
                }

								await this.partidaService
									.saveDetalle(detalle)
									.then()
									.catch((error: any) => this.notificationsService.errorCatched(error))
									.finally(() => (this.loading = false));
							})
						).then(() => {
							this.notificationsService.success();
							this.router.navigate(['/workspace/procesos/partidas']);
						});
					})
					.catch((error: any) => this.notificationsService.errorCatched(error))
					.finally(() => (this.loading = false));
			}
		}
	}

	async update() {
		if (this.form.valid === true) {
			const data: Partial<Partida> = {
				partidaID: this.partidaID,
				empresaID: this.empresaIDField.value,
				fechaDocumento: this.fechaDocumentoField.value,
				fechaRegistro: new Date(),
				moneda: this.monedaField.value,
				texto: this.textoField.value,
				total: this.totalField.value,
			};

			await this.partidaService
				.updatePartida(this.partidaID, data)
				.then(() => {
					this.notificationsService.success();
					this.router.navigate(['/workspace/catalogos/partidas']);
				})
				.catch((error: any) => this.notificationsService.errorCatched(error))
				.finally(() => (this.loading = false));
		}
	}

	async delete(value: Proveedor) {
		const dialogRef = this.dialog.open(ConfirmDialogComponent, {
			width: '95%',
			maxWidth: '500px',
			data: {
				message: '¿Esta seguro que desea eliminarlo?',
				submit: 'Aceptar',
				cancel: 'Cancelar',
			},
		});
		dialogRef.afterClosed().subscribe(async (result) => {
			if (result) {
			}
		});
	}

	buildForm() {
		this.form = this.formBuilder.group({
			fechaDocumento: ['', [Validators.required]],
			moneda: [ListadoMonedas.Monedas[0], [Validators.required]],
			empresaID: ['', [Validators.required]],
			texto: ['', [Validators.required]],
			total: [0],
		});
	}

	async patchForm() {
		this.form.patchValue({
			fechaDocumento: this.partida.fechaDocumento,
			moneda: this.partida.moneda,
			empresaID: this.partida.empresaID,
			texto: this.partida.texto,
			total: this.partida.total,
		});
	}

	agregarDetalle() {
		const dialogRef = this.dialog.open(DetalleDialogFormComponent, {
			data: {
				listCuentas: this.listCuentas,
				listCentroCosto: this.listCentroCosto,
			},
		});
		dialogRef.afterClosed().subscribe(async (result) => {
			if (result) {
        console.log(result);
				this.partidaDetalle.push(result);
				this.dataSource.data = this.partidaDetalle;
			}
		});
	}

	getTotalMonto() {
		return this.partidaDetalle.map((t) => t.monto).reduce((acc, value) => acc + value, 0);
	}

	getTotalDebe() {
		return this.partidaDetalle.map((t) => t.debe).reduce((acc, value) => acc + value, 0);
	}

	getTotalHaber() {
		return this.partidaDetalle.map((t) => t.haber).reduce((acc, value) => acc + value, 0);
	}

	get fechaDocumentoField() {
		return this.form.get('fechaDocumento');
	}

	get monedaField() {
		return this.form.get('moneda');
	}

	get empresaIDField() {
		return this.form.get('empresaID');
	}

	get textoField() {
		return this.form.get('texto');
	}

	get totalField() {
		return this.form.get('total');
	}
}
