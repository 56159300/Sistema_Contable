import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Login } from '@models/login';
import { UtilsService } from '@services/utils/utils.service';

@Injectable({
	providedIn: 'root',
})
export class UnauthGuard implements CanActivate {
	constructor(private router: Router, private utilsService: UtilsService) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		const login: Login = this.utilsService.getLogin();
		if (!login) {
			return true;
		} else {
			if (state.url !== '/auth/login') {
				const returnUrl = state.url.split('/auth/login?returnUrl=').join('').split('%2F').join('/');
				this.router.navigate([returnUrl], {});
				return false;
			} else {
				this.router.navigate(['./'], {});
				return false;
			}
		}
	}
}
