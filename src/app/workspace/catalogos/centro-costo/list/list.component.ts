import { CentroCostoService } from './../../../../core/services/backend/centro-costo.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CentroCosto } from '@models/centro-costo';
import { NotificationsService } from '@services/utils/notifications.service';
import { ConfirmDialogComponent } from '@shared/ui/confirm-dialog/confirm-dialog.component';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
	loading: boolean;
  listCentroCosto: CentroCosto[];
	dataSource: MatTableDataSource<CentroCosto> = new MatTableDataSource<CentroCosto>();
	columns: string[] = ['centroCostoID', 'nombre', 'responsable', 'empresa', 'actions'];

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;

	constructor(
		public router: Router,
		private dialog: MatDialog,
		private notificationsService: NotificationsService,
    private centroCostoService: CentroCostoService,
	) {}

	ngOnInit() {
		this.getData();
	}

  async getData(){
    this.listCentroCosto = await this.centroCostoService.getAll();
    this.dataSource = new MatTableDataSource(this.listCentroCosto);
  }

	new() {
		this.router.navigate(['/workspace/catalogos/centros/nuevo']);
	}

	edit(element: any) {
		this.router.navigate(['/workspace/catalogos/centros/edit', element.centroCostoID]);
	}

	delete(value: CentroCosto) {
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
				await this.centroCostoService
					.delete(value.centroCostoID)
					.then(() => {
						this.notificationsService.success();
            this.getData();
					})
					.catch((error: any) => this.notificationsService.errorCatched(error));
			}
		});
	}
}
