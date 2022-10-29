import { CentroCosto } from '@models/centro-costo';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresas } from '@models/empresas';
import empresasData from '../../../../../json/empresas.json';
import { CentroCostoService } from '@services/backend/centro-costo.service';
import { NotificationsService } from '@services/utils/notifications.service';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
	loading: boolean;
	edit: boolean;
	centroCosto: CentroCosto;
	centroCostoID: number;
	form: UntypedFormGroup;
	baseKey: string;
	listEmpresas: Empresas[];

	constructor(
    private centroCostoService: CentroCostoService,
		private formBuilder: UntypedFormBuilder,
		private activeRoute: ActivatedRoute,
		private router: Router,
		private notificationsService: NotificationsService
	) {
		this.loading = true;
		this.buildForm();

		if (this.router.url.includes('/nuevo')) {
			this.edit = false;
			this.baseKey = 'nuevo';
		} else {
			this.activeRoute.params.subscribe((params) => {
				this.centroCostoID = Number(params.ID);
			});
			this.edit = true;
			this.baseKey = 'edit';
			this.patchForm();
		}

		this.listEmpresas = empresasData;
	}

	ngOnInit(): void {
		this.loading = false;
	}

	create(event: Event) {
		event.preventDefault();
		if (!this.edit) {
			this.save();
		} else {
			this.update();
		}
		this.edit = false;
	}

	async save() {
		if (this.form.valid === true) {
			const data: CentroCosto = {
        empresaID: this.empresaIDField.value,
				nombre: this.nombreField.value,
				responsable: this.responsableField.value,
			};

			await this.centroCostoService
				.save(data)
				.then(() => {
					this.notificationsService.success();
					this.router.navigate(['/workspace/catalogos/centros']);
				})
				.catch((error: any) => this.notificationsService.errorCatched(error))
				.finally(() => (this.loading = false));
		}
	}

	async update() {
		if (this.form.valid === true) {
			const data: Partial<CentroCosto> = {
        centroCostoID: this.centroCostoID,
				empresaID: this.empresaIDField.value,
				nombre: this.nombreField.value,
				responsable: this.responsableField.value,
			};

			await this.centroCostoService
				.update(this.centroCostoID, data)
				.then(() => {
					this.notificationsService.success();
					this.router.navigate(['/workspace/catalogos/centros']);
				})
				.catch((error: any) => this.notificationsService.errorCatched(error))
				.finally(() => (this.loading = false));
		}
	}

	buildForm() {
		this.form = this.formBuilder.group({
			empresaID: ['', [Validators.required]],
			nombre: ['', [Validators.required]],
			responsable: ['', [Validators.required]],
		});
	}

	async patchForm() {
    this.centroCosto = await this.centroCostoService.getByID(this.centroCostoID);

		this.form.patchValue({
			empresaID: this.centroCosto.empresaID,
			nombre: this.centroCosto.nombre,
			responsable: this.centroCosto.responsable,
		});
	}

	get empresaIDField() {
		return this.form.get('empresaID');
	}

	get nombreField() {
		return this.form.get('nombre');
	}

	get responsableField() {
		return this.form.get('responsable');
	}
}
