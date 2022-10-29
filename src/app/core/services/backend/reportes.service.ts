import { EstadoResultados } from './../../models/estadoResultados';
import { DiarioMayor } from '@models/diarioMayor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  endpoint = 'proveedores';
	constructor(public http: HttpClient) {}

  async generarDiarioMayor(): Promise<DiarioMayor> {
		return this.http.post<DiarioMayor>(environment.api.url + this.endpoint, {}).toPromise();
	}

  async generarEstadoResultados(): Promise<EstadoResultados> {
		return this.http.post<EstadoResultados>(environment.api.url + this.endpoint, {}).toPromise();
	}
}
