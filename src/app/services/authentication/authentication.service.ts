import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import { ApiConstantProvider } from '../api-constant/api-constant';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(public api: Api,
              public apiConstant: ApiConstantProvider) { }

  public login(credentials: any) {
    return this.api
      .post(`${this.apiConstant.API.LOGIN}?username=${credentials.username}&password=${credentials.password}`);

     // .flatMap((resp: LoginResponse) => this.handleLogin(resp, credentials));
  }
/*
  login(username: string, password: string) {
    return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }

            return user;
        }));
  }*/



/*
  handleLogin(resp: LoginResponse, credentials?: any) {
    return Observable
      .fromPromise(this.storage.get('user'))
      .map((user: LoginModel) => {
        let rememberMe = credentials && credentials.rememberMe || user && user.rememberMe;
        let model = UserTranslator.toLoginModel(resp, rememberMe);

        if (!model.auth_token || !model.userId) {
          throw new Error('Invalid User Account');
        }
        localStorage.setItem('user', JSON.stringify(model);
        //return model;
        return resp;
      });
  }

  logout() {
    localStorage.setItem('user', null);
    localStorage.clear();
    this.events.publish('user:login', null);
  }
  */
}
