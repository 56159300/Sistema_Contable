import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@guards/auth.guard';
import { IndexGuard } from '@guards/index.guard';
import { UnauthGuard } from '@guards/unauth.guard';
import { MinLayoutComponent } from '@layouts/min-layout/min-layout.component';
import { NormalLayoutComponent } from '@layouts/normal-layout/normal-layout.component';

const routes: Routes = [
  {
		path: 'auth',
		component: MinLayoutComponent,
		canActivate: [UnauthGuard],
		loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
	},
  {
		path: 'workspace',
		loadChildren: () => import('./workspace/workspace.module').then((m) => m.WorkspaceModule),
		component: NormalLayoutComponent,
		canActivate: [AuthGuard]
	},
  {
		path: '',
		component: MinLayoutComponent,
		canActivate: [IndexGuard],
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
