import { Inject, Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { StorageKeys, Endpoints } from '@settings/constants';
import { DateAdapter } from '@angular/material/core';
import { MatTableExporterDirective } from 'mat-table-exporter';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { Login } from '@models/login';
// import { Login } from '@models/login/login';
// import { Account } from '@models/gbl/gbl_account.model';
// import { SpaceService } from '@services/ind-space/space.service';

@Injectable({
	providedIn: 'root',
})
export class UtilsService {
	constructor(
		private storageService: StorageService,
		private http: HttpClient
	) {}

	// Guarda información de login
	setLogin(login: Login) {
		this.storageService.setStorage(StorageKeys.loginData, JSON.stringify(login));
	}

	// Obtiene información de login
	getLogin(): any {
		const data: any = JSON.parse(this.storageService.getStorage(StorageKeys.loginData));

		return data;
	}


	// Array de manera aleatoria
	shuffleArrayTerms(array: any[]) {
		for (let i: number = array.length - 1; i > 0; i--) {
			const j: number = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}


	// Genera token
	generateToken(length: number): string {
		const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		let token = '';

		for (let index = 0; index < length; index++) {
			const position = Math.floor(Math.random() * alphabet.length);
			token = token + alphabet[position];
		}

		return token;
	}

	// Obtiene fecha segun formato, lugar y tipo
	getDateFormat( type: string) {

			switch (type) {
				case 'short':
					return 'dd/MM/yyyy';
				case 'monthDay':
					return 'MMM dd';
				case 'long':
					return 'dd/MM/yyyy HH:mm:ss';
				case 'dayDate':
					return 'cccc dd';
				case 'monthYear':
					return 'MMMM YYYY';
				case 'full':
					return 'dd MMM YYYY';
			}
	}

	// Obtiene la dirección IP del usuario
	async getIPAddress() {
		const headers = new HttpHeaders();
		headers.append('Access-Control-Allow-Headers', 'Content-Type');
		headers.append('Access-Control-Allow-Methods', 'GET');
		headers.append('Access-Control-Allow-Origin', '*');

		const IP: any = await this.http
			.get<any>('https://api.ipify.org/?format=json', { headers: headers })
			.toPromise();
		this.storageService.setStorage(StorageKeys.deviceIP, IP.ip);
	}


	// Obtiene iniciales
	getInitials(name: string) {
		const element = name.split(' ');
		return (String(element[0])[0] + String(element[1])[0]).toUpperCase();
	}

	// Obtiene nombre del usuario iniciado
	getLoginName(login: Login) {
    return login.nombre + ' ' + login.apellido;
	}

	//  Limpia timePuts
	clearTimeouts() {
		const highestId = window.setTimeout(() => {
			for (let i = highestId; i >= 0; i--) {
				window.clearTimeout(i);
			}
		}, 0);
	}

	// Limpia intervals
	clearIntervals() {
		const highestId = window.setInterval(() => {
			for (let i = highestId; i >= 0; i--) {
				window.clearInterval(i);
			}
		}, 0);
	}
}
