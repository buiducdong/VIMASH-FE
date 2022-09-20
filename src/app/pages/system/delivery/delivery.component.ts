import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { Customer } from 'src/app/core/models/http-response.model';
import { HttpService } from 'src/app/core/services/http/http.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
})
export class DeliveryComponent implements OnInit {
  constructor(
    private routeActive: ActivatedRoute,
    private httpService: HttpService
  ) {}
  idCustomer: string | undefined;
  customers: Customer = new Customer;
  routes?: any;
  courses?: any;
  ngOnInit(): void {
    this.idCustomer = this.routeActive.snapshot.paramMap.get('id') || undefined;
    this.getCourses();
    this.getRoutes();
    if (this.idCustomer && this.idCustomer != undefined) {
      this.getCustomerById(this.idCustomer);
      
      
    }
  }

  getCustomerById(id: any) {
    this.httpService.getCustomerById(id).subscribe((res) => {
      this.customers = res.ResultBean.data;
      console.log("customer by id",this.customers);
    });
  }

  getRoutes() {
    this.httpService.getRoutes().subscribe(
      (res) => {
        this.routes = res.ResultBean.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCourses() {
    this.httpService.getCourses().subscribe((res) => {
      this.courses = res.ResultBean.data;
    });
  }
}
