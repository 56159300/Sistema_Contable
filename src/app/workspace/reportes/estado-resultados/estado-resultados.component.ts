import { EstadoResultados } from './../../../core/models/estadoResultados';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ReportesService } from '@services/utils/reportes.service';
import estadoResultados from '../../../../json/estadoResultados.json';

@Component({
  selector: 'app-estado-resultados',
  templateUrl: './estado-resultados.component.html',
  styleUrls: ['./estado-resultados.component.scss']
})
export class EstadoResultadosComponent implements OnInit {
  loading: boolean;
	dataSource: MatTableDataSource<EstadoResultados> = new MatTableDataSource<EstadoResultados>();
	columns: string[] = ['signo', 'descripcion', 'monto'];

  constructor(private reportesService: ReportesService) { }

  ngOnInit(): void {
    this.dataSource.data = estadoResultados;
  }

  getTotalMonto() {
		return this.dataSource.data.map((t) => t.monto).reduce((acc, value) => acc + value, 0);
	}

  imprimir() {
		const encabezado = ['Signo', 'Descripcion', 'Monto'];
		const cuerpo = [];
		const piePagina = [];

		this.dataSource.data.map((element) => {
			cuerpo.push([
        element.signo,
				element.descripcion,
				element.monto,
			]);
		});

		this.reportesService.imprimir(encabezado, cuerpo, piePagina, 'Estado Resultados', false);
	}
}
