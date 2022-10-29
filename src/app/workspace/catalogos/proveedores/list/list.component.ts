import { ProveedoresService } from './../../../../core/services/backend/proveedores.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Proveedor } from '@models/proveedores';
import { NotificationsService } from '@services/utils/notifications.service';
import { ConfirmDialogComponent } from '@shared/ui/confirm-dialog/confirm-dialog.component';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
	loading: boolean;
	listProveedores: Proveedor[];
	dataSource: MatTableDataSource<Proveedor> = new MatTableDataSource<Proveedor>();
	columns: string[] = ['proveedorID', 'codigo', 'nombre', 'nit', 'cuentaContable', 'actions'];

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;

	constructor(
		public router: Router,
		private dialog: MatDialog,
		private notificationsService: NotificationsService,
		private proveedoresService: ProveedoresService
	) {}

	ngOnInit() {
		this.getData();
	}

	async getData() {
		this.listProveedores = await this.proveedoresService.getAll();
		this.dataSource = new MatTableDataSource(this.listProveedores);
	}

	new() {
		this.router.navigate(['/workspace/catalogos/proveedores/nuevo']);
	}

	edit(element: any) {
		this.router.navigate(['/workspace/catalogos/proveedores/edit', element.proveedorID]);
	}

	delete(value: Proveedor) {
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
				await this.proveedoresService
					.delete(value.proveedorID)
					.then(() => {
						this.notificationsService.success();
            this.getData();
					})
					.catch((error: any) => this.notificationsService.errorCatched(error));
			}
		});
	}
}
