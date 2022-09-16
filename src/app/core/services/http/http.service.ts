import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { HttpClientResponse, ISearchRequest } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public constructor(protected http: HttpClient) { }

  public get(url: string, payload: ISearchRequest): Observable<any> {
    return this.http.post<HttpClientResponse>(url, payload).pipe(
      tap(response => response),
      catchError(error => of(error))
    )
  }

  public delete(url: string, id: any): Observable<any>{
    return this.http.delete<any>(url).pipe(
      tap(response => response),
      catchError(error => of(error))
    )
  }
}
