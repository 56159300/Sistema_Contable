import { Location } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
	@Input() dataSource: MatTableDataSource<any>;
	@Input() searchPlaceholder = 'actions.search';
	private _dataSourceChecker$: Subscription;

	@ViewChild('txtSearch') txtSearch: ElementRef;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private location: Location
	) {}

	async ngOnInit() {
		await this.waitForDatasourceToLoad();
		this._initialSetup();
	}

	private _initialSetup() {
		const activeSearchQuery = this.isSearchQueryActive();

		if (activeSearchQuery) {
			this.txtSearch.nativeElement.value = activeSearchQuery.sv;
			this.applyFilter(activeSearchQuery.sv);
		}
	}

	private isSearchQueryActive(): { sv: string } {
		const queryParams = this.activatedRoute.snapshot.queryParams;

		if (queryParams.hasOwnProperty('sv')) {
			return {
				sv: queryParams.sv,
			};
		}

		return;
	}

	// Acciones cuando tecla se levanta
	keyUp(event: Event) {
		event.preventDefault();
		const value = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase();
		this.applyFilter(value);
	}

	// Aplica filtro a datasource
	applyFilter(value: string) {
		this.dataSource.filter = value;
		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
		this._applySearchValueChangesToUrl(value);
	}

	private _applySearchValueChangesToUrl(value: string): void {
		const params = {
			sv: value,
		};

		const urlTree = this.router.createUrlTree([], {
			relativeTo: this.activatedRoute,
			queryParams: params,
			queryParamsHandling: 'merge',
		});

		this.location.replaceState(this.router.serializeUrl(urlTree));
	}

	private waitForDatasourceToLoad(): Promise<void> {
		const titleCheckingInterval$ = interval(500);

		return new Promise((resolve) => {
			this._dataSourceChecker$ = titleCheckingInterval$.subscribe((val) => {
				this._dataSourceChecker$.unsubscribe();
				return resolve();
			});
		});
	}
}
