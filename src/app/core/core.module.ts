import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ApibuilderService } from './api-builder/api-builder.service';

@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [ApibuilderService]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
