import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	MatToolbarModule,
	MatSidenavModule,
	MatTableModule,
	MatListModule,
	MatIconModule,
	MatSelectModule,
	MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
		CommonModule,
		MatToolbarModule,
		MatTableModule,
		MatSidenavModule,
		MatListModule,
		MatIconModule,
		MatSelectModule,
		MatCardModule
  ],
	declarations: [],
	exports: [
		CommonModule,
		MatToolbarModule,
		MatTableModule,
		MatSidenavModule,
		MatListModule,
		MatIconModule,
		MatSelectModule,
		MatCardModule
	]
})
export class SharedModule { }
