import { CuentasContablesService } from './../../../../core/services/backend/cuentas-contables.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cuenta } from '@models/cuentas';
import { NotificationsService } from '@services/utils/notifications.service';
import { ConfirmDialogComponent } from '@shared/ui/confirm-dialog/confirm-dialog.component';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
	loading: boolean;
	listCuenta: Cuenta[];
	dataSource: MatTableDataSource<Cuenta> = new MatTableDataSource<Cuenta>();
	columns: string[] = ['cuentaID', 'codigo', 'nombre', 'empresa', 'padreCuenta', 'actions'];

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;

	constructor(
		public router: Router,
		private dialog: MatDialog,
		private notificationsService: NotificationsService,
		private cuentasContablesService: CuentasContablesService
	) {}

	ngOnInit() {
		this.getData();
	}

	async getData() {
		this.listCuenta = await this.cuentasContablesService.getAll();
		this.dataSource = new MatTableDataSource(this.listCuenta);
	}

	new() {
		this.router.navigate(['/workspace/catalogos/cuentas/nuevo']);
	}

	edit(element: any) {
		this.router.navigate(['/workspace/catalogos/cuentas/edit', element.cuentaID]);
	}

	delete(value: Cuenta) {
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
				await this.cuentasContablesService
					.delete(value.cuentaID)
					.then(() => {
						this.notificationsService.success();
						this.getData();
					})
					.catch((error: any) => this.notificationsService.errorCatched(error));
			}
		});
	}
}
