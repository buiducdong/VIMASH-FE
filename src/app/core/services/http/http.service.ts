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
    return this.http.get<HttpClientResponse>(`${url}?page=${payload.page}&size=${payload.size}&name=${payload.name}&code1=${payload.code1}&code2=${payload.code2}`).pipe(
      tap(response => response)
    )
  }
}
