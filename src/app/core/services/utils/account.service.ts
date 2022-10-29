import { Login } from '@models/login';
import { Injectable } from '@angular/core';
import { StorageService } from '@services/utils/storage.service';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '@settings/constants';
import { MatDialog } from '@angular/material/dialog';
import { UtilsService } from '@services/utils/utils.service';
import { NotificationsService } from '@services/utils/notifications.service';
import { environment } from '@environments/environment';

@Injectable({
	providedIn: 'root',
})
export class AccountService {
	loginData: any;

	constructor(
		public http: HttpClient,
		private storageService: StorageService,
		private dialog: MatDialog,
		private utilsService: UtilsService,
		private notificationsService: NotificationsService
	) {}

	async login(username: string, password: string): Promise<any> {
		this.loginData = await this.http
			.get<any>(environment.api.url + 'login?userName=' + username + '&password=' + password)
			.toPromise();

    if (this.loginData){
      await this.notificationsService.showWelcome(this.utilsService.getLoginName(this.loginData));
    }else{
      await this.notificationsService.error('Usuario invalido y/o contraseña invalida');
    }

		return this.loginData;
	}

	logout() {
		this.dialog.closeAll();
		this.storageService.deleteAllStorage();
		window.location.href = './auth/login';
	}
}
