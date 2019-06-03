import { from } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { LoginModel } from '../../models/models';
import { ApiConstantProvider } from '../api-constant/api-constant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { zip } from 'rxjs/observable/zip';


@Injectable({
  providedIn: 'root'
})
export class Api {

  constructor(public http: HttpClient,
    public apiConstant: ApiConstantProvider,
    ) { }

  getUser() {
    return  JSON.parse(localStorage.getItem('user'));
  }

  getHeaders(user: LoginModel, isDispatch: boolean = false) {

    return user ? {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-AUTH': isDispatch ? `${user.dispatch_auth_token}` : `${user.auth_token}`,
        'X-ID': isDispatch ? `${user.dispatch_x_id}` : `${user.userId}`,
      }),
      url: isDispatch ? `${user.dispatch_base_url}` : `${this.apiConstant.API_PREFIX_PATH}`,

    } : {
        url: `${this.apiConstant.API_PREFIX_PATH}`,
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };
  }


  setReqOpts(options: any, params) {
    const reqOpts: any = { ...options };
    if (params) {
      reqOpts.search = params;
    }
    return reqOpts;
  }

  setEndPoint(options: any, endpoint: string) {
    const reqOpts: any = { ...options };
    if (reqOpts.url && endpoint) {
      reqOpts.url += endpoint;
    }
    return reqOpts;
  }
  /*
  dispatch_get(endpoint: string, params?: any) {
    return this.getUser()
      .map(user => this.getHeaders(user, true))
      .map(options => { //console.log("header",options);
        return this.setReqOpts(options, params)
      })
      .map(options => this.setEndPoint(options, endpoint))
      .flatMap(reqOpts => this.http.get(reqOpts.url, reqOpts));
  }

  get(endpoint: string, params?: any) {
    return this.getUser()
      .map(user => this.getHeaders(user))
      .map(options => { //console.log("header",options);
        return this.setReqOpts(options, params)
      })
      .map(options => this.setEndPoint(options, endpoint))
      .flatMap(reqOpts => this.http.get(reqOpts.url, reqOpts));
  }

  getWithConfig(endpoint: string, params?: any, configData?: any) {
    return this.getUser()
      .map(user => this.getHeaders(user))
      .map(options => { //console.log("header",options);
        return this.setReqOpts(options, params)
      })
      .map(options => this.setEndPoint(options, endpoint))
      .flatMap(reqOpts => this.http.get(reqOpts.url, reqOpts), (response, configData) => [response, configData]);
    // .zip(configData, (response: any, configData: any) => ({ response, configData}));

  }
  */

  post(endpoint: string, body?: any, reqOpts?: any) {
    return this.getUser().map(user => this.getHeaders(user)).map(options => this.setEndPoint(options, endpoint))
      .flatMap(options => this.http.post(options.url, body, options));
  }
/*
  put(endpoint: string, body?: any, reqOpts?: any) {
    return this.getUser()
      .map(user => this.getHeaders(user))
      .map(options => this.setEndPoint(options, endpoint))
      .flatMap(options => this.http.put(options.url, body, options));
  }

  delete(endpoint: string, params?: any) {
    return this.getUser()
      .map(user => this.getHeaders(user))
      .map(options => { console.log(options); return this.setReqOpts(options, params) })
      .map(options => this.setEndPoint(options, endpoint))
      .flatMap(reqOpts => this.http.delete(reqOpts.url, reqOpts));
  }

  formPost(endpoint: string, body?: any, reqOpts?: any) {
    console.log('body', body);
    return this.getUser()
      .map(user => this.getHeaders(user))
      .map(options => this.setEndPoint(options, endpoint))
      .flatMap(options => this.http.post(options.url, body, options));
  }

  formPut(endpoint: string, body?: any, reqOpts?: any) {
    return this.getUser()
      .map(user => this.getHeaders(user))
      .map(options => this.setEndPoint(options, endpoint))
      .flatMap(options => this.http.patch(options.url, body, options));
  }

  getCSV(endpoint: string, params?: any) {
    return this.getUser()
      .map(user => this.getHeaders(user))
      .map(options => { return this.setReqOpts(options, params) })
      .map(options => this.setEndPoint(options, endpoint))
      .flatMap(reqOpts => this.http.get(reqOpts.url, { headers: reqOpts.headers, responseType: ResponseContentType.Blob }))
      .map(r => new Blob([r.blob()], { type: "application/octet-stream" })
      );
  }
*/
}
