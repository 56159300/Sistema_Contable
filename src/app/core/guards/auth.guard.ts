import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Login } from '@models/login';
import { UtilsService } from '@services/utils/utils.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
	constructor(private router: Router, private utilsService: UtilsService) {}

	// Guardian para el inicio de sesion
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		const login: Login = this.utilsService.getLogin();
		if (!login) {
			if (state.url !== '/') {
				this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
				return false;
			} else {
				this.router.navigate(['/auth/login'], {});
				return false;
			}
		} else {
			return true;
		}
	}
}
