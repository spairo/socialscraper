import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApibuilderService } from '@app/core';

@Injectable()
export class SpainService {

  constructor(
    private _http: HttpClient,
    private _api: ApibuilderService
  ) { }

  getSocial(service) {
    return this._api.Build(service);
  }

}
