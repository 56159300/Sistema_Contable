import { Empresas } from '@models/empresas';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresasService } from '@services/backend/empresas.service';
import { NotificationsService } from '@services/utils/notifications.service';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
	loading: boolean;
	edit: boolean;
	empresa: Empresas;
	empresaID: number;
	form: UntypedFormGroup;
	baseKey: string;

	constructor(
    private empresasService: EmpresasService,
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
				this.empresaID = Number(params.ID);
			});
			this.edit = true;
			this.baseKey = 'edit';
			this.patchForm();
		}
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
			const data: Empresas = {
				codigo: this.codigoField.value,
				nombre: this.nombreField.value,
				direccion: this.direccionField.value,
				nit: this.nitField.value,
			};

			await this.empresasService
				.save(data)
				.then(() => {
					this.notificationsService.success();
					this.router.navigate(['/workspace/catalogos/empresas']);
				})
				.catch((error: any) => this.notificationsService.errorCatched(error))
				.finally(() => (this.loading = false));
		}
	}

	async update() {
		if (this.form.valid === true) {
			const data: Partial<Empresas> = {
        empresaID: this.empresaID,
				codigo: this.codigoField.value,
				nombre: this.nombreField.value,
				direccion: this.direccionField.value,
				nit: this.nitField.value,
			};

			await this.empresasService
				.update(this.empresaID, data)
				.then(() => {
					this.notificationsService.success();
					this.router.navigate(['/workspace/catalogos/empresas']);
				})
				.catch((error: any) => this.notificationsService.errorCatched(error))
				.finally(() => (this.loading = false));
		}
	}

	buildForm() {
		this.form = this.formBuilder.group({
			codigo: ['', [Validators.required]],
			nombre: ['', [Validators.required]],
			direccion: ['', [Validators.required]],
			nit: ['', [Validators.required]],
		});
	}

	async patchForm() {
    this.empresa = await this.empresasService.getByID(this.empresaID);

		this.form.patchValue({
			codigo: this.empresa.codigo,
			nombre: this.empresa.nombre,
			direccion: this.empresa.direccion,
			nit: this.empresa.nit,
		});
	}

	get codigoField() {
		return this.form.get('codigo');
	}

	get nombreField() {
		return this.form.get('nombre');
	}

	get direccionField() {
		return this.form.get('direccion');
	}

	get nitField() {
		return this.form.get('nit');
	}
}
