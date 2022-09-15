import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/core/services/http/http.service';
import { environment } from '../../../../../environments/environment'
import { customer } from 'src/app/layout/models/customer.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

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

  constructor(private httpService: HttpService) {}

  Customer?: customer[];

  ngOnInit(): void {
    this.getCustomerTable();
  }

  getCustomerTable() {
    const http = environment.API_SERVICE + "/api/customer"
    this.httpService.get(http).subscribe((res) => {
      console.log(res.data);
      this.Customer = res.data.results;
      this.dataSource  = new MatTableDataSource<customer>(res.data.results);
      this.dataSource.paginator = this.paginator;
    });
  }
}
