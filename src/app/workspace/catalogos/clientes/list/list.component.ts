import { ClientesService } from './../../../../core/services/backend/clientes.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cliente } from '@models/clientes';
import { NotificationsService } from '@services/utils/notifications.service';
import { ConfirmDialogComponent } from '@shared/ui/confirm-dialog/confirm-dialog.component';
import clientesData from '../../../../../json/clientes.json';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
	loading: boolean;
	listClientes: Cliente[];
	dataSource: MatTableDataSource<Cliente> = new MatTableDataSource<Cliente>();
	columns: string[] = [
		'clienteID',
		'codigo',
		'nombre',
		'nit',
		'empresa',
		'cuentaContable',
		'actions',
	];

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;

	constructor(
		public router: Router,
		private dialog: MatDialog,
		private notificationsService: NotificationsService,
		private clientesService: ClientesService
	) {}

	ngOnInit() {
		this.getData();
	}

	async getData() {
		this.listClientes = await this.clientesService.getAll();
		this.dataSource = new MatTableDataSource(this.listClientes);
	}

	new() {
		this.router.navigate(['/workspace/catalogos/clientes/nuevo']);
	}

	edit(element: any) {
		this.router.navigate(['/workspace/catalogos/clientes/edit', element.clienteID]);
	}

	delete(value: Cliente) {
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
				await this.clientesService
					.delete(value.clienteID)
					.then(() => {
						this.notificationsService.success();
						this.getData();
					})
					.catch((error: any) => this.notificationsService.errorCatched(error));
			}
		});
	}
}
