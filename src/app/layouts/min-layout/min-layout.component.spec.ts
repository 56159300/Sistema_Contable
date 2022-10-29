import { LayoutModule } from '@angular/cdk/layout';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MinLayoutComponent } from './min-layout.component';

describe('MinLayoutComponent', () => {
	let component: MinLayoutComponent;
	let fixture: ComponentFixture<MinLayoutComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [MinLayoutComponent],
			imports: [
				NoopAnimationsModule,
				LayoutModule,
				MatButtonModule,
				MatIconModule,
				MatListModule,
				MatSidenavModule,
				MatToolbarModule,
			],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MinLayoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should compile', () => {
		expect(component).toBeTruthy();
	});
});
