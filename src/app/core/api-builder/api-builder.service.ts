import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable, map, throwError } from 'rxjs';
import { environment as env } from '@env/environment';


//const proxy = 'https://cors-anywhere.herokuapp.com/';

@Injectable()
export class ApibuilderService {

  public config: any = {};

  constructor(
    private _http: HttpClient
  ) {}

  Build(service: any) {
    if (!env.production) {
			service.url = env.hostname + service.module;
      return this.BuildRequest(service);
    }
  }
  BuildRequest(service) {
    if (service.method.match(/^(get)$/)) {
			return this._http[service.method](service.url, { params: service.params }, this.config);
    } else {
      return this._http[service.method](service.url, service.params, this.config);
    }
  }
  errorHandler(error: any): void {
    console.log(error);
  }
}
