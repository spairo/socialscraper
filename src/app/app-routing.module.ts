import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/index';

const routes: Routes = [
	{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    data: {
      title: 'Dashboard Social'
    }
	},
	{
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: '**',
    redirectTo: 'dashboard'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
