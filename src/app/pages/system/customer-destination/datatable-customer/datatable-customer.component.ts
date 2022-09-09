import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/core/services/http/http.service';
import { environment } from '../../../../../environments/environment'
import { customer } from 'src/app/layout/models/customer.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ISearchRequest } from 'src/app/core';

@Component({
  selector: 'datatable-customer',
  templateUrl: './datatable-customer.component.html',
  styleUrls: ['./datatable-customer.component.scss']
})
export class DatatableCustomer implements OnInit {
  dataSource: any;

  columns: string[] = [
    'position',
    'customerCode',
    'customerName',
    'picName',
    'address',
    'phoneNumber',
    'postCode',
    'faxNumber',
    'leadTime',
    'routeCode',
    'courseCode'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private httpService: HttpService) { }

  Customer?: customer[];
  serchRequets: ISearchRequest = {};

  ngOnInit(): void {
    this.getCustomerTable();
  }

  getCustomerTable() {
    const http = environment.API_SERVICE + "/api/customers"
    this.httpService.get(http, this.serchRequets).subscribe((res) => {
      console.log(res);
      this.Customer = res.ResultBean.data.results;
      this.dataSource = new MatTableDataSource<customer>(res.ResultBean.data.results);
      this.dataSource.paginator = this.paginator;
    });
  }
}
