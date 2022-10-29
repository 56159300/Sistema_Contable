import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularLoadingComponent } from './circular-loading.component';

describe('CircularLoadingComponent', () => {
	let component: CircularLoadingComponent;
	let fixture: ComponentFixture<CircularLoadingComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [CircularLoadingComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CircularLoadingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
