import { Component, OnInit, Input, Output, HostListener, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UtilsService } from '@services/utils/utils.service';
import { AccountService } from '@services/utils/account.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() login: any;
	@Input() type: string;
	@Output() callback = new EventEmitter<boolean>();


  navbarFixed: boolean;
	name: string;
	imageUrl: string;

	isPhone$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset]).pipe(
		map((result) => result.matches),
		shareReplay()
	);

  constructor(
    private breakpointObserver: BreakpointObserver,
    private utilsService: UtilsService,
    private accountService: AccountService
	) {

	}

	async ngOnInit() {
    if (this.login) {
			this.name = this.utilsService.getLoginName(this.login);
		}
	}

	// Va al login
	loginClick() {
		// this.router.navigate(['/auth/login'], {});
	}

	// Logout
	logout() {
		this.accountService.logout();
	}


	@HostListener('window:scroll', ['$event']) onscroll() {
		const mainHeight = window.innerHeight;
		const bodyContentHeight = document.getElementById('body-content').clientHeight;

		if (
			mainHeight - (70 + 51) < bodyContentHeight &&
			document.getElementsByClassName('cdk-overlay-pane').length === 0
		) {
			this.navbarFixed = window.scrollY > 0;
		} else {
			this.navbarFixed = false;
		}

		this.callback.emit(this.navbarFixed);
	}
}
