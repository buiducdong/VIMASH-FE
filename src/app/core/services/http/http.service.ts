import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private messageSource = new BehaviorSubject('Default message');
  currentMessage = this.messageSource.asObservable();
  public constructor(protected http: HttpClient) { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  getRoute(){
    return this.http.get<any>("http://localhost:8081/api/route");
  }
  getCourse(routeCode:any){
    return this.http.get<any>("http://localhost:8081/api/course/"+routeCode);
  }
  getAddress(postCode:any){
    return this.http.get<any>("https://zipcloud.ibsnet.co.jp/api/search?zipcode="+postCode);
  }
  getCustomerCode(customerCode:any){
    return this.http.get<any>("http://localhost:8081/customercode/"+customerCode);
  }
  postCustomer(data:any){
    
    const dataCustomer = JSON.stringify(data);
    console.log(dataCustomer)
    return this.http.post<any>("http://localhost:8081/api/customer/",dataCustomer);
  }
  updateCustomer(data:any){
    const dataCustomer = JSON.stringify(data);
    console.log(dataCustomer)
    return this.http.put<any>("http://localhost:8081/api/customer/",dataCustomer);
  }
  getCustomerId(customerId:any){
    return this.http.get<any>("http://localhost:8081/api/customer/"+customerId);
  }
  deleteCustomer(customerId:any){
    return this.http.delete<any>("http://localhost:8081/api/customer/"+customerId);
  }
  getCustomerTable(){
    return this.http.get<any>("http://localhost:8081/api/customer");
  }
}
