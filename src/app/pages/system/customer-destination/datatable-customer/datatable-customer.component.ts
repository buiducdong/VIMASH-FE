import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/core/services/http/http.service';
import { environment } from '../../../../../environments/environment'
import { customer } from 'src/app/layout/models/customer.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ISearchRequest } from 'src/app/core';
import { Router } from '@angular/router';

@Component({
  selector: 'datatable-customer',
  templateUrl: './datatable-customer.component.html',
  styleUrls: ['./datatable-customer.component.scss']
})
export class DatatableCustomer implements OnInit {

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
  @Input() public dataTable: any = [];
  @Output() showDialog = new EventEmitter<number>();
  @Output() deleteCustomer = new EventEmitter<number>();
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(private httpService: HttpService, private router: Router) {
    
  }
  
  dataSource = new MatTableDataSource();
  serchRequets: ISearchRequest = {};
  idTable: number = 1;

  onShowDialog() {
    this.showDialog.emit()
  }

  deleteSingleCustomer(id: number) {
    this.deleteCustomer.emit(id);
  }

  ngOnInit(): void {
  }

  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataTable'] && changes['dataTable'].currentValue) {
      const data: unknown[] = changes['dataTable'].currentValue;
      this.dataSource = new MatTableDataSource(data)
      console.log('data', this.dataSource)
    }
    console.log('change: ', changes, this.dataSource.data)
  }

  onClickRow(id: number): void {
    this.router.navigate(['system/customer/delivery', id])
  }

  showMore() {
    
  }
}
