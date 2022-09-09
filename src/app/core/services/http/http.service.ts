import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClientResponse } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public constructor(protected http: HttpClient) { }

  public get(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      tap(response => response),
      catchError(error => of(error))
    )
  }
}
