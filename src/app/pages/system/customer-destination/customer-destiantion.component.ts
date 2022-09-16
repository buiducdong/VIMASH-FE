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
  public constructor(private httpService: HttpService) {
    this.getCustomerTable()
  }
  serchRequest: ISearchRequest = {
    page: 1,
    size: 10,
    name: "",
    code1: "",
    code2: ""
  };

  listdata = [];
  public ngOnInit() {
    this.getCustomerTable()
  }

  disableSearch = false
  getCustomerTable() {
    const http = environment.API_SERVICE + "/api/customers"
    this.httpService.get(http, this.serchRequest).subscribe(result => {
      this.listdata = result.ResultBean.data.results
      console.log(this.listdata)
    })
  }

  searchCustomerTable() {
    if (this.serchRequest.name != null && this.serchRequest.name.length > 0 || (this.serchRequest.code1 != null && this.serchRequest.code2 != null)) {

      const http = environment.API_SERVICE + "/api/customers"
      this.httpService.get(http, this.serchRequest).subscribe(result => {
        this.listdata = result.ResultBean.data.results
        console.log(this.listdata)
      })
    }
    this.clearInput()
  }

  clearInput() {
    this.serchRequest.name = '';
    this.serchRequest.code1 = '';
    this.serchRequest.code2 = '';
  }

}
