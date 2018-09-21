import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '@app/shared';
import { MexicoComponent } from './mexico/mexico.component';
import { UsaComponent } from './usa/usa.component';
import { SpainComponent } from './spain/spain.component';

@NgModule({
  imports: [
		CommonModule,
		SharedModule
  ],
  declarations: [DashboardComponent, MexicoComponent, UsaComponent, SpainComponent]
})
export class DashboardModule { }
