import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	MatToolbarModule,
	MatSidenavModule,
	MatTableModule,
	MatListModule,
	MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
		CommonModule,
		MatToolbarModule,
		MatTableModule,
		MatSidenavModule,
		MatListModule,
		MatIconModule
  ],
	declarations: [],
	exports: [
		CommonModule,
		MatToolbarModule,
		MatTableModule,
		MatSidenavModule,
		MatListModule,
		MatIconModule
	]
})
export class SharedModule { }
