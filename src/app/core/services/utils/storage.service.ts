import { Injectable } from '@angular/core';
import { StorageKeys } from '@settings/constants';

@Injectable({
	providedIn: 'root',
})
export class StorageService {
	constructor() {}

	// Retorna valor de local storage
	public getStorage(name: string) {
		if (!name) {
			return null;
		}

		return localStorage.getItem(name);
	}

	// Elimina valor en local storage
	public deleteStorage(name: string) {
		localStorage.removeItem(name);
	}

	// Limpia todo local storage
	public deleteAllStorage() {
		localStorage.removeItem(StorageKeys.deviceIP);
		localStorage.removeItem(StorageKeys.loginAccount);
		localStorage.removeItem(StorageKeys.loginData);
		localStorage.removeItem(StorageKeys.loginToken);
	}

	// guarda valor en local storage
	public setStorage(name: string, value: string) {
		localStorage.setItem(name, value);
	}
}
