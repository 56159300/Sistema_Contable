import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UtilsService } from '@services/utils/utils.service';
import { Login } from '@models/login';
import { AppMenu } from '@settings/constants';
import { Menu } from '@models/menu';
import { fadeAnimation } from '@settings/animations';

@Component({
  selector: 'app-normal-layout',
  templateUrl: './normal-layout.component.html',
  styleUrls: ['./normal-layout.component.scss'],
  animations: [fadeAnimation],
})
export class NormalLayoutComponent implements OnInit {
  login: Login;
  navbarFixed = false;
  loading: boolean;
  appMenu: Menu[];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.Tablet])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  isPhone$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private utilsService: UtilsService,
    private dialog: MatDialog
  ) {
    this.appMenu = AppMenu.listado;
    this.login = this.utilsService.getLogin();
		this.loading = true;
  }

  async ngOnInit() {
    this.loading = false;
  }

  onScroll(fixed: boolean) {
    this.navbarFixed = fixed;
  }
}
