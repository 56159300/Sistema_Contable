import { Cuenta } from '@models/cuentas';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresas } from '@models/empresas';
import { CuentasContablesService } from '@services/backend/cuentas-contables.service';
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
	cuenta: Cuenta;
	cuentaID: number;
	form: UntypedFormGroup;
	baseKey: string;
	listCuentas: Cuenta[];
	listEmpresas: Empresas[];

	constructor(
		private formBuilder: UntypedFormBuilder,
		private activeRoute: ActivatedRoute,
		private router: Router,
    private cuentasContablesService: CuentasContablesService,
    private empresaService: EmpresasService,
    private notificationsService: NotificationsService
	) {
		this.loading = true;
		this.buildForm();

		if (this.router.url.includes('/nuevo')) {
			this.edit = false;
			this.baseKey = 'nuevo';
		} else {
			this.activeRoute.params.subscribe((params) => {
				this.cuentaID = Number(params.ID);
			});
			this.edit = true;
			this.baseKey = 'edit';
			this.patchForm();
		}
	}

	async ngOnInit(): Promise<void> {
		this.loading = false;

    this.listCuentas = await this.cuentasContablesService.getAll();
		this.listEmpresas = await this.empresaService.getAll();
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
			const data: Cuenta = {
        empresaID: this.empresaIDField.value,
				padreCuentaID: this.padreCuentaIDField.value,
        codigo: this.codigoField.value,
				nombre: this.nombreField.value,
			};

			await this.cuentasContablesService
				.save(data)
				.then(() => {
					this.notificationsService.success();
					this.router.navigate(['/workspace/catalogos/cuentas']);
				})
				.catch((error: any) => this.notificationsService.errorCatched(error))
				.finally(() => (this.loading = false));
		}
	}

	async update() {
		if (this.form.valid === true) {
			const data: Partial<Cuenta> = {
        cuentaID: this.cuentaID,
        empresaID: this.empresaIDField.value,
				padreCuentaID: this.padreCuentaIDField.value,
        codigo: this.codigoField.value,
				nombre: this.nombreField.value,
			};

			await this.cuentasContablesService
				.update(this.cuentaID, data)
				.then(() => {
					this.notificationsService.success();
					this.router.navigate(['/workspace/catalogos/cuentas']);
				})
				.catch((error: any) => this.notificationsService.errorCatched(error))
				.finally(() => (this.loading = false));
		}
	}

	buildForm() {
		this.form = this.formBuilder.group({
			empresaID: ['', [Validators.required]],
			padreCuentaID: [''],
			codigo: ['', [Validators.required]],
			nombre: ['', [Validators.required]],
		});
	}

	async patchForm() {
    this.cuenta = await this.cuentasContablesService.getByID(this.cuentaID);

		this.form.patchValue({
			empresaID: this.cuenta.empresaID,
			padreCuentaID: this.cuenta.padreCuentaID,
			codigo: this.cuenta.codigo,
			nombre: this.cuenta.nombre,
		});
	}

	get empresaIDField() {
		return this.form.get('empresaID');
	}

	get padreCuentaIDField() {
		return this.form.get('padreCuentaID');
	}

	get codigoField() {
		return this.form.get('codigo');
	}

	get nombreField() {
		return this.form.get('nombre');
	}
}
