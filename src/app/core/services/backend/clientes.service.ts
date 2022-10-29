import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Cliente } from '@models/clientes';

@Injectable({
	providedIn: 'root',
})
export class ClientesService {
	endpoint = 'cliente';
	constructor(public http: HttpClient) {}

	async getAll(): Promise<Cliente[]> {
		return this.http.get<Cliente[]>(environment.api.url + this.endpoint).toPromise();
	}

	async getByID(id: number): Promise<Cliente> {
		return this.http.get<Cliente>(environment.api.url + this.endpoint+ '/' + id).toPromise();
	}

	async save(newData: Cliente): Promise<Cliente> {
		return this.http.post<Cliente>(environment.api.url + this.endpoint, newData).toPromise();
	}

	async delete(id: number): Promise<Cliente> {
		return this.http.delete<Cliente>(environment.api.url + this.endpoint + '/' + id).toPromise();
	}

	async update(id: number, updateData: Partial<Cliente>): Promise<Cliente> {
		return this.http
			.put<Cliente>(environment.api.url + this.endpoint + '/' + id, updateData)
			.toPromise();
	}
}
