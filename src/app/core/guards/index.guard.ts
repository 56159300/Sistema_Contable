import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { environment } from '@environments/environment';
import { Login } from '@models/login';
import { StorageService } from '@services/utils/storage.service';
import { UtilsService } from '@services/utils/utils.service';
import { StorageKeys } from '@settings/constants';

@Injectable({ providedIn: 'root' })
export class IndexGuard implements CanActivate {
	constructor(
		private router: Router,
		private utilsService: UtilsService,
		private storageService: StorageService
	) {}

	async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		const login: Login = this.utilsService.getLogin();
		// Si no ha iniciado sesion redirigue para que inicie
		if (!login) {
			if (state.url.includes('/auth/login')) {
				return true;
			} else {
				this.router.navigate(['/auth/login'], {});
				return false;
			}
		} else {
			this.router.navigate(['/workspace/dashboard'], {});
			return false;
		}
	}
}
