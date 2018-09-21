import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApibuilderService {

  public config: any = {};

  constructor(
    private _http: HttpClient
  ) {}

  Build(service : any) {

		/*

    if (env.production){
      //service.url = env.hostname + '/' + env.platform + '/' + env.apiVersion + '/' + service.module;
      service.url = env.hostname + env.dynPath + env.mock + env.platform + '/' + env.apiVersion + '/' + service.module + '.json';
        return this.BuildRequest(service);
    } else {
      service.url = env.hostname + env.dynPath + env.mock + env.platform + '/' + env.apiVersion + '/' + service.module + '.json';
      console.log("dispatcher: " + service.url);
        return this.BuildRequest(service);
		}
		*/

  }
  BuildRequest(service) {
    /*if (service.method.match(/^(get)$/)) {
      //return this._http[service.method](service.url, { params: service.params }, this.config)
      //.catch((e: any) => Observable.throw(this.ErrorHandler(e)));
    } else {
      //return this._http[service.method](service.url, service.params, this.config);
    }*/
  }
  ErrorHandler(error: any): void {
    //let snackBarRef = this.snackBar.open('Error ' + error.status + ' -  ' + error.message, 'Cerrar');
  }
}
