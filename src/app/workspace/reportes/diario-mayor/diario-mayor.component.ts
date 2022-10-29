import { ReportesService } from '@services/utils/reportes.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DiarioMayor } from '@models/diarioMayor';
import diarioMayor from '../../../../json/diarioMayor.json';

@Component({
	selector: 'app-diario-mayor',
	templateUrl: './diario-mayor.component.html',
	styleUrls: ['./diario-mayor.component.scss'],
})
export class DiarioMayorComponent implements OnInit {
	loading: boolean;
	dataSource: MatTableDataSource<DiarioMayor> = new MatTableDataSource<DiarioMayor>();
	columns: string[] = ['fecha', 'codigo', 'descripcion', 'debe', 'haber'];

	constructor(private reportesService: ReportesService) {}

	ngOnInit(): void {
		this.dataSource.data = diarioMayor;
	}

	getTotalHaber() {
		return this.dataSource.data.map((t) => t.haber).reduce((acc, value) => acc + value, 0);
	}

	getTotalDebe() {
		return this.dataSource.data.map((t) => t.debe).reduce((acc, value) => acc + value, 0);
	}

	imprimir() {
		const encabezado = ['Fecha', 'Codigo', 'Descripcion', 'Debe', 'Haber'];
		const cuerpo = [];
		const piePagina = [];

		this.dataSource.data.map((element) => {
			cuerpo.push([
				element.fecha,
				element.codigo,
				element.descripcion,
				element.debe,
				element.haber,
			]);
		});

		piePagina.push(['', '', '', this.getTotalHaber(), this.getTotalDebe()]);

		this.reportesService.imprimir(encabezado, cuerpo, piePagina, 'Diario Mayor', false);
	}
}
