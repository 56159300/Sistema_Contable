import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Cuenta } from '@models/cuentas';

@Injectable({
	providedIn: 'root',
})
export class CuentasContablesService {
	endpoint = 'cuenta';
	constructor(public http: HttpClient) {}

	async getAll(): Promise<Cuenta[]> {
		return this.http.get<Cuenta[]>(environment.api.url + this.endpoint).toPromise();
	}

	async getByID(id: number): Promise<Cuenta> {
		return this.http.get<Cuenta>(environment.api.url + this.endpoint+ '/' + id).toPromise();
	}

	async save(newData: Cuenta): Promise<Cuenta> {
		return this.http.post<Cuenta>(environment.api.url + this.endpoint, newData).toPromise();
	}

	async delete(id: number): Promise<Cuenta> {
		return this.http.delete<Cuenta>(environment.api.url + this.endpoint + '/' + id).toPromise();
	}

	async update(id: number, updateData: Partial<Cuenta>): Promise<Cuenta> {
		return this.http
			.put<Cuenta>(environment.api.url + this.endpoint + '/' + id, updateData)
			.toPromise();
	}
}
