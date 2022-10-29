import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Proveedor } from '@models/proveedores';

@Injectable({
	providedIn: 'root',
})
export class ProveedoresService {
	endpoint = 'proveedor';
	constructor(public http: HttpClient) {}

	async getAll(): Promise<Proveedor[]> {
		return this.http.get<Proveedor[]>(environment.api.url + this.endpoint).toPromise();
	}

	async getByID(id: number): Promise<Proveedor> {
		return this.http.get<Proveedor>(environment.api.url + this.endpoint+ '/' + id).toPromise();
	}

	async save(newData: Proveedor): Promise<Proveedor> {
		return this.http.post<Proveedor>(environment.api.url + this.endpoint, newData).toPromise();
	}

	async delete(id: number): Promise<Proveedor> {
		return this.http.delete<Proveedor>(environment.api.url + this.endpoint + '/' + id).toPromise();
	}

	async update(id: number, updateData: Partial<Proveedor>): Promise<Proveedor> {
		return this.http
			.put<Proveedor>(environment.api.url + this.endpoint + '/' + id, updateData)
			.toPromise();
	}
}
