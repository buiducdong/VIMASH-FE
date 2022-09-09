import { Component, OnInit } from '@angular/core';
import { ISearchRequest } from 'src/app/core';
import { HttpService } from 'src/app/core/services/http/http.service';
import { environment } from '../../../../environments/environment'

@Component({
  selector: 'app-customer-destiantion',
  templateUrl: './customer-destiantion.component.html',
  styleUrls: ['./customer-destiantion.component.scss'],
})
export class CustomerDestiantionComponent implements OnInit {
  constructor(private httpService: HttpService) {
  }
  serchRequest: ISearchRequest = {};
  payload = JSON.stringify({ name: "1" });

  listdata = [];
  ngOnInit(): void {
    this.getCustomerTable();
  }

  getCustomerTable() {
    const http = environment.API_SERVICE + "/api/customers"
    this.httpService.get(http, this.serchRequest).subscribe(data => console.log(data.ResultBean.data.results))
  }

  searchCustomerTable() {
    this.getCustomerTable()
    this.serchRequest.name = '';
    this.serchRequest.code1 = null;
    this.serchRequest.code2 = null;
  }
}
