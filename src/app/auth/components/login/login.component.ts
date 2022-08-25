import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModelResponse, UserLogin } from '../../models';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public showPassword: boolean = false;
  public loginForm: FormGroup = new FormGroup({});
  public user!: LoginModelResponse;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let userLogin = JSON.parse(localStorage.getItem('user_login') || '{}');
    const currentUser = localStorage.getItem('id_token');

    if (userLogin && currentUser) {
      this.router.navigate(['master/user']);
    }
  }
  public togglePassWord(): void {
    this.showPassword = !this.showPassword;
  }

  public submitForm(): void {
    const data: UserLogin = this.loginForm.value;

    this.loginService.userLogin(data).subscribe((res: LoginModelResponse) => {
      if (res) {
        localStorage.removeItem('id_token');
        localStorage.removeItem('user_login');
        localStorage.setItem('id_token', res.access_token);
        this.router.navigate(['master/user']);
      }
    });
  }
}
