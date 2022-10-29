import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-circular-loading',
	templateUrl: './circular-loading.component.html',
	styleUrls: ['./circular-loading.component.scss'],
})
export class CircularLoadingComponent implements OnInit {
	@Input() loading: boolean;
	@Input() isWhite = false;

	constructor() {}

	ngOnInit() {}
}
