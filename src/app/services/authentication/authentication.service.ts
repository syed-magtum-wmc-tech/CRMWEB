import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import { ApiConstantProvider } from '../api-constant/api-constant';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(public api: Api,
              private router: Router,
              public apiConstant: ApiConstantProvider) { }

  public login(credentials: any) {
    return this.api
      .post(`${this.apiConstant.API.LOGIN}?username=${credentials.username}&password=${credentials.password}`);
  }


  public logout() {
    localStorage.setItem('user', null);
    localStorage.clear();
    this.router.navigate(['/session/signin']);
  }

}
