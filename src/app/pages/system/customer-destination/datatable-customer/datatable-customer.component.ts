import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'datatable-customer',
  templateUrl: './datatable-customer.component.html',
  styleUrls: ['./datatable-customer.component.scss']
})
export class DatatableCustomer implements OnInit {

  columns: string[] = ['position', '出荷先コード', '名称', '担当者', '郵便番号', '住所', '電話番号', 'ファックス番号', 'リードタイム', 'ルート', 'コース'];

  dataCustomer: any;

  constructor() { }

  ngOnInit(): void {
  }

}
