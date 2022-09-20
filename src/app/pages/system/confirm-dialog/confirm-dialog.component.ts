import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  @Input() public idDelete?: number
  @Output() onShowDialog = new EventEmitter<string>();
  @Output() deleteCustomer = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.onShowDialog.emit()
  }

  deleteCustomerr(): void {
    this.closeDialog()
    this.deleteCustomer.emit(this.idDelete)
  }

}
