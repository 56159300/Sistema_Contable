import { Component } from '@angular/core';
import { fadeAnimationNoPaddings } from '@settings/animations';

@Component({
	selector: 'app-min-layout',
	templateUrl: './min-layout.component.html',
	styleUrls: ['./min-layout.component.scss'],
	animations: [fadeAnimationNoPaddings],
})
export class MinLayoutComponent {
	login: any;
	navbarFixed = false;

	constructor() {
	}

	// Evento onScroll
	onScroll(fixed: boolean) {
		this.navbarFixed = fixed;
	}
}
