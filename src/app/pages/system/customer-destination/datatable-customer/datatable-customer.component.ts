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
  customer2?: any = [];
  j = 1;
  serchRequets: ISearchRequest = {};

  ngOnInit(): void {
    this.getCustomerTable();
  }

  getCustomerTable() {
    const http = environment.API_SERVICE + "/api/customers"
    this.httpService.get(http, this.serchRequets).subscribe((res) => {
      this.Customer = res.data.results;
      this.dataSource = new MatTableDataSource<customer>(this.Customer);
      this.dataSource.paginator = this.paginator;
    });
  }

  onClick(){
    this.serchRequets.page = this.j +=1;
    console.log(this.j);
    const http = environment.API_SERVICE + "/api/customers"
    this.httpService.get(http, this.serchRequets).subscribe((res) => {
      this.Customer?.push(...res.data.results)
      this.dataSource = new MatTableDataSource<customer>(this.Customer);
    });
  }

  deleteCustomer(id: any){
    const http = environment.API_SERVICE + `/api/customers/${id}`;
    this.httpService.delete(http, id).subscribe((res) =>{
      alert("deleted");
      this.getCustomerTable();
    });
  }
}
