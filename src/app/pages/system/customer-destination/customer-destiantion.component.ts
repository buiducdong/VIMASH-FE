import { Component, OnInit } from '@angular/core';
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
  listdata = [];
  ngOnInit(): void {
    this.getCustomerTable();
  }

  getCustomerTable() {
    const http = environment.API_SERVICE + "/api/customer"
    this.httpService.get(http).subscribe(data => console.log(data))
  }
}
