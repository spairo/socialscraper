import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [cle
		CommonModule,
		SharedModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
