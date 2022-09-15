import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClientResponse } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public constructor(protected http: HttpClient) { }

  public get(url: string): Observable<HttpClientResponse> {
    return this.http.get<HttpClientResponse>(url).pipe(
      tap(response => response),
      catchError(error => of(error))
    )
  }
  getRoute(){
    return this.http.get<any>("http://localhost:8082/api/route");
  }
  getCourse(routeCode:any){
    return this.http.get<any>("http://localhost:8082/api/course/"+routeCode);
  }
  getAddress(postCode:any){
    return this.http.get<any>("https://zipcloud.ibsnet.co.jp/api/search?zipcode="+postCode);
  }
  getCustomerCode(customerCode:any){
    return this.http.get<any>("http://localhost:8082/customercode/"+customerCode);
  }
  postCustomer(data:any){
    
    const dataCustomer = JSON.stringify(data);
    console.log(dataCustomer)
    return this.http.post<any>("http://localhost:8082/api/customer/",dataCustomer);
  }

  getA(){
    return this.http.get<any>("http://localhost:8077/admin");
  }
}
