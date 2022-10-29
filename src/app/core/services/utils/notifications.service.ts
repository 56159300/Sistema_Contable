import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class NotificationsService {
	private title = 'Sistema Contable';
	private messages = new BehaviorSubject<any>(null);
	messages$ = this.messages.asObservable();

	constructor(private toastr: ToastrService) {}

	// Notificacion de existo
	success(message = '	Proceso realizado con éxito', params: any = {}) {
		this.messages.next({
			type: 'success',
			message,
			params,
			reload: false,
			title: this.title,
		});
	}

	// Notificacion de exito con recarga de pagina
	successWithReload(message = 'Proceso realizado con éxito', params: any = {}) {
		this.messages.next({
			type: 'success',
			message,
			params,
			reload: true,
			title: this.title,
		});
	}

	// Notificacion de error
	error(message = 'Hubo un error al realizar el proceso', params: any = {}) {
		this.messages.next({
			type: 'error',
			message,
			params,
			reload: false,
			title: this.title,
		});
	}

	// Notificaion de informacion
	info(message: string, params: any = {}) {
		this.messages.next({
			type: 'info',
			message,
			params,
			reload: false,
			title: this.title,
		});
	}

	// Notificacion de advertencia
	warning(message: string, params: any = {}) {
		this.messages.next({
			type: 'warning',
			message,
			params,
			reload: false,
			title: this.title,
		});
	}

	// Error obtenido
	errorCatched(response: any) {
		let statusCode = 500;
		if (response.statusCode) {
			statusCode = response.statusCode;
		} else if (response.error) {
			statusCode = response.error.statusCode;
		}

		switch (statusCode) {
			case 400:
				this.error('Consulta inválida');
				break;
			case 401:
				this.error('Acceso no autorizado');
				break;
			case 403:
				this.error('Acceso no permitido');
				break;
			case 404:
				this.error('Información no encontrada');
				break;
			case 422:
				this.error('Información incompleta');
				break;
			case 600:
				this.error('Hubo un error al realizar el proceso');
				break;
			case 601:
				this.error('El token es inválido.');
				break;
			case 603:
				this.error('Usuario y/o contraseña inválido');
				break;
			default:
				this.error('Hubo un error al realizar el proceso');
				break;
		}
	}

	// Muestra notificacion personalizada
	custom(
		component: any,
		autoHide = true,
		milliseconds = 5000,
		setPositionClass = 'notifications-position-top',
		showProgressBar = false
	) {
		const audio = new Audio();
		audio.src = '/assets/mp3/notification.mp3';
		audio.play();

		return this.toastr.show('', '', {
			disableTimeOut: !autoHide,
			tapToDismiss: false,
			toastClass: 'empty-notifications',
			positionClass: setPositionClass,
			toastComponent: component,
			timeOut: milliseconds,
			extendedTimeOut: milliseconds / 2,
			progressBar: showProgressBar,
		});
	}

	// Limpie Toast
	clearToast(toastId: number) {
		this.toastr.clear(toastId);
	}

	// Limpie Toast
	clearToasts() {
		this.toastr.clear();
	}

	// Mostrar notificación de bienvenida
	async showWelcome(name): Promise<string> {
		this.success('global.welcome', { name });

		return new Promise((resolve) => {
			let timeout;
			timeout = setTimeout(() => {
				if (timeout) {
					clearTimeout(timeout);
					timeout = null;
				}
				return resolve(name);
			}, 1000);
		});
	}
}
