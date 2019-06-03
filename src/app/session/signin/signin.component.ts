import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

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
        // model => this.navigate( LoginModel(model)) ,
        resp => {
          // this.handleLogin(resp.json() as LoginResponse),
          console.log('response', resp.json());
          this.router.navigate(['/quotes']);
        },
        err => {
          console.log('err', err);
          // this.showToast('Invalid Username or Password')
        });
  }
}
