import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from '@services/utils/notifications.service';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'Sistema_Contable';

	constructor(
		private toastr: ToastrService,
		private notificationsService: NotificationsService,
		private router: Router
	) {
		// Set del mínimo de altura variable
		const root = document.documentElement;
		root.style.setProperty('--main-heigth', String(window.innerHeight + 'px'));

		// Se encarga de mostrar las notificaciones enviadas
		this.notificationsService.messages$.subscribe((alert) => {
			if (alert) {
				if (alert.reload) {
					const url = this.router.url;
					this.router.navigate(['/redirect'], { skipLocationChange: true }).then(() =>
						this.router.navigate([url], { skipLocationChange: true }).then(() => {
							this.showNotification(alert);
						})
					);
				} else {
					this.showNotification(alert);
				}
			}
		});
	}

	// Ajusta la variable de altura mínima
	@HostListener('window:resize', ['$event'])
	onResize(event) {
		const root = document.documentElement;
		root.style.setProperty('--main-heigth', String(event.target.innerHeight + 'px'));
	}

	// Muestra la notificación
	showNotification(alert) {
		if (alert.type === 'success') {
			this.toastr.success(alert.message, alert.title);
		} else if (alert.type === 'error') {
			this.toastr.error(alert.message, alert.title);
		} else if (alert.type === 'info') {
			this.toastr.info(alert.message, alert.title);
		} else if (alert.type === 'warning') {
			this.toastr.warning(alert.message, alert.title);
		}
	}
}
