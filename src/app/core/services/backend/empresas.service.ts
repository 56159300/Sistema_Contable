import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Empresas } from '@models/empresas';

@Injectable({
	providedIn: 'root',
})
export class EmpresasService {
	endpoint = 'empresa';
	constructor(public http: HttpClient) {}

	async getAll(): Promise<Empresas[]> {
		return this.http.get<Empresas[]>(environment.api.url + this.endpoint).toPromise();
	}

	async getByID(id: number): Promise<Empresas> {
		return this.http.get<Empresas>(environment.api.url + this.endpoint + '/' + id).toPromise();
	}

	async save(newData: Empresas): Promise<Empresas> {
		return this.http.post<Empresas>(environment.api.url + this.endpoint, newData).toPromise();
	}

	async delete(id: number): Promise<Empresas> {
		return this.http.delete<Empresas>(environment.api.url + this.endpoint + '/' + id).toPromise();
	}

	async update(id: number, updateData: Partial<Empresas>): Promise<Empresas> {
		return this.http
			.put<Empresas>(environment.api.url + this.endpoint + '/' + id, updateData)
			.toPromise();
	}
}
