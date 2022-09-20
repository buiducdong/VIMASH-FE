import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/core/services/http/http.service';
import { environment } from '../../../../../environments/environment'
import { customer } from 'src/app/layout/models/customer.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'datatable-customer',
  templateUrl: './datatable-customer.component.html',
  styleUrls: ['./datatable-customer.component.scss']
})
export class DatatableCustomer implements OnInit {

  @Output("dataRow") tableClick = new EventEmitter<any>();

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

  constructor(private httpService: HttpService,private api: HttpService,private _router: Router) {}
  message: any;
  Customer?: customer[];

  ngOnInit(): void {
    this.getCustomerTable();
    this.api.currentMessage.subscribe(message => this.message = message);
  }
  getCustomerTable(){
    this.api.getCustomerTable().subscribe({
      next:(res) =>{
        console.log(res.ResultBean.data)
        this.Customer = res.ResultBean.data;
      this.dataSource  = new MatTableDataSource<customer>(res.ResultBean.data);
      this.dataSource.paginator = this.paginator;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  handelDbClick(row: any){
    this.tableClick.emit(row)
    this.api.changeMessage(row);
    this._router.navigate(['/customer-detail',row.customerId])
  }

  
}
