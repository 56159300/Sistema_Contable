import { Proveedor } from './../../../../core/models/proveedores';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cuenta } from '@models/cuentas';
import cuentasData from '../../../../../json/cuentas.json';
import { ProveedoresService } from '@services/backend/proveedores.service';
import { NotificationsService } from '@services/utils/notifications.service';
import { CuentasContablesService } from '@services/backend/cuentas-contables.service';
import { Empresas } from '@models/empresas';
import { EmpresasService } from '@services/backend/empresas.service';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
	loading: boolean;
	edit: boolean;
	proveedor: Proveedor;
	proveedorID: number;
	form: UntypedFormGroup;
	baseKey: string;
	listCuentas: Cuenta[];
	listEmpresas: Empresas[];

	constructor(
    private proveedoresService: ProveedoresService,
		private formBuilder: UntypedFormBuilder,
		private activeRoute: ActivatedRoute,
		private router: Router,
		private notificationsService: NotificationsService,
    private cuentasContablesService: CuentasContablesService,
    private empresaService: EmpresasService
	) {
		this.loading = true;
		this.buildForm();

		if (this.router.url.includes('/nuevo')) {
			this.edit = false;
			this.baseKey = 'nuevo';
		} else {
			this.activeRoute.params.subscribe((params) => {
				this.proveedorID = Number(params.ID);
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
			const data: Proveedor = {
				codigo: this.codigoField.value,
				nombre: this.nombreField.value,
        empresaID: this.empresaIDField.value,
				cuentaID: this.cuentaIDField.value,
				nit: this.nitField.value,
			};

			await this.proveedoresService
				.save(data)
				.then(() => {
					this.notificationsService.success();
					this.router.navigate(['/workspace/catalogos/proveedores']);
				})
				.catch((error: any) => this.notificationsService.errorCatched(error))
				.finally(() => (this.loading = false));
		}
	}

	async update() {
		if (this.form.valid === true) {
			const data: Partial<Proveedor> = {
        proveedorID: this.proveedorID,
				codigo: this.codigoField.value,
				nombre: this.nombreField.value,
        empresaID: this.empresaIDField.value,
				cuentaID: this.cuentaIDField.value,
				nit: this.nitField.value,
			};

			await this.proveedoresService
				.update(this.proveedorID, data)
				.then(() => {
					this.notificationsService.success();
					this.router.navigate(['/workspace/catalogos/proveedores']);
				})
				.catch((error: any) => this.notificationsService.errorCatched(error))
				.finally(() => (this.loading = false));
		}
	}

	buildForm() {
		this.form = this.formBuilder.group({
			codigo: ['', [Validators.required]],
			nombre: ['', [Validators.required]],
      empresaID: ['', [Validators.required]],
			cuentaID: ['', [Validators.required]],
			nit: ['', [Validators.required]],
		});
	}

	async patchForm() {
    this.proveedor = await this.proveedoresService.getByID(this.proveedorID);

		this.form.patchValue({
			codigo: this.proveedor.codigo,
			nombre: this.proveedor.nombre,
      empresaID: this.proveedor.empresaID,
			cuentaID: this.proveedor.cuentaID,
			nit: this.proveedor.nit,
		});
	}

	get codigoField() {
		return this.form.get('codigo');
	}

	get nombreField() {
		return this.form.get('nombre');
	}

  get empresaIDField() {
		return this.form.get('empresaID');
	}

	get cuentaIDField() {
		return this.form.get('cuentaID');
	}

	get nitField() {
		return this.form.get('nit');
	}
}
