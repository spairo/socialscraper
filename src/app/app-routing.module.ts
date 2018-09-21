import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent, UsaComponent, MexicoComponent, SpainComponent } from './dashboard/index';

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
    path: 'mexico',
    component: MexicoComponent,
    data: {
      title: 'Mexico'
    }
	},
	{
    path: 'spain',
    component: SpainComponent,
    data: {
      title: 'España'
    }
	},
	{
    path: 'usa',
    component: UsaComponent,
    data: {
      title: 'USA'
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
