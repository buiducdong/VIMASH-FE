import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent, AuthComponent],
  imports: [CommonModule, AuthRoutingModule],
  providers: [],
  bootstrap: [AuthComponent],
})
export class AuthModule {}
