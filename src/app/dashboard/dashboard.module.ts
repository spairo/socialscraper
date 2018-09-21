import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '@app/shared';
import { MexicoComponent } from './mexico/mexico.component';
import { UsaComponent } from './usa/usa.component';
import { SpainComponent } from './spain/spain.component';
import { MexicoService } from './mexico/mexico.service';
import { UsaService } from './usa/usa.service';
import { SpainService } from './spain/spain.service';

@NgModule({
  imports: [
		CommonModule,
		SharedModule
  ],
	declarations: [DashboardComponent, MexicoComponent, UsaComponent, SpainComponent],
	providers: [MexicoService, UsaService, SpainService]
})
export class DashboardModule { }
