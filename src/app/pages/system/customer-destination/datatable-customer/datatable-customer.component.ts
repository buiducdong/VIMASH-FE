import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
    'courseCode',
    'delete'
  ];
  @Input() public dataTable: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private httpService: HttpService) {
  }

  Customer?: customer[];
  serchRequets: ISearchRequest = {};
  idTable: number = 1;

  ngOnInit(): void {
    this.getCustomerTable();
    console.log('tabel render', this.dataTable)
  }

  getCustomerTable() {
    const http = environment.API_SERVICE + "/api/customers"
    this.httpService.get(http, this.serchRequets).subscribe((res) => {
      console.log('res', res)
      this.Customer = res.ResultBean.data;
      this.dataSource = new MatTableDataSource<customer>(res.ResultBean.data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
