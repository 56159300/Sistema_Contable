import { CuentasContablesService } from './../../../../core/services/backend/cuentas-contables.service';
import { ClientesService } from './../../../../core/services/backend/clientes.service';
import { Cliente } from '@models/clientes';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cuenta } from '@models/cuentas';
import { NotificationsService } from '@services/utils/notifications.service';
import cuentasData from '../../../../../json/cuentas.json';
import empresasData from '../../../../../json/empresas.json';
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
	cliente: Cliente;
	clienteID: number;
	form: UntypedFormGroup;
	baseKey: string;
	listCuentas: Cuenta[];
	listEmpresas: Empresas[];

	constructor(
		private clientesService: ClientesService,
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
				this.clienteID = Number(params.ID);
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
			const data: Cliente = {
				codigo: this.codigoField.value,
				nombre: this.nombreField.value,
				empresaID: this.empresaIDField.value,
				cuentaID: this.cuentaIDField.value,
				nit: this.nitField.value,
			};

			await this.clientesService
				.save(data)
				.then(() => {
					this.notificationsService.success();
					this.router.navigate(['/workspace/catalogos/clientes']);
				})
				.catch((error: any) => this.notificationsService.errorCatched(error))
				.finally(() => (this.loading = false));
		}
	}

	async update() {
		if (this.form.valid === true) {
			const data: Partial<Cliente> = {
				clienteID: this.clienteID,
				codigo: this.codigoField.value,
				nombre: this.nombreField.value,
				empresaID: this.empresaIDField.value,
				cuentaID: this.cuentaIDField.value,
				nit: this.nitField.value,
			};

			await this.clientesService
				.update(this.clienteID, data)
				.then(() => {
					this.notificationsService.success();
					this.router.navigate(['/workspace/catalogos/clientes']);
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
			cuentaID: [''],
			nit: ['', [Validators.required]],
		});
	}

	async patchForm() {
		this.cliente = await this.clientesService.getByID(this.clienteID);

		this.form.patchValue({
			codigo: this.cliente.codigo,
			nombre: this.cliente.nombre,
			empresaID: this.cliente.empresaID,
			cuentaID: this.cliente.cuentaID,
			nit: this.cliente.nit,
		});
	}

	get empresaIDField() {
		return this.form.get('empresaID');
	}

	get codigoField() {
		return this.form.get('codigo');
	}

	get nombreField() {
		return this.form.get('nombre');
	}

	get cuentaIDField() {
		return this.form.get('cuentaID');
	}

	get nitField() {
		return this.form.get('nit');
	}
}
