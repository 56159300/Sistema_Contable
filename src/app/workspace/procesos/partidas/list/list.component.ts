import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Partida } from '@models/partidas';
import { PartidaService } from '@services/backend/partidas.service';
import { NotificationsService } from '@services/utils/notifications.service';
import { ConfirmDialogComponent } from '@shared/ui/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  loading: boolean;
  listPartidas: Partida[];
	dataSource: MatTableDataSource<Partida> = new MatTableDataSource<Partida>();
	columns: string[] = ['partidaID', 'fechaDocumento', 'fechaRegistro', 'moneda', 'empresa', 'texto', 'total', 'actions'];

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;

	constructor(
		public router: Router,
		private dialog: MatDialog,
		private notificationsService: NotificationsService,
    private partidaService: PartidaService,
	) {}

	ngOnInit() {
		this.getData();
    this.notificationsService.errorCatched('error')
	}

  async getData(){
    this.listPartidas = await this.partidaService.getPartidaAll();
		this.dataSource = new MatTableDataSource(this.listPartidas);
  }

	new() {
		this.router.navigate(['/workspace/procesos/partidas/nuevo']);
	}

	edit(element: any) {
		this.router.navigate(['/workspace/procesos/partidas/edit', element.partidaID]);
	}

	delete(value: Partida) {
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
				await this.partidaService
					.deletePartida(value.partidaID)
					.then(() => {
						this.notificationsService.success();
            this.getData();
					})
					.catch((error: any) => this.notificationsService.errorCatched(error));
			}
		});
	}

}
