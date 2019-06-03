import {  Headers, RequestOptionsArgs } from '@angular/http';

interface UrlOptionsInterface {
  headers: Headers;
  url: string;
}

export class UrlOptions {
  headers: Headers;
  url: string;

  constructor(obj?: UrlOptionsInterface) {
    this.headers = obj && obj.headers;
    this.url = obj && obj.url || '';
  }
}

interface HeaderInterface {
  headers: Headers;
  params: RequestOptionsArgs;
}

export class HeaderParams {
  headers: Headers;
  params: RequestOptionsArgs;

  constructor(obj?: HeaderInterface) {
    this.headers = obj && obj.headers || new Headers();
    this.params  = obj && obj.params || {};
  }
}
