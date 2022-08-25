import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPath } from 'src/app/core/config';
import { LoginModelRequest, LoginModelResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(protected http: HttpClient) {}

  public userLogin(data: LoginModelRequest): Observable<LoginModelResponse> {
    const body = new HttpParams()
      .set('username', data.username)
      .set('password', data.password)
      .set('grant_type', 'password');

    return this.http.post<LoginModelResponse>(ApiPath.LOGIN, body.toString);
  }
}
