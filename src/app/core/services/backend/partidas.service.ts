import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Partida, PartidaDetalle } from '@models/Partidas';

@Injectable({
  providedIn: 'root'
})
export class PartidaService {
  endpointPartida = 'partida';
  endpointDetalle = 'partidaDetalle';
	constructor(public http: HttpClient) {}

  // *******************************************************************************************************
  // partida
	async getPartidaAll(): Promise<Partida[]> {
		return this.http.get<Partida[]>(environment.api.url + this.endpointPartida).toPromise();
	}

	async getPartidaByID(id: number): Promise<Partida> {
		return this.http.get<Partida>(environment.api.url + this.endpointPartida + '/' + id).toPromise();
	}

	async savePartida(newData: Partida): Promise<Partida> {
		return this.http.post<Partida>(environment.api.url + this.endpointPartida, newData).toPromise();
	}

	async deletePartida(id: number): Promise<Partida> {
		return this.http.delete<Partida>(environment.api.url + this.endpointPartida + '/' + id).toPromise();
	}

	async updatePartida(id: number, updateData: Partial<Partida>): Promise<Partida> {
		return this.http
			.put<Partida>(environment.api.url + this.endpointPartida + '/' + id, updateData)
			.toPromise();
	}

  // *******************************************************************************************************
  // partida detalle
  async getDetalleAll(): Promise<PartidaDetalle[]> {
		return this.http.get<PartidaDetalle[]>(environment.api.url + this.endpointDetalle).toPromise();
	}

	async getDetalleByID(id: number): Promise<PartidaDetalle> {
		return this.http.get<PartidaDetalle>(environment.api.url + this.endpointDetalle + '/' + id).toPromise();
	}

	async saveDetalle(newData: PartidaDetalle): Promise<PartidaDetalle> {
		return this.http.post<PartidaDetalle>(environment.api.url + this.endpointDetalle, newData).toPromise();
	}

	async deleteDetalle(id: number): Promise<PartidaDetalle> {
		return this.http.delete<PartidaDetalle>(environment.api.url + this.endpointDetalle + '/' + id).toPromise();
	}

	async updateDetalle(id: number, updateData: Partial<PartidaDetalle>): Promise<PartidaDetalle> {
		return this.http
			.put<PartidaDetalle>(environment.api.url + this.endpointDetalle + '/' + id, updateData)
			.toPromise();
	}
}
