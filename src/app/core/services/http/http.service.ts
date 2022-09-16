import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClientResponse, ISearchRequest } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public constructor(protected http: HttpClient) { }

  public get(url: string, payload: ISearchRequest): Observable<any> {
    return this.http.post<HttpClientResponse>(url, payload).pipe(
      tap(response => response)
    )
  }
}
