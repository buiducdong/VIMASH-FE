import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClientResponse, ISearchRequest } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public constructor(protected http: HttpClient) { }

  public url = environment.API_SERVICE + "/api";

  public get(payload: ISearchRequest): Observable<any> {
    return this.http.get<HttpClientResponse>(`${this.url}/customers?page=${payload.page}&size=${payload.size}&name=${payload.name}&code1=${payload.code1}&code2=${payload.code2}`).pipe(
      tap(response => response),
      catchError((err) => of(err))
    )
  }

  public deleteSignleCustomer(id: number): Observable<any> {
    return this.http.delete<HttpClientResponse>(`${this.url}/customer/${id}`).pipe(
      tap(res => res),
      catchError((err) => of(err))
    )
  }

  public getCustomerById(id: number): Observable<any> {
    return this.http.get<HttpClientResponse>(`${this.url}/customer/${id}`).pipe(
      tap(res => res),
      catchError((err) => of(err))
    )
  }

  public getRoutes(): Observable<any> {
    return this.http.get<HttpClientResponse>(`${this.url}/routess`).pipe(
      tap(res => res),
      catchError((err) => of(err))
    )
  }

  public getCourses(): Observable<any> {
    return this.http.get<HttpClientResponse>(`${this.url}/courses`).pipe(
      tap(res => res),
      catchError((err) => of(err))
    )
  }
}
