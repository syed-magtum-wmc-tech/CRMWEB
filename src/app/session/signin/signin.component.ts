import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { AuthenticationService } from '../../services/index';
import { UserTranslator } from 'src/app/services/user/user.translator';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder,
              private router: Router,
              private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    const loginModel: any = this.form.value;
    this.authenticationService
      .login(loginModel)
      .subscribe(
        resp => {
          this.handleLogin(resp);
        },
        err => {
          console.log('err', err);
        });
  }

  handleLogin(resp: any, credentials?: any) {
    const model = UserTranslator.toLoginModel(resp, true);
    if (!model.auth_token || !model.userId) {
      throw new Error('Invalid User Account');
    } else {
      localStorage.setItem('user', JSON.stringify(model));
      this.router.navigate(['/quotes']);
    }
    return resp;
  }

}
