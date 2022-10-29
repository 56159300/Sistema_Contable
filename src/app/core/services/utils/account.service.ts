import { Injectable } from '@angular/core';
import { StorageService } from '@services/utils/storage.service';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '@settings/constants';
import { MatDialog } from '@angular/material/dialog';
import { UtilsService } from '@services/utils/utils.service';
import { NotificationsService } from '@services/utils/notifications.service';

@Injectable({
	providedIn: 'root',
})
export class AccountService {
	constructor(
		public http: HttpClient,
		private storageService: StorageService,
		private dialog: MatDialog,
		private utilsService: UtilsService,
		private notificationsService: NotificationsService
	) {}

	// Realiza el login
	async login(username: string, password: string, type = null): Promise<any> {
		// let login;
		// if (type !== null) {
		// 	login = await this.http
		// 		.post<any>(environment.api.url + Endpoints.gblAccounts + 'login', {
		// 			username,
		// 			password,
		// 			type,
		// 		})
		// 		.toPromise();
		// } else {
		// 	login = await this.http
		// 		.post<any>(environment.api.url + Endpoints.gblAccounts + 'login', { username, password })
		// 		.toPromise();
		// }
		// await this.notificationsService.showWelcome(this.utilsService.getLoginName(login));
		// return login;
	}

	// Realiza the auto login
	async loginAuto(token: string): Promise<any> {
		// const login = await this.http
		// 	.post<any>(environment.api.url + Endpoints.gblAccounts + 'login/check', { token })
		// 	.toPromise();
		// await this.notificationsService.showWelcome(this.utilsService.getLoginName(login));
		// return login;
	}

	// Cierra sesion de las cuentas
	logout() {
		this.dialog.closeAll();
		this.storageService.deleteAllStorage();
		window.location.href = './auth/login';
	}
}
