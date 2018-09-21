import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';

import { DashboardModule } from '@app/dashboard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
		//angular
    BrowserModule,
		BrowserAnimationsModule,

		//core & shared
		CoreModule,
		SharedModule,

		//app
		AppRoutingModule,
		DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
